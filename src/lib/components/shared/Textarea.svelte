<script>
	export let required = true;
	export let value = '';
	export let placeholder = 'Write something here';
	export let classes = '';
	export let name = '';
	export let rounded = 'md';
	export let height = '100';
</script>

<textarea
	{name}
	{placeholder}
	{required}
	on:input={(e) => (value = e.target.value)}
	class="{classes} {rounded
		? `rounded-${rounded}`
		: ''} min-h-[{height}px] block w-full border-gray-200"
/>
