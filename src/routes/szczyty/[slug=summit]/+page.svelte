<script lang="ts">
	import type { Summit } from '$lib/types';
	import PageSection from './PageSection.svelte';

	export let data: { summit: Summit };

	$: summit = data.summit;
</script>

<h1>{summit.summitName}</h1>
<PageSection title="Podstawowe dane">
	{summit.summitName}
</PageSection>

<style>
	h1 {
		padding-inline-start: var(--gutter);
	}
</style>
