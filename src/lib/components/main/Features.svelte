<script>
	import Icon from '@iconify/svelte';
</script>

<div class="border-t border-[#dce2fa] bg-[rgb(225,_230,_249)]">
	<article class="container mx-auto grid min-h-[90vh] max-w-6xl place-content-center">
		<section class="grid gap-5 px-5 py-10 md:grid-cols-2 md:p-10 lg:gap-7">
			{#each [{}, {}, {}, {}] as _}
				<div
					class="flex flex-col gap-3 rounded-md bg-white p-5 shadow-sm hover:shadow-lg
					md:flex-row md:gap-5 md:p-10 lg:max-w-md"
				>
					<Icon
						icon="bi:chat-fill"
						class="mx-auto mt-1 h-fit text-6xl text-brand-blue md:m-0 md:text-8xl lg:h-auto"
					/>
					<div class="text-center md:text-left">
						<h2 class="mb-3 mt-0 text-lg font-bold text-brand">Lorem ipsum dolor sit amet.</h2>
						<p class="font-pt-sans text-brand-blue">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id fugiat dolore sed
							repudiandae. Minus.
						</p>
					</div>
				</div>
			{/each}
		</section>
	</article>
</div>
