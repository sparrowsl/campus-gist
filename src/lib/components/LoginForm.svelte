<script>
	const handleLogin = async () => console.log('logged in...');
</script>

<section class="mx-5 md:mx-0">
	<form
		action=""
		class="rounded-md bg-white p-8 shadow-md md:p-10"
		on:submit|preventDefault={handleLogin}
	>
		<fieldset class="grid gap-5">
			<legend class="mb-5 text-lg font-semibold text-brand-blue">Login Now</legend>

			<div>
				<label for="" class="block text-sm text-gray-500">Email</label>
				<input
					type="email"
					class="block w-full rounded-md border-[1px] p-2 text-gray-600"
					placeholder="john@gmail.com"
				/>
			</div>

			<div>
				<label for="" class="block text-sm text-gray-500">Password</label>
				<input
					type="password"
					class="block w-full rounded-md border-[1px] p-2 text-gray-600"
					placeholder="password"
				/>
			</div>

			<button
				type="submit"
				class="font-pt-sans block rounded-full bg-brand p-2 font-semibold
      text-white hover:bg-gray-800"
			>
				Login
			</button>
		</fieldset>

		<small class="font-pt-sans mt-4 block text-center text-sm text-gray-500">
			Need an Account? <a href="/register" class="text-brand">Register Here</a>
		</small>
	</form>
</section>
