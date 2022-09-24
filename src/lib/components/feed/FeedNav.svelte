<script>
	import Icon from '@iconify/svelte';
	import TopProfile from './TopProfile.svelte';

	const navIcons = [
		{ icon: 'bytesize:search' },
		{ icon: 'clarity:notification-outline-badged' },
		{ icon: 'bx:message-detail' }
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

		<div class="flex items-center gap-8 md:gap-10">
			<div class="flex gap-6">
				{#each navIcons as navIcon}
					<a href="/feed" class="flex flex-col items-center gap-1 text-white">
						<Icon icon={navIcon.icon} class="text-lg md:text-xl" />
					</a>
				{/each}
			</div>

			<!-- Profile Image -->
			<TopProfile />
		</div>
	</nav>
</header>
