import type { ReactNode } from 'react';
import type {
  ControllerFieldState,
  ControllerRenderProps,
} from 'react-hook-form';

export const INPUT_THEME_OPTIONS = [
  'default',
  'gray',
  'blue',
  'darken',
] as const;
export type InputTheme = (typeof INPUT_THEME_OPTIONS)[number];

export const INPUT_SIZE_OPTIONS = ['sm', 'md', 'lg'] as const;
export type InputSize = (typeof INPUT_SIZE_OPTIONS)[number];

/**
 * Type that can be used to extend props for all inputs so that they play well
 * with `react-hook-form` and have all required shared props that need to be on
 * every form input.
 */
export type SharedInputProps = {
  id?: string;
  /** REQUIRED - needed for screen readers. */
  label: ReactNode | string;
  /** Hides the input except for screen readers. */
  srOnlyLabel?: boolean;
  /** Adds a tool tip at the end of the input label.  This is hidden if the `srOnlyLabel` is `true`. */
  moreInfo?: string;
  /** Adds a footnote to the bottom of the input. */
  footnote?: string;
  /** Adds a `*` symbol in front of the input label. */
  required?: boolean;
  /** Sizes shared between all inputs. */
  size?: InputSize;
  /** Themes shared between all inputs. */
  theme?: InputTheme;
  inline?: boolean;
  useSkeleton?: boolean;
} & Partial<ControllerFieldState> &
  Partial<ControllerRenderProps>;
