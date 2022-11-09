<script>
  import "../app.css";
  import Navbar from "./Navbar.svelte";
</script>

<div class="w-full h-full min-w-screen min-h-screen bg-black">
  <Navbar />
  <slot />
</div>
