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
</svelte:head>

<div class="container">
	<h1>Welcome to our shop!</h1>
	<a href="/products">Show products!</a>
</div>
