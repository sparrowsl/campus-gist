<script>
	import { goto } from '$app/navigation';
	import Spinner from '$lib/components/shared/Spinner.svelte';
	import { registerValidation } from '$lib/utils/validate.js';
	import Input from '../../../lib/components/shared/Input.svelte';

	let tac = false;
	let isRegistered = false;
	let errorMessage = '';

	let fullname = '';
	let username = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let institution = 'American College of Science and Technology';

	const loadInstitutes = async () => {
		const res = await fetch('/data/institutes.json');

		if (res.ok) {
			const data = await res.json();
			return data.map((inst) => inst.name);
		}
		return [];
	};

	const handleRegister = async () => {
		const { error } = registerValidation.validate({
			fullname,
			username,
			email,
			password,
			institution,
			confirmPassword
		});

		if (error) {
			errorMessage = error.message;
			return;
		}

		const res = await fetch(`${import.meta.env.VITE_API_BASE_ROUTE}/auth/register`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				fullname,
				username,
				email,
				password,
				institution
			})
		});

		if (res.ok) {
			const data = await res.json();
			isRegistered = true;
			setTimeout(() => goto('/gists'), 1000);
			console.log(data);
		}
	};
</script>

<main class="">
	<section class="container mx-auto grid min-h-screen place-content-center md:p-10">
		<form
			action=""
			class="mx-3 rounded-md bg-white p-5 shadow-lg md:mx-0 md:min-w-[20em] md:p-10"
			on:submit|preventDefault={handleRegister}
		>
			<fieldset class="grid gap-5">
				<legend class="mb-5 text-lg font-semibold text-gray-500">Register</legend>

				<div>
					<label for="" class="block text-sm text-gray-500">Full Name</label>
					<Input name="fullname" bind:value={fullname} required placeholder="John Smith" />
				</div>

				<div>
					<label for="" class="block text-sm text-gray-500">Username</label>
					<Input name="username" bind:value={username} required placeholder="johnsmith" />
				</div>

				<div>
					<label for="" class="block text-sm text-gray-500">Email</label>
					<Input
						type="email"
						name="email"
						bind:value={email}
						required
						placeholder="john@gmail.com"
					/>
				</div>

				<div>
					<label for="" class="block text-sm text-gray-500">Institution</label>
					<select
						id="institutions"
						bind:value={institution}
						class="w-full rounded-md border-gray-200 p-2 text-gray-600"
					>
						{#await loadInstitutes()}
							<option value="" class="" disabled>loading...</option>
						{:then institutes}
							{#each institutes as institute}
								<option value={institute} class="">{institute}</option>
							{/each}
							<option value="other" class="">Other</option>
						{/await}
					</select>
				</div>

				<div>
					<label for="" class="block text-sm text-gray-500">Password</label>
					<Input
						type="password"
						name="password"
						bind:value={password}
						required
						placeholder="password"
					/>
				</div>

				<div>
					<label for="" class="block text-sm text-gray-500">Confirm Password</label>
					<Input
						type="password"
						name="confirmPassword"
						bind:value={confirmPassword}
						required
						placeholder="confirm password"
					/>
				</div>

				{#if errorMessage}
					<p class="text-center text-sm italic text-red-500">
						{errorMessage}
					</p>
				{/if}

				<label class="flex items-center gap-2 text-sm text-gray-600">
					<input type="checkbox" name="terms" id="" class="rounded-full" bind:checked={tac} />
					<span>You accept our Terms &amp; Conditions and Privacy Policy</span>
				</label>

				<button
					type="submit"
					disabled={tac ? false : true}
					class="block rounded-full bg-brand p-2 font-semibold text-white
            hover:bg-brand-blue disabled:cursor-not-allowed disabled:bg-brand-blue"
				>
					{#if isRegistered}
						<Spinner />
					{:else}
						Register
					{/if}
				</button>
			</fieldset>

			<p class="mt-6 text-center text-sm text-gray-500">
				Already have an account? <a href="/login" class="text-brand">Login Here</a>
			</p>
		</form>
	</section>
</main>
