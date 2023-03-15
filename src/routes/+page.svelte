<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  import Icon from "@iconify/svelte";
  import ContactSection from "$lib/ContactSection.svelte";
  import ProjectSection from "$lib/ProjectSection.svelte";

  let loaded = false;

  onMount(() => { loaded = true });
</script>

<svelte:head>
  <title>Zeu Capua - Full Stack Developer</title>
</svelte:head>

<div class="flex flex-col w-full min-w-screen h-full text-white p-8">
  {#if loaded}
  <section 
    in:fly={{duration: 1000, delay: 1000}}
    out:fly={{duration: 1000}}
    class="flex flex-row justify-center gap-8 w-fit px-8 py-4 my-8 mx-auto rounded-xl bg-[#e779c1]"
  >
    <p class="text-md text-black font-bold font-quicksand">Quick Links:</p>
    <a 
      href="https://thethinks.vercel.app" 
      class="text-black font-quicksand hover:underline transition-all duration-300"
    >
      The Thinks (Blog)
    </a>
    <a 
      href="/#contact"
      class="text-black font-quicksand hover:underline transition-all duration-300"
    >
      Contact me
    </a>
  </section>

  <section class="flex flex-col gap-8 p-0 lg:p-8">
    <div class="flex flex-row justify-around w-fit md:justify-center mx-auto gap-8">
      <div 
        in:fly={{duration: 1000, delay: 1250}} 
        out:fly={{duration: 1000}}
        class="w-16 h-16 md:w-48 md:h-48 rounded-full bg-[#e779c1]" />
      <div 
        in:fly={{duration: 1000, delay: 1500}}
        out:fly={{duration: 1000}}
        class="w-16 h-16 md:w-48 md:h-48 rounded-full bg-[#f3cc30]" />
      <div 
        in:fly={{duration: 1000, delay: 1750}}
        out:fly={{duration: 1000}}
        class="w-16 h-16 md:w-48 md:h-48 rounded-full bg-[#58c7f3]" />
    </div>
    <div class="flex flex-col gap-8 mx-auto text-center">
      <p 
        in:fly={{duration: 1000, delay: 2000}}
        out:fly={{duration: 1000}}
        class="font-bold font-['GeneralSans'] text-4xl lg:text-7xl text-center text-white">
        Hello, I'm Zeu.
      </p>
      <p 
        in:fly={{duration: 1000, delay: 2000}}
        out:fly={{duration: 1000}}
        class="text-3xl lg:text-6xl font-thin w-full max-w-5xl text-white font-quicksand"
      >
        I make websites for clients, and aim to write and create content
        to make web development easier and accessible.
      </p>
      <div 
        in:fly={{duration: 1000, delay: 2000}}
        out:fly={{duration: 1000}}
      >
        <Icon icon="bi:chevron-down" class="animate-bounce mx-auto text-3xl lg:text-6xl text-white" />
      </div>
    </div>
  </section>

  <ProjectSection />
  <ContactSection /> 

  {/if}
</div>

