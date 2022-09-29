<script>
	import { createGistModal } from '$lib/stores/modals.js';
	import Icon from '@iconify/svelte';
</script>

<button
	type="button"
	on:click={() => ($createGistModal = true)}
	class="fixed bottom-5 right-3 z-10 grid h-12 w-12 place-content-center rounded-full bg-brand-blue
	shadow-sm hover:bg-brand hover:shadow-brand-blue md:right-14 lg:right-72 lg:bottom-16"
>
	<Icon icon="carbon:add" class="text-3xl text-gray-300" />
</button>
