<script>
	import { fly } from 'svelte/transition';
	import dayjs from 'dayjs';
	import CardImage from '../cards/CardImage.svelte';
</script>

<div
	in:fly={{ y: 500 }}
	class="mb-2 flex w-full gap-2 rounded border-b-2 border-[rgb(37,_49,_109,_0.25)] bg-white p-3"
>
	<CardImage src="/images/default.jpg" />
	<!-- Notification Message -->
	<div class="basis-full">
		<h3 class="flex w-full items-center justify-between font-pt-sans">
			<span class="text-sm font-normal text-brand">John Doe</span>
			<span class="text-xs text-brand-blue md:text-sm">{dayjs().format('DD MMMM YYYY')}</span>
		</h3>
		<p class="font-pt-sans text-sm text-brand-blue">Lorem ipsum dolor sit amet consectetur</p>
	</div>
</div>

<style>
	h3 {
		border-color: rgb(37 49 109 / var(--tw-border-opacity));
	}
</style>
