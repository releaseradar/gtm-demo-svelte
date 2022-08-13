<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// @ts-ignore
		window.dataLayer.push({ event: 'pageview' });
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="GTM Demo for Svelte" />
</svelte:head>

<section>
	<h1>Store</h1>

	<h2>Demo</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
