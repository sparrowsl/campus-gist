<script>
	import Card from '$lib/components/feed/Card.svelte';
	import { feeds } from '$lib/stores/feeds.js';
	import { createGistModal } from '$lib/stores/modals.js';
	import CreateGistModal from '$lib/components/modals/CreateGistModal.svelte';
</script>

<main>
	<article class="container mx-auto min-h-screen max-w-6xl p-3">
		<!-- <CreateFeed /> -->

		<!-- Button to activate pop up for creating new feed -->
		<button
			type="button"
			on:click={() => ($createGistModal = true)}
			class="mx-auto mb-3 block w-full rounded-sm bg-brand-blue p-2 text-center font-pt-sans
			text-sm font-bold text-white hover:bg-brand hover:shadow-sm hover:shadow-brand-blue
			md:w-[37.5rem] md:text-base"
		>
			Create New Feed
		</button>

		<!-- Display all the feeds -->
		<div class="flex flex-col gap-3">
			{#each $feeds as feed (feed)}
				<Card {feed} />
			{/each}
		</div>
	</article>

	{#if $createGistModal}
		<CreateGistModal />
	{/if}
</main>
