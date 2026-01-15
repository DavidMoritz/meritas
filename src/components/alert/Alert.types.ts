// components/Alert/Alert.types.ts

/**
 * Put types here that break React fast refresh.  Delete this file if you don't need it.
 * Learn more at https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#consistent-components-exports
 */

export const ALERT_THEMES = [
  'default',
  'info',
  'warning',
  'danger',
  'success',
] as const;
export type AlertTheme = (typeof ALERT_THEMES)[number];
