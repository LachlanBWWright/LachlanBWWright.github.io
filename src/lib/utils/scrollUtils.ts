export const sections = [
  "header",
  "competencies",
  "experience",
  "portfolio",
  "resume",
  "academic-record",
] as const;

export type SectionId = (typeof sections)[number];

export function getCurrentSection(offset: number = 0): SectionId {
  //Always highlight top item if scrolled to top
  if (window.scrollY === 0) {
    return "header";
  }

  //Highlight bottom item if scrolled to bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    return "academic-record";
  }

  let currentPosition: SectionId = "header";

  for (const item of sections) {
    const anchor = document.getElementById(item);
    if (!anchor) return currentPosition;

    if (
      window.scrollY >=
      anchor.offsetTop - offset - (window.innerHeight - offset) / 2
    ) {
      currentPosition = item;
    } else {
      break;
    }
  }

  return currentPosition;
}

export type SectionProgressState = {
  activeSection: SectionId;
  activeSectionIndex: number;
  completedSections: number;
  activeSectionProgress: number;
};

export function getSectionProgressState(offset: number = 0): SectionProgressState {
  const scrollTop = window.scrollY;
  const maxScrollTop =
    document.documentElement.scrollHeight - window.innerHeight;

  if (scrollTop <= 0) {
    return {
      activeSection: "header",
      activeSectionIndex: 0,
      completedSections: 0,
      activeSectionProgress: 0,
    };
  }

  if (scrollTop >= maxScrollTop - 10) {
    return {
      activeSection: "academic-record",
      activeSectionIndex: sections.length - 1,
      completedSections: sections.length,
      activeSectionProgress: 100,
    };
  }

  let activeSectionIndex = 0;

  for (let index = 0; index < sections.length; index += 1) {
    const anchor = document.getElementById(sections[index]);
    if (!anchor) break;

    if (scrollTop >= anchor.offsetTop - offset - 1) {
      activeSectionIndex = index;
    } else {
      break;
    }
  }

  const activeSection = sections[activeSectionIndex];
  const activeElement = document.getElementById(activeSection);
  const nextElement = document.getElementById(sections[activeSectionIndex + 1]);

  if (!activeElement) {
    return {
      activeSection,
      activeSectionIndex,
      completedSections: activeSectionIndex,
      activeSectionProgress: 0,
    };
  }

  const sectionStart = activeElement.offsetTop - offset;
  const sectionEnd = nextElement
    ? nextElement.offsetTop - offset
    : maxScrollTop;
  const scrollableSectionHeight = Math.max(sectionEnd - sectionStart, 1);
  const activeSectionProgress = Math.max(
    0,
    Math.min(
      100,
      ((scrollTop - sectionStart) / scrollableSectionHeight) * 100,
    ),
  );

  return {
    activeSection,
    activeSectionIndex,
    completedSections: activeSectionIndex,
    activeSectionProgress,
  };
}
