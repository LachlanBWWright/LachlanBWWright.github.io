<script lang="ts">
  interface Props {
    link: string;
    text: string;
  }

  let { link, text }: Props = $props();
</script>

<a class="w-full focus:outline-blue-500 focus:outline-2 focus:overflow-visible" href={link}>
  <div
    class="bg-primary hover:bg-primary/80 shadow-sm hover:shadow-lg transition-all p-1 rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300/50 dark:hover:border-gray-600/50 transition-colors focus:outline-blue-500 focus:outline-2 focus:overflow-visible"
  >
    <div
      class="flex flex-row text-white rounded-1 max-h-52 items-center justify-center gap-2 text-2xl lg:text-4xl"
    >
      <p>{text}</p>
    </div>
  </div>
</a>
