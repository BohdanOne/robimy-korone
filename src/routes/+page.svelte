<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	// @ts-ignore
	import { LeafletMap, TileLayer, Marker, Icon, Popup } from 'svelte-leafletjs?client';

	import type { PageData } from './$types';
	import { mapConfig, iconConfig } from '$lib/config';
	import ProgressBar from '$lib/components/ProgressBar.svelte';

	export let data: PageData;

	const { summits } = data;

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
			{#each summits as { location, name, slug, done } (name)}
				<Marker
					latLng={location}
					events={['mouseover', 'keydown']}
					options={{ title: name }}
					on:mouseover={() => reveal(name)}
					on:keydown={() => reveal(name)}
				>
					{#if revealedMarkers[name]}
						<Icon
							options={{ ...iconConfig, iconUrl: done ? 'map-marker-check.svg' : 'map-marker.svg' }}
						/>
					{:else}
						<Icon options={{ ...iconConfig, iconUrl: 'map-marker.svg' }} />
					{/if}
					<Popup><a href={`/szczyty/${slug}`}>{name}</a></Popup>
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

	:global(.leaflet-popup .leaflet-popup-content-wrapper),
	:global(.leaflet-popup .leaflet-popup-tip-container .leaflet-popup-tip) {
		background-color: rgba(var(--bg-light), 0.8);
	}

	:global(.leaflet-popup a.leaflet-popup-close-button) {
		color: var(--col-primary);
		transition: color var(--transition);
	}

	:global(.leaflet-popup .leaflet-popup-content-wrapper a) {
		display: block;
		font-family: var(--font-regular);
		font-size: var(--text-regular);
		font-weight: 800;
		color: var(--col-primary);
		text-align: center;
		text-decoration: none;
		transition: color var(--transition);
	}

	:global(.leaflet-popup .leaflet-popup-content-wrapper a:hover),
	:global(.leaflet-popup .leaflet-popup-content-wrapper a:focus-visible),
	:global(.leaflet-popup a.leaflet-popup-close-button:hover),
	:global(.leaflet-popup a.leaflet-popup-close-button:focus-visible) {
		color: var(--col-accent);
	}
</style>
