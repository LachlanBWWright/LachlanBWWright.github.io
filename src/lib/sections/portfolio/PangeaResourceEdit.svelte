<script lang="ts">
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ProjectCarousel from "./ProjectCarousel.svelte";

  const images = [
    { src: "portfolio/pangea/Pangea1.png", alt: "Pangea Resource Edit showing a level map with editable game objects" },
    { src: "portfolio/pangea/Pangea2.png", alt: "Pangea Resource Edit showing level terrain and object placement" },
    { src: "portfolio/pangea/Pangea3.png", alt: "Classic Pangea game scene used to check level changes" },
    { src: "portfolio/pangea/Pangea4.png", alt: "Otto Matic game scene used to check edited level assets" },
    { src: "portfolio/pangea/Pangea5.png", alt: "Pangea game level terrain displayed in the 3D viewer" },
    { src: "portfolio/pangea/Pangea6.png", alt: "Pangea Resource Edit showing its object model preview alongside the level map" },
  ];
</script>

<PortfolioCard>
  <Subheading>Pangea Resource Edit</Subheading>
  <PortfolioBody>
    <div class="flex flex-col gap-2">
      <div class="grid grid-cols-1 gap-2 xl:grid-cols-2">
        <div class="xl:col-span-2">
          <WhiteLinkButton
            text="Website"
            link="https://lachlanbwwright.github.io/PangeaRSEdit/"
          />
        </div>
        <WhiteLinkButton
          text="Frontend"
          link="https://github.com/LachlanBWWright/PangeaRSEdit"
        />
        <WhiteLinkButton
          text="RSRCDump"
          link="https://github.com/LachlanBWWright/rsrcdump"
        />
      </div>
      <li>
        Developed a React-based level editor for the open-sourced Pangea
        Software games, notable for being bundled with Macintosh computers in
        the late 90s and early 2000s, and later being ported as some of the
        earliest iOS games.
      </li>
      <li>
        Forked and extended the Python "RSRCDump" library for editing MAC OS
        Resource Fork files to support padding bytes, improve support for
        struct arrays and non-CLI access to features.
      </li>
      <li>
        Used Pyodide with the forked library to convert level files to JSON and
        back after modification.
      </li>
      <li>
        Analyzed game source code to understand and interpret level data
        structures.
      </li>
      <li>
        Implemented an LZSS compression algorithm to decompress and repack
        level data.
      </li>
      <li>
        Developed a converter for proprietary BG3D and 3DMF formats to glTF and
        back, including skeletal and animation data.
      </li>
      <li>
        Used ThreeJS via React Three Fiber to visualize model data and level
        topology.
      </li>
      <li>
        Used Konva to create a drag-and-drop interface for editing level data
      </li>
    </div>
    <ProjectCarousel {images} />
  </PortfolioBody>
</PortfolioCard>
