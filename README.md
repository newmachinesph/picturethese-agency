# PictureThese

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React 19](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white)

Agency website for PictureThese, a content and creative agency for founder-led
brands: strategy, writing, social creative, short-form video, and email, managed
as one connected studio. It has a home page with a browser-only starter brief
builder, and a `/sample` page that carries one fictional brand, Plainweather
Skin, through all five services.

![PictureThese lockup](public/assets/images/logo-picturethese-lockup-v1.png)

## Pages

- **`/`** — hero, problem, services gallery, studio, route, approach, fit, and
  the starter brief builder. The brief builder runs entirely in the browser and
  copies a clean note to the visitor's clipboard; there is no form submission
  endpoint.
- **`/sample`** — Plainweather Skin, a fictional sensitive-skin brand: brief,
  strategy, four social graphics, paid ads, copy samples, a TikTok film
  (keyframe carousel plus a 34s master, 15s cutdown, and 6s loop), and an email
  flow. The page labels the brand as fictional and makes no client or
  performance claims.

## Development

Requires Node.js and npm.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
npm run start   # serve the production build
```

There is no test suite; `npm run lint` and `npm run build` are the checks.

## Structure

```
app/
  layout.tsx            site metadata and root layout
  page.tsx              home page
  sample/page.tsx       Plainweather Skin sample
  globals.css           all site styling (Tailwind CSS 4 import + custom CSS)
components/             Nav, SiteFooter, HeroFlight, Hummingbird, ServiceGallery,
                        KeyframeCarousel, BriefBuilder
public/assets/
  images/               brand and editorial images (see images/README.md)
  video/plainweather/   finished films, poster, scene keyframes, and the
                        downloadable video brief
production/plainweather/  Plainweather video production pack, not served by the
                          site (Veo prompts, scene directions, continuity clauses)
scripts/plainweather-social-renderer.html   canvas renderer for the social graphics
```

## Imagery

Brand and editorial images and the Plainweather film are AI-generated; see
[`public/assets/images/README.md`](public/assets/images/README.md) and
[`production/plainweather/README.md`](production/plainweather/README.md). No
stock imagery, external image URLs, or fabricated client proof is included.

The site was first built from a brand brief and a prompt-builder specification
that are not part of this repository.

## License

The code is released under the [MIT License](LICENSE). The PictureThese name and
hummingbird logo, and the fictional Plainweather brand assets, identify the
project and are not licensed for reuse as branding.
