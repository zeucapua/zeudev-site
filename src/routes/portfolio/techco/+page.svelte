<script lang="ts">
	import Icon from '@iconify/svelte';
	import * as Three from 'three';
	import * as Threlte from '@threlte/core';
	import * as Extra from '@threlte/extras';
	import IntersectionObserver from "svelte-intersection-observer";
	import { fly, fade } from 'svelte/transition';

	let details : HTMLElement;
	let intersecting : boolean;

</script>

<div id="main" class="flex flex-col w-full h-full min-w-screen min-h-screen bg-black font-['GeneralSans']">
	<div class="fixed w-screen h-screen z-0 bg-black">
	
		<Threlte.Canvas>
			<Threlte.PerspectiveCamera position={{ x: 20, y: 5, z: 0}} fov={30}>
				<Threlte.OrbitControls enabled={false} />
			</Threlte.PerspectiveCamera>
		
			<Threlte.AmbientLight color="white" intensity={0.2} />
		
			<Extra.GLTF url="/models/gradient_city.glb" 
				position={{ x: 0, y: 0, z: 0 }} 
				scale={2}
			/>
		

		</Threlte.Canvas>

	</div>
	<div class="z-10">
		<div class="flex flex-col w-full h-screen pt-8 md:pt-16 px-16 pb-40 justify-between">
			<p class="text-5xl md:text-8xl text-white font-bold text-center">Tech Co. The Future, Now.</p>
			<a href="#details" class="mx-auto">
			<button class="text-xl md:text-3xl w-fit text-white font-bold px-16 py-4 bg-black rounded-full transition-all duration-300 hover:text-black hover:bg-[#84dacd] hover:shadow-lg hover:ring-2 hover:ring-white hover:ring-offset-8">
				Learn More
			</button>
			</a>
		</div>
		<div class="w-full h-96 bg-gradient-to-t from-[#84dacd]" />
		<IntersectionObserver element={details} bind:intersecting>
		<div bind:this={details} id="details" class="flex flex-col w-full h-full min-h-screen bg-[#84dacd] p-16">
			{#if intersecting}
			<div class="flex flex-col md:flex-row gap-8">
				<img 
					src="/images/gradient_city.png" 
					alt="Gradient City by Rick Hoppmann" 
					class="basis-1/3 h-5/6" 
					transition:fly="{{x:-200, duration:1000}}"
				/>
				<div class="flex flex-col gap-8 my-auto">
					<p 
						class="text-5xl lg:text-9xl text-black font-bold mx-auto"  
						transition:fade="{{duration: 1000, delay: 300}}"
					>
						Build your Tomorrow
					</p>
					<p
						class="text-xl text-black tracking-wide font-['Quicksand']"
						transition:fade="{{duration: 1000, delay: 500}}"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborelit laoreet id donec ultrices. Eu ultrices vitae auctor eu augue ut.
					</p>
					<p
						class="text-xl text-black tracking-wide font-['Quicksand']"
						transition:fade="{{duration: 1000, delay: 500}}"
					>
						Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Sed elementum tempus egestas sed sed risus. Euismod elementum nisi quis eleifend quam. Amet mauris commodo quis imperdiet. A pellentesque sit amet porttitor eget. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Nibh venenatis cras sed felis eget velit.
					</p>
					
					<a href="https://github.com/zeucapua">
						<button class="flex align-center gap-2 px-8 py-4 font-bold tracking-wider text-white bg-black rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:ring-4 hover:ring-offset-2 hover:ring-black">
							<Icon icon="bi:github"  width=24 />
							Github
						</button>
					</a>
				</div>	
			</div>
			{/if}
		</div>
		</IntersectionObserver>
	</div>
</div>