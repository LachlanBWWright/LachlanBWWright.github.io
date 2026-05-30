<script lang="ts">
  import { sections, type SectionId } from "$lib/utils/scrollUtils";
  import { createSectionScrollState } from "$lib/utils/sectionScrollState.svelte";

  //Buttons that appear on desktop view, but are hidden on mobile view
  let unselectedButton =
    "hover:font-bold transition-all duration-200 hidden sm:block transition";
  let selectedButton =
    "font-bold transition-all  hidden sm:block underline duration-200 transition";
  //Buttons that appear on mobile view (May be hidden by virtue of a hidden parent on desktop)
  let mobileUnselectedButton =
    "text-xl hover:font-bold transition-all duration-200 transition";
  let mobileSelectedButton =
    "text-xl font-bold transition-all underline duration-200 transition";

  const sectionScroll = createSectionScrollState();

  function handleNavbarClick(event: MouseEvent, target: SectionId) {
    event.preventDefault();
    sectionScroll.scrollToSection(target);
  }
</script>

<nav
  id="navbar"
  class={sectionScroll.scrolledToTop
    ? "hidden sm:flex sticky top-0 flex-row items-center gap-6 px-3 py-1 w-full bg-background shadow-none text-white text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl justify-center h-4 sm:h-16 transition duration-500 z-[60]"
    : "hidden sm:flex sticky top-0 flex-row items-center gap-6 px-3 py-1 w-full bg-primary shadow-2xl text-white text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl justify-center h-4 sm:h-16 transition duration-500 z-[60]"}
>
  <!-- mobile dropdown removed: show only centered thin progress bars on smallest breakpoint -->
  <button
    class={sectionScroll.activeSection === "header" ? selectedButton : unselectedButton}
    onclick={(e) => handleNavbarClick(e, "header")}>Profile</button
  >
  <button
    class={sectionScroll.activeSection === "competencies"
      ? selectedButton
      : unselectedButton}
    onclick={(e) => handleNavbarClick(e, "competencies")}>Competencies</button
  >
  <button
    class={sectionScroll.activeSection === "experience"
      ? selectedButton
      : unselectedButton}
    onclick={(e) => handleNavbarClick(e, "experience")}>Experience</button
  >
  <button
    class={sectionScroll.activeSection === "portfolio"
      ? selectedButton
      : unselectedButton}
    onclick={(e) => handleNavbarClick(e, "portfolio")}>Portfolio</button
  >
  <button
    class={sectionScroll.activeSection === "resume" ? selectedButton : unselectedButton}
    onclick={(e) => handleNavbarClick(e, "resume")}>Resume</button
  >
  <button
    class={sectionScroll.activeSection === "academic-record"
      ? selectedButton
      : unselectedButton}
    onclick={(e) => handleNavbarClick(e, "academic-record")}>Records</button
  >
  <!-- Mobile progress bars: thin horizontal bars that span full navbar width and fill left->right -->
  <div
    class="w-full flex sm:hidden items-center justify-center py-1 px-3 gap-1"
  >
    {#each sections as sec, index}
      {@const isActive = index === sectionScroll.activeSectionIndex}
      {@const isCompleted = index < sectionScroll.completedSections}
      <button
        aria-label={sec}
        onclick={(e) => handleNavbarClick(e, sec)}
        class="group h-2 rounded-full overflow-visible relative transition-all duration-300 ease-out"
        style="flex: {isActive ? '2 1 0%' : '1 1 0%'}"
      >
        <!-- background track -->
        <div class="absolute inset-0 bg-gray-500 rounded-full"></div>

        {#if isActive}
          <!-- active: left-to-right fill according to progress -->
          <div
            class="absolute left-0 top-0 bottom-0 bg-white rounded-full transition-all"
            style="width: {sectionScroll.activeSectionProgress}%"
          ></div>
        {:else if isCompleted}
          <!-- completed: fully filled -->
          <div class="absolute inset-0 bg-white rounded-full"></div>
        {/if}

        <span class="sr-only">{sec}</span>
      </button>
    {/each}
  </div>
  <!-- mobile dropdown removed -->
</nav>
