import type { PageLoad } from './$types';
import type { Summit } from '$lib/types';

import { getData } from "../../../data/get-data";

const data = getData() as Summit[];

export const load: PageLoad = ({ params }) => {
  const summit = data.find(s => s.summitName === params.slug) as Summit;

  return {
    summit
  };
}