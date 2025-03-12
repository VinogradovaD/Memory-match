import { Theme } from './types';

export const getSystemTheme = (): Theme => {
  return window.matchMedia('(prefers-color-scheme:dark)').matches ? Theme.DARK : Theme.LIGHT;
};
