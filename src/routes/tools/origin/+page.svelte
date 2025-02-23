<script lang="ts">
	import PkmnList from '$lib/component/PkmnList.svelte'
	import PkmnIcons from '$lib/component/PkmnIcons.svelte'
	import shuffle from '$lib/utils/shuffle.js'
	import { onMount } from 'svelte'
	import type { Pokemon } from '$lib/component/Pokemon'
	let table: Pokemon = $state([])
	let listSize = $state(5)
	let { data } = $props()
	onMount(async () => {
		table = shuffle(data.pokedex)
		table.length = 40
	})
</script>

<div class="stack-wrapp" style="--sb-w: 420px;">
	<section class="active closed horiz-layer stack-layer">
		<aside class="aside stack-wrapp bg-base-200">
			<section class="stack-layer">
				<PkmnList bind:table {listSize} grid></PkmnList>
			</section>
		</aside>
		<article class="article stack-wrapp">
			<section class="stack-layer">
				{@render pageTemp()}
			</section>
		</article>
	</section>
</div>

{#snippet pageTemp()}
	<article class="p-4">
		<hgroup>
			<h1>Pokedex I</h1>
		</hgroup>
		<PkmnIcons />
	</article>
{/snippet}
