<script>
	import Spinner from '../Spinner.svelte';
	import { searchFilter } from '$lib/stores/search.js';
	import StudentSearchResults from './StudentSearchResults.svelte';
</script>

<section class="">
	{#if $searchFilter === 'students'}
		<StudentSearchResults />
	{:else if $searchFilter === 'institutions'}
		<Spinner />
	{/if}
</section>
