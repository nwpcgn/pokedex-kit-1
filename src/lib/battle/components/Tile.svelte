<script lang="ts">
	import './tile.scss'
	let { id, name, type, base, onClick } = $props()
</script>

<div class="view-list-item shadow">
	<div class="grid place-content-center">
		<img src="/img/pkmn/thumbnails/{id.toString().padStart(3, '0')}.png" />
	</div>
	<div class="flex flex-col justify-between p-4">
		<button data-pkmn={id} onclick={onClick} class="flex items-center gap-2 cursor-pointer transition-all duration-200 ease hover:text-info">
			<span class="flex-1"></span>
			<svg class="pkmn-icon pkmn-tag">
				<use xlink:href="#pkmn-tag"></use>
			</svg>
			<span class="text-xl font-bold">{id.toString().padStart(3, '0')}</span>
		</button>
		<div class="text-center">
			<div class="text-2xl font-bold capitalize">{name}</div>
		</div>
	</div>
</div>


