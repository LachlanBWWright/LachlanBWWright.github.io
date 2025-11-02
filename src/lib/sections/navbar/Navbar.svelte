<script lang="ts">
  import { onMount } from "svelte";
  import { getCurrentSection, sections } from "$lib/utils/scrollUtils";

  let baseButton = "transition duration-500";

  //Buttons that appear on desktop view, but are hidden on mobile view
  let unselectedButton =
    "hover:font-bold transition-all duration-200 hidden sm:block transition";
  let selectedButton =
    "font-bold transition-all  hidden sm:block underline duration-200 transition";
  //Buttons that appear on mobile view (May be hidden by virtue of a hidden parent on desktop)
  let mobileUnselectedButton =
    "text-2xl hover:font-bold transition-all duration-200 transition";
  let mobileSelectedButton =
    "text-2xl font-bold transition-all underline duration-200 transition";
  let currentPosition = $state("header"); //The current position of the page, used to determine which button should be highlighted

  // Progress state (for mobile thin bars)
  let activeSectionIndex = $state(0);
  let completedSections = $state(0);
  let activeSectionProgress = $state(0);

  let scrolledToTop = $state(true);

  function handleNavbarClick(event: MouseEvent, target: string) {
    event.preventDefault();
    const anchor = document.getElementById(target);
    if (!anchor) return;
    const navbarRef = document.getElementById("navbar");
    window.scrollTo({
      top: anchor.offsetTop - (navbarRef?.clientHeight ?? 32),
      behavior: "smooth",
    });
  }

  onMount(() => {
    const scrollFn = function () {
      const navbarRef = document.getElementById("navbar");
      const navbarHeight = navbarRef?.clientHeight ?? 32;

      if (window.scrollY === 0) scrolledToTop = true;
      else scrolledToTop = false;

      // Current section (shared logic)
      const currentSection = getCurrentSection(navbarHeight);
      currentPosition = currentSection;

      // Determine active/completed sections and progress within active section
      activeSectionIndex = sections.indexOf(currentSection);

      const scrollTop = window.scrollY;
      // Top of page
      if (scrollTop === 0) {
        activeSectionIndex = 0;
        completedSections = 1;
        activeSectionProgress = 100;
        return;
      }

      // Bottom of page
      if (window.innerHeight + scrollTop >= document.body.offsetHeight - 10) {
        completedSections = sections.length;
        activeSectionIndex = sections.length - 1;
        activeSectionProgress = 100;
        return;
      }

      completedSections = activeSectionIndex;

      const activeElement = document.getElementById(currentSection);
      if (activeElement) {
        const elementTop = activeElement.offsetTop;
        const elementHeight = activeElement.offsetHeight;
        const viewportHeight = window.innerHeight;

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
    };

    document.addEventListener("scroll", scrollFn, { passive: true });
    // initial run
    scrollFn();
    return () => document.removeEventListener("scroll", scrollFn);
  });
</script>

<nav
  id="navbar"
  class={scrolledToTop
    ? "sticky top-0 flex flex-row items-center gap-6 px-3 py-1 w-full bg-transparent shadow-2xl text-white text-lg sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl justify-center h-4 sm:h-16 transition duration-500 z-10"
    : "sticky top-0 flex flex-row items-center gap-6 px-3 py-1 w-full bg-primary shadow-2xl text-white text-lg sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl justify-center h-4 sm:h-16 transition duration-500 z-10"}
>
  <!-- mobile dropdown removed: show only centered thin progress bars on smallest breakpoint -->
  <button
    class={currentPosition === "header" ? selectedButton : unselectedButton}
    onclick={(e) => handleNavbarClick(e, "header")}>Profile</button
  >
  <button
    class={currentPosition === "competencies"
      ? selectedButton
      : unselectedButton}
    onclick={(e) => handleNavbarClick(e, "competencies")}>Competencies</button
  >
  <button
    class={currentPosition === "experience" ? selectedButton : unselectedButton}
    onclick={(e) => handleNavbarClick(e, "experience")}>Experience</button
  >
  <button
    class={currentPosition === "portfolio" ? selectedButton : unselectedButton}
    onclick={(e) => handleNavbarClick(e, "portfolio")}>Portfolio</button
  >
  <button
    class={currentPosition === "resume" ? selectedButton : unselectedButton}
    onclick={(e) => handleNavbarClick(e, "resume")}>Resume</button
  >
  <button
    class={currentPosition === "academic-record"
      ? selectedButton
      : unselectedButton}
    onclick={(e) => handleNavbarClick(e, "academic-record")}>Records</button
  >
  <!-- Mobile progress bars: thin horizontal bars that span full navbar width and fill left->right -->
  <div
    class="w-full flex sm:hidden items-center justify-center py-1 px-3 gap-1"
  >
    {#each sections as sec, index}
      {@const isActive = index === activeSectionIndex}
      {@const isCompleted = index < completedSections}
      <button
        aria-label={sec}
        onclick={(e) => handleNavbarClick(e, sec)}
        class="h-2 rounded-full overflow-hidden relative transition-all duration-300 ease-out"
        style="flex: {isActive ? '2 1 0%' : '1 1 0%'}"
      >
        <!-- background track -->
        <div class="absolute inset-0 bg-gray-500 rounded-full"></div>

        {#if isActive}
          <!-- active: left-to-right fill according to progress -->
          <div
            class="absolute left-0 top-0 bottom-0 bg-white rounded-full transition-all"
            style="width: {activeSectionProgress}%"
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
