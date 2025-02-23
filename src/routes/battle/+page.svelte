<script lang="ts">
	import shuffle from '$lib/utils/shuffle.js'
	import { getTypeStyle } from './_utils'
	import type { Pokemon } from '$lib/Pokemon'
	import paginate from '$lib/utils/paginate.js'
	let { data } = $props()
	let pokedex: Pokemon = $state([])
	let player: Pokemon = $state({} | null)
	let enemy: Pokemon = $state({} | null)
	let select: Pokemon = $state({} | null)
	let viewId = $state(0)
	let view = $derived(paginate(pokedex, 8))

	const init = () => {
		pokedex = data.pokedex
		pokedex.shift()
		pokedex.shift()
		player = pokedex.shift()
		pokedex.shift()
		pokedex.shift()
		enemy = pokedex.shift()
		select = pokedex.shift()
		pokedex = shuffle(pokedex)
	}

	init()

	let listOpen = $state(false)

	$inspect(player, enemy)
</script>

<section class="page-layer nwp bg-base-100">
	<article class="content">
		<div class="grid gap-4 md:grid-cols-2">
			<div class="rounded-box p-4 shadow">
				{@render cardT(player)}
			</div>
			<div class="rounded-box p-4 shadow">
				{@render cardT(enemy)}
			</div>
		</div>
	</article>
</section>

{#snippet cardT(obj)}
	<div class="flex items-center gap-2">
		<span class="text-2xl font-extrabold">{obj?.name}</span>
		<span class="flex-1"></span>
		<span class="font-bold">#{obj?.id.toString().padStart(3, '0')}</span>
	</div>
	{#each Object.entries(obj?.base) as el}
		{#if !el[0].includes('_')}
			<span class="flex items-center gap-2">
				<span>{el[0]}</span>
				<span class="flex-1"></span>
				<span class="font-bold">{el[1]}</span>
			</span>
		{/if}
	{/each}
	<div class="flex items-center gap-1">
		<span>Types</span>
		<span class="flex-1"></span>
		{#each obj?.type as item}
			<span class="badge badge-sm" style={getTypeStyle(item)}>{item}</span>
		{/each}
	</div>
{/snippet}

{#snippet listItem(obj)}
	<li class="list-row">
		<div class="list-col-grow">
			<div class="flex flex-col">
				{@render cardT(obj)}
			</div>
		</div>
		<div class="flex flex-col gap-1">
			<button
				class="btn btn-square btn-ghost"
				onclick={() => {
					select = pokedex.shift()
					listOpen = true
				}}>
				<svg class="pkmn-icon pkmn-sort"
					><use xlink:href="#pkmn-sort"></use></svg>
			</button>
			<button class="btn btn-square btn-ghost">
				<svg class="pkmn-icon pkmn-search"
					><use xlink:href="#pkmn-search"></use></svg>
			</button>
			<button class="btn btn-square btn-ghost">
				<svg class="pkmn-icon pkmn-tag"><use xlink:href="#pkmn-tag"></use></svg>
			</button>
		</div>
	</li>
{/snippet}
