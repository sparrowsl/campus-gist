<script>
	import { fade } from 'svelte/transition';
	import { institutes } from '$lib/stores/universities.js';
	import ProfileDisplay from './ProfileDisplay.svelte';

	const user = {
		name: 'John Doe',
		email: 'johndoe@gmail.com',
		username: 'johndoe',
		institute: 'BlueCrest College',
		bio: 'Simple is better than complex!'
	};
</script>

<section in:fade class="mx-auto mb-20 w-full max-w-2xl bg-white md:mb-0 md:px-5 md:pl-5">
	<h2 class="mb-5 text-center font-pt-sans text-2xl text-brand">Profile Settings</h2>

	<ProfileDisplay {user} />

	<form action="" on:submit|preventDefault class="mt-5 max-w-xl px-3 md:p-5">
		<fieldset class="flex flex-col gap-3">
			<div>
				<input
					type="text"
					bind:value={user.name}
					placeholder="John H. Doe"
					class="w-full rounded border-gray-200 text-sm font-light text-brand-blue focus:font-normal"
				/>
			</div>
			<div>
				<input
					type="text"
					bind:value={user.username}
					placeholder="johndoe"
					class="w-full rounded border-gray-200 text-sm font-light text-brand-blue focus:font-normal"
				/>
			</div>
			<div>
				<input
					type="text"
					bind:value={user.email}
					placeholder="johndoe@gmail.com"
					class="w-full rounded border-gray-200 text-sm font-light text-brand-blue focus:font-normal"
				/>
			</div>
			<div>
				<select
					bind:value={user.institute}
					name="institutes"
					class="w-full rounded border-gray-200 text-sm font-light text-brand-blue focus:font-normal"
				>
					{#each $institutes as institute}
						<option value={institute.name}>{institute.name}</option>
					{/each}
				</select>
			</div>
			<div>
				<textarea
					bind:value={user.bio}
					placeholder="write something about yourself."
					class="h-24 w-full resize-none rounded border-gray-200 text-sm font-light text-brand-blue
					focus:font-normal"
				/>
			</div>

			<button
				type="submit"
				class="w-fit rounded bg-brand px-5 py-2 text-xs text-white hover:bg-blue-900 md:text-base"
			>
				Update Profile
			</button>
		</fieldset>
	</form>
</section>
