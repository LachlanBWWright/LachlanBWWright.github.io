<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<p class="text-primary text-xl italic pb-2">{@render children?.()}</p>
