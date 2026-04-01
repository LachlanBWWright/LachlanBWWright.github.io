<script>
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
</script>

<div id="header" class="flex flex-col text-center items-center gap-2">
  <p
    class="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-bold text-white"
  >
    Lachlan Wright
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 w-full gap-2">
    <WhiteLinkButton
      link="https://www.github.com/LachlanBWWright"
      text="GitHub"
    />
    <WhiteLinkButton
      link="https://www.linkedin.com/in/LachlanBWWright/"
      text="LinkedIn"
    />
  </div>
  <div>
    <p class="text-justify">
      Full-stack Software Engineer with experience developing and deploying
      scalable web applications. Looking to deepen my experience and
      capabilities in building reliable, production-grade systems while
      continuously expanding my skillset across new frameworks and languages.
    </p>
  </div>
</div>
