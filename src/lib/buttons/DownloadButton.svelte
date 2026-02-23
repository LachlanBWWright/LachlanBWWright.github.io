<script lang="ts">
  interface Props {
    link: string;
    text: string;
    downloadName: string;
  }

  let { link, text, downloadName }: Props = $props();
</script>

<a class="p-1 w-full" href={link} download={downloadName}>
  <div
    class="bg-primary hover:bg-primary/80 shadow-sm hover:shadow-lg transition-all p-1 rounded-lg"
  >
    <div
      class="flex flex-row text-white rounded-1 max-h-52 align-middle justify-center gap-2 text-2xl lg:text-4xl"
    >
      <p>{text}</p>
    </div>
  </div>
</a>
