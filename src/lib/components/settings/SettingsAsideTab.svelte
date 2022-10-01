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

<aside class="w-fit md:static md:w-full">
	<!-- Tab options -->
	<div class="mt-10 w-fit md:w-full">
		<ul class="grid gap-5 py-3 md:place-content-center">
			{#each tabsHeader as tab}
				<li
					on:click={() => ($activeTab = tab.name)}
					class="{$activeTab === tab.name
						? 'text-gray-900 font-bold'
						: 'text-gray-500 hover:text-gray-800 font-light'} flex w-fit cursor-pointer flex-col items-center
            gap-2 text-xs capitalize md:flex-row md:text-base"
				>
					<Icon icon={tab.icon} class="text-2xl" />
					<span>{tab.name}</span>
				</li>
			{/each}
			<li>
				<a href="/gists" class="block text-sm text-blue-500 underline md:text-base">back</a>
			</li>
		</ul>
	</div>
</aside>
