<script lang="ts">
	let { height, weight } = $props()
</script>

<div class="flex justify-center gap-2">
	<div class="flex items-center gap-2">
		<svg class="pkmn-icon pkmn-height">
			<use xlink:href="#pkmn-height"></use>
		</svg>
		<span class="text-lg font-bold">{height}</span>
	</div>
	<div class="divider divider-horizontal"></div>
	<div class="flex items-center gap-2">
		<svg class="pkmn-icon pkmn-weight">
			<use xlink:href="#pkmn-weight"></use>
		</svg>
		<span class="text-lg font-bold">{weight}</span>
	</div>
</div>
