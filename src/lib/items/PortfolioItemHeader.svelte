<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="text-center text-xl text-white">
  {@render children?.()}
</div>
