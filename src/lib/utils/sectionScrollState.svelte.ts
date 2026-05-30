import { onMount } from "svelte";
import {
  getSectionProgressState,
  type SectionId,
  type SectionProgressState,
} from "$lib/utils/scrollUtils";

export function createSectionScrollState() {
  let progressState = $state<SectionProgressState>({
    activeSection: "header",
    activeSectionIndex: 0,
    completedSections: 0,
    activeSectionProgress: 0,
  });
  let scrolledToTop = $state(true);

  function update() {
    const navbarRef = document.getElementById("navbar");
    const navbarHeight = navbarRef?.clientHeight ?? 32;

    progressState = getSectionProgressState(navbarHeight);
    scrolledToTop = window.scrollY === 0;
  }

  function scrollToSection(target: SectionId) {
    const anchor = document.getElementById(target);
    if (!anchor) return;

    const navbarRef = document.getElementById("navbar");
    window.scrollTo({
      top: anchor.offsetTop - (navbarRef?.clientHeight ?? 32),
      behavior: "smooth",
    });
  }

  onMount(() => {
    document.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      document.removeEventListener("scroll", update);
    };
  });

  return {
    get activeSection() {
      return progressState.activeSection;
    },
    get activeSectionIndex() {
      return progressState.activeSectionIndex;
    },
    get completedSections() {
      return progressState.completedSections;
    },
    get activeSectionProgress() {
      return progressState.activeSectionProgress;
    },
    get scrolledToTop() {
      return scrolledToTop;
    },
    scrollToSection,
  };
}
