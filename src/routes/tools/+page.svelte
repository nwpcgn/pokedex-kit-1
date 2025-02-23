<script lang="ts">
	import BattleGid from '.$lib/battle/components/BattleGid.svelte'
	import mapsStart from './level1.json'
	import { enemy } from './../../lib/game.svelte.ts'
	import copyToClip from '$lib/utils/copyToClip.js'
	import paginate from '$lib/utils/paginate.js'
	import uuidv4 from '$lib/utils/uuid.js'
	const gArr = (int = 1) => Array.from({ length: int }, (_, i) => 0)
	let options = $state({
		width: 12,
		height: 12,
		size: 500,
		floor: '_',
		wall: '#',
		enemy: 'E',
		player: '@'
	})
	let pens = $state.raw({
		blank: ' ',
		floor: '_',
		wall: '#',
		enemy: 'E',
		player: '@',
		loot: 'L'
	})
	let grid = $state([])
	let output = $derived(grid.flat())
	let penId = $state(0)
	const handleGridItemClick = (event) => {
		const elem = event.currentTarget
		const x = parseInt(elem.dataset.x)
		const y = parseInt(elem.dataset.y)
		const tileIndex = grid[y * options.width + x]
		grid[y][x] = penId
	}

	let mapstore = $state([])
	const getStyle = [
		'tile-blank',
		'tile-floor',
		'tile-wall',
		'tile-enemy',
		'tile-player',
		'tile-loot'
	]
	const addMap = () => {
		const obj = {
			id: uuidv4(),
			width: options.width,
			height: options.height,
			styleMap: getStyle,
			output
		}
		mapstore.push(obj)
	}
	const clearStore = () => {
		mapstore.length = 0
	}
	const clearMap = () => {
		grid = paginate(gArr(options.width * options.height), options.width)
	}

	$effect(() => {
		grid = paginate(mapsStart[0].output, options.width)
	})

	$inspect(grid)
</script>

<section class="page-layer center nwp gap-4">
	<article class="content">
		<hgroup><h1>Grid-Tool {grid.length}</h1></hgroup>
	</article>
	<div class="space-y-2 space-x-2">
		{#each Object.keys(pens) as pen, i}
			<button
				class="button"
				onclick={() => {
					penId = i
				}}
				class:active={i == penId}>{pen}</button>
		{/each}
	</div>
	<BattleGid {options} {grid} {handleGridItemClick}></BattleGid>
	<div>
		<nav>
			<button onclick={addMap} class="btn">Store Map</button>
			<button onclick={clearMap} class="btn">Clear Map</button>
			<button
				onclick={() => copyToClip(JSON.stringify(mapstore))}
				class="btn"
				disabled={mapstore.length <= 0}>Copy Store {mapstore.length}</button>
			<button onclick={clearStore} class="btn" disabled={mapstore.length <= 0}
				>Clear Store</button>
		</nav>
		<textarea class="textarea" style="width: {options.size}px;"
			>{output.join(', ')}</textarea>
	</div>
</section>

<style>
	.grid-tool {
		display: grid;
		width: var(--gg-rs);
		height: var(--gg-rs);
		grid-template-columns: repeat(var(--gg-rw), minmax(0, 1fr));
		grid-template-rows: repeat(var(--gg-rh), minmax(0, 1fr));
		overflow: hidden;
		gap: 1px;
		background-color: var(--color-base-300);
		border: 1px solid var(--color-base-300);
	}
	.grid-tool > * {
		display: grid;
		place-content: center;
		background-color: var(--bg, var(--color-base-100));
		opacity: var(--op, 1)
		transition: all 0.5s ease-in;
	}
	.tile-blank {
		--bg: var(--gb-200);
	}
	.tile-floor {
		--bg: var(--color-base-200);
		color: var(--color-base-200);	
	}
	.tile-wall {
		--bg: var(--color-neutral);
	}
	.tile-enemy {
		--bg: var(--color-error);
		color: var(--color-error);
	}
	.tile-player {
		--bg: var(--color-info);
		color:var(--color-info);
	}
</style>
