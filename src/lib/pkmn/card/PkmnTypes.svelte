<script lang="ts">
	let { types } = $props()

	const typeColors = {
		normal: '#A8A878',
		fire: '#F08030',
		water: '#6890F0',
		electric: '#F8D030',
		grass: '#78C850',
		ice: '#98D8D8',
		fighting: '#C03028',
		poison: '#A040A0',
		ground: '#E0C068',
		flying: '#A890F0',
		psychic: '#F85888',
		bug: '#A8B820',
		rock: '#B8A038',
		ghost: '#705898',
		dragon: '#7038F8',
		dark: '#705848',
		steel: '#B8B8D0',
		dark: '#EE99AC'
	}
</script>

{#snippet typeT(type)}
	<span
		class="basis-24 rounded-full p-2 text-center capitalize"
		style="background-color: {typeColors[type.name]};">{type.name}</span>
{/snippet}

<div class="flex justify-center gap-4 py-4">
	{#each types as { type }}
		{@render typeT(type)}
	{/each}
</div>
