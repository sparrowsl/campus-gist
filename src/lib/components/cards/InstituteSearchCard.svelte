<script>
	import { scale } from 'svelte/transition';

	export let institute;
</script>

<figure in:scale class="flex gap-2 border bg-white p-5 transition-shadow hover:shadow">
	<img src="/images/default.jpg" alt="" class="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />

	<!-- details -->
	<figcaption>
		<h3 class="mb-1 text-base font-extrabold text-brand-blue md:mb-0 md:text-lg">
			{institute.name}
		</h3>
		<p class="mb-1 text-xs text-brand-blue md:text-sm">{institute.address}</p>
		<a
			href={institute.email ? `mailto:${institute.email}` : ''}
			class="text-xs text-blue-600 hover:text-brand-blue md:text-sm"
		>
			{institute.email || 'No Email Address'}
		</a>
		<p class="mt-1 text-xs text-gray-600 md:text-sm">{institute.contact || 'No Contact info'}</p>
	</figcaption>
</figure>
