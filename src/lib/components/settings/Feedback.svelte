<script>
	import { fade } from 'svelte/transition';

	const user = {
		name: 'John Doe',
		email: 'johndoe@gmail.com',
		username: 'johndoe',
		institute: 'BlueCrest College',
		bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit cum eligendi hic voluptas.'
	};
</script>

<section in:fade class="mx-auto min-h-[75vh] w-full bg-white px-5">
	<form action="" on:submit|preventDefault class="p-5">
		<fieldset class="flex flex-col gap-3">
			<legend class="mb-3 block w-full text-center font-pt-sans text-2xl text-brand">
				Feedback
			</legend>

			<div>
				<textarea
					bind:value={user.bio}
					placeholder="write something about yourself."
					class="h-24 w-full resize-none rounded border-gray-200 text-sm font-light text-brand-blue"
				/>
			</div>

			<button type="submit" class="w-fit rounded bg-brand px-5 py-2 text-white hover:bg-blue-900">
				Update Profile
			</button>
		</fieldset>
	</form>
</section>
