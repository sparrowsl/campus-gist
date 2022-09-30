<script>
	import Card from '$lib/components/feed/Card.svelte';
	import { gists, getGists } from '$lib/stores/gists.js';
	import { createGistModal } from '$lib/stores/modals.js';
	import CreateGistModal from '$lib/components/modals/CreateGistModal.svelte';
	import CreateGist from '$lib/components/feed/CreateGist.svelte';

	$gists = getGists();
</script>

<article class="container relative mx-auto min-h-screen max-w-6xl p-3">
	<!-- Button to activate pop up for creating new feed -->
	<CreateGist />

	<!-- Display all the gists -->
	<section class="flex flex-col gap-3">
		{#await $gists}
			<div class="text-brand-blue text-center italic animate-pulse">Loading gists...</div>
		{:then $gists}
			{#each $gists as gist (gist)}
				<Card {gist} />
			{:else}
				<p class="mt-10 animate-pulse text-center italic text-brand-blue">
					No gist found, create new gist...
				</p>
			{/each}
		{/await}
	</section>
</article>

{#if $createGistModal}
	<CreateGistModal />
{/if}
