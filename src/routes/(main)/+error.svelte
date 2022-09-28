<script>
	import { page } from '$app/stores';
</script>

<section class="">
	<h1>{$page.status}: {$page.error.message}</h1>
	<h2><a href="/">Home</a></h2>
</section>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
	}
	section {
		display: grid;
		min-height: 100vh;
		place-content: center;
		background-color: rgb(229, 231, 235, 1);
	}
	h1 {
		color: #6171a0;
		font-size: 2rem;
		margin-bottom: 0.25em;
	}
	h2 a {
		display: block;
		text-align: center;
		color: #b9bddc;
	}
	h2 a:hover {
		text-align: center;
		color: rgb(75, 75, 243);
	}
</style>
