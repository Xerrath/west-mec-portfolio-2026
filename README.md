# West-MEC Portfolio 2026

Portfolio and classroom hub for Alan McCall, Coding Instructor in West-MEC's Software & Web Application Development program.

Built with Next.js (App Router) and plain CSS with `:root` variables for the light and dark themes. Deployed to Cloudflare Workers with OpenNext.

## What's inside

- **Home**: about, mission, skill bars, degrees and certifications, and a carousel of live projects
- **My Story**: a scroll-driven timeline
- **Classroom**: student links, filterable by year and searchable
- **Blog**: pulls my public posts from the [True Blogger API](https://true-blogger-api.app), with thumbnail, large, and list views

## Editing content

Most content lives in arrays in `src/data/`. Add an item by copying one object:

| File | What it holds |
| --- | --- |
| `site.js` | Name, links, and page order (drives the menu and the Back / Next buttons) |
| `skills.js` | Skill bars |
| `projects.js` | Live projects in the carousel |
| `studentLinks.js` | Classroom links |
| `timeline.js` | My Story events |

Blog posts come from True Blogger, so there is no database here.

## Running it

```bash
npm install
npm run dev       # http://localhost:3000
npm run preview   # build and run it the way Cloudflare does
npm run deploy    # build and deploy to Cloudflare
```

Every push to `main` deploys automatically through Cloudflare Workers Builds (build: `npx opennextjs-cloudflare build`, deploy: `npx opennextjs-cloudflare deploy`, `NODE_VERSION=22`). `npm run deploy` is only needed for a manual deploy.

The blog needs a True Blogger API key (read-only is enough):

- Local: `TRUE_BLOGGER_API_KEY=...` in `.env.local` (and `.dev.vars` for `npm run preview`). Both are gitignored.
- Cloudflare: `npx wrangler secret put TRUE_BLOGGER_API_KEY`
