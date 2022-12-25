<script lang="ts">
	import PageSection from '$lib/components/PageSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: summit = data.summit;
	$: track = data.track;
</script>

<h1>{summit.name}</h1>
<PageSection title="Podstawowe dane">
	{summit.name}
</PageSection>
{#if track}
	<PageSection title="Mapa">
		zapis wejścia z: {new Date(track?.features[0].properties.time).toLocaleDateString('pl-PL', {
			dateStyle: 'full'
		})}
	</PageSection>
{/if}

<style>
	h1 {
		padding-inline-start: var(--gutter);
	}
</style>
