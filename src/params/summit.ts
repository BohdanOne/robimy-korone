import data from '../data/data.json';

export function match(param: string): boolean {
  const summits = data.map(summit => summit.summitName);
  return summits.includes(param)
}