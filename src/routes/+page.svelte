<script lang="ts">
  import Icon from "@iconify/svelte";
  import { experience, explorations, technologies } from "$lib/information";
</script>

<svelte:head>
  <title>Zeu Capua - Full Stack Web Developer</title>
</svelte:head>

<!-- quick links -->
<section class="flex flex-col gap-4 mx-auto justify-center items-center border border-2 p-6 lg:p-8 rounded-xl border-black border-dashed">
  <h3 class="text-3xl lg:text-5xl font-bold">
    <Icon icon="pixelarticons:external-link" class="inline" />
    quick links
  </h3>
  <nav class="flex font-bold gap-8 font-quicksand underline underline-offset-8 decoration-dotted">
    <a href="https://thoughts.zeu.dev" target="_blank">
      Thoughts
    </a>
    <a href="https://github.com/zeucapua" target="_blank">
      Github
    </a>
    <a href="https://twitter.com/zeu_dev" target="_blank">
      Twitter
    </a>
  </nav>
</section>


<!-- hero -->
<section class="flex flex-col gap-4">
  <h1 class="text-7xl lg:text-9xl font-bold items-center">
    <Icon icon="pixelarticons:moon-stars" class="inline border border-4 border-black p-4 rounded-xl hover:bg-yellow-400 hover:-rotate-12 transition-all duration-300 shadow-xl" />
    zeu capua
  </h1>
  <h2 class="text-4xl lg:text-7xl font-bold font-quicksand">
    making the web fun and understandable for everyone
  </h2> 
</section>


<!-- experience -->
<section class="flex flex-col gap-4">
  <h3 class="text-3xl lg:text-5xl font-bold">
    <img 
      src="/content-files-pencil-ruler-3.svg" 
      alt="Pencil cup from Streamline HQ"
      class="inline w-20 lg:w-32 border border-4 border-black p-4 rounded-xl hover:-rotate-12 hover:bg-yellow-400 transition-all duration-300 shadow-xl"/>
    experience
  </h3>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-x-auto">
    {#each experience as exp}
      <a href={exp.link} class="flex flex-col gap-4 border border-2 border-dashed border-black rounded-xl p-4 w-full max-w-2xl justify-between hover:bg-yellow-400 transition-all duration-300">
        <div>
          <h4 class="text-3xl font-black">{exp.title}</h4>
          <p class="text-xl italic font-normal">{exp.organization}</p>
        </div>

        <p class="font-bold font-quicksand">{exp.description}</p>
        <div class="flex gap-4">
          {#each exp.tech as tech}
            <!-- change to component with link to tech -->
            <Icon icon={technologies[tech]} class="text-5xl border border-black border-dashed border-2 rounded-full p-2" />
          {/each}
        </div>
      </a>
    {/each}
  </div>
</section>


<!-- explorations -->
<section class="flex flex-col gap-4">
  <h3 class="text-3xl lg:text-5xl font-bold">
    <img 
      src="/coding-apps-websites-dinosaur-error-4.svg" 
      alt="Dinosaur Error 4 from Streamline HQ"
      class="inline w-20 lg:w-32 border border-4 border-black p-4 rounded-xl hover:-rotate-12 hover:bg-yellow-400 transition-all duration-300 shadow-xl"
    />
    explorations
  </h3>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
    {#each explorations as exp}
      <a href={exp.link} class="flex flex-col justify-between gap-2 p-4 border border-2 border-dashed border-black rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-lg">
        <h5 class="text-lg font-black">{exp.title}</h5>
        <p class="font-quicksand">{exp.description}</p>
        <div class="flex justify-between">
          <div class="flex gap-2">
            {#each exp.tech as tech}
              <Icon icon={technologies[tech]} class="text-3xl border border-black border-dashed rounded-full p-1" />
            {/each}
          </div> 
          <Icon icon={"pixelarticons:external-link"} class="self-end" />
        </div>
      </a>
    {/each}
  </div>
</section>


<!-- testimonials -->



<!-- contact me -->
<section class="flex flex-col gap-4">
  <h3 class="text-3xl lg:text-5xl font-bold">
    <img 
      src="/coding-apps-websites-conference-2.svg" 
      alt="Conference 2 from Streamline HQ"
      class="inline w-20 lg:w-32 border border-4 border-black p-4 rounded-xl hover:-rotate-12 hover:bg-yellow-400 transition-all duration-300 shadow-xl"
    />
    information desk
  </h3>
  <a href="/Capua-Resume.pdf" download class="flex gap-4 items-center w-fit border border-2 border-black border-dashed p-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-lg">
    <img
      src="/content-files-pdf-2.svg"
      alt="PDF 2 from Streamline HQ"
      class="w-16"
    />
    <p class="flex flex-col text-xl font-black font-quicksand">
      Resume 
      <span class="text-sm">(last updated: 11-18-2023)</span>
    </p>
  </a>
</section>


<!-- credits -->
<section class="flex flex-col mx-auto items-center gap-2">
  <div class="flex gap-4">
    <img 
      src="/pet-animals-bear.svg" 
      alt="Pet Bear from Streamline HQ"
      class="w-16" 
    />
    <img 
      src="/pet-animals-buffalo-1.svg" 
      alt="Pet Buffalo from Streamline HQ"
      class="w-16" 
    />
    <img 
      src="/pet-animals-gorilla-2.svg" 
      alt="Pet Gorilla from Streamline HQ"
      class="w-16" 
    />
  </div>
  <div class="flex flex-col items-center font-quicksand">
    <p>Art by Streamline HQ</p>
    <p>Logos from Iconify (various packs)</p>
  </div>
</section>
