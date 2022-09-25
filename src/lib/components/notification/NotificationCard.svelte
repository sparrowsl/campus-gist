<script>
	import CardImage from '../CardImage.svelte';
	import dayjs from 'dayjs';
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: 500 }} class="flex w-full gap-2 border-b border-brand bg-white p-3">
	<CardImage src="/images/default.jpg" />
	<!-- Notification Message -->
	<div class="basis-full">
		<h3 class="flex w-full items-center justify-between font-pt-sans">
			<span class="font-extrabold text-brand">John Doe</span>
			<span class="text-xs text-brand-blue md:text-sm">{dayjs().format('DD MMMM YYYY')}</span>
		</h3>
		<p class="font-pt-sans text-brand-blue">Lorem ipsum dolor sit amet consectetur</p>
	</div>
</div>
