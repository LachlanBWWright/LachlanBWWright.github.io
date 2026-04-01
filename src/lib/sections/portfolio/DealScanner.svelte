<script lang="ts">
  import Card from "$lib/cards/Card.svelte";
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ProjectCarousel from "./ProjectCarousel.svelte";

  const images = [
    { src: "portfolio/deals/Deals1.png", alt: "Screenshot of code." },
  ];
</script>

<PortfolioCard>
  <Subheading>Deal Scanner</Subheading>
  <PortfolioBody>
    <div class="flex flex-col gap-2">
      <WhiteLinkButton
        text="Repository"
        link="https://github.com/LachlanBWWright/LBWW-Deal-Scanner"
      />
      <li>
        Developed a NodeJS-based application written in TypeScript, utilising
        Puppeteer, Axios, and Mongoose NPM packages.
      </li>
      <li>
        Collected information from retailers with Puppeteer and Axios, sending
        a chat-app notification if a deal is found.
      </li>
      <li>
        Deployed on Heroku with a Turso-hosted database, and sent user alerts
        via DiscordJS notifications.
      </li>
      <li>
        Utilised Prisma with SQLite to persist user-defined query
        configurations and scan state.
      </li>
      <li>
        Utilised MongoDB to store search queries for specific retailers, to be
        automatically scanned periodically.
      </li>
    </div>
    <Card>
      <ProjectCarousel {images} />
    </Card>
  </PortfolioBody>
</PortfolioCard>
