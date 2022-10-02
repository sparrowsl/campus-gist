<script>
	import Icon from '@iconify/svelte';

	export let text = 'back to gists';
	export let href = '/gists';
</script>

<a
	{href}
	class="flex w-fit items-center gap-1 rounded bg-blue-900 p-2 text-xs
	text-white no-underline hover:bg-brand"
>
	<Icon icon="ep:back" />
	{text}
</a>
