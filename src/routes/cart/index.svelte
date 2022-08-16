<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import Cart from '$lib/stores/Cart';

	onMount(() => {
		// @ts-ignore
		window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
		// @ts-ignore
		window.dataLayer.push({
			event: 'view_item',
			ecommerce: {
				items: $Cart
			}
		});
	});
</script>

<svelte:head>
	<title>Cart</title>
</svelte:head>

<div class="container">
	<h1>Shopping Cart</h1>
	{#if $Cart.length === 0}
		<h2>Empty</h2>
	{:else}
		<hr />
		<h2>Products</h2>
		<ol>
			{#each $Cart as { item_name, price }}
				<li>{item_name} - ${price}</li>
			{/each}
		</ol>
		<hr />
		<h2>
			Subtotal({$Cart.length} items):
			<b>${$Cart.map(({ price }) => price).reduce((a, b) => a + b, 0)}</b>
		</h2>
	{/if}

	<div class="footer-wrap">
		<div class="footer">
			<div class="footer-price-wrap" />
			<div>
				<div class="footer-button-container">
					<button
						class="footer-button"
						type="button"
						aria-label="Purchase"
						on:click={() => goto('/purchase')}
					>
						<span>Purchase</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.footer-wrap {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		min-width: 360px;
		max-width: 420px;
		margin: 0 auto;
		padding: 16px;
		background-color: #fff;
		-webkit-box-shadow: 0 1px 2px 1px #00000026;
		box-shadow: 0 1px 2px 1px #00000026;
	}

	.footer-price-wrap {
		color: #74767c;
		font-size: 14px;
		line-height: 1.25;
	}

	.footer-button-container {
		display: inline-block;
	}

	.footer-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 2.5rem;
		padding: 0 1.5rem;
		border: 0;
		border-radius: 62.5rem;
		background: #0071dc;
		color: #fff;
		font-size: 1rem;
		font-weight: 700;
		-webkit-appearance: none;
		appearance: none;
		cursor: pointer;
		text-decoration: none;
		-webkit-transition: all 0.1s cubic-bezier(0.77, 0, 0.175, 1);
		transition: all 0.1s cubic-bezier(0.77, 0, 0.175, 1);
		white-space: nowrap;
	}
</style>
