<script>
	import { afterNavigate } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import { gravatar } from '$lib/utils/gravatar';

	let openTopProfile = false;
	afterNavigate(() => (openTopProfile = false));
</script>

<section class="relative">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<img
		src={gravatar('sparrow@yahoo.com')}
		alt=""
		class="h-9 w-9 rounded-full text-xs text-white hover:cursor-pointer md:h-10 md:w-10 lg:h-12 lg:w-12"
		on:click={() => (openTopProfile = !openTopProfile)}
	/>

	<!-- Profile short menu -->
	<ul
		class="{openTopProfile
			? 'flex min-h-full'
			: 'hidden h-0'} absolute top-full -right-1 z-50 mt-2 w-fit flex-col gap-4 rounded-sm
			 bg-white py-4 px-5 shadow-md md:-right-0"
	>
		<li class="mb-1 flex flex-col border-b pb-2 text-left text-xs text-brand-blue hover:text-brand">
			<span class="font-sm mb-1 block text-base font-extrabold text-brand"> John Doe </span>
			<span class="text-xs text-blue-800">johndoe@gmail.com</span>
		</li>
		<li>
			<a
				href="/settings"
				class="flex items-center gap-2 text-xs text-brand-blue hover:text-brand md:text-sm"
			>
				<Icon class="text-base md:text-lg" icon="ant-design:setting-outlined" />
				<span> Settings&nbsp;&amp;&nbsp;Privacy </span>
			</a>
		</li>
		<li>
			<a
				href="/"
				class="flex items-center gap-2 text-xs text-brand-blue hover:text-red-500 md:text-sm"
			>
				<Icon class="text-base md:text-lg" icon="mdi-light:logout" />
				<span> Logout </span>
			</a>
		</li>
	</ul>
</section>
