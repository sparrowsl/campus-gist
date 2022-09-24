<script>
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import StudentSearchCard from '../cards/StudentSearchCard.svelte';

	async function getStudents() {
		const res = await fetch('/data/students.json');
		return await res.json();
	}

	$: students = getStudents() || [];
</script>

<div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
	{#await students}
		<p>Loading students</p>
	{:then data}
		{#each data as student}
			<StudentSearchCard {student} />
		{/each}
	{/await}
</div>
