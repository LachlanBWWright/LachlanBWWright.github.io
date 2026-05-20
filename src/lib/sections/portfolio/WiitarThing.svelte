<script lang="ts">
  import Card from "$lib/cards/Card.svelte";
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ProjectCarousel from "./ProjectCarousel.svelte";

  const images = [
    { src: "portfolio/wiitarThing/WiitarThing1.png" },
    { src: "portfolio/wiitarThing/WiitarThing2.png" },
    { src: "portfolio/wiitarThing/WiitarThing3.png" },
  ];
</script>

<PortfolioCard>
  <Subheading>WiitarThing</Subheading>
  <PortfolioBody>
    <div class="flex flex-col gap-2">
      <WhiteLinkButton
        text="Repository"
        link="https://github.com/LachlanBWWright/WiitarThing"
      />
      <li>
        Forked WiiTarThing and ported it from a WPF application to a WinUI 3
        application.
      </li>
    </div>
    <Card>
      <ProjectCarousel
        {images}
        carouselClass="h-64 wiitarthing-carousel"
        thumbnailImageClass="wiitarthing-thumb h-full w-[100px] flex-none rounded-md shadow-xl"
      />
    </Card>
  </PortfolioBody>
</PortfolioCard>

<style>
  :global(.wiitarthing-carousel img) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  :global(.wiitarthing-thumb img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
