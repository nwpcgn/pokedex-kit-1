<!-- tabs design was adapted from https://svelte.dev/repl/cf05bd4a4ca14fb8ace8b6cdebbb58da?version=3.17.0 -->
<script lang="ts">
	import { onMount } from 'svelte'
	import { hash } from 'elegua'
	export let items: Array<{
		label: string
		value: number
		component: ConstructorOfATypedSvelteComponent
	}> = []
	export let activeTabValue = 1

	const handleClick = (tabValue: number) => () => {
		activeTabValue = tabValue
		hash.set(activeTabValue.toString())
	}
	hash.subscribe((x) => {
		const tab = parseInt(x)
		if (tab) activeTabValue = tab
	})
	onMount(() => {
		const tab = parseInt($hash)
		if (tab) activeTabValue = tab
	})
</script>

<ul>
	{#each items as item}
		<li class={activeTabValue === item.value ? 'active' : ''}>
			<span on:click={handleClick(item.value)} on:keydown={() => {}}
				>{item.label}</span>
		</li>
	{/each}
</ul>
{#each items as item}
	{#if activeTabValue == item.value}
		<div class="box">
			<svelte:component this={item.component} />
		</div>
	{/if}
{/each}

<style>
	.box {
		margin-bottom: 10px;
		padding: 40px;
		border: 1px solid #dee2e6;
		border-radius: 0 0 0.5rem 0.5rem;
		border-top: 0;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		padding-left: 0;
		margin-bottom: 0;
		list-style: none;
		border-bottom: 1px solid #dee2e6;
	}
	li {
		margin-bottom: -1px;
	}

	span {
		border: 1px solid transparent;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
		display: block;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}

	span:hover {
		border-color: #e9ecef #e9ecef #dee2e6;
	}

	li.active > span {
		color: #495057;
		background-color: #fff;
		border-color: #dee2e6 #dee2e6 #fff;
	}
</style>
