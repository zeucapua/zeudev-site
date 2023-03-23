<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<section id="contact" class="p-8">
  <div class="flex flex-col lg:flex-row w-fit gap-8 mx-auto"> 
    <p class="text-8xl font-['GeneralSans'] font-bold">
      Let's Talk
    </p> 
    <section class="flex flex-row justify-center gap-4">
      <div 
        class="w-16 h-16 m-auto rounded-full bg-[#e779c1]" /> 
      <div 
        class="w-16 h-16 m-auto rounded-full bg-[#f3cc30]" /> 
      <div 
        class="w-16 h-16 m-auto rounded-full bg-[#58c7f3]" /> 
      </section>
  </div>
  <div>
    <p class="text-2xl text-center my-8 font-['Quicksand']">
      Under Construction. Contact me on my socials:
    </p> 
    <div class="flex flex-row gap-8 text-6xl justify-center"> 
      <a href="https://github.com/zeucapua" aria-label="Go to Zeu's Github">
        <Icon icon="bi:github" class="text-white hover:text-[#e779c1]" />
      </a>
      <a href="https://linkedin.com/in/zeucapua" aria-label="Go to Zeu's Linkedin">
        <Icon icon="bi:linkedin" class="text-white hover:text-[#f3cc30]" />
      </a>
      <a href="https://twitter.com/zeu_dev" aria-label="Go to Zeu's Twitter">
        <Icon icon="bi:twitter" class="text-white hover:text-[#58c7f3]" />
      </a>
    </div>     
  </div>
</section>
