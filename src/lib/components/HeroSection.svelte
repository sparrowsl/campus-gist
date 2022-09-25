<script>
	import LoginForm from './LoginForm.svelte';
</script>

<div class="">
	<article
		class="container mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10
		md:min-h-[90vh] md:flex-row md:items-center"
	>
		<!-- Intro text -->
		<section class="basis-full px-3 text-center md:text-left">
			<h1 class="mb-3 font-pt-sans text-4xl text-brand-blue md:mb-5 md:text-5xl">Campus Gist</h1>

			<p class="mb-2 text-xl font-bold text-brand-blue md:text-xl">
				The best and one stop place to get information about activities in different institutions.
			</p>

			<blockquote class="font-pt-sans italic text-brand">
				Meet, discuss, joke &amp; share ideas with new friends from different places.
			</blockquote>
		</section>

		<!-- Login Form Section -->
		<LoginForm />
	</article>
</div>
