<script>
	import { fade } from 'svelte/transition';
	import { institutes } from '$lib/stores/universities.js';
	import Textarea from '$lib/components/shared/Textarea.svelte';
	import Input from '$lib/components/shared/Input.svelte';
	import ProfileDisplay from './ProfileDisplay.svelte';

	// user will be equal to current user
	const user = {
		name: 'John Doe',
		email: 'johndoe@gmail.com',
		username: 'johndoe',
		institute: 'BlueCrest College',
		bio: 'Simple is better than complex!'
	};
</script>

<section in:fade class="mx-auto w-full max-w-2xl bg-white pl-5 md:px-5">
	<h2 class="mb-5 text-center font-pt-sans text-2xl text-brand">Profile Settings</h2>

	<ProfileDisplay {user} />

	<form action="" on:submit|preventDefault class="mt-5 max-w-xl px-3 md:p-5">
		<fieldset class="flex flex-col gap-3">
			<Input
				type="text"
				bind:value={user.name}
				placeholder="John Doe"
				rounded=""
				classes="text-sm font-light text-brand-blue focus:font-normal"
			/>

			<Input
				type="text"
				bind:value={user.username}
				placeholder="johndoe"
				rounded=""
				classes="text-sm font-light text-brand-blue focus:font-normal"
			/>

			<Input
				type="email"
				bind:value={user.email}
				placeholder="johndoe@gmail.com"
				rounded=""
				classes="text-sm font-light text-brand-blue focus:font-normal"
			/>

			<select
				bind:value={user.institute}
				name="institutes"
				class="block w-full rounded border-gray-200 text-sm font-light text-brand-blue focus:font-normal"
			>
				{#each $institutes as institute}
					<option value={institute.name}>{institute.name}</option>
				{/each}
			</select>

			<Textarea
				bind:value={user.bio}
				placeholder="write short something about yourself."
				classes="resize-none text-sm font-light focus:font-normal h-24"
			/>

			<button
				type="submit"
				class="w-fit rounded bg-brand px-5 py-2 text-xs text-white hover:bg-blue-900 md:text-sm"
			>
				Update Profile
			</button>
		</fieldset>
	</form>
</section>
