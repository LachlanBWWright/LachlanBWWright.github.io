<script>
    let dropdownExpanded = false;

    function openDropdown() {
        dropdownExpanded = true;
    }

    function closeDropdown() {
        dropdownExpanded = false;
    }
</script>

<nav class='sticky top-0 flex flex-row items-center gap-4 p-1 w-full bg-[#222222] text-white text-md lg:text-xl xl:text-2xl'>
    {#if dropdownExpanded}
    <button class="sm:hidden aspect-square rounded-md border-2 px-2 border-white" on:click={closeDropdown}>=</button>
    {:else}
    <button class="sm:hidden aspect-square rounded-md border-2 px-2 border-white" on:click={openDropdown}>=</button>
    {/if}
    <a class="hover:text-blue-500 font-bold" href="#test">Lachlan Wright</a>
    <a class="hover:text-blue-500 hidden sm:block" href="#test">Competencies</a>
    <a class="hover:text-blue-500 hidden sm:block" href="#test">Experience</a>
    <a class="hover:text-blue-500 hidden sm:block" href="#test">Portfolio</a>
    <a class="hover:text-blue-500 hidden sm:block" href="#test">Resume</a>
    <a class="hover:text-blue-500 hidden sm:block" href="#test">Academic Record</a>
    {#if dropdownExpanded}
        <div class="flex flex-col absolute left-0 top-[37px] w-screen bg-[#333333] sm:hidden z-10">
            <a class="hover:text-blue-500 sm:block" href="#test">Competencies</a>
            <a class="hover:text-blue-500 sm:block" href="#test">Experience</a>
            <a class="hover:text-blue-500 sm:block" href="#test">Portfolio</a>
            <a class="hover:text-blue-500 sm:block" href="#test">Resume</a>
            <a class="hover:text-blue-500 sm:block" href="#test">Academic Record</a>
        </div>
    {/if}
</nav>