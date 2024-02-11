<script>
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import PortfolioItemHeader from "$lib/items/PortfolioItemHeader.svelte";

</script>
<div class="flex flex-col gap-2">
    <p class="text-3xl mx-auto">Portfolio</p>
    <div class="grid grid-cols-1 grid-rows-2 gap-1 md:mx-10 lg:mx-40">
        <PortfolioCard>
            <PortfolioItemHeader>
                <p>Placeholder</p>
            </PortfolioItemHeader>
        </PortfolioCard>
        <PortfolioCard>
            <PortfolioItemHeader>
                <p>Placeholder</p>
            </PortfolioItemHeader>
        </PortfolioCard>
        <PortfolioCard>
            <PortfolioItemHeader>
                <p>Placeholder</p>
            </PortfolioItemHeader>
        </PortfolioCard>
        <PortfolioCard>
            <PortfolioItemHeader>
                <p>Placeholder</p>
            </PortfolioItemHeader>
        </PortfolioCard>
        <PortfolioCard>
            <PortfolioItemHeader>
                <p>Placeholder</p>
            </PortfolioItemHeader>
        </PortfolioCard>

    </div>
</div>