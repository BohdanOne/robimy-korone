<script lang="ts">
	import { browser } from '$app/environment';
	// @ts-ignore
	import { LeafletMap, TileLayer, Marker, Icon, Popup } from 'svelte-leafletjs?client';

	import { getData } from "../data/get-data";
	import type { Summit } from '$lib/types';
	import { mapConfig, iconConfig } from '$lib/config';
	import ProgressBar from './ProgressBar.svelte';
	import { onMount } from 'svelte';

	const summits = getData() as Summit[];
	const revealedMarkers: { [k: string]: boolean } = {};

	let zoom: number;

	const getZoom = (viewport: number) => {
		return viewport > 740 ? 7 : 6;
	};
	const reveal = (summit: string): void => {
		revealedMarkers[summit] = true;
	};

	onMount(() => {
		zoom = getZoom(window.innerWidth);
	});
</script>

<header>
	<h1>robimy koronę</h1>
	<ProgressBar {summits} />
</header>
<div>
	{#if browser && zoom}
		<LeafletMap options={{ center: [50, 19.030278], zoom }}>
			<TileLayer url={mapConfig.tileUrl} options={mapConfig.tileLayerOptions} />
			{#each summits as { location, summitName, done } (summitName)}
				<Marker
					latLng={location}
					events={['mouseover', 'keydown']}
					options={{ title: summitName }}
					on:mouseover={() => reveal(summitName)}
					on:keydown={() => reveal(summitName)}
				>
					{#if revealedMarkers[summitName]}
						<Icon options={{ ...iconConfig, iconUrl: done ? 'trophy.svg' : 'map-marker.svg' }} />
					{:else}
						<Icon options={{ ...iconConfig, iconUrl: 'question-mark.svg' }} />
					{/if}
					<Popup><a href={`/szczyty/${summitName}`}>{summitName}</a></Popup>
				</Marker>
			{/each}
		</LeafletMap>
	{/if}
</div>

<style>
	div {
		width: 100vw;
		height: 100%;
	}

	header {
		position: fixed;
		z-index: var(--over-leaflet);
		pointer-events: none;
		inset-block-end: var(--gutter-large);
		background-color: var(--col-bg-light);
		border-block: var(--border);
		width: 100%;
		text-align: center;
	}
</style>
