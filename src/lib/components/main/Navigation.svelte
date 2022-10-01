<script>
	import { afterNavigate } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import Logo from '../Logo.svelte';

	let openMenu = true;

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
			<ul class="flex flex-col gap-5 p-5 md:flex-row md:p-0">
				<li class="">
					<a
						href="/"
						class="block w-full rounded bg-brand-blue px-6 py-2 text-center text-sm
						text-white hover:bg-brand"
					>
						Login
					</a>
				</li>
				<li class="">
					<a
						href="/register"
						class="block w-full rounded bg-brand-blue px-6 py-2 text-center text-sm
						text-white hover:bg-brand"
					>
						Register
					</a>
				</li>
			</ul>
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
