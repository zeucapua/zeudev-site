<script>
  export let line = "";
  export let prefix = "";
  export let annotation = "";
  export let lineTailwind = "";
  export let annotationTailwind = "";
</script>

<div class="collapse collapse-arrow text-black">
  <input type="checkbox" />
  <div class="collapse-title px-0">
    <pre data-prefix={prefix} class={"rounded-none " + lineTailwind}><code>{line}</code></pre>
  </div>
  <div class={"collapse-content rounded-none mb-3 " + annotationTailwind}>
    <p class="pt-3">
      {annotation}
    </p>
  </div>
</div>