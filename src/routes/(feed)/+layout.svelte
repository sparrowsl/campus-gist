<script>
	import '../../app.css';
	import FeedNav from '$lib/components/feed/FeedNav.svelte';
	import { currentStudent } from '../../lib/stores/students.js';

	export let data;
	$currentStudent = data.student;
	$: console.log($currentStudent);
</script>

<FeedNav />
<main>
	<slot />
</main>
