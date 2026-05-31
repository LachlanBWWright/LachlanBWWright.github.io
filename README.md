# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
pnpm create svelte@latest

# create a new project in my-app
pnpm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Resume thumbnail

A helper script generates a JPEG thumbnail from the first page of
`static/Resume.pdf` and writes it to `static/resume-page-1.jpg` (overwriting
any existing image).

- run it with `pnpm run thumb` (requires `ts-node`).
- the script lives in `scripts/generateResumeThumbnail.ts`; you can also
  convert it to shell/another language if you prefer.

This keeps the thumbnail up-to-date whenever the PDF changes.
