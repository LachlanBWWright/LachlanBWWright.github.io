<script>
    import WhiteLinkButton from "$lib/buttons/whiteLinkButton/WhiteLinkButton.svelte"
</script>

<div id="header" class="flex flex-col p-2 text-center items-center gap-2 bg-gray-800">
    <p class="text-2xl sm:text-4xl md:text-6xl font-bold">Lachlan Wright</p>
    <p class="text-lg sm:text-2xl lg:text-4xl">Aspiring Full-Stack Developer</p>
    <img class="h-40 w-40 sm:w-80 sm:h-80 rounded-full border-2" src="profile.jpg" alt="Profile Photograph"/>
    <div class="grid grid-cols-1 sm:grid-cols-2 min-w-40 sm:min-w-80">
        <WhiteLinkButton link="test" text="GitHub" />
        <WhiteLinkButton link="test" text="LinkedIn" />
    </div>
    <p><a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.github.com/LachlanBWWright">GitHub Profile</a> | <a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.linkedin.com/in/LachlanBWWright/">LinkedIn Profile</a></p>
</div>