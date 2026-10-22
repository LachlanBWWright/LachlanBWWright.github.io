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
  import ResourceForkParser from "./ResourceForkParser.svelte";
  import SteamInvEdit from "./SteamInvEdit.svelte";
  import WiitarThing from "./WiitarThing.svelte";
</script>

<div id="portfolio" class="flex flex-col gap-2">
  <Heading>Portfolio</Heading>
  <div class="grid grid-cols-1 gap-6">
    <div id="project-pangea"><PangeaResourceEdit /></div>
    <div id="project-resource-fork-parser"><ResourceForkParser /></div>
    <SteamInvEdit />
    <div id="project-android-ports"><AndroidPorts /></div>
    <DealScanner />
    <LBWWMafia />
    <PublicTransportApp />
    <div id="project-reckless-drivin"><RecklessDrivinPort /></div>
    <WiitarThing />
    <OnlineExamSystem />
    <CryogenicWiringSimulation />
  </div>
</div>
