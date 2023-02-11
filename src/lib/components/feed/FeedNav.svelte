<script>
	import Icon from '@iconify/svelte';
	import Logo from '../shared/Logo.svelte';
	import TopProfile from './TopProfile.svelte';

	const navIcons = [
		{ icon: 'bytesize:search', name: 'search', href: '/search' },
		{ icon: 'ant-design:calendar-outlined', name: 'events', href: '/events' },
		{ icon: 'clarity:talk-bubbles-outline-badged', name: 'chats', href: '/chats' }
	];
</script>

<!-- bg-[#8A94AE] -->
<header class="sticky top-0 z-20 bg-[#182747] md:shadow">
	<nav
		class="container relative mx-auto flex min-h-[10vh] max-w-6xl items-center justify-between px-3"
	>
		<!-- Logo -->
		<Logo />

		<div class="flex items-center gap-8 md:gap-10">
			<div class="flex gap-6">
				{#each navIcons as navIcon}
					<a href={navIcon.href} class="flex flex-col items-center gap-1 text-white">
						<Icon icon={navIcon.icon} class="" />
						<span class="text-xs">{navIcon.name}</span>
					</a>
				{/each}
			</div>

			<!-- Profile Image -->
			<TopProfile />
		</div>
	</nav>
</header>
