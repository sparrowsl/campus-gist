<script>
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="group pointer-events-auto relative h-fit">
	<Icon
		icon="bi:three-dots-vertical"
		class="text-lg text-gray-400 hover:cursor-pointer hover:text-brand"
	/>

	<div
		class="absolute right-4 top-0 hidden flex-col gap-2 rounded border bg-white px-5
		py-3 shadow-xl group-hover:flex"
	>
		<a href="/gists/edit" class="text-xs text-gray-500 hover:text-blue-600"> edit </a>
		<button
			type="button"
			on:click={() => dispatch('delete')}
			class="text-xs text-gray-500 hover:text-red-600"
		>
			delete
		</button>
	</div>
</div>
