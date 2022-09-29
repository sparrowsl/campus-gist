<script>
	import { page } from '$app/stores';
</script>

<section class="grid min-h-[90vh] place-content-center">
	<h1 class="mb-1 animate-pulse text-center text-4xl font-bold tracking-wider text-brand">
		{$page.status}
	</h1>
	<p class="text-brand-blue md:text-lg">{$page.error.message}</p>
	<a href="/gists" class="mx-auto mt-4 block px-4 py-2 text-brand underline hover:no-underline">
		back to gists
	</a>
</section>
