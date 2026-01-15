// InputToggle.tsx

import {
  type ChangeEventHandler,
  type FocusEventHandler,
  type ReactNode,
  useMemo,
} from 'react';
import type { RefCallBack } from 'react-hook-form';

import { randomString } from '@/utils/random-string/random-string';

import styles from './InputToggle.module.scss';

export interface InputToggleProps {
  ref?: RefCallBack;
  id?: string;
  name: string;
  label?: string | ReactNode;
  srOnlyLabel?: boolean;
  disabled?: boolean;
  trueLabel?: string;
  falseLabel?: string;
  minWidth?: number;
  invalid?: boolean;
  invalidMessage?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  defaultChecked?: boolean;
  value?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputToggle = (props: InputToggleProps) => {
  const id = useMemo<string>(
    () => props.id || props.name || randomString(),
    [props.id, props.name]
  );

  return (
    <div
      className={`${styles['input-toggle']} ${styles[`size-${props.size || 'md'}`]}`}
      data-testid="InputToggle"
    >
      <input
        disabled={props.disabled}
        id={id}
        name={props.name}
        ref={props.ref}
        type="checkbox"
        {...(props.value === undefined &&
          props.defaultChecked && {
            defaultChecked: props.defaultChecked,
          })}
        checked={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onFocus={props.onFocus}
      />

      <label htmlFor={id}>
        <span aria-hidden="true" className={styles.toggle}>
          <span
            className={styles['toggle-inner']}
            data-label-false={props.falseLabel}
            data-label-true={props.trueLabel}
          />
          <span className={styles['toggle-switch']} />
        </span>
        <span
          className={`${styles['toggle-label']} ${props.srOnlyLabel ? 'sr-only' : ''}`}
        >
          {props.label}
        </span>
      </label>
    </div>
  );
};

export default InputToggle;
