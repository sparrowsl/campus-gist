<script>
	import { fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import Spinner from '../Spinner.svelte';
	import { gists } from '$lib/stores/gists.js';
	import { createGistModal } from '$lib/stores/modals.js';

	let textInput = 'lorem ipsum dolor sit amet';
	let hasPosted = false;
	$: disabled = textInput ? false : true;

	const dummyFeed = {
		author: {
			username: 'johndoe',
			fullname: 'John Doe',
			email: 'johndoe@gmail.com',
			image: '/images/default.jpg'
		}
	};

	const postGist = async () => {
		hasPosted = true;
		disabled = true;
		// Generate new id
		dummyFeed.id = $gists.length + 1;
		// Pass the new data as the content
		dummyFeed.content = textInput;

		setTimeout(() => {
			$createGistModal = false;
			// Add to the gists store
			$gists = [dummyFeed, ...$gists];
		}, 1500);
	};

	$: console.log($gists);
</script>

<section
	in:fly={{ y: 500, duration: 300 }}
	out:fly={{ y: -500, duration: 300 }}
	class="fixed inset-0 grid h-screen place-content-center bg-black bg-opacity-75"
>
	<form
		action=""
		on:submit|preventDefault={postGist}
		class="min-w-[325px] rounded-md bg-white p-5 md:min-w-[30rem] md:p-10"
	>
		<!-- Close Modal -->
		<span class="" on:click={() => ($createGistModal = false)}>
			<Icon
				icon="ep:close-bold"
				class="mb-3 ml-auto cursor-pointer text-xl text-red-400 hover:text-red-600"
			/>
		</span>

		<fieldset class="flex flex-col gap-5">
			<legend class="mb-3 text-gray-500">What's on your mind?</legend>

			<textarea
				bind:value={textInput}
				class="block max-h-[300px] min-h-[100px] w-full rounded-sm border border-gray-300 text-brand-blue"
			/>

			<button
				type="submit"
				{disabled}
				class="block rounded-lg bg-brand px-6 py-2 text-white hover:shadow-sm
			hover:shadow-brand disabled:cursor-not-allowed disabled:bg-brand-blue disabled:hover:shadow-none"
			>
				{#if hasPosted}
					<Spinner />
				{:else}
					Post Gist
				{/if}
			</button>
		</fieldset>
	</form>
</section>
