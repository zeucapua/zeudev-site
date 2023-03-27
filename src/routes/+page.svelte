<script lang="ts">
  import Icon from "@iconify/svelte";
  import Banner from "$lib/Banner.svelte";
  import ContactSection from "$lib/ContactSection.svelte";
  import ProjectSection from "$lib/ProjectSection.svelte";

</script>

<svelte:head>
  <title>Zeu Capua - Full Stack Developer</title>
</svelte:head>

<div class="flex flex-col w-full min-w-screen h-full text-white p-8">
  <Banner>
    CURRENT PROJECT: 
    <a 
      class="font-bold font-quicksand text-white underline" 
      href="https://github.com/zeucapua/lophop" target="_blank" rel="noreferrer"
    >Lophop</a>,
    an all-in-one online teaching tool designed for coding classes
  </Banner>
  <section 
    class="flex flex-row justify-center gap-8 w-fit px-8 py-4 my-8 mx-auto rounded-xl bg-[#58c7f3]"
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
        class="w-16 h-16 md:w-48 md:h-48 rounded-full bg-[#e779c1]" />
      <div 
        class="w-16 h-16 md:w-48 md:h-48 rounded-full bg-[#f3cc30]" />
      <div 
        class="w-16 h-16 md:w-48 md:h-48 rounded-full bg-[#58c7f3]" />
    </div>
    <div class="flex flex-col gap-8 mx-auto text-center">
      <p 
        class="font-bold font-['GeneralSans'] text-4xl lg:text-7xl text-center text-white">
        Hello, I'm Zeu.
      </p>
      <p 
        class="text-3xl lg:text-6xl font-thin w-full max-w-5xl text-white font-quicksand"
      >
        I make websites for clients, and aim to write and create content
        to make web development easier and accessible.
      </p>
      <div 
      >
        <Icon icon="bi:chevron-down" class="animate-bounce mx-auto text-3xl lg:text-6xl text-white" />
      </div>
    </div>
  </section>

  <ProjectSection />
  <ContactSection /> 

</div>

