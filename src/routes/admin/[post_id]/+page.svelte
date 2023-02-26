<script lang="ts">
  import Markdown from "svelte-exmarkdown";
  import type { PageData } from "./$types";

  export let data : PageData;
  let post = data.post;
  let preview = false;
  let content = post.content;

</script>

<form method="POST" 
  class="flex flex-col gap-8 w-full min-w-screen h-full min-h-screen p-16">

  <a href="/admin" class="text-neutral-300 hover:text-white duration-300 transition-all">Dashboard</a>
  <input name="id" type="hidden" value={post.id} />

  <div class="flex flex-row justify-between">
    <input 
      name="title" type="text" value={post.title} 
      class="border-2 border-white rounded-xl px-4 py-2 text-2xl bg-black text-white"
    />
    <div class="flex flex-row w-fit gap-4 items-center">
      <label class="text-white">
        Published
        <input name="published" type="checkbox" checked={post.published} />
      </label>
      <label class="text-white">
        Preview
        <input type="checkbox" bind:checked={preview} />
      </label>
      <button formaction="?/savePost" class="border-2 border-white rounded-lg px-4 py-2 text-white">
        Save
      </button>
      <button 
        formaction="?/deletePost" 
        class="border-2 border-red-400 rounded-lg px-4 py-2 text-red-400"
      >
        Delete 
      </button>
    </div>
  </div>

  {#if preview}
    <article class="prose prose-invert h-full grow">
      <Markdown md={content} />
    </article>
  {:else}
    <textarea 
      name="content" bind:value={content}
      class="border-4 border-white p-8 text-white bg-black text-xl rounded-xl h-full grow"
    />
  {/if}

</form>

