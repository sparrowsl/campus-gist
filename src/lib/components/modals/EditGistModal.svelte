<script>
	import { page } from '$app/stores';
	import { gists, updatedGist } from '$lib/stores/gists.js';
	import { editGistModal } from '$lib/stores/modals.js';
	import Spinner from '$lib/components/shared/Spinner.svelte';
	import ModalBackdrop from './ModalBackdrop.svelte';

	// let newEditContent = $updatedGist.body;
	let newContent = 'lorem ipsum dolor sit amet';
	let updating = false;

	// console.log($updatedGist);
	console.log($page.params.slug);

	const editGist = async () => {
		const res = await fetch(`${import.meta.env.VITE_API_BASE_ROUTE}/gists/${$page.params.slug}`);

		updating = true;
		// Find the current gist
		$updatedGist = $gists.find((gist) => gist.id === $updatedGist.id);
		// Update the content of the gist

		// setTimeout(() => {
		// 	$updatedGist.body = newEditContent.trim();
		// 	$editGistModal = false;
		// }, 750);
	};
</script>

<ModalBackdrop>
	<form action="" on:submit|preventDefault={editGist}>
		<fieldset>
			<textarea
				required
				bind:value={newContent}
				placeholder="Write something here..."
				class="min-h-[130px] w-full resize-none rounded border-gray-300 text-base
        font-light text-gray-800"
			/>

			<div class="flex justify-between">
				<!-- Cancel Edit Button -->
				<button
					on:click={() => ($editGistModal = false)}
					type="button"
					class="mt-5 block w-fit rounded bg-red-100 px-6 py-2 text-sm
        text-red-700 hover:bg-red-700 hover:text-white"
				>
					Cancel
				</button>

				<!-- Edit Button -->
				<button
					type="submit"
					disabled={updating ? true : false}
					class="{updating
						? ''
						: 'hover:bg-blue-900'} mt-5 ml-auto block w-fit rounded bg-brand px-6 py-2
            text-sm text-white disabled:cursor-not-allowed"
				>
					{#if updating}
						<Spinner />
					{:else}
						Update
					{/if}
				</button>
			</div>
		</fieldset>
	</form>
</ModalBackdrop>
