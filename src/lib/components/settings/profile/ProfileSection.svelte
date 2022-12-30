<script>
	import { enhance, applyAction } from '$app/forms';
	import { fade } from 'svelte/transition';
	import { institutes } from '$lib/stores/universities.js';
	import Textarea from '$lib/components/shared/Textarea.svelte';
	import Input from '$lib/components/shared/Input.svelte';
	import ProfileDisplay from './ProfileDisplay.svelte';
	import { page } from '$app/stores';

	const student = $page.data.student;
	console.log(student);

	// TODO: pass data down to the components
</script>

<section in:fade class="mx-auto w-full max-w-2xl bg-white pl-5 md:px-5">
	<h2 class="mb-5 text-center font-pt-sans text-2xl text-brand">Profile Settings</h2>

	<ProfileDisplay {student} />

	<form action="" method="POST" class="mt-5 max-w-xl px-3 md:p-5" use:enhance>
		<fieldset class="flex flex-col gap-3">
			<Input
				value={$page.data.student.fullname}
				type="text"
				placeholder="John Doe"
				classes="text-sm font-light text-brand-blue focus:font-normal"
			/>

			<Input
				bind:value={student.username}
				type="text"
				placeholder="johndoe"
				rounded=""
				classes="text-sm font-light text-brand-blue focus:font-normal"
			/>

			<!-- bind:value={user.email} -->
			<Input
				type="email"
				placeholder="johndoe@gmail.com"
				rounded=""
				classes="text-sm font-light text-brand-blue focus:font-normal"
			/>

			<!-- bind:value={user.institute} -->
			<select
				name="institutes"
				class="block w-full rounded border-gray-200 text-sm font-light text-brand-blue focus:font-normal"
			>
				{#each $institutes as institute}
					<option value={institute.name}>{institute.name}</option>
				{/each}
			</select>

			<!-- bind:value={user.bio} -->
			<Textarea
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
