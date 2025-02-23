<script lang="ts">
	let { stats } = $props()
</script>

<div class="grid gap-1">
	{#each stats as { base_stat, stat }}
		<div class="flex items-center justify-between gap-2 capitalize">
			<span class="w-1/4 truncate italic">{stat.name}</span>
			<progress class="progress w-full" value={base_stat} max="100"></progress>
			<span class=" font-bold">{base_stat}</span>
		</div>
	{/each}
</div>
