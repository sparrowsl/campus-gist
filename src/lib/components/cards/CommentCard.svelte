<script>
	import CardImage from './CardImage.svelte';

	export let comment = {};
</script>

<figure class="flex w-full gap-2 rounded bg-gray-50 p-3">
	<CardImage />

	<figcaption>
		<h3 class="mb-1 flex justify-between">
			<a href="/profile" class="font-pt-sans text-sm font-bold text-brand hover:text-blue-700">
				@{comment?.author?.username || 'johndoe'}
			</a>
			<span class="font-pt-sans text-xs font-light text-gray-600"
				>{comment?.datePosted || '3 hours ago'}</span
			>
		</h3>
		<p class="text-sm font-light md:text-base">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, modi.
		</p>
	</figcaption>
</figure>
