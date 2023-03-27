<script>
  import Icon from "@iconify/svelte";

  const frameworks = [
    { name: "React", icon: "mdi:react" },
    { name: "Tailwind", icon: "mdi:tailwind" },
    { name: "Svelte", icon: "carbon:logo-svelte" },
    { name: "Astro", icon: "simple-icons:astro" },
    { name: "NextJS", icon: "file-icons:nextjs" },
  ];
  
  const languages = [
    { name: "Deno", icon: "simple-icons:deno" },
    { name: "NodeJS", icon: "mdi:nodejs" },
    { name: "Git", icon: "mdi:git" },
    { name: "Stripe", icon: "bi:stripe" }, 
    { name: "Typescript", icon: "mdi:language-typescript" },
    { name: "Javascript", icon: "mdi:language-javascript" },
    { name: "HTML", icon: "mdi:language-html5" },
    { name: "CSS", icon: "mdi:language-css3" },
  ];
</script>

<section class="flex flex-col gap-8">
  <div class="flex flex-col lg:flex-row lg:justify-between gap-8">
    <h2 class="text-4xl lg:text-5xl font-generalsans font-bold">Frameworks</h2>
    <div class="flex flex-row flex-wrap justify-start gap-8">
      {#each frameworks as f}
        <Icon icon={f.icon} class="w-12 h-12"/>
      {/each}
    </div>
  </div>

  <div class="flex flex-col lg:flex-row lg:justify-between gap-8">
    <h2 class="text-4xl lg:text-5xl font-generalsans font-bold">Languages & Other Technologies</h2>
    <div class="flex flex-row flex-wrap lg:flex-wrap-reverse max-w-md lg:justify-end gap-8 ">
      {#each languages as l}
        <Icon icon={l.icon} class="w-12 h-12 fill-white"/>
      {/each}
    </div>
  </div>
</section>
