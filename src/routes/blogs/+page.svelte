<script lang="ts">
  import type { PageData } from "./$types";
  export let data : PageData;
  const posts = data.posts;
</script>

<main class="text-white font-quicksand flex flex-col gap-8 w-full min-w-screen h-full min-h-screen p-16">
  {#each posts as post}
    {#if post.published}
      <a href={`/blogs/${post.id}`}>
        <article 
          class="flex flex-row gap-8 p-8 justify-between border-4 border-neutral-800 transition-all duration-150 hover:border-white rounded-xl">
          <p class="text-5xl font-bold">{post.title}</p>
          <p class="text-xl line-clamp-5">{post.content}</p>
        </article>
      </a>
    {/if}
  {/each}
</main>
