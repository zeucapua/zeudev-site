<script>
  import Icon from '@iconify/svelte';
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
  import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

  // routes for CRUD
  let items = []; 

  // route CRUD functions
  function create() {
    let num = items.length;
    items = [...items, {id: faker.datatype.uuid(), name: ("item" + num), parent: "", layers: 0}];
  }

  function moveLeft(name) {
    let current = items.find(item => item.name == name);
    let previous = items[items.findIndex(item => item.name == name) - 1];

    if (current.parent == previous.parent) {
      let grandfather = items.find(item => item.name == current.parent).parent;
      current.parent = grandfather;
      current.layers--;
    }
    else {
      current.parent = previous.parent;
      current.layers--;
    }
    if (current.layers < 0) { current.layers = 0; }
    update();
  }

  function moveRight(name) {
    let current = items.find(item => item.name == name);
    let previous = items[items.findIndex(item => item.name == name) - 1];
    
    if (current.parent != previous.name) {
      if (current.parent == previous.parent) {
        current.parent = previous.name;
        current.layers++;
      }
      else if (previous.parent != "") { 
        current.parent = previous.parent;
        current.layers++;
      }
    }
    update();
  }


  // svelte-dnd-action functions and svelte flip animation duration
  const flipDurationMs = 300;

	function handleDndConsider(e) {
		items = e.detail.items;
	}

	function handleDndFinalize(e) {
		items = e.detail.items;
    
    update();
	}


  // utilities
  function update() {
    items.forEach((item, index) => {
      if (index == 0) {
        item.parent = "";
      } 
      else {
        let previous = items[index-1];
        if (item.parent != previous.name) {
          if (item.parent == previous.parent) {
            item.layers = previous.layers;
          }
          else {
            item.parent = "";
            item.layers = 0;
          }
          
        }
        else if (item.parent == previous.name) {
          item.layers = previous.layers + 1;
        }
      }
    });
    items = [...items];
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
      class="flex flex-row justify-items-stretch w-64 px-3 py-2 bg-neutral rounded-md"
      style:margin-left={item.layers > 0 ? `${item.layers * 10}px` : "0"}
    >
      <p class="text-lg my-auto basis-1/2">{item.name}</p>
      <div class="basis-1/2 justify-self-end">
        {#if item.parent}
          <button class="btn btn-ghost" on:click={moveLeft(item.name)}>
            <Icon icon="bi:arrow-bar-left" />
          </button>
        {/if}
        <button class="btn btn-ghost" on:click={moveRight(item.name)}>
          <Icon icon="bi:arrow-bar-right" />
        </button>
      </div>
      
    </div>
  {/each}  
</div>

<div class="flex flex-row gap-8">
  <button class="btn" on:click={create}>Add</button>
  <button class="btn" on:click={create}>Export</button>
</div>