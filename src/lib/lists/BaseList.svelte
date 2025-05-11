<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<ul class="list-disc pl-7">
  {@render children?.()}
</ul>
