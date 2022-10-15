<script>
	import { gists } from '$lib/stores/gists.js';
	import { createGistModal } from '$lib/stores/modals.js';
	import ModalBackdrop from './ModalBackdrop.svelte';
	import Spinner from '../shared/Spinner.svelte';

	let textInput = `The vast majority of us will say "Yep... I have absolutely no idea what I meant by 'Fix style' 6 months ago."`;
	let hasPosted = false;
	$: disabled = textInput ? false : true;

	const createGist = async () => {
		hasPosted = true;
		disabled = true;

		const res = await fetch(`${import.meta.env.VITE_API_BASE_ROUTE}/gists/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			// TODO: "author" would be the current logged in user
			body: JSON.stringify({ content: textInput, author: '6347d57f11609865d9324b48' })
		});

		if (res.ok) {
			const { _id, content, author, comments, datePosted } = await res.json();
			console.log({ _id, content, author, comments, datePosted });

			setTimeout(() => {
				$createGistModal = false;
				$gists = [{ _id, content, author, comments, datePosted }, ...$gists];
			}, 1500);
		}
	};
</script>

<ModalBackdrop>
	<form action="" on:submit|preventDefault={createGist}>
		<fieldset class="flex flex-col gap-5">
			<legend class="mb-3 text-gray-500">What's on your mind?</legend>

			<textarea
				required
				bind:value={textInput}
				class="block max-h-[300px] min-h-[100px] w-full rounded-sm border border-gray-300 text-brand-blue"
			/>

			<div class="flex justify-between">
				<!-- Close Modal -->
				<button
					type="button"
					on:click={() => ($createGistModal = false)}
					class="rounded border border-red-200 px-6 py-2 text-red-400 md:hover:bg-red-200"
				>
					Cancel
				</button>

				<!-- Post a gist -->
				<button
					type="submit"
					{disabled}
					class="block rounded bg-brand px-6 py-2 text-white hover:bg-blue-900
					disabled:cursor-not-allowed disabled:bg-brand-blue"
				>
					{#if hasPosted}
						<Spinner />
					{:else}
						Post Gist
					{/if}
				</button>
			</div>
		</fieldset>
	</form>
</ModalBackdrop>
