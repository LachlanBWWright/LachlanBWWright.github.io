<script lang="ts">
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ProjectCarousel from "./ProjectCarousel.svelte";

  const images = [
    { src: "portfolio/timetable/Menu.jpg", alt: "Public transport app showing its trip search form", class: "max-h-96" },
    { src: "portfolio/timetable/StopMap.jpg", alt: "Public transport app displaying stops on a map", class: "max-h-96" },
    { src: "portfolio/timetable/Trip.jpg", alt: "Public transport app displaying a trip itinerary", class: "max-h-96" },
    { src: "portfolio/timetable/TripLeg.jpg", alt: "Public transport app displaying the route map for a trip segment", class: "max-h-96" },
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
    <ProjectCarousel {images} />
  </PortfolioBody>
</PortfolioCard>
