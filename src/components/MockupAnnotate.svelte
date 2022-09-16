<script>
  export let line = "";
  export let prefix = "";
  export let annotation = "";
  export let lineTailwind = "";
  export let annotationTailwind = "";
</script>

<div class="collapse">
  <input type="checkbox" />
  <div class="collapse-title px-0">
    <pre data-prefix={prefix} class={"my-0 rounded-none " + lineTailwind}><code>{line}</code></pre>
  </div>
  <div class={"collapse-content rounded-none " + annotationTailwind}>
    <p class="py-3">
      {annotation}
    </p>
  </div>
</div>