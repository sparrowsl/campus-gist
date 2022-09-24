<script>
	import Icon from '@iconify/svelte';
	import { searchFilter } from '$lib/stores/search.js';
	import Spinner from '$lib/components/Spinner.svelte';

	let searchValue = '';
	let hasSearch = false;

	function searchFor() {
		hasSearch = true;
		setTimeout(() => (hasSearch = false), 3000);
	}
</script>

<form action="" on:submit|preventDefault={searchFor}>
	<div class="flex">
		<input
			type="text"
			bind:value={searchValue}
			placeholder="Search for {$searchFilter}..."
			class="w-full border-gray-300 bg-gray-50 focus:rounded-md"
		/>
		<button
			type="submit"
			disabled={searchValue ? false : true}
			class="rounded-sm bg-brand-blue px-5 text-white hover:bg-brand
      disabled:cursor-not-allowed disabled:bg-brand-blue"
		>
			{#if hasSearch}
				<Spinner />
			{:else}
				<Icon icon="bytesize:search" class="text-lg md:text-2xl" />
			{/if}
		</button>
	</div>
</form>
