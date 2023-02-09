<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

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
      link: "/portfolio/modernmenu/#menu",
      tags: ["Svelte", "TailwindCSS", "Snippet"],
    },
    {
      title: "Tech Co.",
      description: "A landing page worthy of a modern tech company, using Svelte and Three.js (via Threlte)",
      screenshot: "/images/techco-screenshot.png",
      link: "/portfolio/techco/#main",
      tags: ["Svelte", "TailwindCSS", "Three.js", "Threlte", "Snippet"],
    },
    
    {
      title: "Trail to Oregon",
      description: "A fun western themed one-pager for Starkid musical Trail to Oregon.",
      screenshot: "/images/tto-screenshot.png",
      link: "/portfolio/trailtooregon/#main",
      tags: ["Svelte", "TailwindCSS", "Snippet", "One-Page"],
    },
  ];
  
  onMount(() => { loaded = true; })
</script>


<div class="flex flex-col text-white">
  {#each works as {title, description, screenshot, link, tags}, i}
  {#if loaded}
    <a href={link}>
      <div 
        in:fly={{duration: 1000, delay: 1000 + (250 * i)}}
        out:fly={{duration: 1000}}
        class="flex flex-col md:flex-row p-8 group hover:bg-[#251655] transition-all duration-300"
      >
        <img 
          src={screenshot} 
          alt={title} 
          class="aspect-[4/3] object-cover w-full md:w-1/2 group-hover:border-8 group-hover:border-white transition-all duration-300" 
        />
        <div class="flex flex-col pt-4 md:pt-0 md:px-4 w-full md:basis-1/2 justify-end gap-2">
          <div class="flex flex-row gap-4 flex-wrap">
            {#each tags as tag}
            <p class="px-4 py-1 text-sm rounded-full border-2 select-none">
              {tag}
            </p>
            {/each}
          </div>
          <p class="font-['GeneralSans'] text-5xl md:text-7xl font-bold tracking-wide">{title}</p>
          <p class="font-['Quicksand'] text-xl md:text-2xl">{description}</p>
        </div>
      </div>
    </a>
  {/if}
  {/each}
</div>
