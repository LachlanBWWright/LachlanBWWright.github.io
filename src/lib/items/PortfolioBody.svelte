<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="grid gap-4 grid-cols-1 lg:grid-cols-2">{@render children?.()}</div>
