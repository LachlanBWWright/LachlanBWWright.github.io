<script>
  import Navbar from "$lib/sections/navbar/Navbar.svelte";
  import Header from "$lib/sections/header/Header.svelte";
  import Competencies from "$lib/sections/competencies/Competencies.svelte";
  import Experience from "$lib/sections/experience/Experience.svelte";
  import Portfolio from "$lib/sections/portfolio/Portfolio.svelte";
  import Resume from "$lib/sections/resume/Resume.svelte";
  import AcademicRecord from "$lib/sections/academicRecord/AcademicRecord.svelte";
  import ScrollProgress from "$lib/ScrollProgress.svelte";
</script>

<div
  class="bg-background min-h-screen text-white items-center flex flex-col pb-16 text-xl"
>
  <Navbar />
  <div class="flex flex-row max-w-[1300px] w-full px-2 sm:px-4 gap-3">
    <div class="flex-1 flex flex-col gap-40">
      <Header />

      <Competencies />

      <Experience />

      <Portfolio />

      <Resume />

      <AcademicRecord />
      <div class="pb-100"></div>
    </div>
    <!-- sidebar column: fixed width, prevents overlap -->
    <div class="w-4 flex-none flex justify-center">
      <ScrollProgress />
    </div>
  </div>
</div>
