<script lang="ts">
	import { onMount } from 'svelte';

	import Cart from '$lib/stores/Cart';

	onMount(() => {
		// @ts-ignore
		window.dataLayer.push({ event: 'pageview' });
	});
</script>

<svelte:head>
	<title>Products</title>
</svelte:head>

<div class="container">
	<h1>Cart</h1>
	<ul>
		{#each $Cart as { name }}
			<li>{name}</li>
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
