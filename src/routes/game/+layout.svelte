<script lang="ts">
	import { game } from '../../lib/battle/battle.svelte.ts'
	let { children, data } = $props()
	// $inspect(game?.name, game?.pokedex.length, game?.items.length)
	game.initData(data.pokedex)
	game.initItems(data.items)
</script>

<main class="main">
	{@render children()}
</main>
