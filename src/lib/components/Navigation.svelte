<script>
	import Icon from '@iconify/svelte';

	let openMenu = false;
</script>

<!-- bg-[#8A94AE] -->
<header class="sticky top-0 bg-[#182747] md:shadow">
	<nav
		class="container relative mx-auto flex min-h-[10vh] max-w-6xl items-center justify-between px-3"
	>
		<!-- Logo -->
		<a href="/" class="block font-pt-sans text-lg font-extrabold text-white md:text-xl">
			Campus Gist
		</a>

		<!-- Menu Items -->
		<div
			class="{openMenu
				? 'flex'
				: 'hidden'} absolute right-0 top-full mx-5 mt-1 w-fit flex-col rounded-b-xl
				bg-white shadow-lg md:static md:m-0 md:flex md:flex-row md:gap-14 md:bg-transparent
				md:shadow-none"
		>
			<ul class="flex flex-col gap-3 p-5 md:flex-row md:p-0">
				<li
					class="rounded-full border border-gray-500 px-4 py-1 transition-colors
					hover:border-white hover:bg-white"
				>
					<a href="/" class="text-brand-blue md:text-white md:hover:text-brand">Login</a>
				</li>
				<li
					class="rounded-full border border-gray-500 px-4 py-1 transition-colors
					hover:border-white hover:bg-white"
				>
					<a href="/register" class="text-brand-blue md:text-white md:hover:text-brand">Register</a>
				</li>
			</ul>
		</div>

		<!-- Menu toggle -->
		<div class="md:hidden" on:click={() => (openMenu = !openMenu)}>
			<Icon
				icon={openMenu ? 'ei:close' : 'heroicons-solid:menu-alt-3'}
				class="block cursor-pointer text-3xl text-white"
			/>
		</div>
	</nav>
</header>
