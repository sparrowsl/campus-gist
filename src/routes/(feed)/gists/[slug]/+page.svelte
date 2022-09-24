<script>
	export let data;
</script>

<article class="container mx-auto min-h-screen max-w-6xl p-3">
	<!-- Back to gists link -->
	<a href="/gists" class="mb-6 block text-sm text-brand-blue underline md:text-base">
		back to gists
	</a>

	<!-- Display the content of gist -->
	<section>
		<h2>Hello gist {data.id}</h2>
	</section>
</article>
