<script>
	import { scale } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import dayjs from 'dayjs';
	import { gists, getGists } from '$lib/stores/gists.js';
	import CardContexualMenu from './CardContexualMenu.svelte';
	import CardImage from './CardImage.svelte';

	export let gist;

	const deleteGist = async (gist) => {
		const gists = await getGists();
		console.log(gist);
		gists.filter((feed) => feed.id !== gist.id);

		console.log(gists);
	};
</script>

<figure
	in:scale
	class="mx-auto flex w-full gap-3 rounded-md border bg-white p-3 shadow-sm md:w-[37.5rem] md:p-5"
>
	<!-- Card profile -->
	<CardImage src={gist.author.image} />
	<!-- User info -->
	<figcaption class="flex w-full flex-col gap-3">
		<div class="flex justify-between">
			<!-- User name and full name -->
			<div class="flex w-full justify-between">
				<h2 class="flex flex-col">
					<span class="font-pt-sans font-bold md:text-base">{gist.author.fullname}</span>
					<a href="/profile" class="text-xs text-blue-400 hover:text-brand md:text-sm">
						@{gist.author?.username}
					</a>
				</h2>
				<span class="text-xs italic text-gray-400 md:text-sm">
					{dayjs().format('DD MMMM YYYY')}
				</span>
			</div>
		</div>

		<!-- User text/post/gist -->
		<p class="text-sm font-light text-gray-700 md:text-base">
			{gist.body.slice(0, 75)}...
			<a href="/gists/{gist.id}" class="text-sm italic text-blue-400" data-sveltekit-prefetch>
				read more
			</a>
		</p>

		<!-- number of comments on this post/gist -->
		<p class="ml-auto flex items-center gap-1 text-xs text-gray-400 md:text-sm">
			<Icon icon="bi:chat-dots" />
			<span class="italic">
				&lbrace;{gist.comments?.length || 0}&rbrace; {gist.comments?.length === 1
					? 'comment'
					: 'comments'}
			</span>
		</p>
	</figcaption>
</figure>
