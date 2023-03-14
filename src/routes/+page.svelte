<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import { fly } from "svelte/transition";
  import ContactSection from "$lib/ContactSection.svelte";
  import ProjectSection from "$lib/ProjectSection.svelte";


  let loaded = false;

  const works = [
    {
      title: "Progressive Victory",
      description: "Currently being remade in Astro. Designed and developed for an online community dedicated to getting young voters out for elections.",
      screenshot: "/images/PV22_Banner.png",
      link: "https://progressivevictory.win",
      tags: ["NextJS", "React", "Astro", "TailwindCSS", "Website"],
    },
    {
      title: "Modern Menu",
      description: "A recreation of Danielle Levitt's beautiful menu with pictures front in center.",
      screenshot: "/images/modernmenu-screenshot.png",
      link: "/modernmenu/#menu",
      tags: ["Svelte", "TailwindCSS", "Snippet"],
    },
    {
      title: "Tech Co.",
      description: "A landing page worthy of a modern tech company, using Svelte and Three.js (via Threlte)",
      screenshot: "/images/techco-screenshot.png",
      link: "/techco/#main",
      tags: ["Svelte", "TailwindCSS", "Three.js", "Threlte", "Snippet"],
    },
    
    {
      title: "Trail to Oregon",
      description: "A fun western themed one-pager for Starkid musical Trail to Oregon.",
      screenshot: "/images/tto-screenshot.png",
      link: "/trailtooregon/#main",
      tags: ["Svelte", "TailwindCSS", "Snippet", "One-Page"],
    },
  ];
  onMount(() => { loaded = true });
</script>


<div class="flex flex-col w-full min-w-screen h-full text-white ">
  {#if loaded}
  <section 
    in:fly={{duration: 1000, delay: 1000}}
    out:fly={{duration: 1000}}
    class="flex flex-row justify-center gap-8 w-fit px-8 py-4 my-8 mx-auto rounded-xl bg-[#e779c1]"
  >
    <p class="text-black font-bold font-quicksand">Quick Links:</p>
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

  <section class="flex flex-col gap-8 p-16">
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
        class="text-3xl lg:text-6xl text-white font-quicksand"
      >
        Hello, I'm <span class="font-bold">Zeu</span>. 
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

