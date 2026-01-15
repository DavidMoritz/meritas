// components/TemplateName/TemplateName.types.ts

/**
 * Put types here that break React fast refresh.  Delete this file if you don't need it.
 * Learn more at https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#consistent-components-exports
 */
export const BUTTON_THEMES = [
  'default',
  'primary',
  'secondary',
  'tertiary',
  'info',
  'success',
  'warning',
  'danger',
  // "white",
  // "white-outline",
  'link',
  'control',
  'control-black',
] as const;
export type ButtonTheme = (typeof BUTTON_THEMES)[number];

export const BUTTON_SIZES = ['xs', 'sm', 'md', 'lg'] as const;
export type ButtonSize = (typeof BUTTON_SIZES)[number];

export const BUTTON_WIDTHS = [
  'narrow',
  'standard',
  'wide',
  'square',
  'fluid',
  'block',
] as const;
export type ButtonWidth = (typeof BUTTON_WIDTHS)[number];
