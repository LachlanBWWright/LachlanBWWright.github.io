<script lang="ts">
    export let link;
    export let text;
</script>

<div class="p-1 w-full h-full">
    <div class="bg-gray-500 p-2 rounded-lg">
        <a class="bg-gray-500 text-white rounded-1" href={link}>
            <p>{text}</p>
        </a>
    </div>
</div>