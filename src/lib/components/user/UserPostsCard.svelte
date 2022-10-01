<script>
	import Icon from '@iconify/svelte';
	import dayjs from 'dayjs';
	import CardContexualMenu from '$lib/components/cards/CardContexualMenu.svelte';
</script>

<div class="flex w-full flex-col gap-3 rounded bg-white p-3">
	<div class="flex justify-between">
		<!-- User name and full name -->
		<div class="flex flex-col">
			<h2 class="font-pt-sans text-sm font-bold md:text-base">
				<a href="/profile" class="ml-1 text-sm text-blue-400 hover:text-brand md:text-sm">
					@johndoe
				</a>
			</h2>
			<span class="text-xs italic text-gray-500 md:text-sm">
				{dayjs().format('DD MMMM YYYY')}
			</span>
		</div>

		<!-- Contexual Menu -->
		<CardContexualMenu editGistId={2} on:delete={() => console.log('delete me')} />
	</div>

	<!-- User text/post/gist -->
	<p class="text-sm text-gray-600 md:text-base">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque...
		<a href="/gists/2" class="text-sm italic text-blue-400" data-sveltekit-prefetch> read more </a>
	</p>

	<!-- number of comments on the post/gist -->
	<div class="ml-auto flex items-center gap-1 text-xs text-gray-500 md:text-sm">
		<Icon icon="bi:chat-dots" />
		<span class="italic"> &lbrace;0&rbrace; comments </span>
	</div>
</div>
