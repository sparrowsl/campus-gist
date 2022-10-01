<script>
	import UserProfile from '$lib/components/user/UserProfile.svelte';
	import UserPostsCard from '$lib/components/user/UserPostsCard.svelte';

	const user = {};
</script>

<article class="mx-auto min-h-[90vh] max-w-xl p-3">
	<a href="/gists" class="text-blue-500 underline">back to gists</a>

	<UserProfile {user} />

	<!-- User's posts -->
	<section class="mt-3">
		<p class="mb-2 text-right text-sm font-light italic text-gray-500">2 gists shared</p>

		<section class="flex flex-col gap-3">
			{#each [{}, {}] as _}
				<UserPostsCard />
			{/each}
		</section>
	</section>
</article>
