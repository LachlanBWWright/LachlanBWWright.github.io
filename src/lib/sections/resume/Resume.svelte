<script lang="ts">
  import GreenDownloadButton from "$lib/buttons/GreenDownloadButton.svelte";
  import Heading from "$lib/headers/Heading.svelte";
</script>

<div id="resume" class="flex flex-col gap-2 items-center">
  <Heading>Resume</Heading>
  <div class="rounded-xl bg-gray-800 p-4 max-w-xl">
    <div class="grid p-1 grid-cols-1 gap-1">
      <img src="/Resume-Page-1.jpg" alt="Resume Page 1" class="w-full h-auto" />
    </div>
    <GreenDownloadButton
      text="Download PDF"
      link="/Resume.pdf"
      downloadName="Lachlan Wright - Resume">💾</GreenDownloadButton
    >
  </div>
</div>
