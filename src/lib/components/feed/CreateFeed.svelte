<script>
	let textInput = 'lorem ipsum dolor sit amet';
</script>

<section class="container mx-auto mb-3 flex justify-center bg-gray-500 md:w-[37.5rem]">
	<form action="" class="w-full p-3">
		<legend>What's on your mind?</legend>
		<textarea name="" id="" bind:value={textInput} class="block w-full" />
		<button
			type="submit"
			class="disabled::bg-brand-blue block rounded-lg bg-brand px-6 py-2 text-white
			disabled:cursor-not-allowed"
			disabled={textInput ? false : true}>Post</button
		>
	</form>
</section>
