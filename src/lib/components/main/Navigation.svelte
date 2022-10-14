<script>
	import { afterNavigate } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import Logo from '../shared/Logo.svelte';

	let openMenu = false;

	afterNavigate(() => (openMenu = false));
</script>

<!-- bg-[#8A94AE] -->
<header class="sticky top-0 bg-[#182747] md:shadow">
	<nav
		class="container relative mx-auto flex min-h-[10vh] max-w-6xl items-center justify-between px-3"
	>
		<!-- Logo -->
		<Logo />

		<!-- Menu Items -->
		<div
			class="{openMenu
				? 'flex'
				: 'hidden'} absolute right-0 top-full mx-5 mt-1 w-fit flex-col rounded-b-xl
				bg-white shadow-lg md:static md:m-0 md:flex md:flex-row md:gap-14 md:bg-transparent
				md:shadow-none"
		>
			<div class="flex flex-col items-center gap-5 p-5 md:flex-row md:p-0">
				<a
					href="/"
					class="block w-full text-center text-sm text-brand hover:text-gray-200
					hover:underline md:text-white"
				>
					Home
				</a>

				<a
					data-sveltekit-prefetch
					href="/login"
					class="block text-center text-sm text-brand hover:text-gray-200 hover:underline md:text-white"
				>
					Login
				</a>

				<a
					data-sveltekit-prefetch
					href="/register"
					class="block text-center text-sm text-brand hover:text-gray-200 hover:underline md:text-white"
				>
					Register
				</a>
			</div>
		</div>

		<!-- Menu toggle -->
		<div class="md:hidden" on:click={() => (openMenu = !openMenu)}>
			<Icon
				icon={openMenu ? 'eva:close-fill' : 'heroicons-solid:menu-alt-3'}
				class="block cursor-pointer text-3xl text-white"
			/>
		</div>
	</nav>
</header>
