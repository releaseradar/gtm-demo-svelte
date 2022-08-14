<script lang="ts">
	import { onMount } from 'svelte';

	import Cart from '$lib/stores/Cart';

	onMount(() => {
		// @ts-ignore
		window.dataLayer.push({ event: 'pageview' });
	});
</script>

<div class="container">
	<ul>
		{#each $Cart as { name }}
			<li>{name}</li>
		{/each}
	</ul>
</div>
