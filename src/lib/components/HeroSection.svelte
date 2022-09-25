<script>
	import LoginForm from './LoginForm.svelte';
</script>

<div class="">
	<article
		class="container mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10
    md:flex-row md:items-center"
	>
		<!-- Intro text -->
		<section class="basis-full px-3 text-center md:text-left">
			<h1 class="mb-3 font-pt-sans text-4xl text-brand-blue md:mb-5 md:text-5xl">Campus Gist</h1>

			<p class="mb-2 text-xl font-bold text-brand-blue md:text-xl">
				The best and one stop place to get information about activities in different institutions
			</p>

			<blockquote class="font-pt-sans italic text-brand">
				Meet, discuss, joke &amp; share ideas with new friends from different institutions.
			</blockquote>

			<!-- Call to actions -->
			<div class="mt-3 flex items-center gap-5">
				<a href="/" class="rounded-full bg-brand px-6 py-2 text-white">Login</a>
				<a href="/register" class="rounded-full bg-brand px-6 py-2 text-white">Register</a>
			</div>
		</section>

		<!-- Login Form Section -->
		<LoginForm />
	</article>
</div>
