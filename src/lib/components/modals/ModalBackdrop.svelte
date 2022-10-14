<script>
	import { fly } from 'svelte/transition';
</script>

<section
	in:fly={{ y: 500, duration: 300 }}
	out:fly={{ y: -500, duration: 300 }}
	class="fixed inset-0 z-30 grid h-screen place-content-center bg-black bg-opacity-75"
>
	<div class="min-w-[325px] rounded-md bg-white p-5 md:min-w-[30rem] md:p-10">
		<slot />
	</div>
</section>
