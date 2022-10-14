<script>
	import { deleteGistModal } from '$lib/stores/modals.js';
	import { gists } from '$lib/stores/gists.js';
	import { goto } from '$app/navigation';
	import ModalBackdrop from './ModalBackdrop.svelte';

	export let gist;

	const deleteGist = async () => {
		$gists = $gists.filter((el) => el.id !== gist.id);
		$deleteGistModal = false; // close the modal
		goto('/gists');
	};
</script>

<ModalBackdrop>
	<h3 class="text-center text-brand-blue">Are you sure you want to delete this gist??</h3>
	<div class="mt-5 flex items-center justify-evenly">
		<button
			on:click={() => ($deleteGistModal = false)}
			type="button"
			class="rounded bg-red-100 px-4 py-1 text-sm text-red-700 hover:bg-red-700 hover:text-white"
		>
			No please
		</button>
		<button
			on:click={deleteGist}
			type="button"
			class="rounded bg-blue-100 px-4 py-1 text-sm text-blue-700 hover:bg-brand hover:text-white"
		>
			Yes please!
		</button>
	</div>
</ModalBackdrop>
