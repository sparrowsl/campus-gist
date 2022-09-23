<script>
	import Icon from '@iconify/svelte';
	import TopProfile from './TopProfile.svelte';

	const navIcons = [
		{
			name: 'Search',
			icon: 'bytesize:search'
		},
		{
			name: 'Alerts',
			icon: 'clarity:notification-outline-badged'
		},
		{
			name: 'Messages',
			icon: 'bx:message-detail'
		}
		// {
		// 	name: 'Settings',
		// 	icon: 'ant-design:setting-outlined'
		// }
	];
</script>

<!-- bg-[#8A94AE] -->
<header class="sticky top-0 bg-[#182747] md:shadow">
	<nav
		class="container relative mx-auto flex min-h-[10vh] max-w-6xl items-center justify-between px-3"
	>
		<!-- Logo -->
		<a href="/" class="block font-pt-sans text-base font-extrabold text-white md:text-lg">
			Campus Gist
		</a>

		<section class="flex items-center gap-5 md:gap-10">
			<ul class="flex gap-5">
				{#each navIcons as navIcon}
					<li>
						<a href="/feed" class="flex flex-col items-center gap-1 text-white">
							<Icon icon={navIcon.icon} class="text-sm md:text-lg" />
							<span class="text-xs"> {navIcon.name} </span>
						</a>
					</li>
				{/each}
			</ul>

			<!-- Profile Image -->
			<TopProfile />
		</section>
	</nav>
</header>
