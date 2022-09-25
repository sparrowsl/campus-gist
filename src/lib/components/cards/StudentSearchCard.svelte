<script>
	import { scale } from 'svelte/transition';

	export let student;
</script>

<figure transition:scale class="flex gap-2 border bg-white p-5 transition-shadow hover:shadow">
	<img src="/images/default.jpg" alt="" class="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />

	<!-- details -->
	<figcaption>
		<h3 class="font-pt-sans text-xl font-extrabold text-brand-blue">{student.name}</h3>
		<p class="mb-1 text-sm text-brand-blue">@{student.username}</p>
		<a href="mailto:{student.email}" class="text-sm text-blue-600 hover:text-brand-blue"
			>{student.email}</a
		>
		<p class="mt-1 text-sm text-gray-600">{student.institute.name}</p>
	</figcaption>
</figure>
