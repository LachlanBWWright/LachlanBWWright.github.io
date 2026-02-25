<script lang="ts">
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";

  // use Flowbite Svelte carousel component
  import { Carousel, Slide, Controls, Thumbnails } from "flowbite-svelte";
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import Card from "$lib/cards/Card.svelte";
  import Heading from "$lib/headers/Heading.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";

  import type { HTMLImgAttributes } from "svelte/elements";

  type SlideImage = Partial<HTMLImgAttributes> & {
    iframe?: boolean;
    thumb?: string;
  };

  const cryoImages: SlideImage[] = [
    {
      iframe: true,
      src: "https://www.youtube.com/embed/1Q-ZASEpHeI?si=2BspDC_boqL3fBAb",
      thumb: "portfolio/cryo/Cryo1.png"
    },
    { src: "portfolio/cryo/Cryo1.png", alt: "Screenshot of web application." }
  ];

  const pangeaImages = [
    { src: "portfolio/pangea/Pangea1.png" },
    { src: "portfolio/pangea/Pangea2.png" },
    { src: "portfolio/pangea/Pangea3.png" },
    { src: "portfolio/pangea/Pangea4.png" },
    { src: "portfolio/pangea/Pangea5.png" },
    { src: "portfolio/pangea/Pangea6.png" }
  ];

  const androidImages = [
    { src: "portfolio/androidPorts/OttoMatic.jpg" },
    { src: "portfolio/androidPorts/BillyFrontier.jpg" },
    { src: "portfolio/androidPorts/Bugdom1.jpg" },
    { src: "portfolio/androidPorts/Bugdom2.jpg" },
    { src: "portfolio/androidPorts/CroMagRally.jpg" },
    { src: "portfolio/androidPorts/Nanosaur1.jpg" },
    { src: "portfolio/androidPorts/Nanosaur2.jpg" }
  ];

  const examImages = [{ src: "portfolio/exam/Exam1.png", alt: "Screenshot of website." }];
  const dealsImages = [{ src: "portfolio/deals/Deals1.png", alt: "Screenshot of code." }];

  const mafiaImages: SlideImage[] = [
    {
      iframe: true,
      src: "https://www.youtube.com/embed/odZuaUu2I3c?si=Pwt6HkQCBgARhmR5",
      thumb: "portfolio/mafia/Mafia1.png"
    },
    { src: "portfolio/mafia/Mafia1.png", alt: "Screenshot of web application." },
    { src: "portfolio/mafia/Mafia2.png" },
    { src: "portfolio/mafia/Mafia3.png" }
  ];

  const timetableImages = [
    { src: "portfolio/timetable/Timetable1.png", class: "max-h-96" },
    { src: "portfolio/timetable/Timetable2.png", class: "max-h-96" },
    { src: "portfolio/timetable/Timetable3.png", class: "max-h-96" }
  ];

  let cryoIndex = $state(0);
  let pangeaIndex = $state(0);
  let androidIndex = $state(0);
  let examIndex = $state(0);
  let dealsIndex = $state(0);
  let mafiaIndex = $state(0);
  let timetableIndex = $state(0);
</script>

<div id="portfolio" class="flex flex-col gap-2">
  <Heading>Portfolio</Heading>
  <Card>
    <div class="grid grid-cols-1 gap-6">

      <!-- Cryogenic Wiring Simulation -->
      <PortfolioCard>
        <Subheading>Cryogenic Wiring Simulation</Subheading>
        <PortfolioBody>
          <div class="flex flex-col gap-2">
            <li>Created a React website to provide a visual means of interfacing with an existing Python model.</li>
            <li>Used Pyodide to allow interactions with the Python model to be performed on the client-side.</li>
            <li>Utilised the Python-based Flask for hosting, allowing for interactions with the model over a REST API.</li>
            <li>Utilised the Recharts library for React to visually depict the model's outputs.</li>
          </div>
          <div class="flex flex-col">
            <Carousel images={cryoImages} duration={0} class="h-64" bind:index={cryoIndex}>
              {#snippet slide({ index, Slide })}
                {#if cryoImages[index].iframe}
                  <iframe
                    class="w-full h-full"
                    src={cryoImages[index].src}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                {:else}
                  <Slide image={cryoImages[index]} fit="contain" class="h-full" />
                {/if}
              {/snippet}
              <Controls />
            </Carousel>
            <Thumbnails
              images={cryoImages}
              bind:index={cryoIndex}
              class="mt-4 gap-3 bg-transparent h-[68px] py-1 overflow-x-auto overflow-y-hidden"
            >
              {#snippet children({ image, selected, Thumbnail }: { image: SlideImage; selected: boolean; Thumbnail: any })}
                {#if image.iframe}
                  <Thumbnail
                    src={image.thumb}
                    selected={selected}
                    class="h-full w-[100px] object-cover flex-none rounded-md shadow-xl {selected ? 'ring-2 ring-blue-500' : ''}"
                  />
                {:else}
                  <Thumbnail
                    {selected}
                    {...image}
                    class="h-full w-[100px] object-cover flex-none rounded-md shadow-xl {selected ? 'ring-2 ring-blue-500' : ''}"
                  />
                {/if}
              {/snippet}
            </Thumbnails>
          </div>
        </PortfolioBody>
      </PortfolioCard>

      <!-- Pangea Resource Edit -->
      <PortfolioCard>
        <Subheading>Pangea Resource Edit</Subheading>
        <PortfolioBody>
          <div class="flex flex-col gap-2">
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-2">
              <div class="xl:col-span-2">
                <WhiteLinkButton text="Website" link="https://lachlanbwwright.github.io/PangeaRSEdit/" />
              </div>
              <WhiteLinkButton text="Frontend" link="https://github.com/LachlanBWWright/PangeaRSEdit" />
              <WhiteLinkButton text="RSRCDump" link="https://github.com/LachlanBWWright/rsrcdump" />
            </div>
            <li>Developed a React-based level editor for the open-sourced Pangea Software games, notable for being bundled with Macintosh computers in the late 90s and early 2000s, and later being ported as some of the earliest iOS games.</li>
            <li>Forked and extended the Python "RSRCDump" library for editing MAC OS Resource Fork files to support padding bytes, improve support for struct arrays and non-CLI access to features.</li>
            <li>Used Pyodide with the forked library to convert level files to JSON and back after modification.</li>
            <li>Used Konva to create a drag-and-drop interface for editing level data</li>
          </div>
          <div class="flex flex-col">
            <Carousel images={pangeaImages} duration={0} class="h-64" bind:index={pangeaIndex}>
              {#snippet slide({ index, Slide })}
                <Slide image={pangeaImages[index]} fit="contain" class="h-full" />
              {/snippet}
              <Controls />
            </Carousel>
            <Thumbnails
              images={pangeaImages}
              bind:index={pangeaIndex}
              class="mt-4 gap-3 bg-transparent h-[68px] py-1 overflow-x-auto overflow-y-hidden"
            >
              {#snippet children({ image, selected, Thumbnail })}
                <Thumbnail
                  {selected}
                  {...image}
                  class="h-full w-[100px] object-cover flex-none rounded-md shadow-xl {selected ? 'ring-2 ring-blue-500' : ''}"
                />
              {/snippet}
            </Thumbnails>
          </div>
        </PortfolioBody>
      </PortfolioCard>

      <!-- Android Ports -->
      <PortfolioCard>
        <Subheading>Android Ports</Subheading>
        <PortfolioBody>
          <div class="flex flex-col gap-2">
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-2">
              <WhiteLinkButton text="Otto Matic" link="https://github.com/LachlanBWWright/OttoMatic-Android" />
              <WhiteLinkButton text="Billy Frontier" link="https://github.com/LachlanBWWright/BillyFrontier-Android" />
              <WhiteLinkButton text="Bugdom" link="https://github.com/LachlanBWWright/Bugdom-android" />
              <WhiteLinkButton text="Bugdom 2" link="https://github.com/LachlanBWWright/Bugdom2-Android" />
              <WhiteLinkButton text="Cro-Mag Rally" link="https://github.com/LachlanBWWright/CroMagRally-Android" />
              <WhiteLinkButton text="Mighty Mike" link="https://github.com/LachlanBWWright/MightyMike-Android" />
              <WhiteLinkButton text="Nanosaur" link="https://github.com/LachlanBWWright/Nanosaur-android" />
              <WhiteLinkButton text="Nanosaur 2" link="https://github.com/LachlanBWWright/Nanosaur2-Android" />
            </div>
            <li>A collection of games from Pangea Software ported to Android using asynchronous coding agents.</li>
          </div>
          <div class="flex flex-col">
            <Carousel images={androidImages} duration={0} class="h-64" bind:index={androidIndex}>
              {#snippet slide({ index, Slide })}
                <Slide image={androidImages[index]} fit="contain" class="h-full" />
              {/snippet}
              <Controls />
            </Carousel>
            <Thumbnails
              images={androidImages}
              bind:index={androidIndex}
              class="mt-4 gap-3 bg-transparent h-[68px] py-1 overflow-x-auto overflow-y-hidden"
            >
              {#snippet children({ image, selected, Thumbnail })}
                <Thumbnail
                  {selected}
                  {...image}
                  class="h-full w-[100px] object-cover flex-none rounded-md shadow-xl {selected ? 'ring-2 ring-blue-500' : ''}"
                />
              {/snippet}
            </Thumbnails>
          </div>
        </PortfolioBody>
      </PortfolioCard>

      <!-- Online Exam System -->
      <PortfolioCard>
        <Subheading>Online Exam System</Subheading>
        <PortfolioBody>
          <div class="flex flex-col gap-2">
            <WhiteLinkButton text="Repository" link="https://github.com/LachlanBWWright/T1-Online-Exam-System" />
            <li>Created a mock website for the online invigilation of exams.</li>
            <li>Used NextJS, tRPC, Prisma, Tailwind CSS, NextAuthJS libraries.</li>
            <li>Made comprehensive contributions across the entire technological stack.</li>
            <li>Provided advice, feedback, guidance, and performed code reviews in a collaborative environment.</li>
          </div>
          <div class="flex flex-col">
            <Carousel images={examImages} duration={0} class="h-64" bind:index={examIndex}>
              {#snippet slide({ index, Slide })}
                <Slide image={examImages[index]} fit="contain" class="h-full" />
              {/snippet}
              <Controls />
            </Carousel>
            <Thumbnails
              images={examImages}
              bind:index={examIndex}
              class="mt-4 gap-3 bg-transparent h-[68px] py-1 overflow-x-auto overflow-y-hidden"
            >
              {#snippet children({ image, selected, Thumbnail })}
                <Thumbnail
                  {selected}
                  {...image}
                  class="h-full w-[100px] object-cover flex-none rounded-md shadow-xl {selected ? 'ring-2 ring-blue-500' : ''}"
                />
              {/snippet}
            </Thumbnails>
          </div>
        </PortfolioBody>
      </PortfolioCard>

      <!-- Deal Scanner -->
      <PortfolioCard>
        <Subheading>Deal Scanner</Subheading>
        <PortfolioBody>
          <div class="flex flex-col gap-2">
            <WhiteLinkButton text="Repository" link="https://github.com/LachlanBWWright/LBWW-Deal-Scanner" />
            <li>Developed a NodeJS-based application written in TypeScript, utilising Puppeteer, Axios, and Mongoose NPM packages.</li>
            <li>Collected information from retailers with Puppeteer and Axios, sending a chat-app notification if a deal is found.</li>
            <li>Utilised MongoDB to store search queries for specific retailers, to be automatically scanned periodically.</li>
          </div>
          <div class="flex flex-col">
            <Carousel images={dealsImages} duration={0} class="h-64" bind:index={dealsIndex}>
              {#snippet slide({ index, Slide })}
                <Slide image={dealsImages[index]} fit="contain" class="h-full" />
              {/snippet}
              <Controls />
            </Carousel>
            <Thumbnails
              images={dealsImages}
              bind:index={dealsIndex}
              class="mt-4 gap-3 bg-transparent h-[68px] py-1 overflow-x-auto overflow-y-hidden"
            >
              {#snippet children({ image, selected, Thumbnail })}
                <Thumbnail
                  {selected}
                  {...image}
                  class="h-full w-[100px] object-cover flex-none rounded-md shadow-xl {selected ? 'ring-2 ring-blue-500' : ''}"
                />
              {/snippet}
            </Thumbnails>
          </div>
        </PortfolioBody>
      </PortfolioCard>

      <!-- LBWW Mafia -->
      <PortfolioCard>
        <Subheading>LBWW Mafia</Subheading>
        <PortfolioBody>
          <div class="flex flex-col gap-2">
            <WhiteLinkButton text="Repository" link="https://github.com/LachlanBWWright/LBWW-Mafia" />
            <li>Created an online chat-based game built with a MERN stack, alongside a React Native app as an alternate frontend.</li>
            <li>Used TypeScript and Bootstrap to construct the MERN Stack, and TypeScript to construct the React Native application.</li>
            <li>Constructed an object-oriented backend for handling game logic, making use of polymorphism.</li>
            <li>Implemented the SocketIO package for handling user-server communication using WebSocket connections.</li>
            <li>Utilised ReCAPTCHA V3 verification and interfaced with a MongoDB Database using Mongoose.</li>
          </div>
          <div class="flex flex-col">
            <Carousel images={mafiaImages} duration={0} class="h-64" bind:index={mafiaIndex}>
              {#snippet slide({ index, Slide })}
                {#if mafiaImages[index].iframe}
                  <iframe
                    class="w-full h-full"
                    src={mafiaImages[index].src}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                {:else}
                  <Slide image={mafiaImages[index]} fit="contain" class="h-full" />
                {/if}
              {/snippet}
              <Controls />
            </Carousel>
            <Thumbnails
              images={mafiaImages}
              bind:index={mafiaIndex}
              class="mt-4 gap-3 bg-transparent h-[68px] py-1 overflow-x-auto overflow-y-hidden"
            >
              {#snippet children({ image, selected, Thumbnail }: { image: SlideImage; selected: boolean; Thumbnail: any })}
                {#if image.iframe}
                  <Thumbnail
                    src={image.thumb}
                    selected={selected}
                    class="h-full w-[100px] object-cover flex-none rounded-md shadow-xl {selected ? 'ring-2 ring-blue-500' : ''}"
                  />
                {:else}
                  <Thumbnail
                    {selected}
                    {...image}
                    class="h-full w-[100px] object-cover flex-none rounded-md shadow-xl {selected ? 'ring-2 ring-blue-500' : ''}"
                  />
                {/if}
              {/snippet}
            </Thumbnails>
          </div>
        </PortfolioBody>
      </PortfolioCard>

      <!-- Public Transport App -->
      <PortfolioCard>
        <Subheading>Public Transport App</Subheading>
        <PortfolioBody>
          <div class="flex flex-col gap-2">
            <WhiteLinkButton text="Repository" link="https://github.com/LachlanBWWright/Flutter_Timetable" />
            <li>Developed a mobile application for viewing public transportation timetables in NSW.</li>
            <li>Developed interfaces with Transport for NSW's OpenData API.</li>
          </div>
          <div class="flex flex-col">
            <Carousel images={timetableImages} duration={0} class="h-64" bind:index={timetableIndex}>
              {#snippet slide({ index, Slide })}
                <Slide
                  image={timetableImages[index]}
                  fit="contain"
                  class="h-full {timetableImages[index].class}"
                />
              {/snippet}
              <Controls />
            </Carousel>
            <Thumbnails
              images={timetableImages}
              bind:index={timetableIndex}
              class="mt-4 gap-3 bg-transparent h-[68px] py-1 overflow-x-auto overflow-y-hidden"
            >
              {#snippet children({ image, selected, Thumbnail })}
                <Thumbnail
                  {selected}
                  {...image}
                  class="h-full w-[100px] object-cover flex-none rounded-md shadow-xl {selected ? 'ring-2 ring-blue-500' : ''}"
                />
              {/snippet}
            </Thumbnails>
          </div>
        </PortfolioBody>
      </PortfolioCard>

    </div>
  </Card>
</div>
