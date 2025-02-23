<script lang="ts">
	import { player, enemy } from '$lib/game.svelte.ts'
	import sleep from '$lib/utils/sleep.js'
	const enemies = [enemy?.pokemon]
	const player1 = { agility: 1 }

	let turn = $state(0)
	let tickInterval = $state(4000)
	let interval = $state()

	const battleTick = async () => {
		clearMsg()
		logText('turn ' + turn)
		// player attacks every turn with agility 1:
		regPlayerAttack()

		// if all enemies are dead, end the interval
		if (enemies.every(({ base }) => base.HP <= 0)) {
			clearInterval(interval)
			logText('done')
		}
		await sleep()
		// every enemy whose agility modulo the current turn is 0 attacks:
		enemies.filter(({ agility }) => turn % agility === 0).forEach(enemyAttack)

		turn++
	}

	const start = () => {
		battleTick()
		interval = setInterval(battleTick, tickInterval)
	}
	const stop = () => {
		if (interval) clearInterval(interval)
		console.log('done')
	}

	let msgArr = $state([])

	const logText = async (text) => {
		msgArr.push({ text })
	}
	const clearMsg = () => {
		msgArr = []
	}

	function regPlayerAttack() {
		logText(`${player.pokemon.name} ${turn} attacking...`)
		// insert attack logic
	}
	function enemyAttack(enemy) {
		logText(`${enemy.name} ${turn} attacking...`)
		// insert attack logic
	}

	$effect(() => {
		return () => {
			if (interval) clearInterval(interval)
		}
	})
</script>

<section class="bg-base-200 stack-layer">
	<div>
		<hgroup><h3>Battle 1</h3></hgroup>

		<button class="btn" onclick={start}>Start</button>
		<button class="btn" onclick={stop}>Stop</button>
		<div>
			{#each msgArr as { text }}
				<div>{text}</div>
			{/each}
		</div>
	</div>
</section>
