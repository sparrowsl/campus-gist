<script>
	import { goto } from '$app/navigation';
	import { gists } from '$lib/stores/gists.js';
	import Spinner from '$lib/components/Spinner.svelte';
	import BackLink from '$lib/components/BackLink.svelte';

	export let data;

	const gist = data.gist;
	let newEditContent;
	if (gist) newEditContent = gist.body;
	let editing = false;

	const editGist = async (gist) => {
		editing = true;
		$gists.find((el) => el.id === gist.id).body = newEditContent;

		setTimeout(() => goto('/gists'), 1000);
	};
</script>

<article class="container mx-auto min-h-[90vh] max-w-xl p-3">
	<!-- Back to gists link -->
	<BackLink />

	<!-- Display the content of gist -->
	<section class="mt-5 pb-5">
		{#if gist}
			<form action="" on:submit|preventDefault={() => editGist(gist)}>
				<fieldset>
					<textarea
						required
						bind:value={newEditContent}
						placeholder="Write something here..."
						class="min-h-[200px] w-full border-gray-300 font-light text-gray-800 md:text-lg"
					/>

					<button
						type="submit"
						disabled={editing ? true : false}
						class="{editing
							? ''
							: 'hover:bg-blue-900'} mt-5 ml-auto block w-fit rounded bg-brand px-6 py-2 text-white
						disabled:cursor-not-allowed"
					>
						{#if editing}
							<Spinner />
						{:else}
							Update Gist
						{/if}
					</button>
				</fieldset>
			</form>
		{:else}
			<p class="text-brand-blue">No Gist with that ID found...</p>
		{/if}
	</section>
</article>
