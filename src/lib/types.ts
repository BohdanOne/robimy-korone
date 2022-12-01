export declare type Leaflet = typeof import('leaflet');

export type Location = [lat: number, long: number];

export interface Picture {
  url: string,
  location: Location,
  description: string
}

export type Summit = {
  summitName: string,
  mountainRange: string,
  height: number,
  location: Location
  done?: boolean,
  track?: GeoJSON.FeatureCollection,
  pictures?: Picture[]
}