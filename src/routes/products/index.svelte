<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import type { Item } from 'src/lib/models';

	export let items: Item[];

	onMount(() => {
		// @ts-ignore
		window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
		// @ts-ignore
		window.dataLayer.push({
			event: 'view_item_list',
			ecommerce: {
				items
			}
		});
	});
</script>

<svelte:head>
	<title>Products</title>
</svelte:head>

<h1>Products</h1>
<ul>
	{#each items as item}
		<li>
			<a
				href="/products/{item.item_id}"
				on:click={() => {
					// @ts-ignore
					window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
					// @ts-ignore
					window.dataLayer.push({
						event: 'select_item',
						ecommerce: {
							items: [item]
						}
					});
				}}>{item.item_name}</a
			>
		</li>
	{/each}
</ul>

<style>
	ul {
		margin: -0.5rem 0;
	}
	li {
		padding: 0.5rem;
	}
</style>
