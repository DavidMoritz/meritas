// components/Icon/Icons.types.ts

import { type IconMap, IconMapKeys } from '@/components/Icon/Icons.map';

/**
 * Put types here that break React fast refresh.  Delete this file if you don't need it.
 * Learn more at https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#consistent-components-exports
 */

export const ICON_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type IconSize = (typeof ICON_SIZES)[number];

export const ICON_THEMES = [
  'default',
  'danger',
  'info',
  'primary',
  'success',
  'error',
  'warning',
  'tooltip',
] as const;
export type IconTheme = (typeof ICON_THEMES)[number];

/**
 * Array of available icon names that can be used in the application
 * This is a readonly array of all icon keys from the Icons object
 */
export const ICON_OPTIONS = IconMapKeys;

/**
 * Type representing valid icon names that can be used in the application
 * Derived from the keys of the Icons object to ensure better IDE autocompletion
 */
export type IconOption = keyof typeof IconMap;
