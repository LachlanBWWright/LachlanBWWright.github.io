<script>
  import Heading from "$lib/headers/Heading.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import BaseList from "$lib/lists/BaseList.svelte";
  import ListSectionHeader from "$lib/lists/ListSectionHeader.svelte";
  import Card from "$lib/cards/Card.svelte";
</script>

<div id="competencies" class="flex flex-col gap-1">
  <Heading>Competencies</Heading>
  <Card>
    <Subheading>Languages</Subheading>
    <ListSectionHeader>Programming Languages</ListSectionHeader>
    <BaseList>
      <li>TypeScript / Javascript</li>
      <li>Java / Kotlin</li>
      <li>Dart</li>
      <li>Python</li>
      <li>C</li>
    </BaseList>
    <br />
    <ListSectionHeader>Other Languages</ListSectionHeader>
    <BaseList>
      <li>HTML</li>
      <li>CSS</li>
      <li>SQL (PostgreSQL)</li>
    </BaseList>
    <Subheading>Frameworks, Libraries, Software</Subheading>

    <ListSectionHeader>Frontend Frameworks</ListSectionHeader>
    <BaseList>
      <li>ReactJS</li>
      <BaseList>
        <li>Meta-Frameworks</li>
        <BaseList>
          <li>NextJS</li>
        </BaseList>
        <li>State Management</li>
        <BaseList>
          <li>Jotai</li>
          <li>Immer</li>
          <li>TanStack Query (React Query)</li>
        </BaseList>
        <li>Other Libraries</li>
        <BaseList>
          <li>ReCharts</li>
          <li>Quill</li>
          <li>React-Bootstrap</li>
        </BaseList>
      </BaseList>
      <li>Svelte</li>
      <BaseList>
        <li>Meta-Frameworks</li>
        <BaseList>
          <li>SvelteKit</li>
        </BaseList>
      </BaseList>
    </BaseList>

    <br />

    <ListSectionHeader>Frontend Libraries</ListSectionHeader>
    <BaseList>
      <li>Pyodide</li>
      <li>TailwindCSS</li>
      <li>Bootstrap</li>
    </BaseList>

    <br />

    <ListSectionHeader>Database Management</ListSectionHeader>
    <BaseList>
      <li>Prisma</li>
      <li>Mongoose (MongoDB)</li>
      <li>ExpressJS</li>
    </BaseList>

    <br />

    <ListSectionHeader>Testing, Integration, and Deployment</ListSectionHeader>
    <BaseList>
      <li>Cypress</li>
      <li>GitHub Actions</li>
      <li>Heroku</li>
    </BaseList>

    <br />

    <ListSectionHeader>Software</ListSectionHeader>
    <BaseList>
      <li>Visual Studio Code</li>
      <li>IntelliJ</li>
      <li>TensorFlow</li>
      <li>MATLAB</li>
    </BaseList>
  </Card>
</div>
