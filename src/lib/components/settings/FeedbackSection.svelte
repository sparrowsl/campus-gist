<script>
	import { fade } from 'svelte/transition';

	let feedback = '';
</script>

<section in:fade class="mx-auto w-full max-w-2xl bg-white p-2 md:px-5">
	<form action="" on:submit|preventDefault class="p-3 md:p-5">
		<fieldset class="flex flex-col gap-3">
			<legend class="mb-3 block w-full text-center font-pt-sans text-2xl text-brand">
				Feedback
			</legend>

			<div>
				<label for="" class="mb-1 block font-pt-sans text-gray-700">
					Write a suggestion on what you would like to see or a feedback about the site.
				</label>
				<textarea
					bind:value={feedback}
					placeholder="write a feedback message."
					class="h-24 w-full resize-none rounded border-gray-200 text-sm font-light text-brand-blue"
				/>
			</div>

			<button type="submit" class="w-fit rounded bg-brand px-5 py-2 text-white hover:bg-blue-900">
				Share Feedback
			</button>
		</fieldset>
	</form>
</section>
