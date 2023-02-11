<script>
	import { enhance, applyAction } from '$app/forms';
	import Button from '../../../lib/components/shared/Button.svelte';
	import Input from '../../../lib/components/shared/Input.svelte';

	export let form;
</script>

<section class="container mx-auto grid min-h-screen place-content-center md:p-10">
	<form
		action=""
		method="POST"
		use:enhance={({ form }) => {
			return async ({ result, update }) => {
				if (result.type === 'success') form.reset();
				if (result.type === 'invalid') await applyAction(form);
				update();
			};
		}}
		class="mx-3 rounded-md bg-white p-5 shadow-lg md:mx-0 md:min-w-[20em] md:p-10"
	>
		<fieldset class="grid gap-3">
			<legend class="mb-5 w-full text-center text-lg font-semibold text-brand">Register</legend>

			<div>
				<label for="" class="block text-sm text-gray-500">Full Name</label>
				<Input name="fullname" placeholder="John Doe" />
			</div>

			<div>
				<label for="" class="block text-sm text-gray-500">Username</label>
				<Input name="username" placeholder="johndoe" />
				{#if form?.errors?.username}
					<small class="text-xs text-[tomato]">{form?.errors?.username[0]}</small>
				{/if}
			</div>

			<div>
				<label for="" class="block text-sm text-gray-500">Email</label>
				<Input type="email" name="email" placeholder="johndoe@gmail.com" />
				{#if form?.errors?.email}
					<small class="text-xs text-[tomato]">{form?.errors?.email[0]}</small>
				{/if}
			</div>

			<div>
				<label for="" class="block text-sm text-gray-500">Password</label>
				<Input type="password" name="password" placeholder="password" />
				{#if form?.errors?.password}
					<small class="text-xs text-[tomato]">{form?.errors?.password[0]}</small>
				{/if}
			</div>

			<Button type="submit" classes="rounded w-full bg-brand py-3 text-sm font-semibold text-white">
				Register
			</Button>
		</fieldset>

		<small class="mt-6 block text-center text-gray-500">
			Already have an account? <a href="/login" class="text-brand">Login Here</a>
		</small>
	</form>
</section>
