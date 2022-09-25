<script>
	import { onMount } from 'svelte';
	import StudentSearchCard from '../cards/StudentSearchCard.svelte';
	import { studentSearchResults, searchedStudent, filteredResults } from '$lib/stores/search.js';

	async function getStudents() {
		const res = await fetch('/data/students.json');
		if (res.ok) return await res.json();
	}

	onMount(async () => {
		$studentSearchResults = (await getStudents()) || [];
		$filteredResults = $studentSearchResults;
	});
</script>

{#await $filteredResults}
	<div class="text-center">
		<p>Loading students...</p>
	</div>
{:then $filteredResults}
	<div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
		{#each $filteredResults as student}
			<StudentSearchCard {student} />
		{:else}
			<div class="w-full grid place-content-center">
				<p class="text-center">No student with that name was found</p>
			</div>
		{/each}
	</div>
{/await}
