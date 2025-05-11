<script lang="ts">
  import { SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<SplideSlide>
  <div class="w-full h-full flex items-center justify-center bg-black">
    {@render children?.()}
  </div>
</SplideSlide>
