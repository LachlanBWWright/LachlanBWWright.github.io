<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<p class="text-primary font-bold text-3xl text-center">
  {@render children?.()}
</p>
