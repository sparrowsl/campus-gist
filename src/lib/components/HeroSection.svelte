<script>
	import LoginForm from './LoginForm.svelte';
</script>

<div class="">
	<article
		class="container mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center gap-10
    md:flex-row md:items-center"
	>
		<!-- Intro text -->
		<section class="basis-full px-3 text-center md:text-left">
			<h1 class="mb-3 font-barlow text-3xl text-brand-blue md:mb-10 md:text-5xl">Campus Gist</h1>

			<p class="mb-3 text-brand-text md:text-lg">
				Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Odio vero ipsam ipsum, inventore
				sequi expedita excepturi illum vitae asperiores omnis.
			</p>

			<blockquote class="font-barlow italic text-brand">
				Meet, discuss, joke &amp; share ideas with new friends from different institutions.
			</blockquote>
		</section>

		<!-- Login Form Section -->
		<LoginForm />
	</article>
</div>
