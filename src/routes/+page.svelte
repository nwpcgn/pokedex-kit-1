<script lang="ts">
	import Cardflip from '$lib/Cardflip.svelte'
	import PkmnIcons from '$lib/component/PkmnIcons.svelte'
</script>

<main class="main">
	<section class="page-layer nwp">
		<header class="content">
			<div class="rounded-box bg-secondary text-secondary-content w-full p-12">
				<div class="text-xs">Daisy grows happily under the warm sunlight</div>
				<div class="text-sm">Daisy grows happily under the warm sunlight</div>
				<a href="#/tools" class="text-md">Game Development Tools</a>
				<a href="#/tools/pkmngb" class="block text-lg">Pkmn GB Css</a>
				<a href="#/tools/origin" class="block text-xl font-semibold">
					Pkmn Battle
				</a>
				<a href="#/battle" class="text-2xl font-bold block"
					>Welcome to your library project</a>
				<a href="#/game" class="text-3xl font-black">Pkmn - Icons</a>
			</div>
		</header>
		<article class="content"><PkmnIcons /></article>

		<Cardflip></Cardflip>
	</section>
</main>
