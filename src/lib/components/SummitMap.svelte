<script lang="ts">
	import type { Summit } from 'src/app';
	import PageSection from '$lib/components/PageSection.svelte';
	// @ts-ignore
	import { LeafletMap, TileLayer, Marker, Icon, GeoJSON } from 'svelte-leafletjs?client';
	import { mapConfig, iconConfig } from '$lib/config';

	export let summit: Summit;
	export let track: GeoJSON.FeatureCollection;
</script>

<PageSection title="Mapa">
	<figure>
		<figcaption>
			Zapis wejścia z:
			<span>
				{new Date(track?.features?.[0]?.properties?.time).toLocaleDateString('pl-PL', {
					dateStyle: 'full'
				})}
			</span>
		</figcaption>
		<LeafletMap options={{ center: [summit.location.lat, summit.location.lng], zoom: 12 }}>
			<TileLayer url={mapConfig.tileUrl} options={mapConfig.tileLayerOptions} />
			<Marker latLng={summit.location}>
				<Icon
					options={{ ...iconConfig, iconUrl: summit.done ? '/trophy.svg' : '/map-marker.svg' }}
				/>
			</Marker>
			<GeoJSON data={track} />
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
