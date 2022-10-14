<script>
	import Icon from '@iconify/svelte';
	import {
		searchFilter,
		searchedValue,
		studentSearchResults,
		studentFilteredResults,
		instituteSearchResults,
		instituteFilteredResults
	} from '$lib/stores/search.js';
	import Spinner from '$lib/components/shared/Spinner.svelte';

	$: if ($searchFilter === 'students') {
		if ($searchedValue) {
			$studentFilteredResults = $studentSearchResults.filter(
				(student) =>
					student.username.toLowerCase().includes($searchedValue.trim().toLowerCase()) ||
					student.name.toLowerCase().includes($searchedValue.trim().toLowerCase())
			);
		} else {
			$studentFilteredResults = $studentSearchResults;
		}
	} else if ($searchFilter === 'institutions') {
		if ($searchedValue) {
			$instituteFilteredResults = $instituteSearchResults.filter(
				(institute) =>
					institute.name.toLowerCase().includes($searchedValue.trim().toLowerCase()) ||
					institute.abbreviation.toLowerCase().includes($searchedValue.trim().toLowerCase())
			);
		} else {
			$instituteFilteredResults = $instituteSearchResults;
		}
	}
</script>

<form action="" on:submit|preventDefault>
	<div class="flex">
		<input
			type="text"
			bind:value={$searchedValue}
			placeholder="Search for {$searchFilter}..."
			class="w-full border-gray-300 bg-gray-50 focus:rounded-md"
		/>
		<!-- After getting a lot of data, button will be used instead to load students -->
		<button
			type="submit"
			disabled
			class="cursor-progress rounded-sm bg-brand px-5 text-white disabled:bg-brand-blue"
		>
			{#if $searchedValue}
				<Spinner />
			{:else}
				<Icon icon="bytesize:search" class="text-lg md:text-2xl" />
			{/if}
		</button>
	</div>
</form>
