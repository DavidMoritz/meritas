// components/InputURL/InputURL.tsx

import {
  type ChangeEventHandler,
  type FocusEventHandler,
  type RefObject,
  useMemo,
} from 'react';

import { randomString } from '@/utils/random-string/random-string.ts';

import Icon from '../Icon/Icon.tsx';
import type { InputThemeOptions } from '../InputText/InputText.tsx';
import InputWrapper from '../InputWrapper/InputWrapper.tsx';

import './InputURL.style.scss';

export interface InputURLProps {
  ref?: RefObject<HTMLInputElement>;
  name: string;
  id?: string;
  label: string;
  srOnlyLabel?: boolean;
  inline?: boolean;
  moreInfo?: string;
  footnote?: string;
  size?: 'md' | 'sm';
  theme?: InputThemeOptions;
  required?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  placeholder?: string;
  autocomplete?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  defaultValue?: number | string;
  value: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputURL = (props: InputURLProps) => {
  const id = useMemo<string>(() => props.id || randomString(), [props.id]);

  const getClasses = (): string => {
    const classes = ['input-search'];

    // ADD THEME CLASS
    if (props.theme) classes.push(`theme-${props.theme}`);

    // ADD SIZE CLASS
    if (props.size) classes.push(`size-${props.size}`);

    // INLINE FORM
    if (props.inline) classes.push('inline');

    return classes.toString().replace(/,/g, ' ');
  };

  return (
    <InputWrapper
      footnote={props.footnote}
      id={id}
      inline={props.inline}
      invalid={props.invalid}
      invalidMessage={props.invalidMessage}
      label={props.label}
      moreInfo={props.moreInfo}
      required={props.required}
      srOnlyLabel={props.srOnlyLabel}
    >
      <div className={getClasses()}>
        <input
          autoComplete={props.autocomplete ? 'on' : 'off'}
          className={`${props.invalid ? 'is-invalid' : ''} prefix`}
          disabled={props.disabled}
          id={id}
          inputMode="url"
          name={props.name}
          placeholder={props.placeholder}
          readOnly={props.readonly}
          ref={props.ref}
          type="url"
          {...(!props.value &&
            props.defaultValue && {
              defaultValue: props.defaultValue,
            })}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onFocus={props.onFocus}
          value={props.value}
        />

        <div className="input-prefix-icon">
          <Icon icon="globe" />
        </div>
      </div>
    </InputWrapper>
  );
};

export default InputURL;
