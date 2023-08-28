<script>
	import Counter from '$lib/Counter.svelte';
	import { onMount } from 'svelte';
	import { Http } from '$lib/ApiService.js';

	let displayText = 'initializing...';

	const success = () => {
		console.log('ran!');
	};

	onMount(async () => {
		console.log('hey?', Http);
		await Http({ a: 1 }, success, () => {});
		displayText = 'Mounted';
	});
</script>

<main>
	<div>
		<h1>Vite + Svelte {displayText}</h1>

		<div class="card">
			<Counter />
		</div>

		<p>
			Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer"
				>SvelteKit</a
			>, the official Svelte app framework powered by Vite!
		</p>

		<p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
	</div>
</main>

<style>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
	.read-the-docs {
		color: #888;
	}
</style>
