<script>
	import { scale } from 'svelte/transition';

	export let message;
</script>

<div in:scale class="-z-20 ml-auto max-w-[90%] rounded-md bg-white p-3 md:max-w-[75%]">
	<h3 class="mb-2 w-fit cursor-default text-xs text-blue-500 md:hover:text-blue-600">
		@{message?.author || 'johndoe'}
	</h3>
	<p class="text-sm font-light text-brand-blue md:text-base">{message?.text || ''}</p>
</div>
