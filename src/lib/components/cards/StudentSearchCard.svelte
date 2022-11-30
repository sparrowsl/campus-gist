<script>
	import { scale } from 'svelte/transition';
	import { gravatar } from '$lib/utils/gravatar';

	export let student;
</script>

<figure in:scale class="flex gap-2 border bg-white p-5 transition-shadow hover:shadow">
	<img
		src={gravatar(student.email)}
		alt="{student.fullname}'s profile"
		loading="lazy"
		class="h-12 w-12 rounded-full md:h-14 md:w-14 lg:h-16 lg:w-16"
	/>

	<!-- details -->
	<figcaption>
		<h3 class="font-pt-sans text-xl font-extrabold text-brand-blue">{student.fullname}</h3>
		<p class="mb-1 text-sm text-brand-blue">@{student.username}</p>
		<a href="mailto:{student.email}" class="text-sm text-blue-600 hover:text-brand-blue">
			{student.email}
		</a>
		<p class="mt-1 text-sm text-gray-600">{student.institution}</p>
	</figcaption>
</figure>
