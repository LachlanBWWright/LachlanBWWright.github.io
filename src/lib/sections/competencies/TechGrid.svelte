<script lang="ts">
  interface TechItem {
    name: string;
    svg: string;
    info?: string;
  }
  interface Props { items: TechItem[]; }
  let { items }: Props = $props();
</script>

<ul class="tech-grid">
  {#each items as item}
    <li>
      {#if item.svg}
        <span class="tech-icon" aria-hidden="true">{@html item.svg}</span>
      {:else}
        <span class="tech-placeholder" aria-hidden="true"></span>
      {/if}
      <span>{item.name}</span>
      {#if item.info}<span class="sr-only">: {item.info}</span>{/if}
    </li>
  {/each}
</ul>

<style>
  .tech-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.65rem 1.5rem; margin-top: 0.75rem; }
  li { display: flex; align-items: center; gap: 0.75rem; min-width: 0; padding-block: 0.4rem; font-size: 1rem; line-height: 1.4; }
  .tech-icon { display: flex; width: 24px; height: 24px; flex: none; }
  .tech-icon :global(svg) { width: 100%; height: 100%; fill: var(--color-text-light); }
  .tech-placeholder { width: 24px; flex: none; }
  @media (max-width: 767px) { .tech-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.5rem 1rem; } li { font-size: 0.9rem; } }
</style>
