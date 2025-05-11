<script lang="ts">
  import { Splide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="h-full">
  <Splide options={{ rewind: true }}>
    {@render children?.()}
  </Splide>
</div>
