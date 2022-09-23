<script>
	import Card from '$lib/components/feed/Card.svelte';
	import { feeds } from '$lib/stores/feeds.js';
</script>

<article class="container mx-auto min-h-screen max-w-6xl p-3">
	<div class="flex flex-col gap-3">
		{#each $feeds as feed}
			<Card {feed} />
		{/each}
	</div>
</article>
