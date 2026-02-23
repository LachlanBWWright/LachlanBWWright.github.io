<script lang="ts">
  interface Props {
    link: string;
    text: string;
  }

  let { link, text }: Props = $props();
</script>

<a class="p-1 w-full" href={link}>
  <div
    class="bg-primary hover:bg-primary/80 shadow-sm hover:shadow-lg transition-all p-2 rounded-lg"
  >
    <div
      class="flex flex-row text-white rounded-1 max-h-52 items-center justify-center gap-2 text-2xl lg:text-4xl"
    >
      <p>{text}</p>
    </div>
  </div>
</a>
