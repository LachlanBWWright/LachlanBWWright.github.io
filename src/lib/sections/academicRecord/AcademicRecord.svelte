<script>
  import Heading from "$lib/headers/Heading.svelte";
  import ListSectionHeader from "$lib/lists/ListSectionHeader.svelte";
  import BaseList from "$lib/lists/BaseList.svelte";
  import GreenDownloadButton from "$lib/buttons/GreenDownloadButton.svelte";
</script>

<div id="academic-record" class="flex flex-col gap-1">
  <Heading>Academic Record</Heading>
  <ListSectionHeader
    >Bachelor of Engineering (Honours) (Software Major)</ListSectionHeader
  >
  <p class="text-md italic">University of Technology Sydney</p>

  <p>Average Results</p>
  <BaseList>
    <li>Grade Point Average: 6.41/7.00</li>
    <li>Weighted Average Mark (WAM): 85.62%</li>
  </BaseList>
  <p>Subject Highlights</p>
  <BaseList>
    <li>Placeholder</li>
    <li>Placeholder</li>
    <li>Placeholder</li>
    <li>Placeholder</li>
    <li>Placeholder</li>
    <li>Placeholder</li>
  </BaseList>
  <div class="fit w-fit">
    <GreenDownloadButton
      text="Download Transcript"
      link="/AcademicRecord.pdf"
      downloadName="Lachlan Wright - Academic Transcript"
      >💾</GreenDownloadButton
    >
  </div>
</div>
