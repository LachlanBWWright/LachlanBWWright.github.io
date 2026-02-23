<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<p class="font-bold text-2xl text-white pb-2">{@render children?.()}</p>
