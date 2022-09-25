<script>
	import { searchFilter } from '$lib/stores/search.js';
</script>

<div class="my-3 flex w-full bg-white">
	<span
		on:click={() => ($searchFilter = 'students')}
		class="{$searchFilter === 'students'
			? 'border-b-2 text-brand'
			: 'text-gray-400'} cursor-pointer border-brand py-2 px-6 hover:border-b-2">Students</span
	>
	<span
		on:click={() => ($searchFilter = 'institutions')}
		class="{$searchFilter === 'institutions'
			? 'border-b-2 text-brand'
			: 'text-gray-400'} cursor-pointer border-brand py-2 px-6 hover:border-b-2">Institutions</span
	>
</div>
