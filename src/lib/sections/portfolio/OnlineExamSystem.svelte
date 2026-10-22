<script lang="ts">
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import ProjectCarousel from "./ProjectCarousel.svelte";

  const images = [
    { src: "portfolio/exam/Exam1.png", alt: "Screenshot of website." },
  ];
</script>

<PortfolioCard>
  <Subheading>Online Exam System</Subheading>
  <PortfolioBody>
    <div class="flex flex-col gap-2">
      <WhiteLinkButton
        text="Repository"
        link="https://github.com/LachlanBWWright/T1-Online-Exam-System"
      />
      <li>Created a mock website for the online invigilation of exams.</li>
      <li>Used NextJS, tRPC, Prisma, Tailwind CSS, NextAuthJS libraries.</li>
      <li>
        Made comprehensive contributions across the entire technological stack.
      </li>
      <li>
        Provided advice, feedback, guidance, and performed code reviews in a
        collaborative environment.
      </li>
      <li>
        Contributed to implementation of webcam background blurring for
        privacy-focused invigilation.
      </li>
    </div>
    <ProjectCarousel {images} />
  </PortfolioBody>
</PortfolioCard>
