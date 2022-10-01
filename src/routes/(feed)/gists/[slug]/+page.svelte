<script>
	// import { page } from '$app/stores';
	// import { gists, getGists } from '$lib/stores/gists.js';

	export let data;
	// const urlPath = $page.url.pathname;
	// const gistId = parseInt(urlPath.split('/')[2]);
	// console.log(data.gist);
	const gist = data.gist;
	// data.gist.find((gist) => gist.id === gistId);
	// console.log($gists);
</script>

<article class="container mx-auto min-h-[90vh] max-w-xl p-3">
	<!-- Back to gists link -->
	<a href="/gists" class="mb-6 block text-sm text-brand-blue underline md:text-base">
		back to gists
	</a>

	<!-- Display the content of gist -->
	<div class="border-b border-gray-300 pb-5">
		{#if gist}
			<p class="text-lg font-light text-gray-800 md:text-xl">{gist?.body || 'hello'}</p>
		{/if}
	</div>
</article>
