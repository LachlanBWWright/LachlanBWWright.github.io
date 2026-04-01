<script lang="ts">
  import Card from "$lib/cards/Card.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ProjectCarousel from "./ProjectCarousel.svelte";

  const images = [
    {
      iframe: true,
      src: "https://www.youtube.com/embed/1Q-ZASEpHeI?si=2BspDC_boqL3fBAb",
      thumb: "portfolio/cryo/Cryo1.png",
    },
    { src: "portfolio/cryo/Cryo1.png", alt: "Screenshot of web application." },
  ];
</script>

<PortfolioCard>
  <Subheading>Cryogenic Wiring Simulation</Subheading>
  <PortfolioBody>
    <div class="flex flex-col gap-2">
      <li>
        Created a React website to provide a visual means of interfacing with
        an existing Python model.
      </li>
      <li>
        Used Pyodide to allow interactions with the Python model to be
        performed on the client-side.
      </li>
      <li>
        Utilised the Python-based Flask for hosting, allowing for interactions
        with the model over a REST API.
      </li>
      <li>
        Utilised the Recharts library for React to visually depict the model's
        outputs.
      </li>
      <li>
        Communicated with clients to clarify specifications and demonstrate
        progress.
      </li>
    </div>
    <Card>
      <ProjectCarousel {images} />
    </Card>
  </PortfolioBody>
</PortfolioCard>
