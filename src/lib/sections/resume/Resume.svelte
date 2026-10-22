<script lang="ts">
  import DownloadButton from "$lib/buttons/DownloadButton.svelte";
  import Heading from "$lib/headers/Heading.svelte";
  import Card from "$lib/cards/Card.svelte";
</script>

<div id="resume" class="flex flex-col gap-2">
  <Heading>Resume</Heading>
  <Card>
    <img
      src="/Resume-Page-1.jpg"
      alt="Resume Page 1"
      class="w-full h-auto max-h-[1000px] object-contain"
      loading="lazy"
    />
  </Card>
  <DownloadButton
    text="Download resume PDF"
    link="/Resume.pdf"
    downloadName="Lachlan Wright - Resume"
  />
</div>
