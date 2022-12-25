import { SANITY_PROJECT_ID } from '$env/static/private';
import sanityClient from "@sanity/client";

export const fetchAllSummits = async () => await client.fetch(ALL_SUMMITS);

export const fetchSummit = async (slug: string) => {
  const summit = await client.fetch(summitQuery(slug));
  return summit[0];
}

const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: import.meta.env.MODE === 'production' ? 'production' : 'dev',
  apiVersion: "2022-12-22",
  useCdn: false
});

// QUERIES
const ALL_SUMMITS = `*[_type == "summit"] {
  name,
  "slug": slug.current,
  mountainRange,
  location {
    alt, lat, lng
  },
  "trackUrl": track.asset->url,
  pictures,
  done,
  doneBefore
} | order(location.alt asc)`;

const summitQuery = (slug: string) => `*[_type == "summit" && slug.current =="${slug}"] {
  name,
  "slug": slug.current,
  mountainRange,
  location {
    alt, lat, lng
  },
  "trackUrl": track.asset->url,
  pictures,
  done,
  doneBefore
}`;