<script lang="ts">
	import { onMount } from 'svelte';

	import Cart from '$lib/stores/Cart';

	onMount(() => {
		// @ts-ignore
		window.dataLayer.push({ event: 'pageview' });
	});
</script>

<svelte:head>
	<title>Cart</title>
</svelte:head>

<div class="container">
	<h1>Cart</h1>
	<hr />
	<h2>Products</h2>
	<ul>
		{#each $Cart as { name }}
			<li>{name}</li>
		{/each}
	</ul>
	<hr />
	<h2>Subtotal(2 items): $201.95</h2>
</div>
