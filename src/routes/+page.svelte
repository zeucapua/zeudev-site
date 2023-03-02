<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import { fly } from "svelte/transition";
  import IntersectionObserver from "svelte-intersection-observer";

  let loaded = false;
  let contact : HTMLElement;
  let intersecting : boolean;

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


  <div class="flex flex-col gap-8 py-8 text-white">
    <p 
      in:fly={{duration: 1000, delay: 2000}}
      out:fly={{duration: 1000}}
      class="text-3xl lg:text-7xl underline underline-offset-8 text-center font-['GeneralSans']" 
    >
      Projects
    </p>
    {#each works as {title, description, screenshot, link, tags}, i}
      <a href={link}>
        <div 
          in:fly={{duration: 1000, delay: 2250 + (250 * i)}}
          out:fly={{duration: 1000}}
          class="flex flex-col md:flex-row p-8 group hover:bg-[#f3cc30] transition-all duration-300 hover:text-black"
        >
          <img 
            src={screenshot} 
            alt={title} 
            class="aspect-[4/3] object-cover w-full md:w-1/2" 
          />
          <div class="flex flex-col pt-4 md:pt-0 md:px-4 w-full md:basis-1/2 justify-end gap-2">
            <div class="flex flex-row gap-4 flex-wrap">
              {#each tags as tag}
              <p class="px-4 py-1 text-sm rounded-full border-2 group-hover:border-black select-none">
                {tag}
              </p>
              {/each}
            </div>
            <p class="font-['GeneralSans'] text-5xl md:text-7xl font-bold tracking-wide">{title}</p>
            <p class="font-['Quicksand'] text-xl md:text-2xl">{description}</p>
          </div>
        </div>
      </a>
    {/each}
  </div>


  <IntersectionObserver element={contact} bind:intersecting>
    <section id="contact" bind:this={contact} class="p-16">
    {#if intersecting}
    <div class="flex flex-col lg:flex-row w-fit gap-8 mx-auto"> 
      <p 
        in:fly={{duration: 1000, delay: 1000}}
        out:fly={{duration: 1000}}
        class="text-8xl font-['GeneralSans'] font-bold"
      >
        Let's Talk
      </p> 
      <section class="flex flex-row justify-center gap-4">
        <div 
          in:fly={{duration: 1000, delay: 1250}}
          out:fly={{duration: 1000}}
          class="w-16 h-16 m-auto rounded-full bg-[#e779c1]" /> 
        <div 
          in:fly={{duration: 1000, delay: 1500}}
          out:fly={{duration: 1000}}
          class="w-16 h-16 m-auto rounded-full bg-[#f3cc30]" /> 
        <div 
          in:fly={{duration: 1000, delay: 1750}}
          out:fly={{duration: 1000}}
          class="w-16 h-16 m-auto rounded-full bg-[#58c7f3]" /> 
        </section>
    </div>
    <div 
      in:fly={{duration: 1000, delay: 1750}}
      out:fly={{duration: 1000}}
    >
      <p class="text-2xl text-center my-8 font-['Quicksand']">
        Under Construction. Contact me on my socials:
      </p> 
      <div class="flex flex-row gap-8 text-6xl justify-center"> 
        <a href="https://github.com/zeucapua">
          <Icon icon="bi:github" class="text-white hover:text-[#e779c1]" />
        </a>
        <a href="https://linkedin.com/in/zeucapua">
          <Icon icon="bi:linkedin" class="text-white hover:text-[#f3cc30]" />
        </a>
        <a href="https://twitter.com/zeu_dev">
          <Icon icon="bi:twitter" class="text-white hover:text-[#58c7f3]" />
        </a>
      </div>     
    </div>
    {/if}
    </section>
  </IntersectionObserver>

  {/if}
</div>

