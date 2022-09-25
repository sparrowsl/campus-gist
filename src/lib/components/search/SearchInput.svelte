<script>
	import Icon from '@iconify/svelte';
	import {
		searchFilter,
		searchedStudent,
		studentSearchResults,
		filteredResults
	} from '$lib/stores/search.js';
	import Spinner from '$lib/components/Spinner.svelte';

	$: if ($searchedStudent) {
		$filteredResults = $studentSearchResults.filter(
			(student) =>
				student.username.toLowerCase().includes($searchedStudent.trim().toLowerCase()) ||
				student.name.toLowerCase().includes($searchedStudent.trim().toLowerCase())
		);
	} else {
		$filteredResults = $studentSearchResults;
	}
</script>

<form action="" on:submit|preventDefault>
	<div class="flex">
		<input
			type="text"
			bind:value={$searchedStudent}
			placeholder="Search for {$searchFilter}..."
			class="w-full border-gray-300 bg-gray-50 focus:rounded-md"
		/>
		<button
			type="submit"
			disabled
			class="cursor-progress rounded-sm bg-brand px-5 text-white disabled:bg-brand-blue"
		>
			{#if $searchedStudent}
				<Spinner />
			{:else}
				<Icon icon="bytesize:search" class="text-lg md:text-2xl" />
			{/if}
		</button>
	</div>
</form>
