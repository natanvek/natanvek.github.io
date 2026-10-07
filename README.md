# natanvek portfolio

Astro static site. Content source of truth: `../cv/EXPERIENCE.md`.

- `npm run dev`: local preview at http://localhost:4321
- Add a project: drop a `.md` file in `src/content/projects/` (copy an existing one for the frontmatter; schema in `src/content.config.ts`). `featured: true` puts it on the home page.
- Categories and colors: `src/categories.ts`
- CV PDF: `public/natan_vekselman_cv.pdf` (copy from the latest `cv/vN/`)
- Deploy: push to `main` of `natanvek/natanvek.github.io`; `.github/workflows/deploy.yml` publishes to GitHub Pages.
