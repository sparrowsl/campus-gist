<script>
	import { gists, updatedGist } from '$lib/stores/gists.js';

	let newComment = 'simple is better than complex indeed.!!!';

	const addComment = async () => {
		// Find the current gist
		$updatedGist = $gists.find((gist) => gist.id === $updatedGist.id);
		// Update the content of the gist
		$updatedGist.comments.unshift({ text: newComment });
	};
</script>

<form action="" on:submit|preventDefault={addComment}>
	<fieldset class="flex flex-col gap-2">
		<textarea
			required
			bind:value={newComment}
			placeholder="Write a comment..."
			class="block max-h-28 min-h-[40px] w-full rounded border-gray-300 text-brand-blue"
		/>
		<button
			type="submit"
			class="ml-auto block w-fit rounded bg-brand px-6 py-2 text-xs text-white
			hover:bg-blue-800 md:text-sm"
		>
			Send
		</button>
	</fieldset>
</form>
