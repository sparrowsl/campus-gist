<script>
	import { page } from '$app/stores';
</script>

<section class="grid min-h-[90vh] place-content-center">
	<h1 class="mb-1 animate-pulse text-center text-4xl font-bold tracking-wider text-brand">
		{$page.status}
	</h1>
	<p class="text-brand-blue md:text-lg">{$page.error.message}</p>
	<a
		href="/gists"
		class="mx-auto mt-4 block rounded-md border border-brand-blue px-4 py-2 text-brand
		hover:bg-brand-blue hover:text-white"
	>
		back to gists
	</a>
</section>
