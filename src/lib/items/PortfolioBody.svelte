<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="portfolio-body">
  {@render children?.()}
</div>

<style>
  .portfolio-body {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
    gap: var(--text-carousel-gap);
  }

  @media (max-width: 1023px) {
    .portfolio-body { grid-template-columns: minmax(0, 1fr); }
  }
</style>
