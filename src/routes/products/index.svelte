<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	import type { Item } from '$lib/items';

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
	{#each items as { id, name }}
		<a href="/products/{id}">{name}</a>
	{/each}
	<section class="ma3 flex flex-column">
		<section>
			<a link-identifier="brandLink" class="f6 mid-gray lh-title" href="/"
				>LDC Lux Decor Collection</a
			>
		</section>
		<h1 class="f3 b lh-copy dark-gray mt1 mb2" itemprop="name">
			Lux Decor Collection Gusseted Queen Pillows Set of 2 - Comfortable Breathable Bed Pillows for
			Sleeping (18x26)
		</h1>
		<div class="flex flex-row justify-between">
			<div
				data-testid="price-mobile"
				class="flex items-center flex-wrap f6 gray lh-title dn-m w-50"
			>
				<span data-testid="price-wrap" class="b lh-copy dark-gray mr2 f4"
					><span itemprop="priceCurrency">USD</span><span itemprop="price">$24.99</span></span
				>
				<div class="nowrap items-center inline-flex">
					<span class="w_DM">was $44.99</span><span
						aria-hidden="true"
						class="mr2 f6 gray ttc v-mid strike">$44.99</span
					><button
						class="w_Bq w_Bu w_Bw nl1 pa0 mr2 no-underline v-mid h3"
						type="button"
						aria-label="learn more about strikethrough prices"
						><i class="ld ld-InfoCircle" style="font-size:1rem;vertical-align:-0.175em" /></button
					>
				</div>
			</div>
			<div class="flex flex-row items-center justify-end h2">
				<span class="black inline-flex mr1" itemprop="ratingValue"
					><i
						class="ld ld-StarFill"
						style="font-size:12px;vertical-align:-0.175em"
						aria-hidden="true"
					/><i
						class="ld ld-StarFill"
						style="font-size:12px;vertical-align:-0.175em"
						aria-hidden="true"
					/><i
						class="ld ld-StarFill"
						style="font-size:12px;vertical-align:-0.175em"
						aria-hidden="true"
					/><i
						class="ld ld-StarHalf"
						style="font-size:12px;vertical-align:-0.175em"
						aria-hidden="true"
					/><i
						class="ld ld-Star"
						style="font-size:12px;vertical-align:-0.175em"
						aria-hidden="true"
					/></span
				><span class="f7 rating-number">(3.5)</span><span class="w_DM"
					>3.5 stars out of 78 reviews</span
				><a
					link-identifier="reviewsLink"
					class="f7 dark-gray pl1 underline"
					itemprop="ratingCount"
					data-testid="item-review-section-link"
					style="cursor:pointer"
					role="link">78 reviews</a
				>
			</div>
		</div>
		<div class="f7 flex self-baseline mt2">
			<span>Prices may vary online, in stores, and in-app</span><span class="pl2"
				><button class="bg-white b--none pointer pa0" aria-label="legal information"
					><i class="ld ld-InfoCircle" style="font-size:1rem;vertical-align:-0.175em" /></button
				></span
			>
		</div>
	</section>
	<p class="mh3 mt2 mb0 mt0-xl mb2-xl ml0-xl mt0-m mb2-m ml0-m">
		<span><span class="w_FQ w_FW w_FZ mt2 mr2" aria-hidden="false">Reduced price</span></span>
	</p>
	<div class="relative" data-testid="mweb-hero-image-carousel">
		<div class="flex flex-column justify-center relative">
			<ul
				style="display:grid;grid-auto-flow:column;scroll-snap-type:x mandatory;max-height:fit-content"
				class="list ma0 pl0 overflow-x-scroll hidesb hidesb-wk relative overflow-y-hidden ma3 mb0 mt0-xl carousel-1"
				data-testid="carousel-container"
			>
				<li
					class="flex flex-column items-center transitioning"
					data-slide="0"
					style="scroll-snap-align: start;"
				>
					<button class="pa0 ma0 bn br0 b--white bg-white dib" tabindex="0"
						><div class="relative">
							<img
								loading="eager"
								tabindex="0"
								class="w-100"
								src="fee5f62d-c275-48f3-ba31-81b7d7821e12.8145e531ddeb9d1a8b5d97ba540e635d.jpeg"
								alt="Image 1 of Lux Decor Collection Gusseted Queen Pillows Set of 2 - Comfortable Breathable Bed Pillows for Sleeping (18x26)"
								width="342"
								height="342"
								style="object-fit:contain"
							/>
						</div></button
					>
				</li>
			</ul>
		</div>
	</div>

	<div
		data-testid="add-to-cart-section"
		class="justify-between items-center fixed right-0 left-0 bottom-0 bg-white shadow-1 z-max pa3"
	>
		<div class="flex flex-column flex-row justify-between">
			<div data-testid="sticky-add-to-cart-price" class="relative lh-title f6 gray">
				<span class="b dark-gray mr2 f4 dib mt2">$24.99</span>
			</div>
			<div class="">
				<div class="relative dib">
					<button
						class="w_Bq w_Bs w_Bx"
						type="button"
						style="position:relative"
						aria-label="Add to cart - Lux Decor Collection Gusseted Queen Pillows Set of 2 - Comfortable Breathable Bed Pillows for Sleeping (18x26)"
						><span style="visibility:visible">Add to cart</span></button
					>
				</div>
			</div>
		</div>
	</div>
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
