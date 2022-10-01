<script>
	import EventsCard from '$lib/components/events/EventsCard.svelte';
</script>

<article class="container mx-auto min-h-screen max-w-6xl p-3 md:max-w-2xl">
	<a href="/gists" class="text-blue-500 underline">back to gists</a>

	<!-- Display all events -->
	<section class="mt-5">
		<h3 class="mb-2 text-xl text-brand">Events</h3>
		{#each [{}, {}, {}, {}, {}] as _}
			<EventsCard />
		{/each}
	</section>
</article>
