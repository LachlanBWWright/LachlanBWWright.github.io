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
  class="bg-background min-h-screen text-white items-center flex flex-col pb-16 text-xl"
>
  <Navbar />
  <div class="flex flex-col max-w-[1300px] w-full px-2 sm:px-4 gap-40">
    <Header />

    <Competencies />

    <Experience />

    <Portfolio />

    <Resume />

    <AcademicRecord />
    <div class="pb-100"></div>
  </div>
</div>
