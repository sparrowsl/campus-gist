<script>
	import dayjs from 'dayjs';
	import CardImage from './CardImage.svelte';

	export let comment = {};
</script>

<figure class="flex w-full gap-2 rounded bg-gray-50 p-3">
	<CardImage />

	<figcaption>
		<h3 class="mb-1 flex justify-between">
			<a href="/profile" class="font-pt-sans text-sm font-bold text-brand hover:text-blue-700">
				@{comment.author?.username || 'johndoe'}
			</a>
			<span class="font-pt-sans text-xs font-light text-gray-600">
				{comment?.datePosted || dayjs().format('DD MMMM YYYY')}
			</span>
		</h3>
		<p class="whitespace-pre-wrap text-sm font-light md:text-base">
			{comment?.content || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
		</p>
	</figcaption>
</figure>
