<script>
  import Heading from "$lib/headers/Heading.svelte";
  import Card from "$lib/cards/Card.svelte";
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
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
            <td colspan="2" class="font-bold text-xl text-white pb-2"
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
      <WhiteLinkButton
        link="/AcademicRecord.pdf"
        text="Download Academic Transcript"
      />
    </div>
  </Card>
</div>
