<section
	class="container mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10 py-10 md:min-h-[80vh]
		md:flex-row md:items-center md:gap-0 md:py-0"
>
	<!-- Intro text -->
	<div class="basis-full px-3 text-center md:text-left">
		<h1 class="mb-3 font-pt-sans text-4xl text-brand-blue md:mb-5 md:text-5xl">Campus Gist</h1>

		<p class="mb-2 max-w-xl text-xl text-brand-blue md:text-xl">
			A social platform for students in different institutions to communicate with each other, share
			ideas, find solutions to problems, attend events and make new friends.
		</p>

		<blockquote class="font-pt-sans italic text-brand">
			Meet, discuss, joke &amp; share ideas with new &amp; old friends from different campus.
		</blockquote>

		<!-- Call to actions -->
		<div class="mt-10 flex items-center justify-center gap-5 md:justify-start">
			<a
				data-sveltekit-preload-data
				href="/register"
				class="rounded bg-brand-blue px-6 py-2 font-bold text-white hover:bg-blue-800"
			>
				Register
			</a>
			<a
				data-sveltekit-preload-data
				href="/login"
				class="rounded bg-[#6C63FF] px-6 py-2 font-bold text-white hover:bg-brand"
			>
				Login
			</a>
		</div>
	</div>

	<!-- Side Illustration -->
	<div class="mx-5 basis-full md:mx-0 md:grid md:place-content-center">
		<img src="/images/chatting.png" alt="Chatting Illustration" class="lg:animate-pulse" />
	</div>
</section>
