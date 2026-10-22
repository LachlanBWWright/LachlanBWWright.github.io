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
  class="bg-background min-h-screen text-white items-center flex flex-col pb-16 text-lg"
>
  <Navbar />
  <div class="flex flex-row max-w-[1300px] w-full px-2 sm:px-4 gap-3">
    <main class="min-w-0 flex-1 flex flex-col gap-20 sm:gap-32">
      <Header />

      <Experience />

      <Competencies />

      <Portfolio />

      <Resume />

      <AcademicRecord />
    </main>
    <!-- sidebar column: fixed width, prevents overlap -->
    <div class="hidden sm:flex w-4 flex-none justify-center">
      <ScrollProgress />
    </div>
  </div>
</div>
