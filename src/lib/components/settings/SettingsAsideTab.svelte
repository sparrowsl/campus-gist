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

<aside class="">
	<h2 class="text-center text-2xl font-bold text-brand-blue">Settings</h2>

	<!-- Settings Tab options -->
	<div class="mt-10">
		<ul class="grid place-content-center gap-3 py-3">
			{#each tabsHeader as tab}
				<li
					on:click={() => ($activeTab = tab.name)}
					class="{$activeTab === tab.name
						? 'text-gray-900 font-bold'
						: 'text-gray-500 hover:text-gray-800 font-light'} flex w-fit cursor-pointer
            items-center gap-2 capitalize"
				>
					<Icon icon={tab.icon} class="text-2xl" />
					<span>{tab.name}</span>
				</li>
			{/each}
		</ul>
	</div>
</aside>
