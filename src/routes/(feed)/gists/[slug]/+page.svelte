<script>
	import { page } from '$app/stores';
	import { gists, updatedGist } from '$lib/stores/gists.js';
	import { deleteGistModal, editGistModal } from '$lib/stores/modals.js';
	import BackLink from '$lib/components/BackLink.svelte';
	import CommentCard from '$lib/components/cards/CommentCard.svelte';
	import AddComment from '$lib/components/feed/AddComment.svelte';
	import DeleteGistModal from '$lib/components/modals/DeleteGistModal.svelte';
	import EditGistModal from '$lib/components/modals/EditGistModal.svelte';

	const params = $page.params.slug * 1;
	$updatedGist = $gists.find((gist) => gist.id === params);
</script>

<article class="container mx-auto min-h-[90vh] max-w-xl p-3">
	<!-- Back to gists link -->
	<BackLink />

	<!-- Display the content of gist -->
	<section class="mt-5">
		<div class="flex justify-between gap-3">
			<figure class="flex items-center gap-3">
				<img
					src="https://randomuser.me/api/portraits/med/men/62.jpg"
					alt=""
					loading="lazy"
					class="h-16 w-16 rounded md:h-20 md:w-20"
				/>
				<figcaption class="">
					<h3 class="text-base font-bold text-brand md:text-lg">John Doe</h3>
					<a href="/profile" class="text-sm text-brand-blue hover:text-blue-600 md:text-base">
						@johndoe
					</a>
					<p class="font-pt-sans text-xs text-gray-500 md:text-sm">Jan 30 2021</p>
				</figcaption>
			</figure>

			<!-- Edit and delete options -->
			<div class="flex flex-col gap-5 md:flex-row">
				<button
					on:click={() => ($editGistModal = true)}
					type="button"
					class="block h-fit rounded bg-blue-100 px-4 py-1 text-center text-xs text-blue-700
					 hover:bg-brand hover:text-white md:text-sm"
				>
					edit
				</button>
				<button
					on:click={() => ($deleteGistModal = true)}
					type="button"
					class="block h-fit rounded bg-red-100 px-4 py-1 text-center text-xs text-red-700
					hover:bg-red-700 hover:text-white md:text-sm"
				>
					delete
				</button>
			</div>
		</div>

		<div class="mt-3 border-b border-gray-300 pb-5">
			<p class="font-light text-gray-800 md:text-lg">{$updatedGist.body || 'hello'}</p>
		</div>
	</section>

	<!-- Comments Section -->
	<section class="mt-2">
		<p class="mb-2 text-right text-xs font-light text-gray-500 md:text-sm">
			{$updatedGist.comments.length}
			{$updatedGist.comments.length > 1 ? 'comments' : 'comment'}
		</p>

		<!-- Add new comment to this gist -->
		<AddComment {$updatedGist} />

		<!-- Display all comments for this gist -->
		<div class="mt-5 flex flex-col gap-2">
			{#each $updatedGist.comments as _}
				<CommentCard />
			{:else}
				<p class="text-center text-gray-500 font-light">No Comments yet...</p>
			{/each}
		</div>
	</section>
</article>

{#if $deleteGistModal}
	<DeleteGistModal gist={$updatedGist} />
{/if}

{#if $editGistModal}
	<EditGistModal />
{/if}
