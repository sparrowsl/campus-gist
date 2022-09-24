<script>
	import SearchFilterTabs from '$lib/components/search/SearchFilterTabs.svelte';
	import SearchResults from '$lib/components/search/SearchResults.svelte';
	import SearchInput from '$lib/components/search/SearchInput.svelte';
</script>

<section class="container mx-auto min-h-screen max-w-6xl p-3">
	<a href="/gists" class="text-blue-500 underline">back to gists</a>

	<div class="mt-5">
		<!-- Search form -->
		<SearchInput />
		<!-- Search Filters -->
		<SearchFilterTabs />
		<!-- Display Search Results -->
		<SearchResults />
	</div>
</section>
