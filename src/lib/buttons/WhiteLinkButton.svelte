<script lang="ts">
  export let link: string;
  export let text: string;
</script>

<a class="p-1 w-full h-full" href="{link}">
  <div
    class="bg-gray-500 hover:bg-gray-600 shadow-sm hover:shadow-lg transition-all p-2 rounded-lg"
  >
    <div
      class="flex flex-row text-white rounded-1 max-h-52 align-middle justify-center gap-2 text-2xl"
    >
      <slot />
      <p>{text}</p>
    </div>
  </div>
</a>
