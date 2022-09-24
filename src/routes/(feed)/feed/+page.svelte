<script>
	import Card from '$lib/components/feed/Card.svelte';
	import { feeds } from '$lib/stores/feeds.js';
	import CreateFeed from '$lib/components/feed/CreateFeed.svelte';
</script>

<article class="container mx-auto min-h-screen max-w-6xl p-3">
	<CreateFeed />
	<div class="flex flex-col gap-3">
		{#each $feeds as feed}
			<Card {feed} />
		{/each}
	</div>
</article>
