<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="grid gap-2 grid-cols-1 xl:grid-cols-2 items-stretch">
  {@render children?.()}
</div>
