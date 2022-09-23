<script>
  import Icon from '@iconify/svelte';
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
  import { faker } from '@faker-js/faker';

  // routes for CRUD
  let items = []; 

  // route CRUD functions
  function create() {
    let num = items.length;
    items = [...items, {id: faker.datatype.uuid(), name: ("item" + num), parent: "", layers: 0}];
  }

  function moveLeft(id) {
    let current = items.find(item => item.id == id);
    let previous = items[items.findIndex(item => item.id == id) - 1];

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

  function moveRight(id) {
    let current = items.find(item => item.id == id);
    let previous = items[items.findIndex(item => item.id == id) - 1];
    
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

  function remove(id) {
    let filtered = items.filter((i) => i.id != id);
    console.log(filtered);
    items = [...filtered];
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
  
  function exportString() {
    let result = '';
    items.forEach((item) => {
      if (item.layers > 0) {
        result += `${('   ').repeat(item.layers)}└─ /${item.name}\n`;
      }
      else {
        result += `/${item.name}\n`;
      }
    });
    console.log(result);
  }

</script>

<div class="card card-side mx-10 my-10 bg-white/50 backdrop-blur-md">
  <div class="flex flex-col gap-8 p-5">
    <button class="btn" on:click={create}>Add</button>
    <button class="btn" on:click={exportString}>Export</button>
  </div>
  <div class="card-body border-2 rounded-lg m-5 overflow-y-clip">
    <div 
      class="flex flex-col gap-3 mx-auto" 
      use:dndzone={{items, flipDurationMs}} 
      on:consider={handleDndConsider} on:finalize={handleDndFinalize}
    >
      {#each items as item(item.id)}
        <div 
          animate:flip="{{duration: flipDurationMs}}" 
          class="flex flex-row justify-items-stretch w-fit px-3 py-2 bg-neutral rounded-lg"
          style:margin-left={item.layers > 0 ? `${item.layers * 25}px` : "0"}
        >
          <button class="btn btn-ghost" on:click={remove(item.id)}>
            <Icon icon="bi:x-circle" />
          </button>
          <input type="text" bind:value={item.name} placeholder={item.name} class="input input-ghost basis-1/2" />
          <div class="basis-1/2 justify-self-end">
            {#if item.parent}
              <button class="btn btn-ghost" on:click={moveLeft(item.id)}>
                <Icon icon="bi:arrow-bar-left" />
              </button>
            {/if}
            <button class="btn btn-ghost" on:click={moveRight(item.id)}>
              <Icon icon="bi:arrow-bar-right" />
            </button>
          </div>
          
        </div>
      {/each}  
    </div>
  </div>
  
</div>


