<script>
	import { gists } from '$lib/stores/gists.js';
	import GistCard from '$lib/components/cards/GistCard.svelte';
	import { createGistModal } from '$lib/stores/modals.js';
	import CreateGistModal from '$lib/components/modals/CreateGistModal.svelte';
	import CreateGist from '$lib/components/feed/CreateGist.svelte';

	export let data;
	export let form;
	$gists = data.gists;

	$: console.log(form);
</script>

<article class="container relative mx-auto min-h-screen max-w-6xl p-3">
	<!-- Button to open modal for creating new feed -->
	<CreateGist />

	<!-- Display all the gists -->
	<section class="flex flex-col gap-3">
		{#each $gists as gist (gist)}
			<GistCard {gist} />
		{:else}
			<p class="mt-10 text-center italic text-brand-blue">No gist found, create new gist...</p>
		{/each}
	</section>
</article>

{#if $createGistModal}
	{#await import('$lib/components/modals/CreateGistModal.svelte') then _}
		<CreateGistModal />
	{/await}
{/if}
