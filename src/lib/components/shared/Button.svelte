<script>
	export let type = 'button';
	export let classes = '';
</script>

<button {type} class="{classes} block w-fit"> <slot /> </button>
