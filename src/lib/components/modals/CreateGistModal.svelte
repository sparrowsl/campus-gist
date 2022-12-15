<script>
	import { enhance, applyAction } from '$app/forms';
	import { gists } from '$lib/stores/gists.js';
	import { createGistModal } from '$lib/stores/modals.js';
	import ModalBackdrop from './ModalBackdrop.svelte';
	import Textarea from '../shared/Textarea.svelte';
	import Spinner from '../shared/Spinner.svelte';
	import { page } from '$app/stores';

	let textInput = `""`;
	let posting = false;

	// async function createGist() {
	// 	console.log();
	// 	posting = true;

	// 	const res = await fetch(`/api/gists/`, {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		// TODO: "author" would be the current logged in user
	// 		body: JSON.stringify({ content: textInput, author: '6391a001907b6f0458e1cb8f' })
	// 	});

	// 	if (res.ok) {
	// 		const data = await res.json();
	// 		console.log(data);
	// 		// const { _id, content, author, comments, datePosted } = data;
	// 		// $createGistModal = false; // Close the Modal
	// 		// $gists = [{ _id, content, author, comments, datePosted }, ...$gists]; // Add gist to the store
	// 	}
	// }
</script>

<ModalBackdrop>
	<form
		action="?/createGist"
		method="POST"
		use:enhance={({ form }) => {
			posting = true;
			return async ({ result, update }) => {
				if (result.type === 'success') form.reset();
				if (result.type === 'invalid') await applyAction(form);
				update();
			};
		}}
	>
		<fieldset class="flex flex-col gap-5">
			<legend class="mb-3 text-gray-500">What's on your mind?</legend>

			<input type="hidden" hidden value={$page.data.student.id} name="author" />
			<Textarea name="message" classes="text-brand-blue" bind:value={textInput} />

			<div class="flex justify-between">
				<!-- Close Modal -->
				<button
					type="button"
					on:click={() => ($createGistModal = false)}
					class="rounded border border-red-200 px-6 py-2 text-xs text-red-700 md:hover:bg-red-200"
				>
					Cancel
				</button>

				<!-- Post a gist -->
				<button
					type="submit"
					class="block rounded bg-brand px-6 py-2 text-xs text-white hover:bg-blue-900"
				>
					{#if posting}
						<Spinner />
					{:else}
						Post
					{/if}
				</button>
			</div>
		</fieldset>
	</form>
</ModalBackdrop>
