<script>
	import { fly } from 'svelte/transition';
	import dayjs from 'dayjs';
	import Icon from '@iconify/svelte';
</script>

<div
	in:fly={{ y: 500 }}
	class="mb-2 flex w-full items-center gap-4 rounded border-b-2 border-[rgb(37,_49,_109,_0.25)] bg-white p-3"
>
	<Icon icon="ep:map-location" class="text-3xl text-brand-blue" />

	<!-- Enents Message -->
	<div class="basis-full">
		<h3 class="flex w-full items-center justify-between font-pt-sans">
			<span class="text-sm font-normal text-brand">John Doe</span>
			<span class="text-xs text-brand-blue md:text-sm">{dayjs().format('DD MMMM YYYY')}</span>
		</h3>
		<p class="font-pt-sans text-sm text-brand-blue">Lorem ipsum dolor sit amet consectetur</p>
	</div>
</div>
