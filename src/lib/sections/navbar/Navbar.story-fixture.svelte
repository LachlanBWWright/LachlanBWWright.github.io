<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from './Navbar.svelte';

  const sections = [
    { id: 'header', title: 'Profile' },
    { id: 'experience', title: 'Experience' },
    { id: 'competencies', title: 'Skills' },
    { id: 'portfolio', title: 'Projects' },
    { id: 'resume', title: 'Resume' },
    { id: 'academic-record', title: 'Records' },
  ];

  onMount(() => window.scrollTo({ top: 0, behavior: 'instant' }));
</script>

<div class="navbar-preview">
  <Navbar />
  <main>
  {#each sections as section, index}
    <section id={section.id} aria-labelledby="preview-{section.id}">
      <h2 id="preview-{section.id}">{section.title}</h2>
      {#if index === 0}
        <p>Scroll down to see the navbar fade from dark to blue. Use its links to jump between sections and return to Profile to restore the dark background.</p>
      {:else}
        <p>This section provides a scroll target for the navbar preview.</p>
      {/if}
    </section>
  {/each}
  </main>
</div>

<style>
  .navbar-preview { margin: -1rem; }
  section { min-height: 80vh; padding: 3rem 1rem; }
  section + section { border-top: 1px solid var(--color-card-bg); }
  h2 { font-size: 2rem; font-weight: 600; margin-bottom: 1rem; }
  p { max-width: 60ch; line-height: 1.65; color: var(--color-text-light); }
</style>
