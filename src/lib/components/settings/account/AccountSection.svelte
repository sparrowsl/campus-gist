<script>
	import { fade } from 'svelte/transition';
	import Input from '$lib/components/shared/Input.svelte';
	import DeleteAccount from './DeleteAccount.svelte';

	let resetMessage = '';
	let newPassword = '';
	let confirmPassword = '';

	async function resetPassword() {
		if (newPassword !== confirmPassword) {
			resetMessage = 'Passwords do not match';
			return;
		}
		resetMessage = 'password has been reset';
	}
</script>

<section in:fade class="mx-auto max-w-2xl bg-white p-2 md:px-5">
	<h1 class="text-center font-pt-sans text-2xl text-brand">Account Settings</h1>

	<form action="" on:submit|preventDefault={resetPassword} class="p-3 md:p-5">
		<fieldset class="flex flex-col gap-3 py-3">
			<legend class="flex w-full items-center justify-between text-brand-blue">
				Password Reset
			</legend>

			<!-- TODO: do a validation check with Joi -->
			<section class="flex flex-col items-center gap-5 md:flex-row">
				<div>
					<label for="" class="text-sm font-light text-gray-600">New Password</label>
					<Input
						type="password"
						bind:value={newPassword}
						placeholder="new password"
						rounded=""
						classes="text-sm font-light text-brand-blue"
					/>
				</div>

				<div>
					<label for="" class="text-sm font-light text-gray-600">Confirm Password</label>
					<Input
						type="password"
						bind:value={confirmPassword}
						placeholder="confirm password"
						rounded=""
						classes="w-full text-sm font-light text-brand-blue"
					/>
				</div>
			</section>

			<p class="text-xs font-light italic text-red-500">{resetMessage}</p>

			<button
				type="submit"
				class="w-fit rounded bg-brand px-5 py-2 text-xs text-white hover:bg-blue-900 md:text-sm"
			>
				Reset Password
			</button>
		</fieldset>
	</form>

	<DeleteAccount />
</section>
