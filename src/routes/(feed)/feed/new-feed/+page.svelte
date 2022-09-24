<script>
	import CreateFeed from '$lib/components/feed/CreateFeed.svelte';
</script>

<main>
	<section class="container mx-auto flex min-h-[90vh] flex-col items-center p-3 md:w-[37.5rem]">
		<!-- Links back to gists -->
		<a href="/feed" class="mb-5 mt-3 block self-start text-brand underline">back to gists</a>

		<!-- Form for creating new gist -->
		<CreateFeed />
	</section>
</main>
