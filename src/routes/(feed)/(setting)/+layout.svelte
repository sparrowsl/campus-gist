<script>
	import SettingsAsideTab from '../../../lib/components/settings/SettingsAsideTab.svelte';
</script>

<article
	class="container mx-auto grid min-h-[90vh] max-w-6xl grid-cols-[200px,1fr] bg-white px-3 py-10"
>
	<SettingsAsideTab />

	<!-- <section class=""> -->
	<slot />
	<!-- </section> -->
</article>
