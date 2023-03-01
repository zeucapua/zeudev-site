<script>
  import "../app.css";
  import Navbar from "./Navbar.svelte";
</script>

<div class="overflow-clip w-full h-full min-w-screen min-h-screen bg-neutral-900">
  <Navbar />
  <slot />
</div>
