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
	<ul>
		{#each $Cart as { name }}
			<li>{name}</li>
		{/each}
	</ul>
</div>
