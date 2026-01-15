// components/InputText/InputText.tsx

import { type FocusEventHandler, type ReactNode, useMemo } from 'react';

import { randomString } from '@/utils/random-string/random-string.ts';

import Icon from '../Icon/Icon';
import type { IconOption } from '../Icon/Icon.types.ts';
import InputWrapper from '../InputWrapper/InputWrapper';

import './InputText.style.scss';
import type { SharedInputProps } from '@/types/SharedInputProps.type.ts';

export type InputTypeOption =
  | 'text'
  | 'search'
  | 'email'
  | 'password'
  | 'number'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'url'
  | 'tel';

export type InputModeOption =
  | 'text'
  | 'search'
  | 'email'
  | 'url'
  | 'tel'
  | 'none'
  | 'numeric'
  | 'decimal';

export type InputThemeOptions = 'default' | 'gray' | 'blue' | 'darken';

export interface InputTextProps extends SharedInputProps {
  type?: InputTypeOption;
  inputMode?: InputModeOption;
  className?: string;
  clearButton?: boolean;
  /** @deprecated value now derived from `error` instead. */
  invalidMessage?: string;
  prefixIcon?: IconOption;
  suffixIcon?: IconOption;
  placeholder?: string;
  autocomplete?: boolean;
  readonly?: boolean;
  maxLength?: number;
  defaultValue?: number | string;
  // value?: number | string | null;
  // onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  // onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputText = (props: InputTextProps): ReactNode => {
  const id = useMemo<string>(
    () => props.id || props.name || randomString(),
    [props.id, props.name]
  );

  const getClasses = useMemo((): string => {
    const classes = ['input-text'];

    // ADD CLASSNAME
    if (props.className) classes.push(props.className);

    // ADD THEME CLASS
    classes.push(`theme-${props.theme || 'default'}`);

    // ADD SIZE CLASS
    classes.push(`size-${props.size || 'md'}`);

    // SKELETON
    if (props.useSkeleton) classes.push('skeleton-input');

    // INVALID
    if (props.invalid === true) classes.push('is-invalid');

    // INLINE FORM
    if (props.inline) classes.push('inline');

    return classes.toString().replace(/,/g, ' ');
  }, [
    props.inline,
    props.invalid,
    props.size,
    props.theme,
    props.useSkeleton,
    props.className,
  ]);

  return (
    <InputWrapper
      footnote={props.footnote}
      id={id}
      inline={props.inline}
      invalid={props.invalid}
      invalidMessage={props.error?.message}
      label={props.label}
      moreInfo={props.moreInfo}
      required={props.required}
      srOnlyLabel={props.srOnlyLabel}
      useSkeleton={props.useSkeleton}
    >
      <div className={getClasses} data-testid="InputText">
        <input
          autoComplete={props.autocomplete ? 'on' : 'off'}
          className={`${props.invalid ? 'is-invalid' : ''} ${props.prefixIcon ? 'prefix' : ''} ${
            props.suffixIcon ? 'suffix' : ''
          } ${props.useSkeleton ? 'skeleton-input' : ''}`}
          disabled={props.disabled}
          id={id}
          inputMode={props.inputMode}
          name={props.name}
          placeholder={props.useSkeleton ? undefined : props.placeholder}
          readOnly={props.readonly}
          ref={props.ref}
          type={props.type || 'text'}
          {...(!props.value &&
            props.defaultValue && {
              defaultValue: props.defaultValue,
            })}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onFocus={props.onFocus}
          value={props.value || ''}
          {...(!!props.invalid && {
            'aria-invalid': 'true',
            'aria-describedby': id,
          })}
        />

        {props.prefixIcon && (
          <div className="input-prefix-icon">
            <Icon icon={props.prefixIcon} size={props.size || 'md'} />
          </div>
        )}

        {props.suffixIcon && (
          <div className="input-suffix-icon">
            <Icon icon={props.suffixIcon} size={props.size || 'md'} />
          </div>
        )}
      </div>
    </InputWrapper>
  );
};

export default InputText;
