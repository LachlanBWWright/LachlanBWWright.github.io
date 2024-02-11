<script lang="ts">
  export let link: string;
  export let text: string;
</script>

<div class="p-1 w-full h-full">
  <div class="bg-gray-500 p-2 rounded-lg">
    <a
      class="flex flex-row bg-gray-500 text-white rounded-1 max-h-52 align-middle justify-center gap-2 text-2xl"
      href="{link}"
    >
      <slot />
      <p>{text}</p>
    </a>
  </div>
</div>
