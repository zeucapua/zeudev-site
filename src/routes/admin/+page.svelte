<script lang="ts">
  import type { PageData } from "./$types";

  export let data : PageData;
  $: session = data.sessionid;
  $: posts = data.posts;
  $: console.log({posts});
</script>

<main class="flex flex-col w-full min-w-screen h-full min-h-screen p-16 gap-8 bg-black"> 
  {#if session === "false"}
    <p class="font-quicksand text-7xl text-white text-center">What's the secret?</p>
    <form method="POST" action="?/login" class="mx-auto">
      <input 
        name="secret" type="password" required 
        class="bg-black text-white border-4 border-white rounded-md text-4xl px-8 py-4 text-center"
      />
    </form>
  {:else}
    <div class="flex flex-row gap-8 font-quicksand align-middle">
      <p class="text-5xl text-white font-bold">Welcome back!</p>
      <form method="POST" action="?/logout">
        <button class="text-xl text-white border border-white rounded-md px-4 py-2">
          Logout
        </button>
      </form>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {#each posts as post}
        <article class="flex flex-col text-white border border-white rounded-md p-8">
          <p class="text-3xl font-bold font-quicksand">{post.title}</p> 
          {#if post.content}
            <p class="font-quicksand line-clamp-3">{post.content}</p> 
          {/if}
        </article>
      {/each}
      <form 
        method="POST" action="?/createBlog"
        class="flex flex-col text-white border border-white rounded-md gap-4 p-8"
      >
        <input 
          name="title" type="text" required 
          class="bg-black text-white border-2 border-white rounded-md px-4 py-2 text-center"
        />
        <button class="text-3xl"> 
          Create Blog
        </button> 
      </form>
    </div>
  {/if}
</main>
