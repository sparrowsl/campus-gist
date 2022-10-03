<script>
	import { page } from '$app/stores';
</script>

<section class="grid h-screen place-content-center gap-3">
	<h1 class="text-4xl text-brand">
		{#if $page.status === 404}
			{$page.status}: {$page.url.pathname} {$page.error.message}
		{:else if $page.status === 500}
			{$page.status}: {$page.error.message}
		{/if}
	</h1>
	<a href="/gists" class="mx-auto block min-w-fit text-brand underline"> back to gists</a>
</section>
