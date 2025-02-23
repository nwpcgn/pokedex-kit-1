<script lang="ts">
	let {
		options = {
			width: 12,
			height: 12,
			size: 500
		},
		grid,
		handleGridItemClick
	} = $props()

	const getStyle = [
		'tile-blank',
		'tile-floor',
		'tile-wall',
		'tile-enemy',
		'tile-player',
		'tile-loot'
	]
</script>

<div
	class="grid-tool"
	style="--gg-rw: {options.width}; --gg-rh: {options.height}; --gg-rs: {options.size}px;">
	{#each grid as row, y}
		{#each row as col, x}
			<button
				onclick={handleGridItemClick}
				data-x={x}
				data-y={y}
				class="cursor-pointer {getStyle[col]}"
				class:bg-neutral={col == 1}>
				{#if col == 0}
					<span></span>
				{:else}
					<span>{col}</span>
				{/if}
				<span class="sr-only">{x}/{y}</span>
			</button>
		{/each}
	{/each}
</div>

<style>
	.grid-tool {
		display: grid;
		width: var(--gg-rs);
		height: var(--gg-rs);
		grid-template-columns: repeat(var(--gg-rw), minmax(0, 1fr));
		grid-template-rows: repeat(var(--gg-rh), minmax(0, 1fr));
		overflow: hidden;
		gap: 1px;
		background-color: var(--color-base-300);
		border: 1px solid var(--color-base-300);
	}
	.grid-tool > * {
		display: grid;
		place-content: center;
		background-color: var(--bg, var(--color-base-100));
		opacity: var(--op, 1)
		transition: all 0.5s ease-in;
	}
	.tile-blank {
		--bg: var(--gb-200);
	}
	.tile-floor {
		--bg: var(--color-base-200);
		color: var(--color-base-200);	
	}
	.tile-wall {
		--bg: var(--color-neutral);
	}
	.tile-enemy {
		--bg: var(--color-error);
		color: var(--color-error);
	}
	.tile-player {
		--bg: var(--color-info);
		color:var(--color-info);
	}
</style>
