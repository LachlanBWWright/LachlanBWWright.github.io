<script>
  let { children } = $props();
  export const prerender = true;
  import "../app.css";
</script>

{@render children()}
