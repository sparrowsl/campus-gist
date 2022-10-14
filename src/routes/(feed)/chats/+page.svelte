<script>
	import ChatInput from '$lib/components/chat/ChatInput.svelte';
	import ChatMessageCard from '$lib/components/chat/ChatMessageCard.svelte';
	import { chatMessages } from '$lib/stores/messages.js';
	import BackLink from '$lib/components/shared/BackLink.svelte';
</script>

<article class="container mx-auto min-h-[90vh] max-w-6xl p-3 md:max-w-2xl">
	<BackLink />

	<!-- Display all messages in global chat -->
	<section class="relative mt-5 h-[80vh] flex-col">
		<div class="flex h-[500px] basis-full flex-col gap-3 overflow-y-scroll border p-3">
			{#each $chatMessages as message (message)}
				<ChatMessageCard {message} />
			{/each}
		</div>
		<ChatInput />
	</section>
</article>
