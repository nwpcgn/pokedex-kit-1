<script lang="ts">
	import PkmnInfo from './PkmnInfo.svelte'
	import PkmnTypes from './PkmnTypes.svelte'
	import PkmnDetails from './PkmnDetails.svelte'
	let { name, height, weight, next, types, stats, id } = $props()
</script>

<section class="rounded-box flex flex-col p-4 shadow">
	<header class="text-center text-3xl font-extrabold capitalize">
		{name}
	</header>
	<figure class="flex justify-center py-2">
		<!-- {#each [sprites] as { back_default, front_default }}	{/each} -->
		<img
			class="h-24"
			src="/img/pkmn/thumbnails/{id.toString().padStart(3, '0')}.png"
			alt="" />
	</figure>
	<PkmnInfo {weight} {height}></PkmnInfo>
	<article>
		<PkmnTypes {types}></PkmnTypes>
	</article>
	<footer class="collapse" tabindex="0">
		<input type="checkbox" />
		<div class="collapse-title text-center font-light">
			#{id.toString().padStart(3, '0')} Details
		</div>
		<div class="collapse-content">
			<PkmnDetails {stats}></PkmnDetails>
		</div>
	</footer>
</section>
