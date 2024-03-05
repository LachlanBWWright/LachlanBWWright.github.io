<script>
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import GitHubLogo from "$lib/icons/GitHubLogo.svelte";
  import LinkedInLogo from "$lib/icons/LinkedInLogo.svelte";
</script>

<div id="header" class="flex flex-col p-2 text-center items-center gap-2">
  <p class="text-2xl sm:text-4xl md:text-6xl font-bold">Lachlan Wright</p>
  <p class="text-xl sm:text-2xl lg:text-4xl">Aspiring Full-Stack Developer</p>
  <img
    class="h-40 w-40 sm:w-80 sm:h-80 rounded-full border-2"
    src="profile.jpg"
    alt="Profile Photograph"
  />
  <div class="grid grid-cols-1 sm:grid-cols-2 w-full sm:w-fit">
    <WhiteLinkButton
      link="https://www.github.com/LachlanBWWright"
      text="GitHub"
    >
      <GitHubLogo size="{30}" />
    </WhiteLinkButton>
    <WhiteLinkButton
      link="https://www.linkedin.com/in/LachlanBWWright/"
      text="LinkedIn"
    >
      <LinkedInLogo size="{30}" />
    </WhiteLinkButton>
  </div>
  <div class="py-5 px-2 sm:px-10 md:px-15 lg:px-20">
    <p class="text-justify">
      I am an aspiring software developer, with a lifelong fascination with
      technology. While passionate about all aspects of software development, I
      have a particular interest in web development.
    </p>
    <br />
    <p class="text-justify">
      Currently, I am undertaking a Bachelor of Software Engineering at UTS with
      distinction-average results, due to be completed in the first half of
      2024. In addition to completing a 12-week internship focusing primarily on
      full-stack web development, I have also undertaken a variety of personal
      projects. I am currently looking for employment opportunities to further my
      existing competencies, and to improve my capabilities with new
      technologies and frameworks.
    </p>
  </div>
</div>
