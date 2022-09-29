<script>
	export let data;
</script>

<article class="container mx-auto min-h-[90vh] max-w-xl p-3">
	<!-- Back to gists link -->
	<a href="/gists" class="mb-6 block text-sm text-brand-blue underline md:text-base">
		back to gists
	</a>

	<!-- Display the content of gist -->
	<div class="border-b border-gray-300 pb-5">
		<p>{JSON.stringify(data.gist)}</p>
		<p class="text-lg font-light text-gray-800 md:text-xl">{data.gist.body}</p>
	</div>
</article>
