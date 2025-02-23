<script lang="ts">
	import Tile from './components/Tile.svelte'
	import CssLoader from '$lib/component/CssLoader.svelte'
	import { paginate, sleep, gArr } from './utils'
	import type { Pokemon, FighterType } from './Types'
	import { game, Fighter } from './battle.svelte.ts'
	let viewList = $state([])
	let viewSize = $state(9)
	let viewId = $state(0)
	let view = $derived(viewList[viewId])
	let fighter: FighterType = $state()
	let loading = $state(true)
	let prepend = $derived(gArr(viewSize - view?.length | 0))
	const initList = async () => {
		viewId = 0
		viewList = paginate(game.pokedex, viewSize)
	}

	const init = async () => {
		await sleep()
		initList()
		await sleep()
		loading = false
	}
$inspect(prepend)
	let promise = init()
</script>

{#await promise then _}
	<section class="page-layer nwp">
		<header class="content">
			<div class="rounded-box bg-secondary text-secondary-content w-full p-12">
				<h1 class="text-4xl font-bold">{game?.name}</h1>
			</div>
		</header>
		<div class="content pace-y-4">
			<nav class="bg-base-100 grid grid-cols-3 gap-4 p-4">
				{#each view as { id, name, type, base }}
					<Tile
						{id}
						{name}
						{type}
						{base}
						onClick={(e) => {
							const index = parseInt(e.currentTarget.dataset.pkmn)
							const { id, name, base, type }: Pokemon = game.pokedex.find(
								(d) => d.id == index
							)
							const obj = {
								id,
								name,
								hp: base.HP,
								attack: base.Attack,
								defense: base.Defense,
								speed: base.Speed
							}
							fighter = new Fighter(obj)
							console.log('Tile Click! PkmnId:', fighter)
						}} />
				{/each}
				{#each prepend as item}
					<div class="bg-base-200 view-list-item">
						<div class="sr-only">{item}</div>
					</div>
				{/each}
			</nav>
			<nav class="flex flex-wrap justify-center gap-2">
				{#each viewList as _, i}
					<button
						class="btn btn-circle"
						class:btn-info={viewId == i}
						onclick={() => (viewId = i)}>{i + 1}</button>
				{/each}
			</nav>
		</div>
	</section>
{/await}

<CssLoader active={loading}></CssLoader>
