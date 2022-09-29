<script>
	import Card from '$lib/components/feed/Card.svelte';
	import { gists } from '$lib/stores/gists.js';
	import { createGistModal } from '$lib/stores/modals.js';
	import CreateGistModal from '$lib/components/modals/CreateGistModal.svelte';

	export let data;
	$gists = data.data;
</script>

<article class="container mx-auto min-h-screen max-w-6xl p-3">
	<!-- Button to activate pop up for creating new feed -->
	<button
		type="button"
		on:click={() => ($createGistModal = true)}
		class="mx-auto mb-3 block w-full rounded-sm bg-brand-blue p-2 text-center font-pt-sans
			text-sm font-bold text-white hover:bg-brand hover:shadow-sm hover:shadow-brand-blue
			md:w-[37.5rem] md:text-base"
	>
		Create New Gist
	</button>

	<!-- Display all the gists -->
	<section class="flex flex-col gap-3">
		{#each $gists as gist (gist)}
			<Card {gist} />
		{:else}
			<p class="mt-10 animate-pulse text-center italic text-brand-blue">
				No gist found, create new gist...
			</p>
		{/each}
	</section>
</article>

{#if $createGistModal}
	<CreateGistModal />
{/if}
