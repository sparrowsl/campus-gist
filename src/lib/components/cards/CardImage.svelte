<script>
	export let src = 'default.png';
	export let rounded = 'rounded-full';
</script>

<img src="/images/{`${src}` || 'default.png'}" alt="" class="{rounded} h-7 w-7 md:h-12 md:w-12" />
