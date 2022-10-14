<script>
	import { searchFilter } from '$lib/stores/search.js';
	import StudentSearchResults from './StudentSearchResults.svelte';
	import InstituteSearchResults from './InstituteSearchResults.svelte';
</script>

<section class="">
	{#if $searchFilter === 'students'}
		<StudentSearchResults />
	{:else if $searchFilter === 'institutions'}
		<InstituteSearchResults />
	{/if}
</section>
