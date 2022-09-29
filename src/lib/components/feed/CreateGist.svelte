<script>
	import Card from '$lib/components/feed/Card.svelte';
	import { gists } from '$lib/stores/gists.js';
	import { createGistModal } from '$lib/stores/modals.js';
	import CreateGistModal from '$lib/components/modals/CreateGistModal.svelte';
</script>

<!-- Button to activate modal for creating new feed -->
<button
	type="button"
	on:click={() => ($createGistModal = true)}
	class="mx-auto mb-3 block w-full rounded-sm bg-brand-blue p-2 text-center font-pt-sans
			text-sm font-bold text-white hover:bg-brand hover:shadow-sm hover:shadow-brand-blue
			md:w-[37.5rem] md:text-base"
>
	Create New Gist
</button>
