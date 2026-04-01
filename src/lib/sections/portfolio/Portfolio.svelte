<script lang="ts">
  import Heading from "$lib/headers/Heading.svelte";
  import AndroidPorts from "./AndroidPorts.svelte";
  import CryogenicWiringSimulation from "./CryogenicWiringSimulation.svelte";
  import DealScanner from "./DealScanner.svelte";
  import LBWWMafia from "./LBWWMafia.svelte";
  import OnlineExamSystem from "./OnlineExamSystem.svelte";
  import PangeaResourceEdit from "./PangeaResourceEdit.svelte";
  import PublicTransportApp from "./PublicTransportApp.svelte";
  import RecklessDrivinPort from "./RecklessDrivinPort.svelte";
</script>

<div id="portfolio" class="flex flex-col gap-2">
  <Heading>Portfolio</Heading>
  <div class="grid grid-cols-1 gap-6">
    <CryogenicWiringSimulation />
    <PangeaResourceEdit />
    <AndroidPorts />
    <OnlineExamSystem />
    <DealScanner />
    <LBWWMafia />
    <PublicTransportApp />
    <RecklessDrivinPort />
  </div>
</div>
