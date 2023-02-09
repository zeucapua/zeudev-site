<script lang='ts'>
  import { fade } from 'svelte/transition';

  const menuItemStyle = "text-9xl font-bold tracking-tighter transition-all duration-300";
  const itemStyleLeft = menuItemStyle + " text-start";
  const itemStyleRight = menuItemStyle + " text-end";

  const sideItemStyle = "text-3xl font-bold tracking-tighter"

  let themeColor : string = '#F4F1DE';

  function setColorOne() { themeColor = '#E07A5F'; }

  function setColorTwo() { themeColor = '#3D405B'; }

  function setColorThree() { themeColor = '#81B29A'; }

  function setColorFour() { themeColor = '#F2CC8F'; }

  function resetColor() { themeColor = '#F4F1DE'; }

  const menuStyle = "relative flex flex-col w-full min-w-screen h-full min-h-screen justify-between p-8 transition-colors duration-300";
  

</script>

<div id="menu" class={menuStyle} style="background-color: {themeColor};">

  <div id="top-links" class="flex flex-row w-full justify-between z-20">
    <a href='/portfolio' class={sideItemStyle}>ACME</a>
    <a href='/portfolio' class={sideItemStyle}>Close</a>
  </div>

  <div id="menu-items" class="flex flex-col grow justify-evenly z-20">

    <a id="menu-item" href='https://unsplash.com/photos/gQxpuAU6mLU' class={itemStyleLeft}>
      <p on:mouseenter={setColorOne} on:mouseleave={resetColor}>
        Portraits
      </p>
    </a>
    <a id="menu-item" href='https://unsplash.com/photos/8RWuRNHbJvw' class={itemStyleRight}>
      <p on:mouseenter={setColorTwo} on:mouseleave={resetColor}>
        Project
      </p>
    </a>
    <a id="menu-item" href='https://unsplash.com/photos/YQc8LWOXLHQ' class={itemStyleLeft}>
      <p on:mouseenter={setColorThree} on:mouseleave={resetColor}>
        Commissions
      </p>
    </a>
    <a id="menu-item" href='https://unsplash.com/photos/9UnV0H8mB2g' class={itemStyleRight}>
      <p on:mouseenter={setColorFour} on:mouseleave={resetColor}>
        Film
      </p>
    </a>

  </div>

  <div id="center-display" class="z-10">
    {#if themeColor == '#E07A5F'}
      <img in:fade="{{ duration: 300 }}" src='/images/george-dagerotip-gQxpuAU6mLU-unsplash.jpg' alt='by George Dageroti' />
    {:else if themeColor == '#3D405B'}
      <img in:fade="{{ duration: 300 }}" src='/images/klara-kulikova-8RWuRNHbJvw-unsplash.jpg' alt='by Klara Kulikova' />
    {:else if themeColor == '#81B29A'}
      <img in:fade="{{ duration: 300 }}" src='/images/zhanna-rinatova-YQc8LWOXLHQ-unsplash.jpg' alt='by Zhanna Rinatova'/>
    {:else if themeColor == '#F2CC8F'}
      <img in:fade="{{ duration: 300 }}" src='/images/dmitry-ganin-9UnV0H8mB2g-unsplash.jpg' alt='by Dmitry Ganin' />
    {:else}
      <div />
    {/if}
  </div>
  

  <div id="bottom-links" class="flex flex-row w-full justify-between z-20">
    <a href='https://www.daniellelevitt.com' class={sideItemStyle}>Inspiration - Danielle Levitt</a>
    <a href='/portfolio' class={sideItemStyle}>Coded by Zeu Capua</a>
  </div>


</div>

<style>
#center-display {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#menu-items:hover > #menu-item {
  opacity: 0.25;
  color: black;
}

#menu-items:hover > #menu-item:hover {
  opacity: 1;
  color: white;
}
</style>