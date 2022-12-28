<script lang="ts">
	import { browser } from '$app/environment';
	import type { PageData } from './$types';
	import PageSection from '$lib/components/PageSection.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import SummitInfo from '$lib/components/SummitInfo.svelte';
	import SummitMap from '$lib/components/SummitMap.svelte';

	export let data: PageData;

	$: summit = data.summit;
	$: track = data.track;
	$: pictures = data.summit.pictures;
</script>

<h1>{summit.name}</h1>
<SummitInfo {summit} />

{#if browser}
	<SummitMap {summit} {track} />
{/if}

{#if pictures?.length}
	<PageSection title="Galeria">
		<Gallery {pictures} />
	</PageSection>
{/if}

<style>
	h1 {
		padding-inline-start: var(--gutter);
	}
</style>
