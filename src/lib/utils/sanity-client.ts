import { PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import sanityClient from "@sanity/client";
import type { Summit } from 'src/app';

export const fetchAllSummits = async (): Promise<Summit[]> => await client.fetch(ALL_SUMMITS);

export const fetchSummit = async (slug: string): Promise<Summit> => {
  const summit = await client.fetch(summitQuery(slug));
  return summit[0];
}

const client = sanityClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
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
  pictures[] {
    cloudinaryPublicId,
    description,
      location {
          alt, lat, lng
      },
  },
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
  pictures[] {
    cloudinaryPublicId,
    description,
      location {
          alt, lat, lng
      },
  },
  done,
  doneBefore
}`;