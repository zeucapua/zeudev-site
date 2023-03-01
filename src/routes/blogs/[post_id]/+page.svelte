<script lang="ts">
  import { Markdown } from "svelte-exmarkdown";
  import type { PageData } from "./$types";
  
  export let data : PageData;
  const post = data.post;
</script>

<main class="font-quicksand flex flex-col gap-8 p-16 w-full min-w-screen h-full min-h-screen">
  <p class="text-7xl font-bold text-white">{post.title}</p>
  <article class="prose prose-invert prose-xl">
    <Markdown md={post.content} />
  </article>
</main>
