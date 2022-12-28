<script lang="ts">
	// @ts-ignore
	import { LeafletMap, TileLayer, Marker, Icon, GeoJSON } from 'svelte-leafletjs?client';
	import type { Map, LatLngExpression } from 'leaflet';

	import type { Summit, LMap } from 'src/app';
	import { isMap } from '$lib/utils/type-guards';
	import { mapConfig, iconConfig } from '$lib/config';
	import PageSection from '$lib/components/PageSection.svelte';

	export let summit: Summit;
	export let track: GeoJSON.FeatureCollection;

	let leafletMap: LMap | undefined;
	let map: Map;

	$: center = [summit.location.lat, summit.location.lng] satisfies LatLngExpression;
	$: if (isMap(leafletMap)) {
		map = leafletMap.getMap();
		map.panTo(center);
	}
</script>

<PageSection title="Mapa">
	<figure>
		{#if track}
			<figcaption>
				Zapis wejścia z:
				<span>
					{new Date(track.features?.[0]?.properties?.time).toLocaleDateString('pl-PL', {
						dateStyle: 'full'
					})}
				</span>
			</figcaption>
		{/if}
		<LeafletMap options={{ center, zoom: 12 }} bind:this={leafletMap}>
			<TileLayer url={mapConfig.tileUrl} options={mapConfig.tileLayerOptions} />
			<Marker latLng={summit.location}>
				<Icon
					options={{
						...iconConfig,
						iconUrl: summit.done ? '/map-marker-check.svg' : '/map-marker.svg'
					}}
				/>
			</Marker>
			{#if track}
				<GeoJSON data={track} />
			{/if}
		</LeafletMap>
	</figure>
</PageSection>

<style>
	figure {
		resize: vertical;
		overflow: auto;
		height: 40vh;
	}

	figcaption {
		margin-block-end: var(--gutter-s);
	}

	span {
		font-weight: bold;
		margin-inline-start: var(--gutter-s);
	}
</style>
