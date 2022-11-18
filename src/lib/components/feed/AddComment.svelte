<script>
	import { gists, updatedGist } from '$lib/stores/gists.js';

	let newComment = 'simple is better than complex indeed.!!!';

	const addComment = async () => {
		const res = await fetch(`${import.meta.env.VITE_API_BASE_ROUTE}/comments`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			// TODO: "author" would be the current logged in user
			body: JSON.stringify({ content: newComment, author: '6347d57f11609865d9324b48' })
		});

		if (res.ok) {
			const data = await res.json();
			console.log(data);
		}
		console.log($gists);
		// // Find the current gist
		// $updatedGist = $gists.find((gist) => gist.id === $updatedGist.id) || {};
		// console.log($updatedGist);

		// if (!$updatedGist) $updatedGist.comments = [];

		// // Update the comments of the gist
		// $updatedGist.comments.unshift({ text: newComment });

		// console.log($updatedGist);
	};

	// $: {
	// 	console.log($gists);
	// 	console.log($updatedGist);
	// }
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
