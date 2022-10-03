<script>
	import { fly } from 'svelte/transition';
	import { gists, updatedGist } from '$lib/stores/gists.js';
	import { editGistModal } from '$lib/stores/modals.js';
	import Spinner from '$lib/components/Spinner.svelte';

	let newEditContent = $updatedGist.body;
	let updating = false;

	const editGist = async () => {
		updating = true;
		// Find the current gist
		$updatedGist = $gists.find((gist) => gist.id === $updatedGist.id);
		// Update the content of the gist
		$updatedGist.body = newEditContent;

		setTimeout(() => ($editGistModal = false), 750);
	};
</script>

<section
	in:fly={{ y: 500, duration: 300 }}
	out:fly={{ y: -500, duration: 300 }}
	class="fixed inset-0 z-30 grid h-screen place-content-center bg-black bg-opacity-75"
>
	<form
		action=""
		on:submit|preventDefault={editGist}
		class="min-w-[325px] rounded-md bg-white p-5 md:min-w-[30rem] md:p-10"
	>
		<fieldset>
			<textarea
				required
				bind:value={newEditContent}
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
</section>
