<script>
	import SearchFilterTabs from '$lib/components/search/SearchFilterTabs.svelte';
	import SearchResults from '$lib/components/search/SearchResults.svelte';
	import SearchInput from '$lib/components/search/SearchInput.svelte';
	import {
		instituteFilteredResults,
		searchFilter,
		studentFilteredResults
	} from '$lib/stores/search.js';
</script>

<section class="container mx-auto min-h-screen max-w-6xl p-3">
	<a href="/gists" class="text-blue-500 underline">back to gists</a>

	<div class="mt-5">
		<!-- Search form -->
		<SearchInput />
		<!-- Search Filters -->
		<SearchFilterTabs />
		<!-- Display number of results found -->
		<p class="mb-2 text-center text-sm italic text-brand-blue">
			found
			{#if $searchFilter === 'students'}
				{$studentFilteredResults.length}
			{:else if $searchFilter === 'institutions'}
				{$instituteFilteredResults.length}
			{/if}
			results for {$searchFilter}
		</p>
		<!-- Display Search Results -->
		<SearchResults />
	</div>
</section>
