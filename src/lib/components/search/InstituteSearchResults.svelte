<script>
	import { onMount } from 'svelte';
	import { instituteSearchResults, instituteFilteredResults } from '$lib/stores/search.js';
	import InstituteSearchCard from '../cards/InstituteSearchCard.svelte';

	async function getStudents() {
		const res = await fetch('/data/institutes.json');
		if (res.ok) return await res.json();
	}

	onMount(async () => {
		$instituteSearchResults = (await getStudents()) || [];
		$instituteFilteredResults = $instituteSearchResults;
	});
</script>

{#await $instituteFilteredResults}
	<div class="text-center">
		<p>Loading institutes...</p>
	</div>
{:then $instituteFilteredResults}
	<div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
		{#each $instituteFilteredResults as institute}
			<InstituteSearchCard {institute} />
		{:else}
			<div class="w-full grid place-content-center">
				<p class="text-center">No Institute Found</p>
			</div>
		{/each}
	</div>
{/await}
