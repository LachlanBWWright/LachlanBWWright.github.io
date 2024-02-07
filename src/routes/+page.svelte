<script>
    import Navbar from "$lib/sections/navbar/Navbar.svelte";
    import Header from "$lib/sections/header/Header.svelte";
    import Competencies from "$lib/sections/competencies/Competencies.svelte";
    import Experience from "$lib/sections/experience/Experience.svelte";
    import Portfolio from "$lib/sections/portfolio/Portfolio.svelte";
    import Resume from "$lib/sections/resume/Resume.svelte";
    import AcademicRecord from "$lib/sections/academicRecord/AcademicRecord.svelte";
</script>

<div class="bg-black min-h-screen text-white">
    <Navbar/>
    <div class="md:px-16 lg:px-32 xl:px-60 2xl:px-80">
        <Header/>
        <br/>
        <Competencies/>
        <br/>
         <Experience/>
        <br/>
       <Portfolio/>
        <br/>
        <Resume/>
        <br/>
        <AcademicRecord/>
    </div>
</div>




