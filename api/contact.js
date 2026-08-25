/**
 * Contact-form email relay.
 *
 * The browser already writes each submission to Firestore, which is the
 * durable record; this endpoint exists purely to put a copy in an inbox so
 * messages get noticed. The Resend API key never leaves the server, so it is
 * read from a plain (non-`VITE_`) env var that Vite will not inline.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

const MAX_LENGTHS = { name: 100, email: 254, message: 5000 };

// Deliberately loose — real validation is the delivery attempt itself.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const readField = (body, field) => {
  const value = typeof body?.[field] === "string" ? body[field].trim() : "";
  return value.slice(0, MAX_LENGTHS[field]);
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body =
    typeof req.body === "string" ? safeParse(req.body) : req.body ?? {};

  // Honeypot: bots fill every field they find, humans never see this one.
  // Answer 200 so the bot has nothing to learn from the response.
  if (typeof body.website === "string" && body.website.trim()) {
    return res.status(200).json({ ok: true });
  }

  const name = readField(body, "name");
  const email = readField(body, "email");
  const message = readField(body, "message");

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
              &lt;<a href="mailto:${encodeURI(email)}">${escapeHtml(
          email
        )}</a>&gt;</p>
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

function safeParse(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}
