<script>
  import Heading from "$lib/headers/Heading.svelte";
  import ListSectionHeader from "$lib/lists/ListSectionHeader.svelte";
  import BaseList from "$lib/lists/BaseList.svelte";
</script>

<div id="academic-record" class="flex flex-col gap-1">
  <Heading>Academic Record</Heading>
  <ListSectionHeader
    >Bachelor of Engineering (Honours) (Software Major)</ListSectionHeader
  >
  <p class="text-md italic">University of Technology Sydney</p>
  <a
    class="underline text-blue-600 visited:text-violet-800 hover:text-violet-800"
    href="/AcademicRecord.pdf"
    download="Lachlan Wright - Academic Transcript"
    >Download Academic Transcript</a
  >

  <p>Average Results</p>
  <BaseList>
    <li>Grade Point Average: 6.47/7.00</li>
    <li>Weighted Average Mark (WAM): 85.97%</li>
  </BaseList>
  <p>Subject Highlights</p>
  <BaseList>
    <li>Applications Programming: 92%</li>
    <li>Data Structures and Algorithms: 98%</li>
    <li>Software Engineering Studio 1A: 96%</li>
    <li>Software Engineering Studio 1B: 91%</li>
    <li>Introduction to Data Analytics: 89%</li>
    <li>Secure Programming and Penetration Testing: 91%</li>
    <li>Software Development Studio: 98%</li>
    <li>Software Architecture: 95%</li>
    <li>Software Design Studio: 84%</li>
    <li>Software Innovation Studio: 87%</li>
    <li>Engineering Capstone: High Distinction (Not Graded)</li>
  </BaseList>
</div>
