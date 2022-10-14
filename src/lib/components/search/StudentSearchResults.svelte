<script>
	import { onMount } from 'svelte';
	import StudentSearchCard from '../cards/StudentSearchCard.svelte';
	import { studentSearchResults, studentFilteredResults } from '$lib/stores/search.js';

	async function getStudents() {
		const res = await fetch('/data/students.json');
		if (res.ok) return await res.json();
	}

	onMount(async () => {
		$studentSearchResults = (await getStudents()) || [];
		$studentFilteredResults = $studentSearchResults;
	});
</script>

{#await $studentFilteredResults}
	<div class="text-center">
		<p>Loading students...</p>
	</div>
{:then $studentFilteredResults}
	<div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
		{#each $studentFilteredResults as student}
			<StudentSearchCard {student} />
		{:else}
			<div class="w-full grid place-content-center">
				<p class="text-center">No Student Found</p>
			</div>
		{/each}
	</div>
{/await}
