<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<h3 class="text-white font-bold text-xl sm:text-2xl">
  {@render children?.()}
</h3>
