// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface Platform {}
}

export declare type Leaflet = typeof import('leaflet');

export type GeoPoint = { lat: number, lng: number, alt?: number };

export type GeoJson = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  features: any[];
} | null;

export type Picture = {
  cloudinaryPublicId: string;
  description?: string;
  location?: GeoPoint
}

export type Summit = {
  done: boolean;
  doneBefore: boolean;
  location: GeoPoint;
  mountainRange: string;
  name: string;
  pictures?: Picture[];
  slug: string;
  trackUrl?: string,
}

export type LMap = { getMap: () => Map };