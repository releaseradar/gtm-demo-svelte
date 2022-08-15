<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.status === 404}
	<h1>Item not found</h1>
{:else}
	<h1>Error: {$page.error}</h1>
{/if}
