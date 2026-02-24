<script>
  import Heading from "$lib/headers/Heading.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ListSectionHeader from "$lib/lists/ListSectionHeader.svelte";
  import ListSectionSubHeader from "$lib/lists/ListSectionSubHeader.svelte";
  import BaseList from "$lib/lists/BaseList.svelte";
  import Card from "$lib/cards/Card.svelte";
</script>

<div id="experience" class="flex flex-col gap-1">
  <Heading>Experience</Heading>
  <Card>
    <Subheading>Employment</Subheading>

    <div>
      <ListSectionHeader>
        Full Stack Developer (Nov 2023 - Feb 2026)
      </ListSectionHeader>
      <ListSectionSubHeader>Chaos1 - Sydney, NSW</ListSectionSubHeader>
    </div>
    <BaseList>
      <li>
        Developed a NextJS website in a team of 6 interns, before being hired
        for continued development.
      </li>
      <li>
        Utilised TailwindCSS and ShadCN components for efficient development and
        consistent interfaces.
      </li>
      <li>
        Contributed to a text editor utilising TipTap’s editor, and its live
        synchronisation with HocusPocus.
      </li>
      <li>
        Provided team members with technical mentoring, guidance, and code
        reviews.
      </li>
      <li>
        Implemented an end-to-end testing suite executed using Cypress and
        GitHub Actions.
      </li>
      <li>
        Developed an additional Flutter application with a Spring backend
        utilising Hibernate.
      </li>
      <li>
        Managed Google Cloud Platform services, including Cloud Build, Cloud
        Run, and Cloud SQL.
      </li>
    </BaseList>

    <br />

    <Subheading>Education</Subheading>
    <div>
      <ListSectionHeader>
        Bachelor of Engineering (Software, Honours) (Feb 2020 - November 2024)
      </ListSectionHeader>
      <ListSectionSubHeader
        >University of Technology, Sydney - Sydney, NSW</ListSectionSubHeader
      >
    </div>
    <BaseList>
      <li>Attained a total of 147 Credit Points.</li>
      <li>
        Achieved a Weighted Average Mark of 85.62%, and a distinction-level
        Grade Point Average of 6.41/7.00.
      </li>
      <li>
        Obtained position on the 2022 Dean’s List, met requirements for pending
        2023 Dean’s List.
      </li>
    </BaseList>

    <br />

    <Subheading>Certifications</Subheading>
    <div>
      <ListSectionHeader>Azure Fundamentals (Jul 2021)</ListSectionHeader>
      <ListSectionSubHeader>Microsoft</ListSectionSubHeader>
    </div>
    <BaseList>
      <li>
        Demonstrated foundational knowledge of cloud services and how those
        services are provided with Microsoft Azure.
      </li>
    </BaseList>
  </Card>
</div>
