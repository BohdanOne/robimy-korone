import { DOMParser } from 'xmldom';
import togeojson from '@mapbox/togeojson';

export const getGeoJson = async (gpxUrl: string) => {
  const parser = new DOMParser();

  const gpx = await fetch(gpxUrl);
  const gpxText = await gpx.text();
  const parsedGPX = parser.parseFromString(
    gpxText, 'application/gpx+xml'
  );

  return togeojson.gpx(parsedGPX);
}