<script>
	import { gravatar } from '../../utils/gravatar.js';

	export let user = {};
</script>

<section class="mt-10 border-b-2 pb-5">
	<div class="flex items-center gap-3">
		<img
			src={gravatar(user?.email || 'johndoe@gmail.com')}
			alt="{user.name}'s profile"
			class="grid h-20 w-20 place-content-center rounded-full md:h-32 md:w-32"
		/>
		<div class="font-pt-sans">
			<h2 class="text-xl text-brand md:text-3xl">{user?.name || 'John J. Doe'}</h2>
			<p class="text-gray-500 md:mb-2 md:text-xl">@{user?.username || 'johndoe'}</p>
			<a
				href="mailto:{user?.email || 'john@mail.com'}"
				class="block w-fit text-sm text-blue-400 md:text-base"
			>
				{user?.email || 'john@mail.com'}
			</a>
		</div>
	</div>

	<div class="mt-2">
		<div class="flex flex-col md:flex-row md:items-center md:gap-3">
			<small class="font-pt-sans text-sm text-gray-700">Attends:</small>
			<p class="text-brand-blue md:text-xl">{user?.institute || 'Orange Digital Center'}</p>
		</div>
		<!-- Bio/about -->
		<div class="mt-2 flex flex-col md:flex-row md:items-center md:gap-3">
			<small class="font-pt-sans text-sm text-gray-700">Bio:</small>
			<p class="text-sm font-light text-brand-blue md:text-lg">
				{user?.bio || 'Simple is better than complex.'}
			</p>
		</div>
	</div>
</section>
