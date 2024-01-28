<script>
    import Navbar from "$lib/navbar/Navbar.svelte";
    import Header from "$lib/header/Header.svelte";
    import Competencies from "$lib/competencies/Competencies.svelte";
    import Experience from "$lib/experience/Experience.svelte";
    import Portfolio from "$lib/portfolio/Portfolio.svelte";
    import Resume from "$lib/resume/Resume.svelte";
    import AcademicRecord from "$lib/academicRecord/AcademicRecord.svelte";
</script>

<div class="w-screen bg-black min-h-screen text-white">
    <Navbar/>
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




