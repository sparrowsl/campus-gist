<script>
	export let user;
</script>

<section class="max-w-xl px-3 md:p-5">
	<!-- User details -->
	<div class="flex items-center gap-3">
		<img
			src={user?.image || 'johndoe@gmail.com'}
			alt="{user.name}'s profile"
			class="h-20 w-20 rounded"
		/>
		<div class="font-pt-sans">
			<h2 class="text-xl text-brand">{user.name}</h2>
			<p class="text-gray-500">@{user.username}</p>
			<a href="mailto:{user.email}" class="block text-sm text-blue-400">{user.email}</a>
		</div>
	</div>

	<div class="mt-2 md:mt-5">
		<p class="text-brand-blue">{user.institute}</p>
		<p class="mt-2 text-sm font-light text-brand-blue md:text-base">{user.bio}</p>
	</div>
</section>
