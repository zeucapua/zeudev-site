<script lang="ts">
  import type { PageData } from "./$types";

  export let data : PageData;
  $: post = data.post;
</script>

<main class="flex flex-col w-full min-w-screen h-full min-h-screen gap-8 p-16">
  <p class="text-3xl text-white font-quicksand">{post.title}</p>
</main>

