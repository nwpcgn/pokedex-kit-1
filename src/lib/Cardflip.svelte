<script lang="ts">
	import PokerSprite from './sprites/PokerSprite.svelte'
	let flipped = $state(false)
	const icons = [
		'poker-clubs',
		'poker-diamonds',
		'poker-hearts',
		'poker-spades'
	]
</script>

{#snippet iconT(name, style = '')}
	<svg
		class="nwp-icon"
		class:text-error={name === 'poker-hearts' || name === 'poker-diamonds'}
		><use xlink:href="#{name}"></use></svg>
{/snippet}

<div class="flip-container">
	Flip the flip-card
	<button
		class={['flip-card', { flipped }]}
		onclick={() => (flipped = !flipped)}>
		<div class="front">
			<span class="symbol">{@render iconT('poker-diamonds')}</span>
		</div>
		<div class="back bg-base-300">
			<div class="pattern"></div>
		</div>
	</button>
</div>

<PokerSprite></PokerSprite>

<style>
	.flip-container {
		display: flex;
		flex-direction: column;
		gap: 1em;
		/* height: 100%; */
		align-items: center;
		justify-content: center;
		perspective: 100vh;
	}

	.flip-card {
		position: relative;
		aspect-ratio: 2.5 / 3.5;
		font-size: min(1vh, 0.25rem);
		height: 80em;
		background: var(--bg-1);
		border-radius: 2em;
		transform: rotateY(180deg);
		transition: transform 0.4s;
		transform-style: preserve-3d;
		padding: 0;
		user-select: none;
		cursor: pointer;
	}

	.flip-card.flipped {
		transform: rotateY(0);
	}

	.front,
	.back {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		backface-visibility: hidden;
		border-radius: 2em;
		border: 1px solid var(--fg-2);
		box-sizing: border-box;
		padding: 2em;
	}

	.front {
		background:
			url(data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjx0aXRsZT5wb2tlYmFsbDwvdGl0bGU+CjxwYXRoIGZpbGw9IiMwMDAwMGMiIGQ9Ik0xNS44MzggMzJjOC4wNjEgMCAxNC43MjctNS45NjEgMTUuODQtMTMuNzE0IDAgMC05LjM3MyAwLTkuMzczIDAtMC45NDEgMi42NjMtMy40ODEgNC41NzEtNi40NjcgNC41NzFzLTUuNTI1LTEuOTA4LTYuNDY3LTQuNTcxYzAgMC05LjM3MSAwLTkuMzcxIDAgMS4xMDkgNy43NTMgNy43NzcgMTMuNzE0IDE1LjgzOCAxMy43MTQgMCAwIDAgMCAwIDB6TTkuMzcxIDEzLjcxNGMwIDAtOS4zNzEgMC05LjM3MSAwIDEuMTA5LTcuNzU0IDcuNzc3LTEzLjcxNCAxNS44MzgtMTMuNzE0czE0LjcyNyA1Ljk2IDE1Ljg0IDEzLjcxNGMwIDAtOS4zNzMgMC05LjM3MyAwLTAuOTQxLTIuNjYzLTMuNDgxLTQuNTcxLTYuNDY3LTQuNTcxcy01LjUyNSAxLjkwOC02LjQ2NyA0LjU3MWMwIDAgMCAwIDAgMHpNMTkuNjQ3IDE2YzAgMi4xMDQtMS43MDUgMy44MDktMy44MDkgMy44MDlzLTMuODA5LTEuNzA1LTMuODA5LTMuODA5YzAtMi4xMDQgMS43MDUtMy44MSAzLjgwOS0zLjgxczMuODA5IDEuNzA2IDMuODA5IDMuODFjMCAwIDAgMCAwIDB6Ij48L3BhdGg+Cjwvc3ZnPgo=)
				no-repeat 5em 5em,
			url(data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjx0aXRsZT5wb2tlYmFsbDwvdGl0bGU+CjxwYXRoIGZpbGw9IiMwMDAwMGMiIGQ9Ik0xNS44MzggMzJjOC4wNjEgMCAxNC43MjctNS45NjEgMTUuODQtMTMuNzE0IDAgMC05LjM3MyAwLTkuMzczIDAtMC45NDEgMi42NjMtMy40ODEgNC41NzEtNi40NjcgNC41NzFzLTUuNTI1LTEuOTA4LTYuNDY3LTQuNTcxYzAgMC05LjM3MSAwLTkuMzcxIDAgMS4xMDkgNy43NTMgNy43NzcgMTMuNzE0IDE1LjgzOCAxMy43MTQgMCAwIDAgMCAwIDB6TTkuMzcxIDEzLjcxNGMwIDAtOS4zNzEgMC05LjM3MSAwIDEuMTA5LTcuNzU0IDcuNzc3LTEzLjcxNCAxNS44MzgtMTMuNzE0czE0LjcyNyA1Ljk2IDE1Ljg0IDEzLjcxNGMwIDAtOS4zNzMgMC05LjM3MyAwLTAuOTQxLTIuNjYzLTMuNDgxLTQuNTcxLTYuNDY3LTQuNTcxcy01LjUyNSAxLjkwOC02LjQ2NyA0LjU3MWMwIDAgMCAwIDAgMHpNMTkuNjQ3IDE2YzAgMi4xMDQtMS43MDUgMy44MDktMy44MDkgMy44MDlzLTMuODA5LTEuNzA1LTMuODA5LTMuODA5YzAtMi4xMDQgMS43MDUtMy44MSAzLjgwOS0zLjgxczMuODA5IDEuNzA2IDMuODA5IDMuODFjMCAwIDAgMCAwIDB6Ij48L3BhdGg+Cjwvc3ZnPgo=)
				no-repeat calc(100% - 5em) calc(100% - 5em);
	}

	.back {
		transform: rotateY(180deg);
	}

	.symbol {
		--fs: 80px;
		font-size: 30em;
		color: var(--fg-1);
	}

	.pattern {
		width: 100%;
		height: 100%;
		background-color: var(--bg-2);
		/* pattern from https://projects.verou.me/css3patterns/#marrakesh */
		background-image:
			radial-gradient(var(--bg-3) 0.9em, transparent 1em),
			repeating-radial-gradient(
				var(--bg-3) 0,
				var(--bg-3) 0.4em,
				transparent 0.5em,
				transparent 2em,
				var(--bg-3) 2.1em,
				var(--bg-3) 2.5em,
				transparent 2.6em,
				transparent 5em
			);
		background-size:
			3em 3em,
			9em 9em;
		background-position: 0 0;
		border-radius: 1em;
	}
</style>
