<script>
	import { goto } from '$app/navigation';
	import { loginValidation } from '$lib/utils/validate.js';
	import Spinner from '$lib/components/Spinner.svelte';

	let email = '';
	let password = '';
	let isLoggedIn = false;
	let errorMessage = '';

	const handleLogin = async () => {
		errorMessage = '';

		// Validate data and return any error if any
		const { error } = loginValidation.validate({ email, password });

		if (error) {
			errorMessage = error.message;
			return;
		}

		isLoggedIn = true;
		setTimeout(() => goto('/gists'), 1500);
		// TODO: Check if user exists in the database
		// TODO: If there is no user, send invalid message
		// TODO: Assume everything is ok, navigate to the gists page
	};
</script>

<!-- Adding a flex-basis because of the parent component has flex -->
<section class="grid min-h-[90vh] place-content-center">
	<form
		action=""
		method="POST"
		class="rounded-md bg-white p-8 shadow-md md:w-96 md:p-10"
		on:submit|preventDefault={handleLogin}
	>
		<fieldset class="grid gap-5">
			<legend class="mb-5 w-full text-center text-lg font-semibold text-brand-blue">
				Login Now
			</legend>

			<div>
				<label for="" class="block text-sm text-gray-500">Email</label>
				<input
					type="email"
					required
					name="email"
					bind:value={email}
					class="block w-full rounded-md border-gray-200 p-2 text-gray-600"
					placeholder="john@gmail.com"
				/>
			</div>

			<div>
				<label for="" class="block text-sm text-gray-500">Password</label>
				<input
					type="password"
					required
					name="password"
					bind:value={password}
					class="block w-full rounded-md border-gray-200 p-2 text-gray-600"
					placeholder="password"
				/>
			</div>

			{#if errorMessage}
				<p class="text-center text-sm italic text-red-500">
					{errorMessage}
				</p>
			{/if}

			<button
				type="submit"
				disabled={isLoggedIn ? true : false}
				class="{isLoggedIn
					? ''
					: 'hover:bg-brand'} block rounded-full bg-brand-blue p-2 font-semibold
      text-white disabled:cursor-not-allowed"
			>
				{#if isLoggedIn}
					<Spinner />
				{:else}
					Log In
				{/if}
			</button>
		</fieldset>

		<small class="mt-5 block text-center text-sm text-gray-500">
			Need an account? <a href="/register" class="text-brand">Register Here</a>
		</small>
	</form>
</section>
