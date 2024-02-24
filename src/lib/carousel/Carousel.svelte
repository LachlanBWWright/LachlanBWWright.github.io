<script>
  import { Splide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
</script>

<div class="h-full">
  <Splide options="{{ rewind: true }}">
    <slot />
  </Splide>
</div>
