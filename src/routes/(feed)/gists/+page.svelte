<script>
	import { gists } from '$lib/stores/gists.js';
	import GistCard from '$lib/components/cards/GistCard.svelte';
	import { createGistModal } from '$lib/stores/modals.js';
	import CreateGistModal from '$lib/components/modals/CreateGistModal.svelte';
	import CreateGist from '$lib/components/feed/CreateGist.svelte';
</script>

<article class="container relative mx-auto min-h-screen max-w-6xl p-3">
	<!-- Button to open modal for creating new feed -->
	<CreateGist />

	<!-- Display all the gists -->
	<section class="flex flex-col gap-3">
		<!-- {#await $gists}
			<div class="text-brand-blue text-center italic animate-pulse">Loading gists...</div>
		{:then $gists} -->
		{#each $gists as gist (gist)}
			<GistCard {gist} />
		{:else}
			<p class="mt-10 animate-pulse text-center italic text-brand-blue">
				No gist found, create new gist...
			</p>
		{/each}
		<!-- {/await} -->
	</section>
</article>

{#if $createGistModal}
	<CreateGistModal />
{/if}
