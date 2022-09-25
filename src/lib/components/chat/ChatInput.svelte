<script>
	import Icon from '@iconify/svelte';
	import { chatMessages } from '$lib/stores/messages.js';

	let message = '';

	const sendMessage = async () => {
		$chatMessages = [...$chatMessages, { author: 'johndoe', text: message }];
		message = '';
	};
</script>

<form action="" on:submit|preventDefault={sendMessage} class="mt-auto">
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
