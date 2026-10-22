<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<h2
  class="text-3xl sm:text-4xl lg:text-5xl font-semibold pb-4 text-white"
>
  {@render children?.()}
</h2>
