<script>
	import Icon from '@iconify/svelte';
	import { activeTab } from '$lib/stores/settings.js';

	const tabsHeader = [
		{
			name: 'profile',
			icon: 'gg:profile'
		},
		{
			name: 'account',
			icon: 'ep:setting'
		},
		{
			name: 'feedback',
			icon: 'arcticons:feedback'
		}
	];
</script>

<aside
	class="fixed bottom-0 right-0 left-0 z-20 flex w-full items-center bg-gray-50 md:static md:z-0 md:flex-col"
>
	<!-- Tab options -->
	<div class="w-full md:mt-10 md:flex md:items-center md:justify-center">
		<ul class="flex items-center justify-around gap-5 py-3 md:flex-col md:items-start">
			{#each tabsHeader as tab}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					on:click={() => ($activeTab = tab.name)}
					class="{$activeTab === tab.name
						? 'text-gray-900 font-bold'
						: 'text-gray-500 hover:text-gray-800 font-light'} flex w-fit cursor-pointer
						flex-col items-center gap-1 text-xs md:flex-row md:gap-2 md:text-base"
				>
					<Icon icon={tab.icon} class="text-lg md:text-2xl" />
					{tab.name}
				</li>
			{/each}
			<li>
				<a
					href="/gists"
					class="block gap-1 text-sm text-blue-500 underline hover:text-brand md:flex md:items-center md:gap-2 md:text-base"
				>
					<Icon icon="mdi:arrow-left-bottom" class="text-lg" />
					back
				</a>
			</li>
		</ul>
	</div>
</aside>
