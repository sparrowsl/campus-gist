<script>
	import Icon from '@iconify/svelte';
	import { scale } from 'svelte/transition';

	export let institute;
</script>

<figure in:scale class="flex gap-2 border bg-white p-5 transition-shadow hover:shadow">
	<img src="/images/default.png" alt="" class="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />

	<!-- details -->
	<figcaption>
		<h3 class="mb-1 text-sm font-extrabold text-brand-blue md:mb-2 md:text-base">
			{institute.name}
		</h3>
		<p class="mb-1 flex items-center gap-2 text-xs text-brand-blue md:text-sm">
			<Icon icon="entypo:location" />
			<span>{institute.address}</span>
		</p>
		<p class="flex items-center gap-2 text-xs md:text-sm">
			<Icon icon="carbon:email-new" />
			<a
				href={institute?.email ? `mailto:${institute.email}` : ''}
				class="text-blue-600 hover:text-brand-blue"
			>
				{institute.email || 'No Email Address'}
			</a>
		</p>
		<p
			class="{institute.contact
				? 'text-gray-600'
				: 'text-gray-400'} mt-1 flex items-center gap-2 text-xs md:text-sm"
		>
			<Icon icon="carbon:phone-filled" />
			<span>{institute.contact || 'No Contact info'}</span>
		</p>
	</figcaption>
</figure>
