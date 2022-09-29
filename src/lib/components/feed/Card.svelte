<script>
	import Icon from '@iconify/svelte';
	import { scale } from 'svelte/transition';
	import dayjs from 'dayjs';
	import { gists } from '$lib/stores/gists.js';
	import CardContexualMenu from '../cards/CardContexualMenu.svelte';
	import CardImage from '../cards/CardImage.svelte';

	export let gist;

	const deleteGist = async (gist) => await ($gists = $gists.filter((feed) => feed.id !== gist.id));
</script>

<div
	in:scale
	class="mx-auto flex w-full gap-3 rounded-md border bg-white p-3 shadow-sm md:w-[37.5rem] md:p-5"
>
	<!-- Card profile -->
	<CardImage src={gist.author.image} />
	<!-- User info -->
	<section class="flex w-full flex-col gap-3">
		<div class="flex justify-between">
			<!-- User name and full name -->
			<div class="flex flex-col">
				<h2 class="font-pt-sans text-sm font-bold md:text-base">
					{gist.author.fullname}
					<span class="ml-1 text-xs text-blue-400 md:text-sm">@{gist.author.username}</span>
				</h2>
				<span class="text-xs italic text-gray-500 md:text-sm">
					{dayjs().format('DD MMMM YYYY')}
				</span>
			</div>

			<!-- Contexual Menu -->
			<CardContexualMenu editGistId={gist.id} on:delete={deleteGist(gist)} />
		</div>

		<!-- User text/post/gist -->
		<p class="text-sm text-gray-600 md:text-base">
			{gist.body.slice(0, 70)}...
			<a href="/gists/{gist.id}" class="text-sm italic text-blue-400" data-sveltekit-prefetch>
				read more
			</a>
		</p>

		<!-- number of comments on the post/gist -->
		<div class="ml-auto flex items-center gap-1 text-xs text-gray-500 md:text-sm">
			<Icon icon="bi:chat-dots" />
			<span class="italic">
				&lbrace;{gist.comments?.length || 0}&rbrace; {gist.comments?.length === 1
					? 'comment'
					: 'comments'}
			</span>
		</div>
	</section>
</div>
