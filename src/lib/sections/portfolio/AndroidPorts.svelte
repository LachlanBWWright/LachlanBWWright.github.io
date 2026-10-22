<script lang="ts">
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ProjectCarousel from "./ProjectCarousel.svelte";

  const images = [
    { src: "portfolio/androidPorts/OttoMatic.jpg", alt: "Otto Matic running on Android with touch controls" },
    { src: "portfolio/androidPorts/BillyFrontier.jpg", alt: "Billy Frontier running on Android with touch controls" },
    { src: "portfolio/androidPorts/Bugdom1.jpg", alt: "Bugdom running on Android with touch controls" },
    { src: "portfolio/androidPorts/Bugdom2.jpg", alt: "Bugdom 2 running on Android with touch controls" },
    { src: "portfolio/androidPorts/CroMagRally.jpg", alt: "Cro-Mag Rally running on Android with touch controls" },
    { src: "portfolio/androidPorts/Nanosaur1.jpg", alt: "Nanosaur running on Android with touch controls" },
    { src: "portfolio/androidPorts/Nanosaur2.jpg", alt: "Nanosaur 2 running on Android with touch controls" },
  ];
</script>

<PortfolioCard>
  <Subheading>Android Ports</Subheading>
  <PortfolioBody>
    <div class="flex flex-col gap-2">
      <div class="grid grid-cols-1 gap-2 xl:grid-cols-2">
        <WhiteLinkButton
          text="Otto Matic"
          link="https://github.com/LachlanBWWright/OttoMatic-Android"
        />
        <WhiteLinkButton
          text="Billy Frontier"
          link="https://github.com/LachlanBWWright/BillyFrontier-Android"
        />
        <WhiteLinkButton
          text="Bugdom"
          link="https://github.com/LachlanBWWright/Bugdom-android"
        />
        <WhiteLinkButton
          text="Bugdom 2"
          link="https://github.com/LachlanBWWright/Bugdom2-Android"
        />
        <WhiteLinkButton
          text="Cro-Mag Rally"
          link="https://github.com/LachlanBWWright/CroMagRally-Android"
        />
        <WhiteLinkButton
          text="Mighty Mike"
          link="https://github.com/LachlanBWWright/MightyMike-Android"
        />
        <WhiteLinkButton
          text="Nanosaur"
          link="https://github.com/LachlanBWWright/Nanosaur-android"
        />
        <WhiteLinkButton
          text="Nanosaur 2"
          link="https://github.com/LachlanBWWright/Nanosaur2-Android"
        />
      </div>
      <li>
        A collection of games from Pangea Software ported to Android using
        asynchronous coding agents.
      </li>
    </div>
    <ProjectCarousel {images} />
  </PortfolioBody>
</PortfolioCard>
