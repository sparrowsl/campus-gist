<script>
	import Icon from '@iconify/svelte';

	let openMenu = false;
</script>

<!-- bg-[#8A94AE] -->
<header class="sticky top-0 bg-white md:shadow">
	<nav
		class="container relative mx-auto flex min-h-[10vh] items-center justify-between px-3 md:p-0"
	>
		<!-- Logo -->
		<a href="/" class="block font-extrabold text-brand-blue md:text-lg">Campus Gist</a>

		<!-- Menu Items -->
		<div
			class="{openMenu ? 'flex' : 'hidden'} absolute left-0 right-0 top-full mx-5 mt-1 flex-col
				rounded-xl bg-white shadow-lg md:static md:flex md:flex-row md:gap-14 md:bg-transparent md:shadow-none"
		>
			<ul class="flex flex-col gap-3 p-5 md:flex-row">
				<li><a href="/" class="text-brand-blue hover:text-brand">Login</a></li>
				<li><a href="/" class="text-brand-blue hover:text-brand">Register</a></li>
			</ul>
		</div>

		<!-- Menu toggle -->
		<div class="md:hidden" on:click={() => (openMenu = !openMenu)}>
			<Icon
				icon={openMenu ? 'ei:close' : 'heroicons-solid:menu-alt-3'}
				class="block cursor-pointer text-3xl text-brand"
			/>
		</div>
	</nav>
</header>
