<script lang="ts">
  interface TechItem {
    name: string;
    svg: string;
    info?: string;
  }

  interface Props {
    items: TechItem[];
  }

  let { items }: Props = $props();
</script>

<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-2">
  {#each items as item}
    <div class="relative aspect-square flex flex-col items-center justify-center gap-3 bg-gray-800 dark:bg-gray-700 rounded-lg group">
      <div class="w-16 h-16 [&>svg]:w-16 [&>svg]:h-16 [&>svg]:fill-white">
        {@html item.svg}
      </div>
      <span class="text-white text-base font-semibold text-center leading-tight px-2">{item.name}</span>

      {#if item.info}
        <div class="absolute top-2 right-2 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center cursor-default">
          <span class="text-white text-[10px] font-bold leading-none">i</span>
        </div>

        <div class="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-48 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10">
          {item.info}
          <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      {/if}
    </div>
  {/each}
</div>
