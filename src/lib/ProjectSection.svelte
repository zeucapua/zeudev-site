<script lang="ts">
  import { fly } from "svelte/transition";

  const works = [
    {
      title: "Progressive Victory",
      description: "Currently being remade in Astro. Designed and developed for an online community dedicated to getting young voters out for elections.",
      screenshot: "/images/PV22_Banner.png",
      link: "https://progressivevictory.win",
      tags: ["NextJS", "React", "Astro", "TailwindCSS", "Website"],
    },
    {
      title: "The Artopath: Art Portfolio",
      description: "Developed for Los Angeles artist Sebastian Lopez, collaboration on design and implementation.",
      screenshot: "/images/artopath.png",
      link: "https://theartopath.vercel.app",
      tags: ["Svelte", "Rive", "TailwindCSS", "Website"],
    },
    
  ];

  const techs = [
    {
      title: "Gumfresh",
      description: "Gumroad storefront created on the edge using Deno's Fresh.",
      screenshot: "/images/shopping-shipping-bag-1.svg",
      link: "https://gumfresh.deno.dev",
      tags: ["Gumroad", "Deno", "Fresh", "Twind", "API"],
    },
    {
      title: "Mall - Svelte",
      description: "Stripe test storefont with local storage carts, made with SvelteKit.",
      screenshot: "/images/real-estate-building-4.svg",
      link: "https://mall-svelte.vercel.app/",
      tags: ["Stripe", "Svelte", "SvelteKit", "TailwindCSS", "API"],
    },
    {
      title: "The Thinks",
      description: "Astro personal blog, for announcements, tutorials, and technology commentary.",
      screenshot: "/images/computer-old-electronics.svg",
      link: "https://thethinks.vercel.app",
      tags: ["Astro", "CMS", "TailwindCSS", "Website"],
    },
    {
      title: "Rit App",
      description: "A 2019 PLTW Engineering Capstone project: a Flutter music multi-tool.",
      screenshot: "/images/music-notes-music-2.svg",
      link: "https://drive.google.com/file/d/1-GroNz4PkDPU1XbTesIEwAmjl2gR6y7j/view?usp=sharing",
      tags: ["Flutter", "Engineering", "Student Work"],
    },
  ];

  const designs = [
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
</script>

<section class="flex flex-col w-full h-full p-0 lg:p-8 gap-8">
  <h2 class="text-4xl lg:text-5xl font-generalsans font-bold">Projects</h2>
  <div class="flex flex-col lg:flex-row gap-8 lg:overflow-x-auto">
    {#each works as w}
    <a href={w.link} target="_blank" rel="noreferrer">
      <div class="flex flex-col gap-4 group">
        <img src={w.screenshot} alt={w.title} class="w-fit h-fit"/>
        <div class="group-hover:bg-[#f3cc30] transition-all duration-300 p-0 lg:p-4 h-full group-hover:text-black">
          <h3 class="text-3xl lg:text-4xl font-generalsans group-hover:font-bold">
            {w.title}
          </h3>
          <p class="text-xl lg:text-2xl font-quicksand">{w.description}</p>
        </div>
      </div>
    </a>
    {/each}
  </div>

  <h2 class="text-4xl lg:text-5xl font-generalsans font-bold">Packages</h2>


  <h2 class="text-4xl lg:text-5xl font-generalsans font-bold">Tech Explorations</h2>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 grid-flow-row">
    {#each techs as t}
    <a href={t.link} target="_blank" rel="noreferrer">
      <div class="flex flex-col lg:flex-row w-full h-full gap-4 items-center border-white border rounded-xl px-4 py-2">
        <img src={t.screenshot} alt={t.title} class="w-full h-full max-w-xl max-h-xl p-8" />
        <div class="flex flex-col gap-4 p-4">
          <h3 class="font-bold text-2xl lg:text-3xl font-generalsans">{t.title}</h3>
          <p class="text-lg lg:text-xl font-quicksand">{t.description}</p>
        </div>
      </div>
    </a>
    {/each}
  </div>


  <h2 class="text-4xl lg:text-5xl font-generalsans font-bold">Design Explorations</h2>
  <div class="flex flex-col lg:flex-row gap-8 lg:overflow-x-auto">
    {#each designs as w}
    <a href={w.link}>
      <div class="flex flex-col gap-4 group">
        <img src={w.screenshot} alt={w.title} class="w-fit h-fit"/>
        <div class="group-hover:bg-[#f3cc30] transition-all duration-300 p-0 lg:p-4 h-full group-hover:text-black">
          <h3 class="text-3xl lg:text-4xl font-generalsans group-hover:font-bold">
            {w.title}
          </h3>
          <p class="text-xl lg:text-2xl font-quicksand">{w.description}</p>
        </div>
      </div>
    </a>
    {/each}
  </div>
</section>

