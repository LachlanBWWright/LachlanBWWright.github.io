<script lang="ts">
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ProjectCarousel from "./ProjectCarousel.svelte";

  const images = [
    { src: "portfolio/RecklessDrivinPort/Reckless1.png", alt: "Reckless Drivin WebAssembly port showing the game start screen" },
    { src: "portfolio/RecklessDrivinPort/Reckless2.png", alt: "Reckless Drivin WebAssembly port showing a driving scene" },
    { src: "portfolio/RecklessDrivinPort/Reckless3.png", alt: "Reckless Drivin running in the browser with an overhead view of the road" },
  ];
</script>

<PortfolioCard>
  <Subheading>Reckless Drivin' — WebAssembly Port</Subheading>
  <PortfolioBody>
    <div class="flex flex-col gap-2">
      <div class="grid grid-cols-1 gap-2 xl:grid-cols-2">
        <div class="xl:col-span-2">
          <WhiteLinkButton
            text="Deployment"
            link="https://lachlanbwwright.github.io/RecklessDrivinPort/"
          />
        </div>
        <div class="xl:col-span-2">
          <WhiteLinkButton
            text="Repository"
            link="https://github.com/LachlanBWWright/RecklessDrivinPort"
          />
        </div>
      </div>
      <li>
        Ported a Mac OS 9 game to WebAssembly using research and agentic
        development workflows.
      </li>
      <li>
        Produced Angular-based level and asset editors hosted on GitHub Pages
        using Angular Material and Konva Libraries.
      </li>
    </div>
    <ProjectCarousel {images} />
  </PortfolioBody>
</PortfolioCard>
