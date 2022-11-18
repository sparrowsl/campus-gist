<script>
	import { goto } from '$app/navigation';
	import { loginValidation } from '$lib/utils/validate.js';
	import Spinner from '$lib/components/shared/Spinner.svelte';
	import Input from '../../../lib/components/shared/Input.svelte';

	let email = '';
	let password = '';
	let isLoggedIn = false;
	let errorMessage = '';

	const handleLogin = async () => {
		errorMessage = '';

		// Validate data and return any error
		const { error } = loginValidation.validate({ email, password });

		if (error) {
			errorMessage = error.message;
			return;
		}

		// TODO: Check if student exists in the database
		const res = await fetch(`${import.meta.env.VITE_API_BASE_ROUTE}/auth/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		});

		if (res.ok) {
			const data = await res.json();
			isLoggedIn = true;
			setTimeout(() => goto('/gists'), 1500);
			console.log(data);
		}
		// TODO: everything is ok, navigate to the gists page
	};
</script>

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
				<Input type="email" name="email" bind:value={email} placeholder="john@gmail.com" />
			</div>

			<div>
				<label for="" class="block text-sm text-gray-500">Password</label>
				<Input type="password" name="password" bind:value={password} placeholder="password" />
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
