<script>
  export let title;
  export let publishDate;
</script>

<div class="flex flex-col w-full h-fit not-prose border-b-2 pt-8 mb-8">
  <a href="/blogs">
    <p class="text-xl text-accent font-['Radwave'] mb-4">← Back</p>
  </a>
  <p class="text-4xl text-primary md:text-5xl font-['Radwave'] tracking-wide">{title}</p>
  <div class="flex py-3 flex-row gap-8 font-bold">
    <p class="text-secondary">by Zeu Capua</p>
    <p class="text-secondary">{publishDate}</p>
  </div>
</div>
