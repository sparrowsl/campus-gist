<script>
	import BackLink from '$lib/components/BackLink.svelte';

	export let data;
</script>

<article class="container mx-auto min-h-[90vh] max-w-xl p-3">
	<!-- Back to gists link -->
	<BackLink />

	<!-- Display the content of gist -->
	<div class="mt-5 border-b border-gray-300 pb-5">
		<p class="text-lg font-light text-gray-800 md:text-xl">{data.gist?.body || 'hello'}</p>
	</div>

	<!-- Comments Section -->
	<section>
		{#each [{}, {}] as _}
			<p>Comment Card here</p>
		{/each}
	</section>
</article>
