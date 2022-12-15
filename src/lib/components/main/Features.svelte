<script>
	import 'iconify-icon';

	const features = [
		{
			title: 'Chat globally with other students.',
			summary:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id fugiat dolore sed repudiandae. Minus.',
			icon: 'clarity:talk-bubbles-outline-badged'
		},
		{
			title: 'Make new friends and gist with old ones',
			summary:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id fugiat dolore sed repudiandae. Minus.',
			icon: 'carbon:user-multiple'
		},
		{
			title: 'Share thoughts, ideas and events',
			summary:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id fugiat dolore sed repudiandae. Minus.',
			icon: 'fluent:share-28-regular'
		},
		{
			title: 'Search for Institutions or Students easily',
			summary:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id fugiat dolore sed repudiandae. Minus.',
			icon: 'bi:search'
		},
		{
			title: 'Brainstorm on problems and their solutions',
			summary:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id fugiat dolore sed repudiandae. Minus.',
			icon: 'academicons:ideas-repec'
		},
		{
			title: 'Build a better future for tomorrow',
			summary:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id fugiat dolore sed repudiandae. Minus.',
			icon: 'et:profile-male'
			// et:profile-female
		}
	];
</script>

<div class="border-t border-[#dce2fa] bg-[rgb(225,_230,_249)]">
	<article class="mx-auto grid min-h-[90vh] max-w-6xl place-content-center">
		<!-- Summary -->
		<div class="py-10">
			<h2 class="mb-3 text-center text-2xl font-bold text-brand">
				What will you gain by using this platform?
			</h2>
			<p class="mx-auto max-w-lg text-center font-light text-gray-600 md:text-lg">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae tempora saepe repellendus
				adipisci ut maiores?
			</p>
		</div>

		<section class="mb-10 grid gap-5 px-5 md:grid-cols-2 md:p-10 lg:grid-cols-3 lg:gap-7 lg:px-0">
			<!-- Features grid section -->
			{#each features as feature}
				<div
					class="flex flex-col gap-3 rounded-md bg-white p-5 shadow-sm hover:shadow-lg
					md:flex-row md:gap-5 md:p-6"
				>
					<iconify-icon icon={feature.icon} class="mx-auto h-fit text-3xl text-brand-blue" />

					<div class="text-center md:text-left">
						<h2 class="mb-3 mt-0 text-lg font-bold text-brand">{feature.title}</h2>
						<p class="font-pt-sans text-brand-blue">{feature.summary}</p>
					</div>
				</div>
			{/each}
		</section>
	</article>
</div>
