<script lang="ts"> 
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Icon from '@iconify/svelte'; 

  let loaded = false;
  onMount(() => { loaded = true; })
</script> 

<div class="flex flex-col w-full min-w-screen h-full p-16 text-white"> 
  {#if loaded}
    <div class="flex flex-row w-fit gap-8"> 
        <p 
          in:fly={{duration: 1000, delay: 1000}}
          out:fly={{duration: 1000}}
          class="text-8xl font-['GeneralSans'] font-bold"
        >
          Let's Talk
        </p> 
        <div 
          in:fly={{duration: 1000, delay: 1250}}
          out:fly={{duration: 1000}}
          class="w-16 h-16 m-auto rounded-full bg-[#e779c1]" /> 
        <div 
          in:fly={{duration: 1000, delay: 1500}}
          out:fly={{duration: 1000}}
          class="w-16 h-16 m-auto rounded-full bg-[#58c7f3]" /> 
        <div 
          in:fly={{duration: 1000, delay: 1750}}
          out:fly={{duration: 1000}}
          class="w-16 h-16 m-auto rounded-full bg-[#f3cc30]" /> 
    </div>
    <div 
      in:fly={{duration: 1000, delay: 1750}}
      out:fly={{duration: 1000}}
    >
      <p class="text-2xl my-8 font-bold font-['Quicksand']">
        Under Construction. Contact me on my socials:
      </p> 
      <div class="flex flex-row gap-8 text-6xl"> 
        <a href="https://github.com/zeucapua">
          <Icon icon="bi:github" class="text-white hover:text-[#e779c1]" />
        </a>
        <a href="https://linkedin.com/in/zeucapua">
          <Icon icon="bi:linkedin" class="text-white hover:text-[#58c7f3]" />
        </a>
        <a href="https://twitter.com/zeu_dev">
          <Icon icon="bi:twitter" class="text-white hover:text-[#f3cc30]" />
        </a>
      </div>     
    </div>
  {/if}
</div>

