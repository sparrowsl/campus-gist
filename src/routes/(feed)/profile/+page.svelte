<script>
	const user = {
		name: 'John Doe',
		email: 'johndoe@gmail.com',
		username: 'johndoe',
		institute: 'BlueCrest College',
		bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit cum eligendi hic voluptas.'
	};
</script>

<article class="container mx-auto p-3 md:max-w-xl">
	<a href="/gists" class="text-blue-500 underline">back to gists</a>

	<section class="mx-auto mt-10 min-h-[75vh] bg-white p-5">
		<h1 class="text-3xl text-brand">Profile Page</h1>

		<section class="p-5">
			<!-- User details -->
			<div class="flex items-center gap-3">
				<img src="/images/default.jpg" alt="profile pic" class="h-20 w-20 rounded-full" />
				<div class="font-pt-sans">
					<h2 class="text-xl text-brand">{user.name}</h2>
					<p class="text-gray-500">@{user.username}</p>
					<a href="mailto:{user.email}" class="block text-sm text-blue-400">{user.email}</a>
				</div>
			</div>

			<div class="mt-2">
				<p class="text-sm text-brand-blue">{user.institute}</p>
				<p class="mt-2 text-sm font-light text-brand-blue">{user.bio}</p>
			</div>
		</section>

		<form action="" on:submit|preventDefault class="p-5">
			<fieldset class="flex flex-col gap-3">
				<div>
					<input
						type="text"
						bind:value={user.name}
						placeholder="John H. Doe"
						class="w-full rounded border-gray-200 text-sm text-brand-blue"
					/>
				</div>
				<div>
					<input
						type="text"
						bind:value={user.username}
						placeholder="johndoe"
						class="w-full rounded border-gray-200 text-sm text-brand-blue"
					/>
				</div>
				<div>
					<input
						type="text"
						bind:value={user.email}
						placeholder="johndoe@gmail.com"
						class="w-full rounded border-gray-200 text-sm text-brand-blue"
					/>
				</div>
				<div>
					<input
						type="text"
						bind:value={user.institute}
						placeholder="College of Digital Excellence"
						class="w-full rounded border-gray-200 text-sm text-brand-blue"
					/>
				</div>
				<div>
					<textarea
						bind:value={user.bio}
						placeholder="write something about yourself."
						class="h-24 w-full resize-none rounded border-gray-200 text-sm text-brand-blue"
					/>
				</div>

				<button
					type="submit"
					class="mx-auto w-fit rounded bg-brand px-5 py-2 text-white hover:bg-blue-900"
				>
					Update Profile
				</button>
			</fieldset>
		</form>
	</section>
</article>
