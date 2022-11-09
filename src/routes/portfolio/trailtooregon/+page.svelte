<script lang="ts">
  const credits : {title : string, credit : string}[] = [
    {title: "Father", credit: "Jeff Blim"},
    {title: "Mother", credit: "Rachael Soglin"},
    {title: "Daughter", credit: "Jaime Lyn Beatty"},
    {title: "Son", credit: "Lauren Lopez"},
    {title: "Grandpa, Cletus Jones", credit: "Corey Dorris"},
    {title: "McDoon, Everyone Else", credit: "Joey Richter"},

    {title: "Book", credit: "Jeff Blim, Nick Lang, Matt Lang"},
    {title: "Additional Writing", credit: "Brian Holden"},
    {title: "Music", credit: "Jeff Blim"},
    {title: "Director", credit: "Nick Lang"},
    {title: "Music Direction", credit: "Clark Baxtresser, Pierce Siebers, Jeff Blim"},
    {title: "Choreography", credit: "Katie Spellman"},
    {title: "Set", credit: "Jen Lang, Teia Smith"},
    {title: "Costumes", credit: "Matt Lang"},
    {title: "Light", credit: "Sarah Petty"},
    {title: "Sound Design", credit: "Mark Swiderski"},
    {title: "Stage Manager", credit: "Ruby Summers"},
    {title: "Asst. Stage Manager", credit: "Jess Dumbroff"},

    {title: "Keyboard 1, Vocals", credit: "Clark Baxtresser"},
    {title: "Keyboard 2, Vocals", credit: "Pierce Siebers"},
    {title: "Keyboard 3, Banjo", credit: "Max Evrard"},
    {title: "Guitar", credit: "Corey Richardson"},
    {title: "Bass",credit: "Mason Cormie"},
    {title: "Drums", credit: "Nick Kabat"}
  ];
</script>


<div id="main" class="relative flex flex-col w-full min-w-screen h-full min-h-screen bg-orange-200 font-['Hoover'] bg-blend-multiply">
  
  <div class="w-full 2xl:w-1/2 2xl:mx-auto z-50">
    <p class="text-xl md:text-2xl tracking-widest py-8 uppercase text-center text-[#400E00]">© StarKid Productions, LLC</p>
    <div class="w-[90%] h-2 bg-[#400E00] mx-auto"></div>
    <div class="flex flex-col justify-around">
      <img src="/images/tto-logo.png" alt="Trail to Oregon Logo" class="basis-1/3 drop-shadow-2xl mx-auto" />
      <div class="flex flex-row mb-8">
        <a href="/" class="px-4 py-2 text-xl md:text-4xl font-bold tracking-wider text-[#400E00] mx-auto my-auto hover:underline hover:decoration-4 hover:underline-offset-8">
          Home
        </a>
        <a href="/tto/#about" class="px-4 py-2 text-xl md:text-4xl font-bold tracking-wider text-[#400E00] mx-auto my-auto hover:underline hover:decoration-4 hover:underline-offset-8">
          About
        </a>
        <a href="https://music.apple.com/us/album/the-trail-to-oregon/967361240" class="px-4 py-2 text-xl md:text-4xl font-bold tracking-wider text-[#400E00] mx-auto my-auto hover:underline hover:decoration-4 hover:underline-offset-8">
          Music
        </a>
        <a href="https://starkid.annarbortees.com/collections/trail-to-oregon" class="px-4 py-2 text-xl md:text-4xl font-bold tracking-wider text-[#400E00] mx-auto my-auto hover:underline hover:decoration-4 hover:underline-offset-8">
          Merch
        </a>
      </div>
    </div>
    <div class="w-[90%] h-2 bg-[#400E00] mx-auto mb-8 "></div>
  
    <div class="w-[90%] p-4 md:p-8 bg-[#400E00] mx-auto mb-8 md:mb-16 rounded-xl">
      <iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/BxKCX-UvPrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    
    <div id="about" class="flex flex-col gap-8">
      <div class="w-[90%] h-2 bg-[#400E00] mx-auto"></div>
      <p class="text-[#400E00] text-2xl md:text-4xl font-bold w-9/12 text-center mx-auto">
        Join our All-American family as they journey down the
      </p>
      <p class="font-bold text-6xl md:text-8xl text-[#400E00] mx-auto tracking-wider uppercase text-center">The Trail to Oregon!</p> 
  
      <div class="grid grid-cols-1 lg:grid-cols-2 justify-between">
        <img src="/images/dikrats.png" alt="Dikrats Family" class="basis-1/2 w-full sepia mb-8 lg:mb-0" />
        <p class="text-[#400E00] text-lg md:text-2xl basis-1/2 px-8 my-auto indent-8 leading-normal md:leading-relaxed">
          The Trail to Oregon! is an original musical produced by Starkid Productions and was performed in Chicago in the summer of 2014. It is also the most historically accurate musical portraying the Oregon Trail to date; featuring 12 educational songs, a set precisely replicating the trail’s landscape, and appearances from famous historical figures, such as: Henry McDoon, Cletus Jones, and Cornwallis.  Watch it if you want.
        </p>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-8 mx-8 my-16 text-[#400E00]">
      <a href="https://starkid.annarbortees.com/collections/trail-to-oregon" class="grow">
        <button class="w-full border-4 border-[#400E00] bg-none hover:bg-[#400E00] hover:text-white transition-all duration-150 rounded-lg px-8 py-4 text-3xl font-bold">
          Get the Merch
        </button>
      </a>  
      <a href="https://music.apple.com/us/album/the-trail-to-oregon/967361240" class="grow">
        <button class="w-full border-4 border-[#400E00] bg-none hover:bg-[#400E00] hover:text-white transition-all duration-150 rounded-lg px-8 py-4 text-3xl font-bold">
          Listen to the Music
        </button>
      </a>    
    </div>

    <p class="text-5xl md:text-7xl font-bold text-center text-[#400E00] tracking-wider">⭑ CREDITS ⭑</p>

    <div class="columns-2 md:columns-3 lg:columns-5 gap-12 mx-8 md:mx-16 my-8">
      {#each credits as {title, credit}}
        <div class="flex flex-col gap-2 w-full h-fit break-inside-avoid-column py-4 text-[#400E00]">
          <p class="text-3xl font-bold text-center">{title}</p>
          <div class="h-1 bg-[#400E00] w-1/2 mx-auto" />
          <p class="text-2xl text-center">{credit}</p>
        </div>
      {/each}
    </div>

    


  </div>
  

  
  <img id="cornwallis" src="/images/cornwallis.png" alt="Cornwallis the Lobster" 
    class="sepia z-50 fixed bottom-0 right-0 drop-shadow-2xl translate-y-2/3 hover:translate-y-0 transition-all duration-300" 
  />
  <div class="absolute z-10 bg-[url('/images/Indieground_PhotocopyNoise_Textures_04.jpg')] w-full min-w-screen h-full min-h-screen mix-blend-multiply"></div>
  
</div>
