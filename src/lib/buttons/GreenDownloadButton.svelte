<script lang="ts">
  interface Props {
    link: string;
    text: string;
    downloadName: string;
    children?: import('svelte').Snippet;
  }

  let {
    link,
    text,
    downloadName,
    children
  }: Props = $props();
</script>

<div class="p-1">
  <a class="w-full h-full" href="{link}" download="{downloadName}">
    <div
      class="bg-green-500 hover:bg-green-600 shadow-sm hover:shadow-lg transition-all p-2 rounded-lg"
    >
      <div
        class="flex flex-row text-white rounded-1 max-h-52 align-middle justify-center gap-2 text-2xl"
      >
        {@render children?.()}
        <p>{text}</p>
      </div>
    </div>
  </a>
</div>
