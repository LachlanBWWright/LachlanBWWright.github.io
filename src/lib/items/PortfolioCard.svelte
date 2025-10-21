<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="flex flex-col gap-2 p-4">
  {@render children?.()}
</div>
