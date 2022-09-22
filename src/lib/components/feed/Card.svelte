<script>
	import Icon from '@iconify/svelte';
	import CardContexualMenu from '../CardContexualMenu.svelte';
	import CardImage from '../CardImage.svelte';
</script>

<div class="mx-auto flex w-[37.5rem] gap-3 rounded-md border p-5 shadow-md">
	<!-- Card profile -->
	<CardImage />
	<!-- User info -->
	<section class="flex flex-col gap-3">
		<div class="flex justify-between">
			<!-- User name and full name -->
			<div>
				<h2 class="font-barlow font-bold">John Doe</h2>
				<span class="text-sm text-brand">@johndoe</span>
			</div>

			<!-- Contexual Menu -->
			<CardContexualMenu />
		</div>

		<!-- User text/post -->
		<p class="text-gray-600">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis doloribus blanditiis
			eligendi. Perferendis dolorem veritatis sunt quaerat aliquid illum esse.
		</p>

		<!-- Comments -->
		<div class="ml-auto flex items-center gap-1 text-sm text-gray-500">
			<Icon icon="bi:chat-dots" />
			<span> &lbrace;0&rbrace; comments </span>
		</div>
	</section>
</div>
