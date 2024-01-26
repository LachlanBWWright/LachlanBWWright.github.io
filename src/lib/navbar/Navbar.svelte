<script lang="ts">
    export let test: number;
    let selectedValue = 0;
</script>

<div class='sticky top-0 flex flex-row gap-2 p-1 w-full bg-gray-900 text-white text-2xl'>
    <a class="hover:text-white" href="#test">Test</a>
    <a class="hover:text-white" href="#test">Test</a>
    <a class="hover:text-white" href="#test">Test</a>
    <a class="hover:text-white" href="#test">Test</a>
    {test}
</div>