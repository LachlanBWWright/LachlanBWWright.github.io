<script lang="ts">
  import { onMount } from "svelte";

  let baseButton = "transition duration-500";

  //Buttons that appear on desktop view, but are hidden on mobile view
  let unselectedButton =
    "hover:font-bold transition-all duration-200 hidden sm:block transition";
  let selectedButton =
    "font-bold transition-all  hidden sm:block underline duration-200 transition";
  //Buttons that appear on mobile view (May be hidden by virtue of a hidden parent on desktop)
  let mobileUnselectedButton =
    "hover:font-bold transition-all duration-200 transition";
  let mobileSelectedButton =
    "font-bold transition-all underline duration-200 transition";
  let currentPosition = $state("header"); //The current position of the page, used to determine which button should be highlighted

  let dropdownExpanded = $state(false);
  let scrolledToTop = $state(true);

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
      const navbarRef = document.getElementById("navbar");
      const navbarHeight = navbarRef?.clientHeight ?? 32;

      console.log(navbarRef, navbarHeight);

      if (window.scrollY === 0) scrolledToTop = true;
      else scrolledToTop = false;

      //Always highlight top item if scrolled to top
      if (scrolledToTop) {
        currentPosition = "header";
        return;
      }

      //Highlight bottom item if scrolled to bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        currentPosition = "academic-record";
        return;
      }

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
          anchor.offsetTop -
            navbarHeight -
            (window.innerHeight - navbarHeight) / 2
        ) {
          currentPosition = item;
        } else break;
      }
    };

    document.addEventListener("scroll", scrollFn);
    return () => document.removeEventListener("scroll", scrollFn);
  });

  onMount(() => {});
</script>

<nav
  id="navbar"
  class={scrolledToTop && !dropdownExpanded
    ? "sticky top-0 flex flex-row items-center gap-6 p-1 w-full bg-transparent shadow-2xl text-white text-lg sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl justify-center h-20 sm:h-16 transition duration-500 z-10"
    : "sticky top-0 flex flex-row items-center gap-6 p-1 w-full bg-primary shadow-2xl text-white text-lg sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl justify-center h-20 sm:h-16 transition duration-500 z-10"}
>
  {#if dropdownExpanded}
    <button
      class="sm:hidden aspect-square rounded-md border-2 px-2 border-white"
      onclick={closeDropdown}>=</button
    >
  {:else}
    <button
      class="sm:hidden aspect-square rounded-md border-2 px-2 border-white"
      onclick={openDropdown}>=</button
    >
  {/if}
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
  {#if dropdownExpanded}
    <div
      class={"flex flex-col absolute left-0 top-[80px] sm:top-[72px] w-screen bg-primary-dark sm:hidden z-10 px-2 transition-all duration-500 truncate"}
    >
      <button
        class={currentPosition === "header"
          ? mobileSelectedButton
          : mobileUnselectedButton}
        onclick={(e) => handleNavbarClick(e, "header")}>Profile</button
      >
      <button
        class={currentPosition === "competencies"
          ? mobileSelectedButton
          : mobileUnselectedButton}
        onclick={(e) => handleNavbarClick(e, "competencies")}
        >Competencies</button
      >
      <button
        class={currentPosition === "experience"
          ? mobileSelectedButton
          : mobileUnselectedButton}
        onclick={(e) => handleNavbarClick(e, "experience")}>Experience</button
      >
      <button
        class={currentPosition === "portfolio"
          ? mobileSelectedButton
          : mobileUnselectedButton}
        onclick={(e) => handleNavbarClick(e, "portfolio")}>Portfolio</button
      >
      <button
        class={currentPosition === "resume"
          ? mobileSelectedButton
          : mobileUnselectedButton}
        onclick={(e) => handleNavbarClick(e, "resume")}>Resume</button
      >
      <button
        class={currentPosition === "academic-record"
          ? mobileSelectedButton
          : mobileUnselectedButton}
        onclick={(e) => handleNavbarClick(e, "academic-record")}>Records</button
      >
    </div>
  {/if}
</nav>
