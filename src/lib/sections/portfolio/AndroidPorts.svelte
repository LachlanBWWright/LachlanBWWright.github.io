<script lang="ts">
  import Card from "$lib/cards/Card.svelte";
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ProjectCarousel from "./ProjectCarousel.svelte";

  const images = [
    { src: "portfolio/androidPorts/OttoMatic.jpg" },
    { src: "portfolio/androidPorts/BillyFrontier.jpg" },
    { src: "portfolio/androidPorts/Bugdom1.jpg" },
    { src: "portfolio/androidPorts/Bugdom2.jpg" },
    { src: "portfolio/androidPorts/CroMagRally.jpg" },
    { src: "portfolio/androidPorts/Nanosaur1.jpg" },
    { src: "portfolio/androidPorts/Nanosaur2.jpg" },
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
    <Card>
      <ProjectCarousel {images} />
    </Card>
  </PortfolioBody>
</PortfolioCard>
