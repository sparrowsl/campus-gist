<script>
	import { fly } from 'svelte/transition';
	import Spinner from '../Spinner.svelte';
	import { gists } from '$lib/stores/gists.js';
	import { createGistModal } from '$lib/stores/modals.js';

	let textInput = `The vast majority of us will say "Yep... I have absolutely no idea what I meant by 'Fix style' 6 months ago."`;
	let hasPosted = false;
	$: disabled = textInput ? false : true;

	const dummyFeed = {
		author: {
			username: 'johndoe',
			fullname: 'John Doe',
			email: 'johndoe@gmail.com',
			image: '/images/default.png'
		},
		comments: []
	};

	const postGist = async () => {
		hasPosted = true;
		disabled = true;
		// Generate new id
		dummyFeed.id = $gists.length + 1;
		// Pass the new data as the content
		dummyFeed.body = textInput;

		setTimeout(() => {
			$createGistModal = false;
			$gists = [dummyFeed, ...$gists];
		}, 1500);
	};
</script>

<section
	in:fly={{ y: 500, duration: 300 }}
	out:fly={{ y: -500, duration: 300 }}
	class="fixed inset-0 z-30 grid h-screen place-content-center bg-black bg-opacity-75"
>
	<form
		action=""
		on:submit|preventDefault={postGist}
		class="min-w-[325px] rounded-md bg-white p-5 md:min-w-[30rem] md:p-10"
	>
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
</section>
