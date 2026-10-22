<script lang="ts">
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ProjectCarousel from "./ProjectCarousel.svelte";

  const images = [
    { src: "portfolio/wiitarThing/WiitarThing1.png", alt: "WiitarThing controller configuration interface" },
    { src: "portfolio/wiitarThing/WiitarThing2.png", alt: "WiitarThing displaying controller settings and device information" },
    { src: "portfolio/wiitarThing/WiitarThing3.png", alt: "WiitarThing displaying a connected controller and its settings" },
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
    <ProjectCarousel {images} />
  </PortfolioBody>
</PortfolioCard>
