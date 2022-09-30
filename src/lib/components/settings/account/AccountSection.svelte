<script>
	import { fade } from 'svelte/transition';

	const user = {
		name: 'John Doe',
		email: 'johndoe@gmail.com',
		username: 'johndoe',
		institute: 'BlueCrest College',
		bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit cum eligendi hic voluptas.'
	};

	let hidePasswordField = true;
</script>

<section in:fade class="mx-auto min-h-[75vh] w-full bg-white px-5">
	<h1 class="text-center font-pt-sans text-2xl text-brand">Account Settings</h1>

	<form action="" on:submit|preventDefault class="p-5">
		<fieldset class="flex flex-col gap-3 py-3">
			<legend class="flex w-full items-center justify-between">
				<span> Password Reset </span>
				<span
					on:click={() => (hidePasswordField = !hidePasswordField)}
					class="cursor-pointer font-pt-sans text-xs text-blue-600 underline
					hover:text-brand hover:no-underline"
				>
					{hidePasswordField ? 'show' : 'hide'} password
				</span>
			</legend>

			<section class="flex items-center gap-5">
				<div>
					<label for="" class="text-sm font-light text-gray-600">Old Password</label>
					<input
						type={hidePasswordField ? 'password' : 'text'}
						value={user.username}
						placeholder="password"
						class="w-full rounded border-gray-200 text-sm font-light text-brand-blue"
					/>
				</div>

				<div>
					<label for="" class="text-sm font-light text-gray-600">New Password</label>
					<input
						type={hidePasswordField ? 'password' : 'text'}
						value={user.username}
						placeholder="password"
						class="w-full rounded border-gray-200 text-sm font-light text-brand-blue"
					/>
				</div>
			</section>

			<button type="submit" class="w-fit rounded bg-brand px-5 py-2 text-white hover:bg-blue-900">
				Save Password
			</button>
		</fieldset>
	</form>

	<div class="border-t-2 px-5 pt-5">
		<h3 class="font-brand mb-2 text-sm font-bold">Delete Account</h3>
		<p class="font-light">Would you like to delete your account?</p>
		<p class="font-light">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, exercitationem! Velit fugit
			magni facere expedita quisquam consequatur dolor doloremque sit!
		</p>

		<button
			type="button"
			class="mt-5 block rounded bg-red-200 px-6 py-2 text-red-800 hover:bg-red-500 hover:text-white"
		>
			Delete My Account
		</button>
	</div>
</section>
