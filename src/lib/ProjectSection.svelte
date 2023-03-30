<script lang="ts">
  import Icon from "@iconify/svelte";
  import { Trace, TLine } from "trace-svelte";
  import { Typewriter, Text, Wait } from "typew";
  import Technologies from "$lib/Technologies.svelte";

  let step = 0;
  let highlights = [
    [],
    [1],
    [1,3],
    [2]
  ];
  let playing = false;
  let play_interval : ReturnType<typeof setInterval>; 
  function increment() {
    if (step < highlights.length - 1) {
      step += 1;
    }
    else {
      togglePlaying();
      step = 0;
    }
  }
  function togglePlaying() { playing = !playing; }
  $: {
    if (!playing) { clearInterval(play_interval); }
    else {
      play_interval = setInterval(increment, 1250); 
    }
  }


  const works = [
    {
      title: "Progressive Victory",
      description: "Designed and developed for an online community dedicated to getting young voters out for elections.",
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

<section class="flex flex-col w-full max-w-7xl h-full mx-auto p-0 lg:p-8 gap-8">
  <h2 class="text-4xl lg:text-5xl font-generalsans font-bold">Projects</h2>
  <div class="flex flex-col lg:flex-row gap-8 lg:overflow-x-auto">
    {#each works as w}
    <a href={w.link} target="_blank" rel="noreferrer">
      <div class="flex flex-col gap-4 group">
        <img src={w.screenshot} alt={w.title} class="w-fit h-fit aspect-video"/>
        <div class="group-hover:bg-[#f3cc30] transition-all duration-300 p-2 lg:p-4 h-full group-hover:text-black">
          <h3 class="text-3xl lg:text-4xl font-generalsans group-hover:font-bold">
            {w.title}
          </h3>
          <p class="text-xl lg:text-2xl font-quicksand">{w.description}</p>
        </div>
      </div>
    </a>
    {/each}
  </div>

  <Technologies />

  <h2 class="text-4xl lg:text-5xl font-generalsans font-bold">Packages</h2>
  <p class="text-2xl lg:text-3xl font-quicksand">
    Use these in your projects via <span class="font-mono">npm</span>
  </p>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 grid-flow-row">

    <div class="flex flex-col lg:flex-row divide-y-2 lg:divide-y-0 lg:divide-x-2 gap-8 mx-auto border-white border rounded-xl p-8 w-full h-full">
      <div class="font-quicksand text-3xl text-center self-center basis-1/2">
        <Typewriter autoplay loop>
          <Text content="Hello" />
          <Wait duration={1000} />
          <Text content="World!" />
          <Wait duration={1000} />
        </Typewriter>
      </div>
      <div class="flex flex-col gap-4 px-4 py-4 lg:py-0">
        <h3 class="text-3xl font-generalsans font-bold">typew</h3>
        <p class="text-xl font-quicksand">An intuitive typewriter effect for your Svelte applications</p>
        <div class="flex flex-row gap-4">
          <a href="https://npmjs.com/package/typew" aria-label="Go to typew npmjs entry" target="_black" rel="noreferrer">
            <Icon icon="mdi:npm" class="w-16 h-16" />
          </a>
          <a href="https://github.com/zeucapua/typew" aria-label="Go to typew Github repo" target="_black" rel="noreferrer">
            <Icon icon="mdi:github" class="w-16 h-16"/>
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row divide-y-2 lg:divide-y-0 lg:divide-x-2 gap-8 mx-auto border-white border rounded-xl p-8 w-full h-full">
      <div class="font-quicksand text-xl self-center basis-1/2">
        <button aria-label="Play/Pause the Trace demo" on:click={togglePlaying}>
        {#if playing}
          <Icon icon="material-symbols:pause-outline-rounded" class="w-8 h-8" />
        {:else}
          <Icon icon="material-symbols:play-arrow-rounded" class="w-8 h-8" />
        {/if}
        </button>
        <Trace {step} {highlights}>
          <TLine>const a = 42;</TLine>
          <TLine>a += 20;</TLine>
          <TLine>console.log(a)</TLine>
        </Trace>
      </div>
      <div class="flex flex-col gap-4 px-4 py-4 lg:py-0">
        <h3 class="text-3xl font-generalsans font-bold">trace</h3>
        <p class="text-xl font-quicksand">A line by line highlighter for Svelte</p>
        <div class="flex flex-row gap-4">
          <a href="https://npmjs.com/package/trace-svelte" aria-label="Go to trace-svelte npmjs" target="_black" rel="noreferrer">
            <Icon icon="mdi:npm" class="w-16 h-16" />
          </a>
          <a href="https://github.com/zeucapua/trace-svelte" aria-label="Go to trace-svelte Github repo" target="_black" rel="noreferrer">
            <Icon icon="mdi:github" class="w-16 h-16"/>
          </a>
          <a href="https://trace-svelte.vercel.app" aria-label="Go to trace-svelte demo site" target="_black" rel="noreferrer">
            <Icon icon="gridicons:site" class="w-16 h-16"/>
          </a>
        </div>

      </div>
    </div>
  </div>


  <h2 class="text-4xl lg:text-5xl font-generalsans font-bold">Tech Explorations</h2>
  <p class="text-2xl lg:text-3xl font-quicksand">
    Projects made while learning different frameworks and services
  </p>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 grid-flow-row">
    {#each techs as t}
    <a href={t.link} target="_blank" rel="noreferrer">
      <div class="flex flex-col lg:flex-row w-full h-full gap-4 items-center border-white border rounded-xl px-4 py-2">
        <img src={t.screenshot} alt={t.title} class="aspect-square w-64 h-64 p-8" />
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
        <img src={w.screenshot} alt={w.title} class="w-fit h-fit aspect-[4/3]"/>
        <div class="group-hover:bg-[#f3cc30] transition-all duration-300 p-2 lg:p-4 h-full group-hover:text-black">
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

