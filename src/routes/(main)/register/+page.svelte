<script>
	import { institutes } from '$lib/stores/universities.js';

	let tac = false;
	let isRegistered = false;

	const handleRegister = async () => {
		console.log('TaC accepted?:', tac);
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
					<input
						type="text"
						name="fullname"
						class="block w-full rounded-md border-gray-200 p-2 text-gray-600"
						placeholder="John Smith"
					/>
				</div>

				<div>
					<label for="" class="block text-sm text-gray-500">Username</label>
					<input
						type="text"
						name="fullname"
						class="block w-full rounded-md border-gray-200 p-2 text-gray-600"
						placeholder="johnsmith"
					/>
				</div>

				<div>
					<label for="" class="block text-sm text-gray-500">Email</label>
					<input
						type="email"
						name="email"
						class="block w-full rounded-md border-gray-200 p-2 text-gray-600"
						placeholder="john@gmail.com"
					/>
				</div>

				<div>
					<label for="" class="block text-sm text-gray-500">Institutions</label>
					<select name="" id="" class="w-full rounded-md border-gray-200 p-2 text-gray-600">
						{#each $institutes as institute}
							<option value="" class="">{institute.name}</option>
						{/each}
					</select>
				</div>

				<div>
					<label for="" class="block text-sm text-gray-500">Password</label>
					<input
						type="password"
						name="password"
						class="block w-full rounded-md border-gray-200 p-2 text-gray-600"
						placeholder="Password"
					/>
				</div>

				<div>
					<label for="" class="block text-sm text-gray-500">Confirm Password</label>
					<input
						type="password"
						name="confirm-password"
						class="block w-full rounded-md border-gray-200 p-2 text-gray-600"
						placeholder="Confirm Password"
					/>
				</div>

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
						<img src="/svg/oval.svg" alt="" class="mx-auto h-6 p-0" />
					{:else}
						Register
					{/if}
				</button>
			</fieldset>

			<p class="mt-6 text-center text-sm text-gray-500">
				Already have an account? <a href="/" class="text-blue-600">Login Here</a>
			</p>
		</form>
	</section>
</main>
