<script>
	import { enhance, applyAction } from '$app/forms';
	import Button from '../../../lib/components/shared/Button.svelte';
	import Input from '../../../lib/components/shared/Input.svelte';

	export let form;

	let loading = false;
</script>

<section class="grid min-h-screen place-content-center">
	<form
		action=""
		method="POST"
		use:enhance={({ form }) => {
			loading = true;
			return async ({ result, update }) => {
				if (result.type === 'success') form.reset();
				if (result.type === 'invalid') await applyAction(form);
				update();
				loading = false;
			};
		}}
		class="rounded-md bg-white p-8 shadow-md md:w-96 md:p-10"
	>
		<fieldset class="grid gap-5">
			<legend class="mb-5 w-full text-center text-lg font-semibold text-brand-blue">
				Login Now
			</legend>

			<div>
				<label for="" class="block text-sm text-gray-500">Email</label>
				<Input type="email" name="email" placeholder="john@gmail.com" />
			</div>

			<div>
				<label for="" class="block text-sm text-gray-500">Password</label>
				<Input type="password" name="password" placeholder="password" />
			</div>

			{#if form?.error}
				<small class="text-sm text-red-500">{form.error}</small>
			{/if}

			<Button type="submit" classes="rounded w-full bg-brand py-3 text-sm font-semibold text-white">
				Log in
			</Button>
		</fieldset>

		<small class="mt-5 block text-center text-gray-500">
			Need an account? <a href="/register" class="text-brand">Register Here</a>
		</small>
	</form>
</section>
