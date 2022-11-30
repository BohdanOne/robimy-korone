<script lang="ts">
	import { browser } from '$app/environment';
	// @ts-ignore
	import { LeafletMap, TileLayer, Marker } from 'svelte-leafletjs?client';
	import data from '../data/data.json';
	
  type Location = [lat: number, long: number];
	interface Picture {
		url: string;
		location: Location;
		description: string;
	}

	type Summit = {
		summitName: string;
		mountainRange: string;
		height: number;
		location: Location;
		done?: boolean;
		track?: GeoJSON.FeatureCollection;
		pictures?: Picture[];
	};

	const mapOptions = {
		center: [50, 19.030278],
		zoom: 6
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};
</script>

<header>
	<h1>robimy koronę</h1>
</header>
<div id="map" style="height: 80vh;">
	{#if browser}
		<LeafletMap options={mapOptions}>
			<TileLayer url={tileUrl} options={tileLayerOptions} />
			{#each data as summit}
				<Marker latLng={summit.location} />
			{/each}
		</LeafletMap>
	{/if}
</div>
