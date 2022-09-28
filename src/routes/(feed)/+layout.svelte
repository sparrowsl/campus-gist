<script>
	import '../../app.css';
	import { currentUser } from '$lib/stores/users.js';
	import { browser } from '$app/environment';
	import FeedNav from '$lib/components/feed/FeedNav.svelte';

	// if (browser) $currentUser = JSON.parse(localStorage.getItem('currentUser'));
</script>

<FeedNav />
<main>
	<slot />
</main>
