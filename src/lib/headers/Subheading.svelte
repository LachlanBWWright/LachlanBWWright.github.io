<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<p class="text-white font-bold text-2xl text-center">
  {@render children?.()}
</p>
