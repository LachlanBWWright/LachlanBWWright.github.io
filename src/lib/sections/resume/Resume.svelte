<script lang="ts">
  import DownloadButton from "$lib/buttons/DownloadButton.svelte";
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import Heading from "$lib/headers/Heading.svelte";
  import Card from "$lib/cards/Card.svelte";
</script>

<div id="resume" class="flex flex-col gap-2 items-center">
  <Heading>Resume</Heading>
  <Card>
    <div class="grid p-1 grid-cols-1 gap-1">
      <img
        src="/Resume-Page-1.jpg"
        alt="Resume Page 1"
        class="w-full h-auto max-h-[500px] object-contain"
      />
    </div>
    <DownloadButton
      text="Download PDF"
      link="/Resume.pdf"
      downloadName="Lachlan Wright - Resume">💾</DownloadButton
    >
  </Card>
</div>
