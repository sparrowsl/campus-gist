<script>
	export let type = 'button';
	export let classes = '';
	export let disabled = false;
</script>

<button {type} {disabled} class="{classes} block w-fit"> <slot /> </button>
