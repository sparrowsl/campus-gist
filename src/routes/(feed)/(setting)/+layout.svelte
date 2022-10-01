<script>
	import SettingsAsideTab from '$lib/components/settings/SettingsAsideTab.svelte';
</script>

<article
	class="container mx-auto flex min-h-[90vh] max-w-6xl bg-white px-3 py-10 md:grid md:grid-cols-[200px,1fr]"
>
	<SettingsAsideTab />
	<slot />
</article>
