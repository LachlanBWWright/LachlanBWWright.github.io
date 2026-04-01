<script lang="ts">
  import Card from "$lib/cards/Card.svelte";
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ProjectCarousel from "./ProjectCarousel.svelte";

  const images = [
    {
      iframe: true,
      src: "https://www.youtube.com/embed/odZuaUu2I3c?si=Pwt6HkQCBgARhmR5",
      thumb: "portfolio/mafia/Mafia1.png",
    },
    {
      src: "portfolio/mafia/Mafia1.png",
      alt: "Screenshot of web application.",
    },
    { src: "portfolio/mafia/Mafia2.png" },
    { src: "portfolio/mafia/Mafia3.png" },
  ];
</script>

<PortfolioCard>
  <Subheading>LBWW Mafia</Subheading>
  <PortfolioBody>
    <div class="flex flex-col gap-2">
      <WhiteLinkButton
        text="Repository"
        link="https://github.com/LachlanBWWright/LBWW-Mafia"
      />
      <li>
        Created an online chat-based game built with a MERN stack, alongside a
        React Native app as an alternate frontend.
      </li>
      <li>
        Used TypeScript and Bootstrap to construct the MERN Stack, and
        TypeScript to construct the React Native application.
      </li>
      <li>
        Constructed an object-oriented backend for handling game logic, making
        use of polymorphism.
      </li>
      <li>
        Implemented the SocketIO package for handling user-server communication
        using WebSocket connections.
      </li>
      <li>
        Logistics included bidirectional WebSocket communication using SocketIO
        and PartyKit for realtime multiuser state sync.
      </li>
      <li>
        Utilised ReCAPTCHA V3 verification and interfaced with a MongoDB
        Database using Mongoose.
      </li>
    </div>
    <Card>
      <ProjectCarousel {images} />
    </Card>
  </PortfolioBody>
</PortfolioCard>
