<script lang="ts">
	import PkmnCard from './card/PkmnCard.svelte'
	import fetchData from '../utils/fetchData'
	let listAll = $state([])
	let current = $state(0)
	const init = async () => {
		const { results } = await fetchData(
			'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'
		)
		listAll = results
		return results
	}
</script>

{#await init() then value}
	<div class="flex items-center justify-center gap-4">
		<button
			onclick={() => {
				if (current > 0) {
					current = current - 1
				}
			}}
			class="btn btn-lg btn-circle btn-neutral"
			disabled={current <= 0}
			><svg class="pkmn-icon pkmn-left"><use xlink:href="#pkmn-left"></use></svg
			></button>
		{#if value}
			<nav class="grid min-w-xl grid-cols-1 grid-rows-1 gap-4 p-4">
				{#each listAll as { url }, i}
					{#await fetchData(url) then pkmn}
						{#if i == current}
							<PkmnCard {...pkmn} next={() => console.log('next')}></PkmnCard>
						{/if}
					{/await}
				{/each}
			</nav>
			<button
				onclick={() => {
					if (current < listAll.length - 1) {
						current = current + 1
					}
				}}
				class="btn btn-lg btn-circle btn-neutral"
				disabled={current >= listAll.length}
				><svg class="pkmn-icon pkmn-left"
					><use xlink:href="#pkmn-right"></use></svg
				></button>
		{/if}
	</div>
	<div class="flex items-center justify-center gap-4">
		{#each listAll as _, i}
			<div
				aria-label="status"
				class="status status-xl"
				class:status-info={current >= i}>
			</div>
		{/each}
	</div>
{/await}
