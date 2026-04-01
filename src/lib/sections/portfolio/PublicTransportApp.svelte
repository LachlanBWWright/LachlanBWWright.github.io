<script lang="ts">
  import Card from "$lib/cards/Card.svelte";
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ProjectCarousel from "./ProjectCarousel.svelte";

  const images = [
    { src: "portfolio/timetable/Menu.jpg", class: "max-h-96" },
    { src: "portfolio/timetable/StopMap.jpg", class: "max-h-96" },
    { src: "portfolio/timetable/Trip.jpg", class: "max-h-96" },
    { src: "portfolio/timetable/TripLeg.jpg", class: "max-h-96" },
  ];
</script>

<PortfolioCard>
  <Subheading>Public Transport App</Subheading>
  <PortfolioBody>
    <div class="flex flex-col gap-2">
      <WhiteLinkButton
        text="Repository"
        link="https://github.com/LachlanBWWright/Flutter_Timetable"
      />
      <li>
        Developed a mobile application for viewing public transportation
        timetables in NSW.
      </li>
      <li>
        Interfaced with Transport for NSW OpenData API, parsing Protobuf and
        CSV datasets.
      </li>
      <li>
        Persisted local data using Drift and displayed map information using
        Flutter Map.
      </li>
    </div>
    <Card>
      <ProjectCarousel {images} />
    </Card>
  </PortfolioBody>
</PortfolioCard>
