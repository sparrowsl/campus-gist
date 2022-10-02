<script>
	import EventsCard from '$lib/components/events/EventsCard.svelte';
	import BackLink from '$lib/components/BackLink.svelte';
</script>

<article class="container mx-auto min-h-screen max-w-6xl p-3 md:max-w-2xl">
	<BackLink />
	<!-- Display all events -->
	<section class="mt-5">
		<h3 class="mb-2 text-xl text-brand">Events</h3>
		{#each [{}, {}, {}, {}, {}] as _}
			<EventsCard />
		{/each}
	</section>
</article>
