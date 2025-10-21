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
