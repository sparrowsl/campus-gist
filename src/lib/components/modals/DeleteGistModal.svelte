<script>
	import { fly } from 'svelte/transition';
	import { deleteGistModal } from '$lib/stores/modals.js';
	import { gists } from '$lib/stores/gists.js';
	import { goto } from '$app/navigation';

	export let gist;

	const deleteGist = async () => {
		$gists = $gists.filter((el) => el.id !== gist.id);
		goto('/gists');
	};
</script>

<section
	in:fly={{ y: 500, duration: 300 }}
	out:fly={{ y: -500, duration: 300 }}
	class="fixed inset-0 z-30 grid h-screen place-content-center bg-black bg-opacity-75"
>
	<div class="min-w-[325px] rounded-md bg-white p-5 md:min-w-[30rem] md:p-10">
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
	</div>
</section>
