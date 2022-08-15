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
	<h1>Shopping Cart</h1>
	<hr />
	<h2>Products</h2>
	<ol>
		{#each $Cart as { name, price }}
			<li>{name} - ${price}</li>
		{/each}
	</ol>
	<hr />
	<h2>
		Subtotal({$Cart.length} items):
		<b>${$Cart.map(({ price }) => price).reduce((a, b) => a + b, 0)}</b>
	</h2>
</div>
