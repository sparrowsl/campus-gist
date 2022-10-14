<script>
	export let type = 'text';
	export let required = true;
	export let value = '';
	export let placeholder = '';
	export let classes = '';
	export let name = '';
	export let rounded = 'md';
</script>

<input
	{type}
	{required}
	{name}
	on:input={(event) => (value = event.target.value)}
	{placeholder}
	class="{classes} {rounded
		? `rounded-${rounded}`
		: ''} block w-full border-gray-200 p-2 text-gray-600"
/>
