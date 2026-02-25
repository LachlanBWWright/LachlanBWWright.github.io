<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="grid grid-cols-[1fr_auto] text-base">
  {@render children?.()}
</div>
