<script>
  import Icon from '@iconify/svelte';
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
  import { faker } from '@faker-js/faker';

  // routes for CRUD
  let items = []; 
  let result = "";

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
  
  function clear() {
    items = [];
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
        item.layers = 0;
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
        else {
          item.layers = previous.layers + 1;
        }
      }
    });
    items = [...items];
  }
  
  function exportString() {
    result = '';
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

<div class="container w-full h-screen flex mx-auto">
  <div class="flex flex-row border-2 gap-8 rounded-lg w-full h-5/6 my-auto bg-base-100/60">
    
    <div class="flex flex-col h-full mx-auto p-5 basis-1/3">
      <a href="/portfolio">
        <p class="text-xl text-accent font-['Radwave'] mb-4">← Back</p>
      </a>
      
      <p class="text-5xl font-['Radwave'] text-primary">seesrc</p>
      <p class="text-xl font-['Radwave'] text-secondary">Show your project and file structure easily.</p>
      <p class="text-lg">
        Drag and drop, rename, add, and delete to make 
        great displays, exported as text so you're ready
        to add it to your blog or readme files.
      </p>

      <ul class="menu menu-horizontal p-2 bg-base-100 rounded-box mx-auto my-5">
        <li>
          <div class="tooltip tooltip-bottom" data-tip="Add">
            <button on:click={create}>
              <Icon icon="akar-icons:plus" />
            </button>
          </div>
        </li>
        <li>
          <div class="tooltip tooltip-bottom" data-tip="Clear">
            <button on:click={clear}>
              <Icon icon="bi:arrow-repeat" />
            </button>
          </div>
        </li>
        <li>
          <div class="tooltip tooltip-bottom" data-tip="Export">
            <button on:click={exportString} class="modal-button">
              <label for="result-modal">
                <Icon icon="bi:box-arrow-up-right" />
              </label>
            </button>
          </div>
        </li>
      </ul>

      <div class="alert alert-warning">
        <div>
          <Icon icon="bi:exclamation-triangle"/>
          <span>This tool is for desktop ONLY</span>
        </div>
      </div>

      <div class="divider"></div>

      <div class="w-full">
        <p class="text-xl font-['Radwave'] text-secondary">Technologies used </p>
        <ul class="list-disc list-inside mx-auto w-full">
          <li>
            <a class="link link-accent font-bold" target="_blank"
              href="https://github.com/isaacHagoel/svelte-dnd-action" 
            >
              svelte-dnd-action
            </a>
            <p class="inline">
              : by isaacHagoel, used in the display and controlling of items
              in the list
            </p>
          </li>
          <li>
            <a class="link link-accent font-bold" target="_blank"
              href="https://fakerjs.dev/" 
            >
              fakerjs
            </a>
            <p class="inline">
              : by faker-js team, used for generating UUID's for each item
            </p>
          </li>
        </ul>
      </div>

      
      <div class="flex flex-row gap-8">
        <a class="btn btn-accent gap-8 mx-auto mt-5" target="_blank"
          href="https://github.com/zeucapua/zeudev-site/blob/master/src/components/seesrc/SeeSRC.svelte">
          <Icon icon="bi:github" />
          Github
        </a>
        <a class="btn gap-8 mx-auto mt-5" target="_blank"
          href="/blogs/seesrc_overview">
          <Icon icon="bi:info-circle" />
          Dev Blog
        </a>
      </div>
      
    </div>


    <div 
      class="flex flex-col gap-3 py-8 mx-auto basis-2/3 h-full overflow-y-scroll" 
      use:dndzone={{items, flipDurationMs}} 
      on:consider={handleDndConsider} on:finalize={handleDndFinalize}
    >
      {#each items as item(item.id)}
        <div 
          animate:flip="{{duration: flipDurationMs}}" 
          class="flex flex-row justify-items-stretch w-fit px-3 py-2 bg-primary rounded-lg text-primary-content"
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



<input type="checkbox" id="result-modal" class="modal-toggle hidden" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Output</h3>
    
    <p class="text-md mb-3">Thank you for using the SeeSRC tool! Here's your file structure display:</p>
    <textarea class="textarea textarea-primary resize" placeholder="Result" readonly>{result}</textarea>
    
    
    <div class="modal-action">
      <label for="result-modal" class="btn">Close</label>
    </div>
  </div>
</div>