<script>
  import WhiteLinkButton from "$lib/buttons/whiteLinkButton/WhiteLinkButton.svelte";
  import GitHubLogo from "$lib/icons/GitHubLogo.svelte";
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import PortfolioItemHeader from "$lib/items/PortfolioItemHeader.svelte";
</script>

<div class="flex flex-col gap-2">
  <p class="text-3xl text-center">Portfolio</p>
  <div class="grid grid-cols-1 gap-1">
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>Cryogenic Wiring Simulation</p>
        <div class="flex flex-col p-2">
          <WhiteLinkButton link="TEST" text="GitHub Repository"
            ><GitHubLogo size="{30}" /></WhiteLinkButton
          >
        </div>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
        </div>
      </PortfolioBody>
    </PortfolioCard>
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>Online Exam System</p>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
        </div>
      </PortfolioBody>
    </PortfolioCard>
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>Deal Scanner</p>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
        </div>
      </PortfolioBody>
    </PortfolioCard>
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>MERN Mafia</p>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
        </div>
      </PortfolioBody>
    </PortfolioCard>
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>Public Transport App</p>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
        </div>
      </PortfolioBody>
    </PortfolioCard>
  </div>
</div>
