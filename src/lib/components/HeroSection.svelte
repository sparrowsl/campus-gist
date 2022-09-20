<script>
	import LoginForm from './LoginForm.svelte';
</script>

<div class="">
	<article class="container mx-auto flex min-h-[90vh] flex-col  justify-center md:flex-row">
		<!-- Intro text -->
		<section class="basis-full px-3">
			<h1 class="font-barlow text-3xl text-brand-blue md:text-5xl">Campus Gist</h1>

			<p class="text-brand-text">
				Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Odio vero ipsam ipsum, inventore
				sequi expedita excepturi illum vitae asperiores omnis.
			</p>

			<blockquote class="font-barlow text-brand">
				Meet &amp; share ideas with new friends from different campus.
			</blockquote>
		</section>

		<!-- Login Form Section -->
		<LoginForm />
	</article>
</div>
