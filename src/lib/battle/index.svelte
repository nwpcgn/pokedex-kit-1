<script lang="ts">
	import FighterDetails from './components/FighterDetails.svelte'
	import Tile from './components/Tile.svelte'
	import CssLoader from '$lib/component/CssLoader.svelte'
	import { paginate, sleep, gArr } from './utils'
	import type { Pokemon, FighterType } from './Types'
	import { game, Fighter } from './battle.svelte.ts'
	let viewList = $state([])
	let viewSize = $state(9)
	let viewId = $state(0)
	let view = $derived(viewList[viewId])
	let prepend = $derived(gArr((viewSize - view?.length) | 0))
	let fighter: FighterType = $state({} | null)
	let player: FighterType = $state({} | null)
	let enemy: FighterType = $state({} | null)
	let detailPage = $state(false)
	let disablePlayer = $derived(fighter?.id == enemy?.id)
	let disableEnemy = $derived(fighter?.id == player?.id)
	let loading = $state(false)

	const selectPkmn = async (e) => {
		const index = parseInt(e.currentTarget.dataset.pkmn)
		const { id, name, base, type }: Pokemon = game.pokedex.find(
			(d) => d.id == index
		)
		const obj = {
			id,
			name,
			type,
			hp: base.HP,
			attack: base.Attack,
			defense: base.Defense,
			speed: base.Speed
		}
		fighter = new Fighter(obj)
		detailPage = true
		console.log(Object.keys(obj).join(', '))
		console.log(JSON.stringify(obj))
	}

	const selectFighter = (party = '0') => {
		const fobj = new Fighter(fighter)
		if (party === '1') {
			enemy = fobj
		} else {
			player = fobj
		}

		close()
	}

	const close = () => {
		detailPage = false
	}

	const initList = async () => {
		viewId = 0
		viewList = paginate(game.pokedex, viewSize)
	}

	const init = async () => {
		await sleep(2000)
		initList()
	}
	// $inspect(disablePlayer)
	let promise = init()
</script>

{#await promise}
	<CssLoader active={true}></CssLoader>
{:then _}
	<section class="page-layer nwp">
		<header class="content">
			<div
				class="rounded-box bg-secondary text-secondary-content flex w-full items-center justify-between p-8">
				<h1 class="text-4xl font-bold">{game?.name}</h1>
				<div class="grid">
					<div class="flex items-center justify-between gap-4">
						<span>Player </span>
						<div
							class="status status-lg transition-all delay-300 duration-300"
							class:status-info={player}>
						</div>
					</div>
					<div class="flex items-center justify-between gap-4">
						<span>Enemy </span>
						<div
							class="status status-lg transition-all delay-300 duration-300"
							class:status-info={enemy}>
						</div>
					</div>
					<div class="flex items-center justify-between gap-4">
						<span>Battle</span>
						<div
							class="status status-lg transition-all delay-300 duration-300"
							class:status-success={enemy && player}>
						</div>
					</div>
				</div>
			</div>
		</header>
		<div class="content pace-y-4">
			<nav class="bg-base-100 grid grid-cols-3 gap-4 p-4">
				{#each view as { id, name, type, base }}
					<Tile {id} {name} {type} {base} onClick={selectPkmn} />
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
						class="btn btn-sm btn-circle"
						class:btn-info={viewId == i}
						onclick={() => (viewId = i)}>{i + 1}</button>
				{/each}
			</nav>
		</div>
	</section>

	<section class="page-layer center top bg-glass" class:active={detailPage}>
		<div class="absolute right-4 top-4" onclick={close}>
			<button class="btn btn-circle btn-ghost">
				<svg class="pkmn-icon pkmn-close"
					><use xlink:href="#pkmn-close"></use></svg>
				<span class="sr-only">close</span>
			</button>
		</div>
		{#if fighter}
			<article class="content-sm my-4">
				<FighterDetails
					onClose={close}
					onPlayerSelect={() => {
						selectFighter('0')
					}}
					onEnemySelect={() => {
						selectFighter('1')
					}}
					{...fighter}
					{disablePlayer}
					{disableEnemy}>
				</FighterDetails>
			</article>
		{:else}
			<article class="content">
				<hgroup>
					<h1 class="text-center">No Details</h1>
				</hgroup>
			</article>
		{/if}
	</section>
{/await}
