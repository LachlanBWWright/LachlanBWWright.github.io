<script>
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
</script>

<div id="header" class="flex flex-col p-2 text-center items-center gap-2">
  <p
    class="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl font-bold text-white"
  >
    Lachlan Wright
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 w-full sm:w-fit">
    <WhiteLinkButton
      link="https://www.github.com/LachlanBWWright"
      text="GitHub"
    />
    <WhiteLinkButton
      link="https://www.linkedin.com/in/LachlanBWWright/"
      text="LinkedIn"
    />
  </div>
  <div class="py-5 px-2 sm:px-10 md:px-15 lg:px-20">
    <p class="text-justify">
      I am an aspiring software developer, with a lifelong fascination with
      technology. While passionate about all aspects of software development and
      eager to expand by knowledge and capabilities, I have a particular
      interest in web development.
    </p>
    <br />
    <p class="text-justify">
      I have finished a Bachelor of Software Engineering at UTS with
      distinction-average results. I am currently looking for opportunities to
      further my existing competencies, and to improve my capabilities with new
      technologies and frameworks.
    </p>
  </div>
</div>
