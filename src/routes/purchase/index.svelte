<script lang="ts">
	import { onMount } from 'svelte';

	import Cart from '$lib/stores/Cart';

	$: subtotal = $Cart.map(({ price, discount }) => price - discount).reduce((a, b) => a + b, 0);

	onMount(() => {
		// @ts-ignore
		window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
		// @ts-ignore
		window.dataLayer.push({
			event: 'purchase',
			ecommerce: {
				transaction_id: new Date().getTime(),
				affiliation: 'Google Merchandise Store',
				value: subtotal,
				// tax: 4.9,
				shipping: 0,
				currency: 'USD',
				// coupon: 'SUMMER_SALE',
				items: $Cart
			}
		});
	});
</script>

<svelte:head>
	<title>Purchase</title>
</svelte:head>

<div class="container">
	<h1>Purchased</h1>
	{#if $Cart.length === 0}
		<h2>Empty</h2>
	{:else}
		<hr />
		<h2>Products</h2>
		<ol>
			{#each $Cart as { item_name, price, discount }}
				<li>{item_name} - ${price - discount}</li>
			{/each}
		</ol>
		<hr />
		<h2>
			Subtotal({$Cart.length} items):
			<b>${subtotal}</b>
		</h2>
	{/if}
</div>
