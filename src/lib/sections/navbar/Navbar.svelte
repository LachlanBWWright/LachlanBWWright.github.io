<script lang="ts">
  import { sections, type SectionId } from "$lib/utils/scrollUtils";
  import { createSectionScrollState } from "$lib/utils/sectionScrollState.svelte";

  const labels: Record<SectionId, string> = {
    header: "Profile",
    portfolio: "Projects",
    experience: "Experience",
    competencies: "Skills",
    resume: "Resume",
    "academic-record": "Records",
  };
  const sectionScroll = createSectionScrollState();

  function navigate(event: MouseEvent, target: SectionId) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    sectionScroll.scrollToSection(target);
  }
</script>

<nav id="navbar" aria-label="Main navigation" class:colored={!sectionScroll.scrolledToTop}>
  <div class="links">
    {#each sections as section}
      <a
        href="#{section}"
        aria-current={sectionScroll.activeSection === section ? "location" : undefined}
        onclick={(event) => navigate(event, section)}
      >{labels[section]}</a>
    {/each}
  </div>
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    z-index: 60;
    width: 100%;
    background-color: var(--color-background);
    transition: background-color 500ms ease, box-shadow 500ms ease;
    overflow-x: auto;
  }
  nav.colored { background-color: var(--color-primary); box-shadow: 0 8px 24px #0003; }
  .links { display: flex; align-items: center; justify-content: center; gap: 1.75rem; width: max-content; min-width: 100%; padding: 0.5rem 1rem; }
  a { display: inline-flex; align-items: center; min-height: 48px; font-size: 1.125rem; text-underline-offset: 0.35em; }
  a[aria-current], a:hover { text-decoration: underline; text-decoration-thickness: 2px; }
  a[aria-current] { font-weight: 600; }
  a:focus-visible { outline: 2px solid white; outline-offset: 3px; border-radius: 2px; }
  @media (max-width: 639px) {
    .links { gap: 0.75rem; justify-content: flex-start; padding: 0.25rem 0.75rem; }
    a { min-height: 44px; font-size: 0.875rem; }
  }
  @media (prefers-reduced-motion: reduce) { nav { transition: none; } }
</style>
