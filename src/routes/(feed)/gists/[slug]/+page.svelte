<script>
	import BackLink from '$lib/components/BackLink.svelte';
	import CommentCard from '$lib/components/cards/CommentCard.svelte';
	import AddComment from '$lib/components/feed/AddComment.svelte';

	export let data;
</script>

<article class="container mx-auto min-h-[90vh] max-w-xl p-3">
	<!-- Back to gists link -->
	<BackLink />

	<!-- Display the content of gist -->
	<div class="mt-5 border-b border-gray-300 pb-5">
		<p class="font-light text-gray-800 md:text-lg">{data.gist?.body || 'hello'}</p>
	</div>

	<!-- Comments Section -->
	<section class="mt-2">
		<p class="mb-2 text-right text-xs font-light text-gray-500 md:text-sm">
			{data.gist.comments.length}
			{data.gist.comments.length > 1 ? 'comments' : 'comment'}
		</p>

		<!-- Add new comment to this gist -->
		<AddComment gist={data.gist} />

		<!-- Display all comments for this gist -->
		<div class="mt-5 flex flex-col gap-2">
			{#each data.gist.comments as _}
				<CommentCard />
			{:else}
				<p class="text-center text-gray-500 font-light">No Comments yet...</p>
			{/each}
		</div>
	</section>
</article>
