/**
 * Contact-form email relay.
 *
 * This is the *only* path a submission takes: the form posts here and this
 * function hands the message to Resend. Nothing stores the message behind it,
 * so a failure here has to surface to the visitor rather than being swallowed.
 *
 * The Resend API key never leaves the server, so it is read from a plain
 * (non-`VITE_`) env var that Vite will not inline into the browser bundle.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

const MAX_LENGTHS = { name: 100, email: 254, message: 5000 };

// Deliberately loose — real validation is the delivery attempt itself.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Control characters have no business in a name, an address or a message
// body. `\r` and `\n` reaching a subject line is the classic mail-header
// injection vector, so they are stripped before any field is interpolated.
// eslint-disable-next-line no-control-regex -- matching control characters is the entire point
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

// Best-effort throttle. Each serverless instance gets its own memory and is
// recycled freely, so this slows a naive flood from a single IP but is not a
// real rate limit — that needs shared state (Redis) or a WAF rule in front.
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const recentHits = new Map();

const isRateLimited = (ip) => {
  const now = Date.now();

  // Prune while we are here; the map must not grow without bound.
  for (const [key, timestamps] of recentHits) {
    const live = timestamps.filter((t) => now - t < RATE_LIMIT.windowMs);
    if (live.length) recentHits.set(key, live);
    else recentHits.delete(key);
  }

  const timestamps = recentHits.get(ip) ?? [];
  if (timestamps.length >= RATE_LIMIT.max) return true;

  recentHits.set(ip, [...timestamps, now]);
  return false;
};

const clientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  const first = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return first?.split(",")[0].trim() || req.socket?.remoteAddress || "unknown";
};

/**
 * Rejects cross-site browser submissions. Anything scripted can forge or omit
 * `Origin`, so this is defence in depth on top of the throttle, not a gate we
 * can lean on. A missing header is allowed through: same-origin requests and
 * non-browser clients both legitimately omit it.
 */
const isAllowedOrigin = (req) => {
  const origin = req.headers.origin;
  if (!origin) return true;

  const allowed = [
    req.headers.host && `https://${req.headers.host}`,
    process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`,
    ...(process.env.CONTACT_ALLOWED_ORIGINS ?? "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
  ].filter(Boolean);

  return allowed.includes(origin);
};

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const readField = (body, field, { multiline = false } = {}) => {
  const raw = typeof body?.[field] === "string" ? body[field] : "";
  const cleaned = multiline
    ? raw.replace(/\r\n?/g, "\n").replace(CONTROL_CHARS, "")
    : raw.replace(CONTROL_CHARS, "").replace(/[\r\n]+/g, " ");

  return cleaned.trim().slice(0, MAX_LENGTHS[field]);
};

function safeParse(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!isAllowedOrigin(req)) {
    return res.status(403).json({ error: "Forbidden" });
  }

  if (isRateLimited(clientIp(req))) {
    res.setHeader("Retry-After", String(RATE_LIMIT.windowMs / 1000));
    return res.status(429).json({ error: "Too many messages — try again later" });
  }

  // A JSON body can legitimately parse to `null`, a number or an array, none
  // of which have the fields we want; normalise anything unusable to `{}`.
  const parsed = typeof req.body === "string" ? safeParse(req.body) : req.body;
  const body =
    parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};

  // Honeypot: bots fill every field they find, humans never see this one.
  // Answer 200 so the bot has nothing to learn from the response.
  if (typeof body.website === "string" && body.website.trim()) {
    return res.status(200).json({ ok: true });
  }

  const name = readField(body, "name");
  const email = readField(body, "email");
  const message = readField(body, "message", { multiline: true });

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: "Invalid submission" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error(
      "Contact email is not configured: RESEND_API_KEY, CONTACT_FROM_EMAIL and CONTACT_TO_EMAIL must all be set."
    );
    return res.status(500).json({ error: "Email is not configured" });
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        // Replying in the mail client goes straight back to the sender.
        reply_to: email,
        subject: `Portfolio contact — ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `
          <div style="font-family:system-ui,sans-serif;line-height:1.6">
            <p><strong>From:</strong> ${escapeHtml(name)}
              &lt;<a href="mailto:${escapeHtml(
                encodeURI(email)
              )}">${escapeHtml(email)}</a>&gt;</p>
            <hr />
            <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend rejected the message:", response.status, detail);
      return res.status(502).json({ error: "Could not send the email" });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to reach Resend:", error);
    return res.status(502).json({ error: "Could not send the email" });
  }
}
