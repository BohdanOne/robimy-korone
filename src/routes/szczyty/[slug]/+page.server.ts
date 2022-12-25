import { error } from '@sveltejs/kit';
import { fetchSummit } from "$lib/data/sanity-client";
import { getGeoJson } from '$lib/utils/get-geo-json';
import type { GeoJson } from 'src/app';
import type { RouteParams } from '.svelte-kit/types/src/routes/szczyty/[slug]/$types';

export const load = (async ({ params }: { params: RouteParams }) => {
  const summit = await fetchSummit(params.slug);
  let track: GeoJson = null;

  if (summit?.trackUrl) {
    track = await getGeoJson(summit.trackUrl)
  }

  if (summit) {
    return { summit, track };
  }

  throw error(404, 'Szukana strona nie istnieje');
});