<script lang="ts">
	import '../app.css'
	import '../nwp.css'
	import pkmnsprite from '../lib/sprites/pkmn-icons.json'
	let { children } = $props()
	let sb = $state(false)
</script>

<header class="sticky top-0 z-20 shadow">
	<div class="navbar bg-secondary text-bg-secondary-content">
		<a href="#/" class="btn btn-secondary text-xl">nwp-studio</a>
	</div>
</header>

{@render children()}

{#each Object.values(pkmnsprite) as sprite}
	{@html sprite}
{/each}
