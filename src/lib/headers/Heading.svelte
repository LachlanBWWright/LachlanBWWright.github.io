<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<p class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center">
  {@render children?.()}
</p>
