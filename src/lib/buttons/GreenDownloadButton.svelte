<script lang="ts">
  export let link: string;
  export let text: string;
  export let downloadName: string;
</script>

<div class="p-1">
  <a class="w-full h-full" href="{link}" download="{downloadName}">
    <div
      class="bg-green-500 hover:bg-green-600 shadow-sm hover:shadow-lg transition-all p-2 rounded-lg"
    >
      <div
        class="flex flex-row text-white rounded-1 max-h-52 align-middle justify-center gap-2 text-2xl"
      >
        <slot />
        <p>{text}</p>
      </div>
    </div>
  </a>
</div>
