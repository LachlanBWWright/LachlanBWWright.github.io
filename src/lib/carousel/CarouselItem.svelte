<script lang="ts">
  import { SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<SplideSlide>
  <div class="w-full h-full flex items-center justify-center">
    {@render children?.()}
  </div>
</SplideSlide>

<style>
  /* images inside slides should scale to fit and not push content upward */
  :global(.splide__slide > div > img) {
    max-width: 100%;
    max-height: 558px; /* cap height as requested */
    object-fit: contain;
  }
</style>
