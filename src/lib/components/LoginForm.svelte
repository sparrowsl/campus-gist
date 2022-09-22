<script>
	import { goto } from '$app/navigation';
	import { loginValidation } from '$lib/utils/validate.js';

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
		// TODO: send details to login to validate

		// Assume everything is ok, navigate to the news feed page
		if (email && password) {
			isLoggedIn = true;
			console.log({ email, password });

			setTimeout(() => goto('/feed'), 2000);
		}
	};
</script>

<!-- Adding a flex-basis because of the parent component has flex -->
<section class="mx-5 basis-full md:mx-0 md:grid md:place-content-center">
	<form
		action=""
		class="rounded-md bg-white p-8 shadow-md md:w-96 md:p-10"
		on:submit|preventDefault={handleLogin}
	>
		<fieldset class="grid gap-5">
			<legend class="mb-5 text-lg font-semibold text-brand-blue">Login Now</legend>

			<div>
				<label for="" class="block text-sm text-gray-500">Email</label>
				<input
					type="email"
					bind:value={email}
					required
					class="block w-full rounded-md border-gray-200 p-2 text-gray-600"
					placeholder="john@gmail.com"
				/>
			</div>

			<div>
				<label for="" class="block text-sm text-gray-500">Password</label>
				<input
					type="password"
					bind:value={password}
					required
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
				class="block rounded-full bg-brand p-2 font-semibold
      text-white hover:bg-brand-blue"
			>
				{#if isLoggedIn}
					<img src="/svg/oval.svg" alt="" class="mx-auto h-6 p-0" />
				{:else}
					Login
				{/if}
			</button>
		</fieldset>

		<small class="mt-5 block text-center text-sm text-gray-500">
			Need an account? <a href="/register" class="text-brand">Register Here</a>
		</small>
	</form>
</section>
