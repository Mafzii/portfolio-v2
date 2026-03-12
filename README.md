# portfolio

Personal portfolio site built with Next.js and exported as a static site for GitHub Pages.

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The app is configured as a project site and uses the repository base path:

- Repository: `Mafzii/portfolio`
- Base path: `/portfolio`
- GitHub Pages URL: `https://mafzii.github.io/portfolio/`

To use that exact GitHub Pages URL on a project site, the repository itself should also be renamed to `portfolio` on GitHub.

## Production build

Generate the static export locally with:

```bash
npm run build
```

The exported site is written to `out/`.

## Deploying to GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that deploys the contents of `out/` to GitHub Pages whenever code is pushed to `main`.

### One-time GitHub setup

In the GitHub repository settings:

1. Go to `Settings` -> `Pages`.
2. Under **Build and deployment**, set **Source** to `GitHub Actions`.

After that, every push to `main` will trigger a fresh Pages deployment.

### Manual deployment trigger

You can also run the workflow manually from the `Actions` tab using **Deploy to GitHub Pages**.
