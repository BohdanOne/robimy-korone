import type { Summit } from "$lib/types";
import { getData } from "$lib/data/get-data";

const data = getData() as Summit[];

export function match(param: string): boolean {
  const summits = data.map(summit => summit.summitName);
  return summits.includes(param)
}