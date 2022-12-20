<script>
	import { fly } from 'svelte/transition';
</script>

<section
	in:fly={{ y: 500, duration: 300 }}
	out:fly={{ y: -500, duration: 300 }}
	class="fixed inset-0 z-50 grid h-screen justify-center bg-black bg-opacity-70"
>
	<div class="mt-16 h-fit min-w-[325px] rounded-md bg-white p-5 md:min-w-[35rem] md:p-10">
		<slot />
	</div>
</section>
