<script>
	import Icon from '@iconify/svelte';
	import CardContexualMenu from '../CardContexualMenu.svelte';
	import CardImage from '../CardImage.svelte';

	export let feed;
</script>

<div
	class="mx-auto flex w-full gap-3 rounded-md border bg-white p-3 shadow-md md:w-[37.5rem] md:p-5"
>
	<!-- Card profile -->
	<CardImage src={feed.author.image} />
	<!-- User info -->
	<section class="flex w-full flex-col gap-3">
		<div class="flex justify-between">
			<!-- User name and full name -->
			<div>
				<h2 class="font-pt-sans text-sm font-bold md:text-base">{feed.author.fullname}</h2>
				<span class="text-xs text-brand md:text-sm">@{feed.author.username}</span>
			</div>

			<!-- Contexual Menu -->
			<CardContexualMenu />
		</div>

		<!-- User text/post/gist -->
		<p class="text-sm text-gray-600 md:text-base">{feed.content}</p>

		<!-- number of comments on the post/gist -->
		<div class="ml-auto flex items-center gap-1 text-xs text-gray-500 md:text-sm">
			<Icon icon="bi:chat-dots" />
			<span class="italic">&lbrace;{feed.comments.length || 0}&rbrace; comments</span>
		</div>
	</section>
</div>
