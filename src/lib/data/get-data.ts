import data from './data.json';
import testData from './data-stage.json';

export const getData = () =>
  import.meta.env.MODE === 'production' ? data : testData;
