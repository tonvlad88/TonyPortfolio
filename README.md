# Tony Saromines — Portfolio

Personal portfolio for Mark Anthony (Tony) Saromines, React Native engineer.

**Live:** https://tonyph-portfolio.vercel.app

## Stack

| Concern    | Choice                                    |
| ---------- | ----------------------------------------- |
| Build      | Vite 7                                    |
| UI         | React 19, React Router 7                  |
| Styling    | Tailwind CSS 4 (`@theme` design tokens)   |
| Icons      | lucide-react                              |
| Contact    | Resend email relay (serverless)           |
| Hosting    | Vercel                                    |

## Getting started

```bash
npm install
cp .env.example .env   # then fill in the Resend credentials
npm run dev
```

| Script            | Does                                    |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Dev server with HMR                     |
| `npm run build`   | Production build to `dist/`             |
| `npm run preview` | Serve the production build locally      |
| `npm run lint`    | ESLint over the whole project           |

## Project layout

```
public/            Static assets served as-is (screenshots, résumé, robots.txt)
src/
  components/      One section per file — Hero, About, Skills, Projects, Contact
  constants/       All page content: nav, projects, skills, socials
  lib/             contact.js (email relay), utils.js
api/
  contact.js       Vercel serverless function that emails form submissions
  pages/           Home, NotFound
  index.css        Design tokens, custom utilities, keyframes
index.html         Meta tags, structured data, pre-paint theme script
vercel.json        SPA rewrites (excluding /api), cache and security headers
```

### Editing content

Almost everything on the page is data, not markup — edit
[`src/constants/index.js`](src/constants/index.js) rather than the components:

- `projects` — each entry supports `role`, `period`, and `highlights`, all of
  which render only when filled in.
- `skills` — proficiency is a tier (`core` / `proficient` / `familiar`), not a
  percentage.
- `socials` — icons resolve by name through a map in the components.

### Theming

Colors live as HSL channel triplets on `:root` and `.dark` in
[`src/index.css`](src/index.css), exposed to Tailwind through the `@theme`
block. Add a new color in three places: the `--color-*` alias in `@theme`, then
the raw value under both `:root` and `.dark`.

The theme is applied by an inline script in `index.html` **before first paint**
so there is no flash of the wrong theme. Dark is the default; light applies only
when the visitor has explicitly toggled it, which is stored under the `theme`
key in `localStorage`.

## Deployment

Vercel builds from `main` automatically. Environment variables are set in
**Project Settings → Environment Variables**.

`RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` have no `VITE_`
prefix, so Vite never inlines them into the bundle. They are read at request
time by the serverless function and stay on the server. Nothing the contact
form needs is exposed to the browser.

### Contact email

A submission takes one path: the form POSTs to `/api/contact`, which relays it
through [Resend](https://resend.com) to `CONTACT_TO_EMAIL` with the sender's
address as `reply_to`. Your inbox is the record. Because there is no store
behind the relay, the visitor only sees a success toast once Resend has
accepted the message — a failure tells them to email directly instead.

Resend will not let you send from an arbitrary address, because mail claiming
to be from a domain you cannot prove you own is what spam filters exist to
catch. That leaves two supported senders:

- **No domain of your own.** Set `CONTACT_FROM_EMAIL=onboarding@resend.dev`,
  Resend's shared sender. In exchange it will only deliver to the address you
  registered your Resend account with, so `CONTACT_TO_EMAIL` has to be that
  same address. For a personal inbox that is the whole requirement anyway.
- **A verified domain.** Add and verify it in the Resend dashboard, then set
  `CONTACT_FROM_EMAIL` to an address on it. The recipient restriction lifts
  and the mail carries your own branding.

Either way the visitor's own address goes in `reply_to`, never in `from`, so
replying reaches them while the message still passes SPF and DKIM instead of
being filtered as spoofed.

Vite's dev server does not run serverless functions, so `npm run dev` cannot
send mail — submitting shows the error toast. Use `vercel dev` to exercise
`/api/contact` locally.

### Abuse controls

The relay is the only endpoint the site exposes, so everything guarding the
form lives in [`api/contact.js`](api/contact.js):

- **Honeypot** — a `website` field hidden from users and assistive tech. Any
  submission that fills it gets a `200` and goes nowhere, so a bot learns
  nothing from the response.
- **Field sanitising** — control characters are stripped and `name`/`email`
  are collapsed to a single line before being interpolated, so nothing a
  visitor types can inject a mail header. Lengths are capped server-side.
- **Origin check** — a cross-site `Origin` is rejected. Set
  `CONTACT_ALLOWED_ORIGINS` (comma-separated) if the site is served from a
  domain other than the request host.
- **Throttle** — five submissions per IP per ten minutes, held in the
  function's memory. Serverless instances do not share memory and are
  recycled freely, so treat this as a speed bump against a naive flood, not a
  real rate limit.

The throttle and the honeypot are the weakest links: neither survives a
determined attacker with a script. Closing that properly needs a CAPTCHA
verified server-side ([Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)
is free and invisible to most visitors) plus a shared-state rate limiter or a
WAF rule ahead of the function.

### Content Security Policy

[`vercel.json`](vercel.json) sets a CSP that allows no inline JavaScript
except two hashed scripts in [`index.html`](index.html): the pre-paint theme
script and the JSON-LD block.

**Editing either one — even the whitespace — invalidates its hash and the
browser will silently refuse to run it.** Recompute and update both values in
the `Content-Security-Policy` header when you do:

```bash
node -e 'const fs=require("fs"),c=require("crypto");const h=fs.readFileSync("index.html","utf8");for(const m of h.matchAll(/<script(?:s[^>]*)?>([sS]*?)</script>/g)){if(!m[1].trim())continue;console.log("sha256-"+c.createHash("sha256").update(m[1],"utf8").digest("base64"))}'
```
