<script>
    import Navbar from "$lib/navbar/Navbar.svelte";
    import Header from "$lib/header/Header.svelte";
    const randomArray = [
        2,3,4,5,
    ];
</script>

<div class="w-full bg-black min-h-screen text-white">
    <Navbar test={4}/>
    <Header/>

    
    {#each randomArray as item}
        <p class="text-white">{item}</p>
    {/each}
</div>




