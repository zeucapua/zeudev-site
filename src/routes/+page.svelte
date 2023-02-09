<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  let loaded = false;

  onMount(() => { loaded = true });
</script>


<div class="flex flex-col w-full min-w-screen h-full text-white p-16">
  {#if loaded}
    <div class="flex flex-row justify-around md:justify-center mx-auto gap-4">
      <div 
        in:fly={{duration: 1000, delay: 1250}} 
        out:fly={{duration: 1000}}
        class="w-16 h-16 md:w-48 md:h-48 rounded-full bg-[#e779c1]" />
      <div 
        in:fly={{duration: 1000, delay: 1500}}
        out:fly={{duration: 1000}}
        class="w-16 h-16 md:w-48 md:h-48 rounded-full bg-[#58c7f3]" />
      <div 
        in:fly={{duration: 1000, delay: 1750}}
        out:fly={{duration: 1000}}
        class="w-16 h-16 md:w-48 md:h-48 rounded-full bg-[#f3cc30]" />
    </div>
    <div class="flex flex-col my-8 mx-auto text-center">
      <p 
        in:fly={{duration: 1000, delay: 2000}}
        out:fly={{duration: 1000}}
        class="text-6xl text-white font-quicksand"
      >
        Hello, I'm Zeu. I make websites for clients, and aim to write and create content
        to make web development easier and accessible.
      </p>
      
    </div>
  {/if}
</div>

