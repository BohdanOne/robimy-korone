import type { PageLoad } from './$types';
import type { Summit } from '$lib/types';

import data from '../../../data/data.json';

export const load: PageLoad = ({ params }) => {
  const summit = data.find(s => s.summitName === params.slug) as Summit;
  
  return {
    summit
  };
}