<script>
	export let data;
</script>

<article class="container mx-auto min-h-screen max-w-xl p-3">
	<!-- Back to gists link -->
	<a href="/gists" class="mb-6 block text-sm text-brand-blue underline md:text-base">
		back to gists
	</a>

	<!-- Display the content of gist -->
	<div class="border border-b">
		<p class="text-gray-800 md:text-lg">Hello gist {data.id}</p>
	</div>
</article>
