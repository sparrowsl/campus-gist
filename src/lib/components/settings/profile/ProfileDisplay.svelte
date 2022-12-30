<script>
	// import { page } from '$app/stores';
	// $: student = $page.data.student;

	export let student;
</script>

<section class="max-w-xl px-3 md:p-5">
	<!-- User details -->
	<div class="flex items-center gap-3">
		<img src={student.image} alt="{student.username}'s profile" class="h-20 w-20 rounded" />
		<div class="font-pt-sans">
			<h2 class="text-xl text-brand">{student.fullname}</h2>
			<p class="text-gray-500">@{student.username}</p>
			<a href="mailto:{student.email}" class="block text-sm text-blue-400">{student.email}</a>
		</div>
	</div>

	<div class="mt-2 md:mt-5">
		<p class="text-brand-blue">{student.institution}</p>
		<p class="mt-2 text-sm font-light text-brand-blue md:text-base">
			{student.bio || 'I have nothing to say!'}
		</p>
	</div>
</section>
