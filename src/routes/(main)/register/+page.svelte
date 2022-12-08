<script>
	import { enhance, applyAction } from '$app/forms';
	import Input from '../../../lib/components/shared/Input.svelte';

	export let data;
	export let form;

	let tac = false;
</script>

<section class="container mx-auto grid min-h-screen place-content-center md:p-10">
	<form
		action=""
		method="POST"
		use:enhance={({ form }) => {
			// Runs before form submission
			return async ({ result, update }) => {
				// Reset the form if successful
				if (result.type === 'success') form.reset();
				// Perserve the action login
				if (result.type === 'invalid') await applyAction(form);
				// Update any form logic passed
				update();
			};
		}}
		class="mx-3 rounded-md bg-white p-5 shadow-lg md:mx-0 md:min-w-[20em] md:p-10"
	>
		<fieldset class="grid gap-5">
			<legend class="mb-5 w-full text-center text-lg font-semibold text-brand">Register</legend>

			<div>
				<label for="" class="block text-sm text-gray-500">Full Name</label>
				<Input name="fullname" placeholder="John Doe" />
			</div>

			<div>
				<label for="" class="block text-sm text-gray-500">Username</label>
				<Input name="username" placeholder="johndoe" />
			</div>

			<div>
				<label for="" class="block text-sm text-gray-500">Email</label>
				<Input type="email" name="email" placeholder="johndoe@gmail.com" />
			</div>

			<div>
				<label for="" class="block text-sm text-gray-500">Institution</label>
				<select name="institute" class="w-full rounded-md border-gray-200 p-2 text-gray-600">
					{#each data.institutions as institute}
						<option value={institute} class="">{institute}</option>
					{/each}
					<option value="other" class="">Other</option>
				</select>
			</div>

			<div>
				<label for="" class="block text-sm text-gray-500">Password</label>
				<Input type="password" name="password" placeholder="password" />
			</div>

			<div>
				<label for="" class="block text-sm text-gray-500">Confirm Password</label>
				<Input type="password" name="confirmPassword" placeholder="confirm password" />
			</div>

			{#if form?.error}
				<small class="text-center text-sm italic text-red-500">{form.error}</small>
			{/if}

			<label class="flex items-center gap-2 text-sm text-gray-600">
				<input type="checkbox" name="terms" id="" class="rounded" bind:checked={tac} />
				<span>You accept our Terms &amp; Conditions and Privacy Policy</span>
			</label>

			<button
				type="submit"
				disabled={tac ? false : true}
				class="{tac
					? 'bg-brand hover:bg-brand-blue'
					: 'bg-brand-blue'} block rounded-full py-3 text-sm font-semibold text-white "
			>
				Register
			</button>
		</fieldset>

		<small class="mt-6 block text-center text-gray-500">
			Already have an account? <a href="/login" class="text-brand">Login Here</a>
		</small>
	</form>
</section>
