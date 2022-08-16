<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Cart, { addToCart } from '$lib/stores/Cart';

	import type { Item } from 'src/lib/models';

	export let item: Item;

	onMount(() => {
		// @ts-ignore
		window.dataLayer.push({ event: 'pageview' });
	});

	function addAndGotoCart() {
		addToCart(item);
		goto('/cart');
	}

	$: isItemInCart = $Cart.find((cartItem) => cartItem.item_id === item.item_id);
</script>

<svelte:head>
	<title>Products</title>
</svelte:head>

<div class="container">
	<section class="item-info">
		<section class="brand-name">{item.item_brand}</section>
		<h1 class="item-name">{item.item_name}</h1>
		<div class="meta">
			<div class="price-container">
				<span class="price-wrap"><span>{item.currency}</span><span>${item.price - item.discount}</span></span>
				<div class="original-price-wrap">
					<span class="original-price">${item.price}</span>
				</div>
			</div>
			<div class="review-container">
				<span class="rating">
					<i class="rating-star-fill" /><i class="rating-star-fill" /><i
						class="rating-star-fill"
					/><i class="rating-star-half" /><i class="rating-star" />
				</span>
				<span class="rating-number">(3.5)</span>
				<a class="review-link">78 reviews</a>
			</div>
		</div>
		<!-- <div class="f7 flex self-baseline mt2">
			<span>Prices may vary online, in stores, and in-app</span><span class="pl2"
				><button class="bg-white b--none pointer pa0" aria-label="legal information"
					><i class="ld ld-InfoCircle" style="font-size:1rem;vertical-align:-0.175em" /></button
				></span
			>
		</div> -->
	</section>
	<p class="tag-line">
		<span><span class="tag">Reduced price</span></span>
	</p>
	<div class="hero-image">
		<img
			loading="eager"
			class="item-image"
			src="/fee5f62d-c275-48f3-ba31-81b7d7821e12.8145e531ddeb9d1a8b5d97ba540e635d.jpeg"
			alt="Lux Decor Collection Gusseted Queen Pillows Set of 2 - Comfortable Breathable Bed Pillows for Sleeping (18x26)"
			width="342"
			height="342"
		/>
	</div>

	<div class="footer-wrap">
		<div class="footer">
			<div class="footer-price-wrap">
				<span class="footer-price">${item.price - item.discount}</span>
			</div>
			<div>
				<div class="footer-button-container">
					{#if isItemInCart}
						<a class="footer-button" href="/cart" aria-label="View cart"> View cart </a>
					{/if}
					<button
						class="footer-button"
						type="button"
						aria-label="Add to cart - Lux Decor Collection Gusseted Queen Pillows Set of 2 - Comfortable Breathable Bed Pillows for Sleeping (18x26)"
						on:click={addAndGotoCart}
					>
						<span>{isItemInCart ? 'Added' : 'Add to cart'}</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.item-info {
		display: flex;
		flex-direction: column;
		margin: 1rem;
	}
	.brand-name {
		color: #46474a;
		font-size: 14px;
		line-height: 1.25;
	}

	.item-name {
		margin-top: 4px;
		margin-bottom: 8px;
		color: #2e2f32;
		font-size: 20px;
		line-height: 1.5;
		font-weight: 700;
	}

	.meta {
		display: flex;
		justify-content: space-between;
	}

	.price-container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		width: 50%;
		color: #74767c;
		font-size: 14px;
		line-height: 1.25;
	}

	.price-wrap {
		margin-right: 24px;
		color: #2e2f32;
		font-size: 18px;
		line-height: 1.5;
		font-weight: 700;
	}

	.original-price-wrap {
		display: inline-flex;
		align-items: center;
		white-space: nowrap;
	}

	.original-price {
		margin-right: 8px;
		vertical-align: middle;
		color: #74767c;
		font-size: 14px;
		text-transform: capitalize;
		text-decoration: line-through;
	}

	.review-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		height: 1.5rem;
	}

	.rating {
		display: inline-flex;
		margin-right: 4px;
		color: #000;
	}

	.rating-star-fill {
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		display: inline-block;
		font: 16px/1 ui-icons;
		font-size: 12px;
		vertical-align: -0.175em;
	}

	.rating-star-fill:before {
		content: '\f17a';
	}

	.rating-star-half {
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		display: inline-block;
		font: 16px/1 ui-icons;
		font-size: 12px;
		vertical-align: -0.175em;
	}

	.rating-star-half:before {
		content: '\f17b';
	}

	.rating-star {
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		display: inline-block;
		font: 16px/1 ui-icons;
		font-size: 12px;
		vertical-align: -0.175em;
	}

	.rating-star:before {
		content: '\f179';
	}

	.rating-number {
		font-size: 12px;
	}

	.review-link {
		padding-left: 4px;
		color: #2e2f32;
		font-size: 12px;
		text-decoration: underline;
		cursor: pointer;
	}

	.tag-line {
		margin: 8px 16px 0;
	}

	.tag {
		display: inline-flex;
		align-items: center;
		margin: 8px 8px 0 0;
		padding: 0 0.5rem;
		border-radius: 0.125rem;
		box-shadow: inset 0 0 0 0.0625rem #004f9a;
		background: #fff;
		color: #004f9a;
		font-family: Bogle, Helvetica Neue, Helvetica, Arial, sans-serif;
		font-size: 0.75rem;
		font-weight: 400;
		line-height: 1.5rem;
		white-space: nowrap;
	}

	.hero-image {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 16px 16px 0;
	}

	.item-image {
		width: 100%;
		object-fit: contain;
	}

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

	.footer-price {
		display: inline-block;
		margin: 8px 8px 0 0;
		color: #2e2f32;
		font-size: 18px;
		font-weight: 700;
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
