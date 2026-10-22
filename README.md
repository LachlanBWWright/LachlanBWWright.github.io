# Portfolio site

Viewable at [https://lachlanbwwright.github.io](https://lachlanbwwright.github.io).

## Local development

Use Node.js 22 and the pnpm version declared in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1 --port 5173 --strictPort
```

Open http://localhost:5173/. The root `t3.json` provides these commands in
T3 Code, along with Svelte/TypeScript checks, watch mode, a production build,
and a build-and-preview shortcut at http://localhost:4173/.

Run the available validation checks with:

```sh
pnpm check && pnpm build
```

There is no standalone unit or browser test runner configured. Storybook stories
include browser interaction checks that run when those stories are opened.

## Component previews

Storybook uses the site's global styles, fonts, and static assets so components
can be reviewed separately from the full page. Start it with:

```sh
pnpm storybook
```

Open http://localhost:6006/. The header, project carousel, and navbar have desktop
and mobile stories; use the viewport toolbar to check other screen sizes. Carousel
controls can be exercised directly in the preview.
The `Navigate Projects` story also runs interaction checks for next/previous
navigation, thumbnail selection, and wrapping between the first and last items.
The navbar fixture provides scroll targets to review active links and its
dark-to-blue fade; `Blue After Scroll` checks the blue background after scrolling.

Build the standalone component preview with `pnpm build-storybook`; the generated
files are written to `storybook-static/`. Both commands also have shortcuts in
`t3.json`. Stories live beside their components as `*.stories.ts` files.
