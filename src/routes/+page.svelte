<script>
    import Navbar from "$lib/navbar/Navbar.svelte";
    const randomArray = [2,3,4,5];
</script>

<Navbar/>

{#each randomArray as item}
    <p>{item}</p>
{/each}



