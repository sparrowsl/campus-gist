<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { deleteGistModal } from '$lib/stores/modals.js';
	import ModalBackdrop from './ModalBackdrop.svelte';

	const deleteGist = async () => {
		const res = await fetch(`/api/gists/${$page.params.id}`, {
			method: 'DELETE'
		});
		const { gist } = await res.json();

		if (res.ok) {
			goto('/gists');
			$deleteGistModal = false;
		}
	};
	console.log($page.params.id);
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
