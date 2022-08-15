<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import type { Item } from '$lib/models';

	export let items: Item[];

	onMount(() => {
		// @ts-ignore
		window.dataLayer.push({ event: 'pageview' });
	});
</script>

<svelte:head>
	<title>Products</title>
</svelte:head>

<div class="container">
	<h1>Products</h1>
	<ul>
		{#each items as { id, name }}
			<li><a href="/products/{id}">{name}</a></li>
		{/each}
	</ul>
</div>

<style>
	.container {
		min-width: 360px;
		max-width: 420px;
		height: 100vh;
		margin: 0 auto;
		background-color: white;
		text-align: start;
	}
</style>
