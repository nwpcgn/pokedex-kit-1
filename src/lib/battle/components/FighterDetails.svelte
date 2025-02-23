<script lang="ts">
	import { getTypeStyle } from '../utils'
	let {
		id,
		name,
		type,
		hp,
		attack,
		defense,
		speed,
		onClose,
		onPlayerSelect,
		onEnemySelect,
		disablePlayer,
		disableEnemy
	} = $props()
	let slug = $derived(id?.toString().padStart(3, '0'))
	let imgUrl = $derived(`/img/pkmn/thumbnails/${slug}.png`)
</script>

<section class="bg-base-100 flex flex-col rounded-xl p-4 shadow">
	<header class="text-center text-4xl font-extrabold capitalize">{name}</header>
	<figure class="flex justify-center py-2">
		<img alt="" src={imgUrl} />
	</figure>
	<article>
		<div class="flex justify-center gap-2 py-2 text-sm">
			{#each type as item}
				<span
					class="flex-1 rounded-full px-4 py-1 text-center font-thin"
					style={getTypeStyle(item)}>{item}</span>
			{/each}
		</div>
	</article>
	<div class="grid gap-1 py-2">
		<div class="flex items-center justify-between gap-2 capitalize">
			<span class="w-1/4 truncate italic">hp</span>
			<progress class="progress w-full" max="100" value={hp}></progress>
			<span class=" font-bold">{hp}</span>
		</div>
		<div class="flex items-center justify-between gap-2 capitalize">
			<span class="w-1/4 truncate italic">attack</span>
			<progress class="progress w-full" max="100" value={attack}></progress>
			<span class=" font-bold">{attack}</span>
		</div>
		<div class="flex items-center justify-between gap-2 capitalize">
			<span class="w-1/4 truncate italic">defense</span>
			<progress class="progress w-full" max="100" value={defense}></progress>
			<span class=" font-bold">{defense}</span>
		</div>

		<div class="flex items-center justify-between gap-2 capitalize">
			<span class="w-1/4 truncate italic">speed</span>
			<progress class="progress w-full" max="100" value={speed}></progress>
			<span class=" font-bold">{speed}</span>
		</div>
	</div>
	<!---->
</section>
<section class="bg-base-100 mt-4 flex gap-2 rounded-xl p-4 shadow">
	<span class="flex-1"></span>
	<nav>
		<button
			disabled={disablePlayer}
			class="btn btn-sm btn-info btn-outline btn-circle"
			onclick={onPlayerSelect}>
			<svg class="pkmn-icon pkmn-pokeball"
				><use xlink:href="#pkmn-pokeball"></use></svg>
			<span class="sr-only">player select</span>
		</button>
		<button disabled={disableEnemy}
			class="btn btn-sm btn-info btn-outline btn-circle"
			onclick={onEnemySelect}>
			<svg class="pkmn-icon pkmn-blank"
				><use xlink:href="#pkmn-blank"></use></svg>
			<span class="sr-only">enemy select</span>
		</button>
		<button
			class="btn btn-sm btn-error btn-outline btn-circle"
			onclick={onClose}>
			<svg class="pkmn-icon pkmn-close"
				><use xlink:href="#pkmn-close"></use></svg>
			<span class="sr-only">close</span>
		</button>
	</nav>
</section>
