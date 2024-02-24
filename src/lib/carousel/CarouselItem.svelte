<script>
  import { SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
</script>

<SplideSlide>
  <div class="w-full h-full flex items-center justify-center bg-black">
    <slot />
  </div>
</SplideSlide>
