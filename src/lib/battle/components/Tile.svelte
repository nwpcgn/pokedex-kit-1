<script lang="ts">
	import './tile.scss'
	let { id, name, type, base, onClick } = $props()
</script>

<button class="view-list-item shadow" data-pkmn={id} onclick={onClick}>
	<div class="grid place-content-center">
		<img src="/img/pkmn/thumbnails/{id.toString().padStart(3, '0')}.png" />
	</div>
	<div class="flex flex-col justify-between p-4">
		<div class="flex items-center gap-2">
			<span class="flex-1"></span>
			<svg class="pkmn-icon pkmn-tag">
				<use xlink:href="#pkmn-tag"></use>
			</svg>
			<span class="text-xl font-bold">{id.toString().padStart(3, '0')}</span>
		</div>
		<div class="text-center">
			<div class="text-2xl font-bold capitalize">{name}</div>
		</div>
	</div>
</button>


