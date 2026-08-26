<script lang="ts">
  import Card from "$lib/cards/Card.svelte";
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ProjectCarousel from "./ProjectCarousel.svelte";

  const images = [
    {
      src: "portfolio/steamInvEdit/SteamInvEdit1.png",
      alt: "SteamInvEdit CS2 inventory browser.",
    },
    {
      src: "portfolio/steamInvEdit/SteamInvEdit2.png",
      alt: "SteamInvEdit CS2 item details and inventory view.",
    },
  ];
</script>

<PortfolioCard>
  <Subheading>SteamInvEdit</Subheading>
  <PortfolioBody>
    <div class="flex flex-col gap-2">
      <WhiteLinkButton
        text="Repository"
        link="https://github.com/LachlanBWWright/CSInvEdit"
      />
      <li>
        Developed a web-based Counter-Strike 2 inventory browser and editor.
      </li>
      <li>
        Built searchable, filterable, and sortable views for browsing inventory
        items and collections.
      </li>
      <li>
        Created detailed item views with metadata, diagnostics, trade state,
        and links to Steam actions.
      </li>
    </div>
    <Card>
      <ProjectCarousel {images} />
    </Card>
  </PortfolioBody>
</PortfolioCard>
