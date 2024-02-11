<script>
  import BaseList from "$lib/lists/BaseList.svelte";
</script>

<div class="flex flex-col gap-1">
  <p class="text-3xl text-center">Competencies</p>
  <div class="grid grid-cols-1 gap-1">
    <div>
      <p class="text-2xl text-center">Languages</p>
      <p>Programming Languages</p>
      <BaseList>
        <li>TypeScript / Javascript</li>
        <li>Java / Kotlin</li>
        <li>Python</li>
        <li>C</li>
      </BaseList>
      <br />
      <p>Other Languages</p>
      <BaseList>
        <li>HTML</li>
        <li>CSS</li>
        <li>SQL (PostgreSQL)</li>
      </BaseList>
    </div>
    <div>
      <p class="text-2xl text-center">Frameworks, Libraries, Software</p>

      <p>Frameworks</p>
      <li>ReactJS</li>
      <BaseList>
        <li>NextJS</li>
        <li>Jotai</li>
        <li>Immer</li>
        <li>TanStack Query (React Query)</li>
        <li>ReCharts</li>
      </BaseList>
      <li>Svelte</li>
      <br />
      <li>Mongoose (MongoDB)</li>
      <li>ExpressJS</li>

      <br />
      <li>Pyodide</li>
      <li>Quill</li>
      <li>TailwindCSS</li>
      <li>Bootstrap</li>
      <br />
      <li>TensorFlow</li>
      <li>MATLAB</li>
      <br />
      <li>(DEPLOYMENT-RELATED COMPETENCIES)</li>
    </div>
  </div>
</div>
