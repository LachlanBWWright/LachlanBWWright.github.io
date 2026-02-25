<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<p
  class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center pb-2 text-white"
>
  {@render children?.()}
</p>
