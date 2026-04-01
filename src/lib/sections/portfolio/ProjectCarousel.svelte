<script lang="ts">
  import { Carousel, Slide, Controls, Thumbnails } from "flowbite-svelte";
  import type { HTMLImgAttributes } from "svelte/elements";

  type SlideImage = Partial<HTMLImgAttributes> & {
    iframe?: boolean;
    thumb?: string;
    class?: string;
  };

  interface Props {
    images: SlideImage[];
    carouselClass?: string;
    thumbnailClass?: string;
    thumbnailImageClass?: string;
  }

  let {
    images,
    carouselClass = "h-64",
    thumbnailClass = "mt-4 gap-3 bg-transparent h-[68px] py-1 overflow-x-auto overflow-y-hidden",
    thumbnailImageClass = "h-full w-[100px] object-cover flex-none rounded-md shadow-xl",
  }: Props = $props();

  let index = $state(0);

  const joinClasses = (...classes: Array<string | undefined | false>) =>
    classes.filter(Boolean).join(" ");

</script>

<div class="flex flex-col">
  <Carousel images={images} duration={0} class={carouselClass} bind:index={index}>
    {#snippet slide({ index, Slide })}
      {@const currentImage = images[index]}
      {#if currentImage.iframe}
        <iframe
          class="w-full h-full"
          src={currentImage.src ?? ""}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      {:else}
        <Slide
          image={currentImage}
          fit="contain"
          class={joinClasses("h-full", currentImage.class)}
        />
      {/if}
    {/snippet}
    <Controls />
  </Carousel>
  <Thumbnails images={images} bind:index={index} class={thumbnailClass}>
    {#snippet children({ image, selected, Thumbnail })}
      {@const currentImage = image as SlideImage}
      {#if currentImage.iframe}
        <Thumbnail
          src={currentImage.thumb ?? currentImage.src ?? ""}
          {selected}
          class={joinClasses(
            thumbnailImageClass,
            selected && "ring-2 ring-blue-500",
          )}
        />
      {:else}
        <Thumbnail
          {selected}
          {...currentImage}
          class={joinClasses(
            thumbnailImageClass,
            selected && "ring-2 ring-blue-500",
          )}
        />
      {/if}
    {/snippet}
  </Thumbnails>
</div>
