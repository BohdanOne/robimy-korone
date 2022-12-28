import type { LMap } from "src/app";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isMap = (element: any): element is LMap => {
  return typeof element?.getMap === 'function';
};