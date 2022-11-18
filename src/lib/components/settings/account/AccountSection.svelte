<script>
	import { fade } from 'svelte/transition';
	import DeleteAccount from './DeleteAccount.svelte';

	let hidePasswordField = true;
</script>

<section in:fade class="mx-auto mb-20 max-w-2xl bg-white p-2 md:mb-0 md:px-5">
	<h1 class="text-center font-pt-sans text-2xl text-brand">Account Settings</h1>

	<form action="" on:submit|preventDefault class="p-3 md:p-5">
		<fieldset class="flex flex-col gap-3 py-3">
			<legend class="flex w-full items-center justify-between">
				<span class="text-brand-blue"> Password Reset </span>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span
					on:click={() => (hidePasswordField = !hidePasswordField)}
					class="cursor-pointer font-pt-sans text-xs text-blue-600 underline
					hover:text-brand hover:no-underline"
				>
					{hidePasswordField ? 'show' : 'hide'} password
				</span>
			</legend>

			<section class="flex flex-col items-center gap-5 md:flex-row">
				<div>
					<label for="" class="text-sm font-light text-gray-600">Current Password</label>
					<input
						type={hidePasswordField ? 'password' : 'text'}
						value="password"
						placeholder="password"
						class="w-full rounded border-gray-200 text-sm font-light text-brand-blue"
					/>
				</div>

				<div>
					<label for="" class="text-sm font-light text-gray-600">New Password</label>
					<input
						type={hidePasswordField ? 'password' : 'text'}
						value="password"
						placeholder="password"
						class="w-full rounded border-gray-200 text-sm font-light text-brand-blue"
					/>
				</div>
			</section>

			<button
				type="submit"
				class="w-fit rounded bg-brand px-5 py-2 text-xs text-white hover:bg-blue-900 md:text-base"
			>
				Reset Password
			</button>
		</fieldset>
	</form>

	<DeleteAccount />
</section>
