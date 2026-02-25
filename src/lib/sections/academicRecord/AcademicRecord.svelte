<script lang="ts">
  import Heading from "$lib/headers/Heading.svelte";
  import Card from "$lib/cards/Card.svelte";
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import { Carousel, Slide, Controls, Thumbnails } from "flowbite-svelte";

  const transcriptImages = [
    {
      src: "/academicRecord/Transcript_page-0001.jpg",
      alt: "Transcript page 1",
    },
    {
      src: "/academicRecord/Transcript_page-0002.jpg",
      alt: "Transcript page 2",
    },
    {
      src: "/academicRecord/Transcript_page-0003.jpg",
      alt: "Transcript page 3",
    },
    {
      src: "/academicRecord/Transcript_page-0004.jpg",
      alt: "Transcript page 4",
    },
    {
      src: "/academicRecord/Transcript_page-0005.jpg",
      alt: "Transcript page 5",
    },
  ];

  let transcriptIndex = $state(0);
</script>

<div id="academic-record" class="flex flex-col gap-3">
  <Heading>Academic Record</Heading>
  <Card>
    <div class="flex flex-col gap-1 items-start">
      <div class="w-full text-center text-xl pb-2">
        <Subheading>Bachelor of Engineering (Software, Honours)</Subheading>
      </div>
      <p class="w-full text-center text-white font-bold text-xl">
        University of Technology Sydney
      </p>
      <table class="min-w-full text-left border-separate border-spacing-y-1">
        <tbody>
          <tr>
            <td colspan="2" class="font-bold text-xl text-white pb-2"
              >Average Results</td
            >
          </tr>
          <tr>
            <td class="py-1 pr-4">Grade Point Average</td>
            <td class="py-1 pl-4 text-right">6.47/7.00</td>
          </tr>
          <tr>
            <td class="py-1 pr-4">Weighted Average Mark (WAM)</td>
            <td class="py-1 pl-4 text-right">85.97%</td>
          </tr>
          <tr>
            <td colspan="2" class="font-bold text-xl text-white pb-2 pt-4"
              >Subject Highlights</td
            >
          </tr>
          <tr>
            <td class="py-1 pr-4">Applications Programming</td>
            <td class="py-1 pl-4 text-right">92%</td>
          </tr>
          <tr>
            <td class="py-1 pr-4">Data Structures and Algorithms</td>
            <td class="py-1 pl-4 text-right">98%</td>
          </tr>
          <tr>
            <td class="py-1 pr-4">Software Engineering Studio 1A</td>
            <td class="py-1 pl-4 text-right">96%</td>
          </tr>
          <tr>
            <td class="py-1 pr-4">Software Engineering Studio 1B</td>
            <td class="py-1 pl-4 text-right">91%</td>
          </tr>
          <tr>
            <td class="py-1 pr-4">Introduction to Data Analytics</td>
            <td class="py-1 pl-4 text-right">89%</td>
          </tr>
          <tr>
            <td class="py-1 pr-4">Secure Programming and Penetration Testing</td
            >
            <td class="py-1 pl-4 text-right">91%</td>
          </tr>
          <tr>
            <td class="py-1 pr-4">Software Development Studio</td>
            <td class="py-1 pl-4 text-right">98%</td>
          </tr>
          <tr>
            <td class="py-1 pr-4">Software Architecture</td>
            <td class="py-1 pl-4 text-right">95%</td>
          </tr>
          <tr>
            <td class="py-1 pr-4">Software Design Studio</td>
            <td class="py-1 pl-4 text-right">84%</td>
          </tr>
          <tr>
            <td class="py-1 pr-4">Software Innovation Studio</td>
            <td class="py-1 pl-4 text-right">87%</td>
          </tr>
          <tr>
            <td class="py-1 pr-4">Engineering Capstone</td>
            <td class="py-1 pl-4 text-right">High Distinction</td>
          </tr>
        </tbody>
      </table>
      <div class="flex flex-col w-full">
        <div class="transcript-carousel">
          <Carousel
            images={transcriptImages}
            duration={0}
            bind:index={transcriptIndex}
          >
            {#snippet slide({ index, Slide })}
              <Slide image={transcriptImages[index]} fit="contain" />
            {/snippet}
            <Controls />
          </Carousel>
        </div>
        <Thumbnails
          images={transcriptImages}
          bind:index={transcriptIndex}
          class="mt-4 gap-3 bg-transparent h-[130px] py-1 overflow-x-auto overflow-y-hidden"
        >
          {#snippet children({ image, selected, Thumbnail })}
            <Thumbnail
              {selected}
              {...image}
              class="h-full w-[100px] object-cover flex-none rounded-md shadow-xl {selected
                ? 'ring-2 ring-blue-500'
                : ''}"
            />
          {/snippet}
        </Thumbnails>
      </div>
      <div class="flex flex-col sm:flex-row sm:items-center w-full gap-3 mt-4">
        <WhiteLinkButton
          link="https://www.myequals.net/sharelink/52d0c82d-0fd7-42f3-b731-a812c53474bb/33d1cd47-f984-40ca-9652-5e5054981b1d"
          text="View Transcript"
        />
        <WhiteLinkButton
          link="https://www.myequals.net/sharelink/downloaddoc/52d0c82d-0fd7-42f3-b731-a812c53474bb/33d1cd47-f984-40ca-9652-5e5054981b1d"
          text="Download Transcript"
        />
      </div>
    </div>
  </Card>
</div>

<style>
  .transcript-carousel :global(.grid) {
    height: 1000px;
  }
</style>
