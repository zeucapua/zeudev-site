<script>
  import Icon from '@iconify/svelte';
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
    import { dataset_dev } from 'svelte/internal';
  
  // routes for CRUD
  let items = [
		{id: 11, name: "item11", parent: ""},
    {id: 12, name: "item12", parent: ""},
		{id: 13, name: "item13", parent: ""},
		{id: 14, name: "item14", parent: "item13"},
		{id: 15, name: "item15", parent: "item13"},
		{id: 16, name: "item16", parent: ""},
		{id: 17, name: "item17", parent: ""}
	]; 

  // route CRUD functions
  function create() {
    let num = items.length;
    items = [...items, {id:num, name: ("item" + num), parent: ""}];
  }

  function moveLeft(name) {
    let current = items.find(item => item.name == name);
    let previous = items[items.findIndex(item => item.name == name) - 1];

    if (current.parent == previous.parent) {
      let grandfather = items.find(item => item.name == current.parent).parent;
      current.parent = grandfather;
    }
    else {
      let newParent = previous.parent;
      const temp = items.filter(item => item.name != current.name);
      temp.splice(temp.lastIndexOf(item => item.parent == current.parent)-1, 0, current);
      current.parent = newParent;
      items = [...temp];
    }

    update();
  }

  function moveRight(name) {
    let current = items.find(item => item.name == name);
    let previous = items[items.findIndex(item => item.name == name) - 1];
    current.parent = previous.name;
    update();
  }


  // svelte-dnd-action functions and svelte flip animation duration
  const flipDurationMs = 300;

	function handleDndConsider(e) {
		items = e.detail.items;
	}

	function handleDndFinalize(e) {
		items = e.detail.items;items.forEach((item, index) => {
      if (index == 0) {
        item.parent = "";
      } 
      else {
        let previous = items[index-1];
        if (item.parent != previous.name && item.parent != previous.parent) {
          item.parent = "";
        }
      }
    });
    update();
	}

  function update() {
    items = [...items];
    console.log(items);
  }
  
</script>

<div 
  class="flex flex-col gap-3 mx-auto" 
  use:dndzone={{items, flipDurationMs}} 
  on:consider={handleDndConsider} on:finalize={handleDndFinalize}
>
  {#each items as item(item.id)}
    <div 
      animate:flip="{{duration: flipDurationMs}}" 
      class={(item.parent != "" ? "ml-3" : "ml-0") + " px-3 py-2 w-fit bg-neutral"}
    >
      {item.name}
      {#if item.parent}
        <button class="btn btn-ghost" on:click={moveLeft(item.name)}>
          <Icon icon="bi:arrow-bar-left" />
        </button>
      {/if}
      <button class="btn btn-ghost" on:click={moveRight(item.name)}>
        <Icon icon="bi:arrow-bar-right" />
      </button>
    </div>
  {/each}  
</div>

<button class="btn" on:click={create}>Add</button>