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
| Contact    | Firebase Firestore (lazy-loaded)          |
| Hosting    | Vercel                                    |

## Getting started

```bash
npm install
cp .env.example .env   # then fill in your Firebase web app config
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
  lib/             firebase.js (lazy Firestore), utils.js (cn helper)
  pages/           Home, NotFound
  index.css        Design tokens, custom utilities, keyframes
index.html         Meta tags, structured data, pre-paint theme script
vercel.json        SPA rewrites, cache and security headers
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
so there is no flash of the wrong theme. It honours `prefers-color-scheme` on a
first visit and the stored `theme` key afterwards.

## Deployment

Vercel builds from `main` automatically. Environment variables (`VITE_FIREBASE_*`)
are set in **Project Settings → Environment Variables** — they are baked into
the client bundle at build time, so treat them as public and rely on Firestore
security rules for protection.

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
