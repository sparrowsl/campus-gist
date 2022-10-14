<script>
	import '../../app.css';
	import Navigation from '$lib/components/main/Navigation.svelte';
	import Footer from '$lib/components/main/Footer.svelte';
</script>

<Navigation />
<main>
	<slot />
</main>
<Footer />
