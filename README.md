# Binary Fiction

A single-scroll studio and game portfolio built with the existing Next.js 14 App Router, React, TypeScript and Tailwind setup. The production build remains a static export for the existing Firebase hosting project.

## Development

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
```

The build checks TypeScript and the existing Next.js ESLint configuration, then exports the site to `out/`.

## Content and artwork

- `lib/site-content.ts` contains the public hero description, studio statement, games, services and collaborator details. Add games to the array to extend both the scrolling chapters and their navigation.
- `app/page.tsx` defines the homepage and its section headings.
- `components/studio-art.tsx` contains local vector artwork and a temporary geometric brand mark. The artwork is illustrative; replace it with approved brand assets and gameplay screenshots when available.
- The second game is explicitly a casino-template placeholder. Its title, description and visuals can be replaced independently of Cube Miner.
- The artist profile uses an abstract avatar, placeholder name and an absent portfolio URL. Supply the approved name, portrait and real portfolio URL before presenting it as a completed profile. A portfolio link appears only when `portfolioUrl` is set.
- Private investor demos are not included in public content.

The game collection uses normal vertical scrolling and a sticky navigation list. On smaller screens the list becomes a horizontal sticky bar. Links work without custom scroll interception, and decorative animations respect reduced-motion preferences.

## Routes

- `/`: hero, game collection, development services, collaborators and footer.
- `/games/`: compatibility redirect to `/#games`.
- `/privacyPolicy/`: existing privacy policy, with a shared navigation and legal wrapper.
- `/termsOfService/`: existing terms of service, with the same wrapper.

The existing legal text is unchanged. Both legal pages remain independent and linked from the footer.

## Hosting

Firebase configuration is retained in `firebase.json` and `.firebaserc`. Building produces the static files; pushing a branch does not itself deploy Firebase hosting. The generated `.firebase/` directory is not source for the website and should not be included in feature commits.
