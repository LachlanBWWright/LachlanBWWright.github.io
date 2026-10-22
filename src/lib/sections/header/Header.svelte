<script lang="ts">
  import ProjectPreviews from "./ProjectPreviews.svelte";
</script>

<section id="header" class="profile" aria-labelledby="profile-title">
  <div class="introduction">
    <h1 id="profile-title">Lachlan Wright</h1>
    <p class="role">Full-stack Software Engineer</p>
    <p class="summary">
      I build web applications, game tools, and ports that bring classic games
      to new platforms. My work spans interactive editors, backend systems,
      and production deployments.
    </p>
    <div class="actions">
      <a class="primary-link" href="#portfolio">Explore projects</a>
      <a class="resume-link" href="#resume">View resume</a>
    </div>
    <div class="social-links" aria-label="Social profiles">
      <a href="https://www.github.com/LachlanBWWright">GitHub</a>
      <a href="https://www.linkedin.com/in/LachlanBWWright/">LinkedIn</a>
    </div>
  </div>
  <ProjectPreviews />
</section>

<style>
  .profile {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    align-items: center;
    gap: var(--text-carousel-gap);
    padding-block: 3rem 1rem;
    scroll-margin-top: 5rem;
  }
  h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.045em;
    text-wrap: balance;
  }
  .role { margin-top: 1.25rem; font-size: 1.25rem; color: var(--color-accent); }
  .summary { margin-top: 1rem; max-width: 48ch; line-height: 1.65; color: var(--color-text-light); }
  .actions { display: flex; align-items: center; flex-wrap: wrap; gap: 1.25rem; margin-top: 1.75rem; }
  .primary-link { background: var(--color-primary); border-radius: 0.5rem; padding: 0.75rem 1.1rem; font-weight: 600; }
  .primary-link:hover { background: var(--color-primary-dark); }
  .resume-link, .social-links a { text-underline-offset: 0.3em; }
  .resume-link { display: inline-flex; align-items: center; min-height: 44px; }
  .resume-link:hover, .social-links a:hover { text-decoration: underline; }
  .social-links { display: flex; gap: 1.5rem; margin-top: 1rem; color: var(--color-text-light); font-size: 1rem; }
  .social-links a { display: inline-flex; align-items: center; min-height: 44px; }
  a:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 5px; }
  @media (max-width: 1023px) {
    .profile { grid-template-columns: minmax(0, 1fr); padding-top: 2rem; }
    .summary { max-width: 65ch; }
  }
  @media (max-width: 639px) {
    .profile { padding-top: 1.5rem; }
    .role { font-size: 1.1rem; }
    .summary, .actions { font-size: 1rem; }
  }
</style>
