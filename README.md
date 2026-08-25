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
| Contact    | Firestore record + Resend email relay     |
| Hosting    | Vercel                                    |

## Getting started

```bash
npm install
cp .env.example .env   # then fill in Firebase and Resend credentials
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
  lib/             firebase.js (lazy Firestore), contact.js (email relay), utils.js
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
**Project Settings → Environment Variables**, and split into two kinds:

- `VITE_FIREBASE_*` are baked into the client bundle at build time, so treat
  them as public and rely on Firestore security rules for protection.
- `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` have no
  `VITE_` prefix, so Vite never inlines them. They are read at request time by
  the serverless function and stay on the server.

### Contact email

A submission takes two paths. The browser writes the message to Firestore —
that is the durable record, and a failure there is what surfaces an error toast
to the visitor. It then POSTs the same payload to `/api/contact`, which relays
it through [Resend](https://resend.com) to `CONTACT_TO_EMAIL` with the
sender's address as `reply_to`. The email is best-effort: if it fails the
message is still stored, so the visitor is never told their message was lost
when it was not.

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

Vite's dev server does not run serverless functions, so `npm run dev` will log
a failed relay call while still saving to Firestore. Use `vercel dev` to
exercise `/api/contact` locally.

### Firestore rules

The contact form writes to `contactMessages` directly from the browser. The
rules must allow creates only:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contactMessages/{id} {
      allow create: if request.resource.data.keys().hasOnly(
                       ['name', 'email', 'message', 'createdAt'])
                    && request.resource.data.name is string
                    && request.resource.data.name.size() < 200
                    && request.resource.data.email is string
                    && request.resource.data.email.size() < 200
                    && request.resource.data.message is string
                    && request.resource.data.message.size() < 5000;
      allow read, update, delete: if false;
    }
  }
}
```
