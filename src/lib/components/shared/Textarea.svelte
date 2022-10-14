<script>
	export let required = true;
	export let value = '';
	export let placeholder = '';
	export let classes = '';
	export let name = '';
	export let rounded = '';
</script>

<textarea
	{name}
	{placeholder}
	{required}
	{value}
	class="{classes} {rounded ? `rounded-${rounded}` : ''} block w-full border-gray-200"
/>
