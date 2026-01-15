// components/Toaster/Toaster.types.ts

/**
 * Put types here that break React fast refresh.  Delete this file if you don't need it.
 * Learn more at https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#consistent-components-exports
 */
export const TOASTER_TYPES = ['warning', 'success', 'error', 'info'] as const;
export type ToastType = (typeof TOASTER_TYPES)[number];
