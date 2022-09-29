<script>
	import { scale } from 'svelte/transition';

	export let institute;
</script>

<figure in:scale class="flex gap-2 border bg-white p-5 transition-shadow hover:shadow">
	<img src="/images/default.jpg" alt="" class="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />

	<!-- details -->
	<figcaption>
		<h3 class="mb-1 text-sm font-extrabold text-brand-blue md:mb-0 md:text-base">
			{institute.name}
		</h3>
		<p class="mb-1 text-xs text-brand-blue md:text-sm">{institute.address}</p>
		<a
			href={institute.email ? `mailto:${institute.email}` : ''}
			class="text-xs text-blue-600 hover:text-brand-blue md:text-sm"
		>
			{institute.email || 'No Email Address'}
		</a>
		<p class="{institute.contact ? 'text-gray-600' : 'text-gray-400'} mt-1 text-xs md:text-sm">
			{institute.contact || 'No Contact info'}
		</p>
	</figcaption>
</figure>
