<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '../app.css';
	// import { afterNavigate } from '$app/navigation';
	import Header from '$lib/header/Header.svelte';

	// afterNavigate(({ from, to }) => {
	// 	// @ts-ignore
	// 	window.dataLayer.push({ event: 'pageview' });
	// });
</script>

<div class="container">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	.container {
		min-width: 360px;
		max-width: 420px;
		height: 100vh;
		margin: 0 auto;
		overflow-y: scroll;
		background-color: white;
		text-align: start;
	}
	main {
		padding: 1rem;
	}
</style>
