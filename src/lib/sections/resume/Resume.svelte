<script lang="ts">
  import GreenDownloadButton from "$lib/buttons/GreenDownloadButton.svelte";
  import Heading from "$lib/headers/Heading.svelte";
</script>

<div id="resume" class="flex flex-col gap-2">
  <Heading>Resume</Heading>
  <div class="rounded-xl bg-gray-800 p-4">
    <div class="grid p-1 grid-cols-1 sm:grid-cols-2 gap-1">
      <img src="/Resume-Page-1.jpg" alt="Resume Page 1" class="w-full h-auto" />
      <img
        src="/Resume-Page-1.jpg"
        alt="Resume Page 2"
        class="w-full h-auto hidden sm:block"
      />
    </div>
    <GreenDownloadButton
      text="Download PDF"
      link="/Resume.pdf"
      downloadName="Lachlan Wright - Resume">💾</GreenDownloadButton
    >
  </div>
</div>
