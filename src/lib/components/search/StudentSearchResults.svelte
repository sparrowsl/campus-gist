<script>
	import { onMount } from 'svelte';
	import { studentSearchResults, studentFilteredResults } from '$lib/stores/search.js';
	import StudentSearchCard from '../cards/StudentSearchCard.svelte';

	async function getStudents() {
		const res = await fetch(`${import.meta.env.VITE_API_BASE_ROUTE}/students`);
		if (res.ok) return await res.json();
	}

	onMount(async () => {
		$studentSearchResults = (await getStudents()) || [];
		$studentFilteredResults = $studentSearchResults;
	});
</script>

{#await $studentFilteredResults}
	<p class="text-center">Loading students...</p>
{:then $studentFilteredResults}
	<div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
		{#each $studentFilteredResults as student}
			<StudentSearchCard {student} />
		{:else}
			<p class="text-center text-brand-blue">No Student Found</p>
		{/each}
	</div>
{/await}
