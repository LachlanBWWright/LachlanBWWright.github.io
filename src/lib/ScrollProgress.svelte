<script lang="ts">
  import { sections } from "$lib/utils/scrollUtils";
  import { createSectionScrollState } from "$lib/utils/sectionScrollState.svelte";

  const sectionLabels: Record<string, string> = {
    header: "Profile",
    competencies: "Competencies",
    experience: "Experience",
    portfolio: "Portfolio",
    resume: "Resume",
    "academic-record": "Records",
  };

  const sectionScroll = createSectionScrollState();
</script>

<div class="sticky top-1/2 transform -translate-y-1/2 self-start">
  <div
    class="relative flex h-64 flex-col items-center justify-between rounded-full bg-white/15 px-1 py-4"
  >
    {#each sections as section, index}
      {@const isActive = index === sectionScroll.activeSectionIndex}
      {@const isCompleted = index < sectionScroll.completedSections}

      <button
        type="button"
        aria-label={section}
        onclick={() => sectionScroll.scrollToSection(section)}
        class="group relative flex h-10 w-5 items-center justify-center overflow-visible rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span
          class="pointer-events-none absolute right-7 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-primary px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          {sectionLabels[section]}
        </span>

        <div
          class={isActive
            ? "relative h-10 w-2 overflow-hidden rounded-full bg-white transition-all duration-300 ease-out"
            : isCompleted
              ? "relative h-3 w-3 overflow-hidden rounded-full bg-primary transition-all duration-300 ease-out"
              : "relative h-3 w-3 overflow-hidden rounded-full bg-white/80 transition-all duration-300 ease-out group-hover:bg-white"}
        >
          {#if isActive}
            <div
              class="absolute top-0 w-full bg-primary transition-all duration-300 ease-out"
              style="height: {sectionScroll.activeSectionProgress}%; border-radius: 0 0 9999px 9999px;"
            ></div>
          {/if}
        </div>
      </button>
    {/each}
  </div>
</div>
