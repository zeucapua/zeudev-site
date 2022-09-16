<script>
  export let count = 1;

  function incrementCount() {
    count += 1;
  }
</script>

<button class="btn block my-2" on:click={incrementCount}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>