<script lang="ts">
  import { Splide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="h-full">
  <!-- ensure Splide itself stretches to fill grid cell height -->
  <Splide
    class="h-full"
    options={{ rewind: true, height: "100%", autoHeight: false }}
  >
    {@render children?.()}
  </Splide>
</div>

<style>
  /* make splide and its internal elements occupy full height so the
     carousel expands with its grid sibling */
  :global(.splide),
  :global(.splide__track),
  :global(.splide__list),
  :global(.splide__slide) {
    height: 100%;
  }
  :global(.splide__arrow) {
    opacity: 0.9;
  }
</style>
