<script>
  export let title;
  export let publishDate;
</script>

<div class="flex flex-col w-full h-fit not-prose border-b-2 pt-8 mb-8">
  <div>
    <p class="text-4xl md:text-5xl text-white font-black">{title}</p>
  </div>
  <div class="flex py-3 flex-row gap-8 font-bold">
    <p class="text-primary">by Zeu Capua</p>
    <p class="text-secondary">{publishDate}</p>
  </div>
</div>