<script lang="ts">
	import '../../../assets/pkmn-gb/main.scss'
	let { children } = $props()
</script>

<main class="main gameboy">
	{@render children()}
</main>
