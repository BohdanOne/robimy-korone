import { error } from '@sveltejs/kit';
import { fetchAllSummits } from "$lib/utils/sanity-client";

export const load = (async () => {
  const summits = await fetchAllSummits();

  if (summits) {
    return { summits };
  }

  throw error(404, 'Not found');
});