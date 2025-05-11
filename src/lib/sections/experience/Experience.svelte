<script>
  import Heading from "$lib/headers/Heading.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import BaseList from "$lib/lists/BaseList.svelte";
  import ListSectionDateHeader from "$lib/lists/ListSectionDateHeader.svelte";
</script>

<div id="experience" class="flex flex-col gap-1">
  <Heading>Experience</Heading>
  <Subheading>Employment</Subheading>
  <div>
    <ListSectionDateHeader>
      <p>Proactive Services Team Member (Casual Employment)</p>
      <p>(Sep 2022 - December 2024)</p>
    </ListSectionDateHeader>
    <p>Woolworths - Leura, NSW</p>
  </div>
  <BaseList>
    <li>Exhibited strong dedication and consistent performance.</li>
  </BaseList>

  <br />

  <div>
    <ListSectionDateHeader>
      <p>Full Stack Developer</p>
      <p>(Nov 2023 - Present)</p>
    </ListSectionDateHeader>
    <p>Chaos1 - Sydney, NSW</p>
  </div>
  <BaseList>
    <li>Developed a website utilising ReactJS a MERN stack.</li>
    <li>
      Used Jotai, Immer, and Tanstack Query (React Query) libraries for state
      management.
    </li>
    <li>
      Used TailwindCSS for styling, and Quill for text-input functionality.
    </li>
    <li>Continued development from an existing codebase.</li>
    <li>Provided mentoring and feedback for team members.</li>
    <li>
      Implemented a testing suite using end-to-end with Cypress, automatically
      run before integration using GitHub Actions.
    </li>
  </BaseList>

  <br />

  <Subheading>Education</Subheading>
  <div>
    <ListSectionDateHeader>
      <p>Bachelor of Engineering (Software Engineering Major)</p>
      <p>(Feb 2020 - November 2024)</p>
    </ListSectionDateHeader>
    <p>University of Technology, Sydney - Sydney, NSW</p>
  </div>
  <BaseList>
    <li>Attained a total of 147 Credit Points.</li>
    <li>
      Achieved a Weighted Average Mark of 85.62%, and a distinction-level Grade
      Point Average of 6.41/7.00.
    </li>
    <li>
      Obtained position on the 2022 Dean’s List, met requirements for pending
      2023 Dean’s List.
    </li>
  </BaseList>

  <br />

  <Subheading>Certifications</Subheading>
  <div>
    <ListSectionDateHeader>
      <p>Azure Fundamentals</p>
      <p>(Jul 2021)</p>
    </ListSectionDateHeader>
    <p>Microsoft</p>
  </div>
  <BaseList>
    <li>
      Demonstrated foundational knowledge of cloud services and how those
      services are provided with Microsoft Azure.
    </li>
  </BaseList>
</div>
