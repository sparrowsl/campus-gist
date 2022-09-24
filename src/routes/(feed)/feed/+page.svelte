<script>
	import Card from '$lib/components/feed/Card.svelte';
	import { feeds } from '$lib/stores/feeds.js';
</script>

<article class="container mx-auto min-h-screen max-w-6xl p-3">
	<!-- <CreateFeed /> -->

	<!-- Link to create new feed -->
	<div
		class="mx-auto mb-3 rounded-sm bg-brand-blue p-2 hover:bg-brand
		hover:shadow-sm hover:shadow-brand-blue md:w-[37.5rem] "
	>
		<a href="/feed/new-feed" class="block text-center font-bold text-white">Create New Feed</a>
	</div>

	<!-- Display all the feeds -->
	<div class="flex flex-col gap-3">
		{#each $feeds as feed}
			<Card {feed} />
		{/each}
	</div>
</article>
