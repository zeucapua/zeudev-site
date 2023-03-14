<script lang="ts">
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";
</script>

<section id="contact" class="p-16">
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
</section>
