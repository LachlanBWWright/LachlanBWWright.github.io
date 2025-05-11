<script lang="ts">
  interface Props {
    link: string;
    text: string;
    children?: import('svelte').Snippet;
  }

  let { link, text, children }: Props = $props();
</script>

<a class="p-1 w-full h-full" href="{link}">
  <div
    class="bg-gray-500 hover:bg-gray-600 shadow-sm hover:shadow-lg transition-all p-2 rounded-lg"
  >
    <div
      class="flex flex-row text-white rounded-1 max-h-52 align-middle justify-center gap-2 text-2xl"
    >
      {@render children?.()}
      <p>{text}</p>
    </div>
  </div>
</a>
