<script lang="ts">
  import { onMount } from "svelte";

  //Buttons that appear on desktop view, but are hidden on mobile view
  let unselectedButton =
    "hover:text-blue-500 hidden sm:block transition duration-500";
  let selectedButton = "text-blue-500 hidden sm:block transition duration-500";
  //Buttons that appear on mobile view (May be hidden by virtue of a hidden parent on desktop)
  let mobileUnselectedButton = "hover:text-blue-500 transition duration-500";
  let mobileSelectedButton = "text-blue-500 transition duration-500";
  let currentPosition = "header"; //The current position of the page, used to determine which button should be highlighted

  let dropdownExpanded = false;
  let scrolledToTop = true;

  function openDropdown() {
    dropdownExpanded = true;
  }

  function closeDropdown() {
    dropdownExpanded = false;
  }

  function handleNavbarClick(event: MouseEvent, target: string) {
    event.preventDefault();
    const anchor = document.getElementById(target);
    if (!anchor) return;

    closeDropdown();

    window.scrollTo({
      top: anchor.offsetTop - 32,
      behavior: "smooth",
    });
  }

  onMount(() => {
    const scrollFn = function () {
      if (window.scrollY === 0) scrolledToTop = true;
      else scrolledToTop = false;
      for (const item of [
        "header",
        "competencies",
        "experience",
        "portfolio",
        "resume",
        "academic-record",
      ]) {
        const anchor = document.getElementById(item);
        if (!anchor) return;

        if (
          window.scrollY >=
          anchor.offsetTop - 32 - (window.innerHeight - 32) / 2
        ) {
          currentPosition = item;
        } else break;
      }
    };

    document.addEventListener("scroll", scrollFn);
    return () => document.removeEventListener("scroll", scrollFn);
  });
</script>

<nav
  class="{scrolledToTop && !dropdownExpanded
    ? 'sticky top-0 flex flex-row items-center gap-4 p-1 w-full bg-[#000000] shadow-2xl text-white text-md lg:text-xl xl:text-2xl justify-center h-8 transition duration-500'
    : 'sticky top-0 flex flex-row items-center gap-4 p-1 w-full bg-[#222222] shadow-2xl text-white text-md lg:text-xl xl:text-2xl justify-center h-8 transition duration-500'}"
>
  {#if dropdownExpanded}
    <button
      class="sm:hidden aspect-square rounded-md border-2 px-2 border-white"
      on:click="{closeDropdown}">=</button
    >
  {:else}
    <button
      class="sm:hidden aspect-square rounded-md border-2 px-2 border-white"
      on:click="{openDropdown}">=</button
    >
  {/if}
  <button
    class="{currentPosition === 'header'
      ? mobileSelectedButton
      : mobileUnselectedButton}"
    on:click="{(e) => handleNavbarClick(e, 'header')}">Profile</button
  >
  <button
    class="{currentPosition === 'competencies'
      ? selectedButton
      : unselectedButton}"
    on:click="{(e) => handleNavbarClick(e, 'competencies')}"
    >Competencies</button
  >
  <button
    class="{currentPosition === 'experience'
      ? selectedButton
      : unselectedButton}"
    on:click="{(e) => handleNavbarClick(e, 'experience')}">Experience</button
  >
  <button
    class="{currentPosition === 'portfolio'
      ? selectedButton
      : unselectedButton}"
    on:click="{(e) => handleNavbarClick(e, 'portfolio')}">Portfolio</button
  >
  <button
    class="{currentPosition === 'resume' ? selectedButton : unselectedButton}"
    on:click="{(e) => handleNavbarClick(e, 'resume')}">Resume</button
  >
  <button
    class="{currentPosition === 'academic-record'
      ? selectedButton
      : unselectedButton}"
    on:click="{(e) => handleNavbarClick(e, 'academic-record')}"
    >Academic Record</button
  >
  {#if dropdownExpanded}
    <div
      class="{'flex flex-col absolute left-0 top-[32px] w-screen bg-[#333333] sm:hidden z-10 px-2 transition-all duration-500'}"
    >
      <button
        class="{currentPosition === 'competencies'
          ? mobileSelectedButton
          : mobileUnselectedButton}"
        on:click="{(e) => handleNavbarClick(e, 'competencies')}"
        >Competencies</button
      >
      <button
        class="{currentPosition === 'experience'
          ? mobileSelectedButton
          : mobileUnselectedButton}"
        on:click="{(e) => handleNavbarClick(e, 'experience')}"
        >Experience</button
      >
      <button
        class="{currentPosition === 'portfolio'
          ? mobileSelectedButton
          : mobileUnselectedButton}"
        on:click="{(e) => handleNavbarClick(e, 'portfolio')}">Portfolio</button
      >
      <button
        class="{currentPosition === 'resume'
          ? mobileSelectedButton
          : mobileUnselectedButton}"
        on:click="{(e) => handleNavbarClick(e, 'resume')}">Resume</button
      >
      <button
        class="{currentPosition === 'academic-record'
          ? mobileSelectedButton
          : mobileUnselectedButton}"
        on:click="{(e) => handleNavbarClick(e, 'academic-record')}"
        >Academic Record</button
      >
    </div>
  {/if}
</nav>
