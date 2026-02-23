<script lang="ts">
  import { onMount } from "svelte";
  import { getCurrentSection, sections } from "$lib/utils/scrollUtils";

  let scrollProgress = $state(0);
  let activeSectionIndex = $state(0);
  let completedSections = $state(0);

  let activeSectionProgress = $state(0);

  // helper for scrolling to a section (mirrors Navbar behaviour)
  function scrollToSection(target: string) {
    const anchor = document.getElementById(target);
    if (!anchor) return;
    const navbarRef = document.getElementById("navbar");
    window.scrollTo({
      top: anchor.offsetTop - (navbarRef?.clientHeight ?? 32),
      behavior: "smooth",
    });
  }

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = Math.min((scrollTop / docHeight) * 100, 100);

    // Use the same logic as navbar to determine active section
    const currentSection = getCurrentSection();
    activeSectionIndex = sections.indexOf(currentSection);

    // Special handling for edge cases
    if (scrollTop === 0) {
      // At the very top - header is completed and active
      activeSectionIndex = 0;
      completedSections = 1; // Header is completed
      activeSectionProgress = 100; // Header shows as fully filled
      return;
    }

    if (window.innerHeight + scrollTop >= document.body.offsetHeight - 10) {
      // At the very bottom - all sections completed, academic-record fully filled
      completedSections = sections.length;
      activeSectionIndex = sections.length - 1;
      activeSectionProgress = 100;
      return;
    }

    // Determine completed sections based on active section
    completedSections = activeSectionIndex;

    // Calculate progress within the current active section
    const activeElement = document.getElementById(currentSection);
    if (activeElement) {
      const elementTop = activeElement.offsetTop;
      const elementHeight = activeElement.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate how far we are through this section
      const sectionStart = elementTop - viewportHeight / 2;
      const sectionEnd = elementTop + elementHeight - viewportHeight / 2;
      const sectionProgress = Math.max(
        0,
        Math.min(1, (scrollTop - sectionStart) / (sectionEnd - sectionStart)),
      );

      activeSectionProgress = sectionProgress * 100;
    } else {
      activeSectionProgress = 0;
    }
  }

  onMount(() => {
    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  });
</script>

<div class="sticky top-1/2 transform -translate-y-1/2 self-start">
  <div class="flex flex-col items-center space-y-3">
    {#each sections as section, index}
      {@const isActive = index === activeSectionIndex}
      {@const isCompleted = index < completedSections}
      {@const height = isActive ? "h-16" : "h-8"}
      {@const width = isActive ? "w-2" : "w-1"}

      <button
        type="button"
        aria-label={section}
        onclick={() => scrollToSection(section)}
        class="transition-all duration-500 ease-out {width} {height} rounded-full overflow-hidden relative cursor-pointer focus:outline-none"
      >
        {#if isActive}
          <!-- Active section: grey background with blue fill from top to bottom -->
          <div class="w-full h-full bg-gray-500 rounded-full"></div>
          <div
            class="absolute top-0 w-full bg-primary rounded-t-full transition-all duration-300 ease-out"
            style="height: {activeSectionProgress}%; border-radius: 0 0 9999px 9999px;"
          ></div>
        {:else if isCompleted}
          <!-- Completed sections: fully filled -->
          <div class="w-full h-full bg-primary rounded-full"></div>
        {:else}
          <!-- Not reached sections: grey -->
          <div class="w-full h-full bg-gray-500 rounded-full"></div>
        {/if}
      </button>
    {/each}
  </div>
</div>
