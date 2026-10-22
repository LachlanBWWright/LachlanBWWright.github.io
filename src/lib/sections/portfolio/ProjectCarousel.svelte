<script lang="ts">
  import MediaCarousel, { type MediaSlide } from "$lib/carousel/MediaCarousel.svelte";
  let { images }: { images: MediaSlide[] } = $props();
</script>

<MediaCarousel {images} label={images.some((image) => image.iframe) ? "Screenshots & video" : "Screenshots"} />
