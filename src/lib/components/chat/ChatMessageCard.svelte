<script>
	import { scale } from 'svelte/transition';

	export let message;
</script>

<div in:scale class="-z-20 ml-auto rounded-md bg-white p-3 md:w-[80%]">
	<h3 class="mb-1 w-fit cursor-default text-xs text-blue-900 md:hover:text-blue-600">
		@{message?.author || 'johndoe'}
	</h3>
	<p class="text-sm text-brand-blue">{message?.text || ''}</p>
</div>
