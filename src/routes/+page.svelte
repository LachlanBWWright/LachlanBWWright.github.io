<script>
  import Navbar from "$lib/sections/navbar/Navbar.svelte";
  import Header from "$lib/sections/header/Header.svelte";
  import Competencies from "$lib/sections/competencies/Competencies.svelte";
  import Experience from "$lib/sections/experience/Experience.svelte";
  import Portfolio from "$lib/sections/portfolio/Portfolio.svelte";
  import Resume from "$lib/sections/resume/Resume.svelte";
  import AcademicRecord from "$lib/sections/academicRecord/AcademicRecord.svelte";
</script>

<div
  class="bg-black min-h-screen text-white items-center flex flex-col font-mono pb-16"
>
  <Navbar />
  <div class="max-w-[1300px] w-full px-2 sm:px-4">
    <Header />
    <br />
    <Competencies />
    <br />
    <Experience />
    <br />
    <Portfolio />
    <br />
    <Resume />
    <br />
    <AcademicRecord />
  </div>
</div>
