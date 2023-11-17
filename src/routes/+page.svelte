<script lang="ts">
  import { experience } from "$lib/information";
  import Icon from "@iconify/svelte";
</script>

<svelte:head>
  <title>Zeu Capua - Full Stack Web Developer</title>
</svelte:head>

<!-- quick links -->
<section class="flex flex-col gap-4 mx-auto justify-center items-center">
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
    <Icon icon="pixelarticons:moon-stars" class="inline border border-4 border-black p-4 rounded-xl hover:-rotate-12 transition-all duration-300 shadow-xl" />
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
      class="inline w-32 border border-4 border-black p-4 rounded-xl hover:-rotate-12 transition-all duration-300 shadow-xl"/>
    experience
  </h3>
  {#each experience as exp}
    <p>{exp.title}</p>
  {/each}
</section>


<!-- explorations -->



<!-- testimonials -->



<!-- contact me -->



<!-- credits -->
<section>
  <p>Art by Streamline HQ</p>
  <p>Logos from Iconify (various packs)</p>
</section>



