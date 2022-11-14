<script lang="ts">
  const works = [
    {
      title: "Progressive Victory",
      description: "Designed and developed for an online community dedicated to getting young voters out for elections.",
      screenshot: "/images/PV22_Banner.png",
      link: "https://progressivevictory.win",
      tags: ["NextJS", "React", "TailwindCSS", "Website"],
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
    {
      title: "Potatonet",
      description: "Database of fun and interesting websites to encourage exploration outside of platforms",
      screenshot: "/images/potatonet-screenshot.png",
      link: "https://potatonet.vercel.app",
      tags: ["In Development","Svelte", "TailwindCSS", "Firebase", "Website"],
    },
 
]
</script>


<div class="flex flex-col text-white">
  {#each works as {title, description, screenshot, link, tags}}
  <a href={link}>
    <div class="flex flex-col md:flex-row p-8 group hover:bg-[#251655] transition-all duration-300">
      <img src={screenshot} alt={title} class="aspect-[4/3] object-cover w-full md:w-1/2 group-hover:border-8 group-hover:border-white transition-all duration-300" />
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
  {/each}
</div>
