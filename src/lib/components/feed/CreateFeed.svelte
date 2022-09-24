<script>
	import Spinner from '../Spinner.svelte';

	let textInput = 'lorem ipsum dolor sit amet';
	let hasPosted = false;

	async function postGist() {
		console.log(textInput);
	}
</script>

<section
	class="container mx-auto mb-3 flex justify-center rounded-md bg-white p-2 shadow-sm md:w-[37.5rem] md:p-5"
>
	<form action="" on:submit|preventDefault={postGist} class="w-full p-3">
		<fieldset class="flex flex-col gap-5">
			<legend class="mb-3 text-gray-500">What's on your mind?</legend>

			<textarea
				name=""
				id=""
				bind:value={textInput}
				class="block max-h-[300px] min-h-[100px] w-full rounded-sm border border-gray-300 text-brand-blue"
			/>

			<button
				type="submit"
				class="block rounded-lg bg-brand px-6 py-2 text-white hover:shadow-sm
			hover:shadow-brand disabled:cursor-not-allowed disabled:bg-brand-blue"
				disabled={textInput ? false : true}
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
