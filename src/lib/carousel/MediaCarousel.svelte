<script module lang="ts">
  import type { HTMLImgAttributes } from "svelte/elements";
  export type MediaSlide = Partial<HTMLImgAttributes> & {
    iframe?: boolean;
    thumb?: string;
    label?: string;
    href?: string;
  };
</script>

<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    images: MediaSlide[];
    label: string;
    ariaLabel?: string;
    itemName?: string;
    caption?: Snippet<[number]>;
  }
  let { images, label, ariaLabel = label, itemName = "slide", caption }: Props = $props();
  const slideId = $props.id();
  let index = $state(0);
  const current = $derived(images[index]);

  function step(direction: number) {
    index = (index + direction + images.length) % images.length;
  }
</script>

{#if current}
  <section class="media-carousel" aria-label={ariaLabel} aria-roledescription="carousel">
    <div class="carousel-toolbar">
      <span>{label}</span>
      <div class="controls">
        <span class="count" aria-live="polite">{index + 1} / {images.length}</span>
        {#if images.length > 1}
          <button type="button" aria-label="Previous {itemName}" onclick={() => step(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
          </button>
          <button type="button" aria-label="Next {itemName}" onclick={() => step(1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg>
          </button>
        {/if}
      </div>
    </div>
    <div id={slideId} class="slide">
      <div class="media-frame">
        {#if current.iframe}
          {#key current.src}
            <iframe
              src={current.src ?? ""}
              title={current.alt ?? "Project demonstration video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          {/key}
        {:else if current.href}
          <a href={current.href} aria-label="Read about {current.label}">
            <img src={current.src} alt={current.alt ?? ""} width="1600" height="900" />
          </a>
        {:else}
          <img src={current.src} alt={current.alt ?? ""} width="1600" height="900" loading="lazy" />
        {/if}
      </div>
      {#if caption}
        <div class="caption" aria-live="polite" aria-atomic="true">{@render caption(index)}</div>
      {/if}
    </div>
    {#if images.length > 1}
      <div class="thumbnail-picker" aria-label="Choose a {itemName}">
        {#each images as image, i}
          <button
            type="button"
            class:selected={index === i}
            aria-label={image.label ? `Show ${image.label}` : `Show ${itemName} ${i + 1}: ${image.alt ?? (image.iframe ? "Video" : "Screenshot")}`}
            aria-pressed={index === i}
            aria-controls={slideId}
            onclick={() => (index = i)}
          >
            <span class="thumbnail-image">
              <img src={image.thumb ?? image.src} alt="" width="160" height="90" loading="lazy" />
            </span>
            {#if image.label}<span class="thumbnail-label">{image.label}</span>{/if}
          </button>
        {/each}
      </div>
    {/if}
  </section>
{/if}

<style>
  .media-carousel { min-width: 0; width: 100%; }
  .carousel-toolbar { display: flex; justify-content: space-between; align-items: center; min-height: 44px; margin-bottom: 0.75rem; color: var(--color-text-light); font-size: 0.9rem; }
  .controls { display: flex; align-items: center; gap: 0.4rem; }
  .count { margin-right: 0.5rem; font-size: 0.85rem; font-variant-numeric: tabular-nums; }
  .controls button { width: 44px; height: 44px; display: grid; place-items: center; border: 1px solid var(--color-card-bg); border-radius: 0.5rem; cursor: pointer; }
  .controls svg { width: 22px; height: 22px; }
  .controls button:hover { background: var(--color-primary); }
  .slide { overflow: hidden; border: 1px solid var(--color-card-bg); border-radius: 0.75rem; }
  .media-frame { aspect-ratio: 16 / 9; background: #080b10; }
  .media-frame a { display: block; width: 100%; height: 100%; }
  .media-frame img, iframe { display: block; width: 100%; height: 100%; object-fit: contain; border: 0; }
  .caption { padding: 1.25rem; background: var(--color-card-bg); }
  .thumbnail-picker { --thumbnail-height: 4.5rem; display: flex; flex-wrap: wrap; align-items: start; gap: 0.6rem; margin-top: 0.75rem; }
  .thumbnail-picker button { flex: 0 0 auto; max-width: 100%; min-width: 44px; min-height: 44px; text-align: left; cursor: pointer; padding: 0.35rem; border: 2px solid transparent; border-radius: 0.5rem; }
  .thumbnail-picker button.selected { border-color: var(--color-accent); background: var(--color-primary); }
  .thumbnail-picker button:hover:not(.selected) { background: var(--color-card-bg); }
  .thumbnail-image { display: flex; justify-content: center; align-items: center; width: max-content; max-width: 100%; min-width: calc(var(--thumbnail-height) * 4 / 3); height: var(--thumbnail-height); background: #000; border-radius: 0.2rem; overflow: hidden; }
  .thumbnail-image img { display: block; width: auto; max-width: 100%; height: 100%; object-fit: contain; }
  .thumbnail-label { display: block; max-width: 10rem; margin-top: 0.4rem; font-size: 0.75rem; line-height: 1.35; }
  button:focus-visible, a:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 4px; }
  @media (max-width: 639px) {
    .caption { padding: 1rem; }
    .thumbnail-picker { --thumbnail-height: 3rem; gap: 0.3rem; }
    .thumbnail-label { font-size: 0.65rem; }
  }
</style>
