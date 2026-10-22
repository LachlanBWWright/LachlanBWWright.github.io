<script lang="ts">
  import MediaCarousel from "$lib/carousel/MediaCarousel.svelte";
  const projects = [
    {
      title: "Pangea Resource Edit",
      description: "A browser-based level and asset editor for classic Pangea games.",
      image: "/portfolio/pangea/Pangea1.png",
      alt: "Pangea Resource Edit displaying a game level map and editing tools",
      anchor: "project-pangea",
    },
    {
      title: "Resource Fork Parser",
      description: "Inspect, edit, and repack classic Mac OS resource files in the browser.",
      image: "/portfolio/resourceForkParser/ResourceForkParser1.png",
      alt: "Resource Fork Parser displaying its resource type specification editor",
      anchor: "project-resource-fork-parser",
    },
    {
      title: "Android game ports",
      description: "Bringing Pangea classics to Android, including Otto Matic and Bugdom.",
      image: "/portfolio/androidPorts/OttoMatic.jpg",
      alt: "Otto Matic running on Android with on-screen touch controls",
      anchor: "project-android-ports",
    },
    {
      title: "Reckless Drivin’",
      description: "A WebAssembly game port with browser-based level and asset editors.",
      image: "/portfolio/RecklessDrivinPort/Reckless3.png",
      alt: "Reckless Drivin’ running in the browser with an overhead view of the road",
      anchor: "project-reckless-drivin",
    },
  ];
  const images = projects.map((project) => ({
    src: project.image,
    alt: project.alt,
    label: project.title,
    href: `#${project.anchor}`,
  }));
</script>

<MediaCarousel {images} label="Project previews" ariaLabel="Featured projects" itemName="project">
  {#snippet caption(index)}
    {@const project = projects[index]}
    <h2><a href="#{project.anchor}">{project.title}</a></h2>
    <p>{project.description}</p>
    <a class="details-link" href="#{project.anchor}">View project details</a>
  {/snippet}
</MediaCarousel>

<style>
  h2 { font-weight: 600; font-size: 1.3rem; line-height: 1.3; }
  p { margin-top: 0.4rem; color: var(--color-text-light); font-size: 0.95rem; line-height: 1.5; min-height: 3em; }
  .details-link { display: inline-flex; align-items: center; min-height: 44px; margin-top: 0.4rem; font-size: 0.95rem; color: var(--color-accent); }
  .details-link:hover, h2 a:hover { text-decoration: underline; text-underline-offset: 0.25em; }
  a:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 4px; }
</style>
