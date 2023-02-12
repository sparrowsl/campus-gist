<script>
	import { io } from 'socket.io-client';
	import ChatInput from '$lib/components/chat/ChatInput.svelte';
	import ChatMessageCard from '$lib/components/chat/ChatMessageCard.svelte';
	import { chatMessages } from '$lib/stores/messages.js';
	import BackLink from '$lib/components/shared/BackLink.svelte';

	import Icon from '@iconify/svelte';

	let message = '';

	// const socket = io('http://localhost:5000', { path: '/chats' });
	// console.log(socket);
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
		<!-- <ChatInput /> -->

		<form action="" on:submit|preventDefault class="mt-auto">
			<fieldset class="flex">
				<input
					type="text"
					required
					bind:value={message}
					placeholder="Type your message here."
					class="block w-full border-gray-200 text-brand-blue"
				/>
				<button
					type="submit"
					class="flex items-center gap-1 bg-brand-blue px-2 text-white md:hover:bg-brand"
				>
					<span>Send</span>
					<Icon icon="carbon:send-filled" class="text-2xl" />
				</button>
			</fieldset>
		</form>
	</section>
</article>
