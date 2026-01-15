// components/InputEmail/InputEmail.tsx

import { type FocusEventHandler, useMemo } from 'react';
import type { SharedInputProps } from '@/types/SharedInputProps.type';
import { randomString } from '@/utils/random-string/random-string';
import InputText from '../InputText/InputText';

export interface InputEmailProps extends SharedInputProps {
  // ref?: RefCallBack;
  // id?: string;
  // name: string;
  // label: string;
  // srOnlyLabel?: boolean;
  // moreInfo?: string;
  // footnote?: string;
  // size?: 'md' | 'sm';
  // theme?: InputThemeOptions;
  required?: boolean;
  invalid?: boolean;
  clearButton?: boolean;
  /** @deprecated value now derived from `error` instead. */
  invalidMessage?: string;
  placeholder?: string;
  autocomplete?: boolean;
  readonly?: boolean;
  // disabled?: boolean;
  maxLength?: number;
  defaultValue?: string;
  // value?: string;
  // onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  // onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputEmail = (props: InputEmailProps) => {
  const id = useMemo<string>(() => props.id || randomString(), [props.id]);

  return (
    <InputText
      clearButton={props.clearButton}
      defaultValue={props.defaultValue}
      error={props.error}
      footnote={props.footnote}
      id={id}
      inputMode="email"
      invalid={props.invalid}
      label={props.label || 'Email'}
      moreInfo={props.moreInfo}
      name={props.name}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onFocus={props.onFocus}
      placeholder={props.placeholder || 'name@example.com'}
      prefixIcon="envelope"
      readonly={props.readonly}
      ref={props.ref}
      required={props.required}
      size={props.size}
      srOnlyLabel={props.srOnlyLabel}
      theme={props.theme}
      type="email"
      value={props.value}
    />
  );
};

export default InputEmail;
