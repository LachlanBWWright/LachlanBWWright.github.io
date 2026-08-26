<script lang="ts">
  import Card from "$lib/cards/Card.svelte";
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ProjectCarousel from "./ProjectCarousel.svelte";

  const images = [
    {
      src: "portfolio/resourceForkParser/ResourceForkParser1.png",
      alt: "Resource Fork Parser four-letter code specification editor.",
    },
    {
      src: "portfolio/resourceForkParser/ResourceForkParser2.png",
      alt: "Resource Fork Parser showing parsed resource data and fields.",
    },
    {
      src: "portfolio/resourceForkParser/ResourceForkParser3.png",
      alt: "Resource Fork Parser pixel-art resource browser and editor.",
    },
  ];
</script>

<PortfolioCard>
  <Subheading>Resource Fork Parser</Subheading>
  <PortfolioBody>
    <div class="flex flex-col gap-2">
      <WhiteLinkButton
        text="Website"
        link="https://lachlanbwwright.github.io/mac-online-resource-fork-parser/"
      />
      <li>
        Developed a browser-based tool for inspecting and editing classic Mac
        OS Resource Fork files.
      </li>
      <li>
        Built an interactive specification editor for defining and decoding
        four-letter resource data types.
      </li>
      <li>
        Added JSON and TypeScript export workflows alongside repacking modified
        data into RSRC files.
      </li>
      <li>
        Implemented a data browser and pixel-art picture renderer for viewing
        and editing parsed resources.
      </li>
    </div>
    <Card>
      <ProjectCarousel {images} />
    </Card>
  </PortfolioBody>
</PortfolioCard>
