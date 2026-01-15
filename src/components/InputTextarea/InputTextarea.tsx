// components/InputTextarea/InputTextarea.tsx

import { type FocusEventHandler, useMemo } from 'react';

import { randomString } from '@/utils/random-string/random-string';

import InputWrapper from '../InputWrapper/InputWrapper';

import './InputTextarea.style.scss';
import type { SharedInputProps } from '@/types';

export interface InputTextareaProps extends SharedInputProps {
  // ref?: RefObject<HTMLTextAreaElement>;
  // id?: string;
  // name: string;
  // label: string;
  // srOnlyLabel?: boolean;
  // moreInfo?: string;
  // footnote?: string;
  // size?: 'md' | 'sm';
  // theme?: string;
  // required?: boolean;
  invalid?: boolean;
  /** @deprecated value now derived from `error` instead. */
  invalidMessage?: string;
  placeholder?: string;
  autocomplete?: boolean;
  readonly?: boolean;
  // disabled?: boolean;
  maxLength?: number;
  autoGrowOff?: boolean;
  // value?: string | null;
  // onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  // onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const InputTextarea = (props: InputTextareaProps) => {
  const id = useMemo<string>(() => props.id || randomString(), [props.id]);

  const getClasses = useMemo((): string => {
    const classes = ['input-textarea'];

    // ADD THEME CLASS
    classes.push(`theme-${props.theme || 'default'}`);

    // ADD SIZE CLASS
    classes.push(`size-${props.size || 'md'}`);

    // AUTO HEIGHT GROW
    if (!props.autoGrowOff) classes.push('auto-grow');

    return classes.toString().replace(/,/g, ' ');
  }, [props.autoGrowOff, props.size, props.theme]);

  return (
    <InputWrapper
      footnote={props.footnote}
      id={id}
      invalid={props.invalid}
      invalidMessage={props.error?.message}
      label={props.label}
      moreInfo={props.moreInfo}
      required={props.required}
      srOnlyLabel={props.srOnlyLabel}
    >
      <div className={getClasses} data-testid="InputTextarea">
        <textarea
          autoComplete={props.autocomplete ? 'on' : 'off'}
          className={`${props.invalid ? 'is-invalid' : ''}}`}
          id={id}
          inputMode="text"
          name={props.name}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onFocus={props.onFocus}
          placeholder={props.placeholder}
          readOnly={props.readonly}
          ref={props.ref}
          value={props.value || ''}
        />
        {!!props.maxLength && (
          <span className="max-length-footnote">
            {props.value?.length || 0} / {props.maxLength}
          </span>
        )}
      </div>
    </InputWrapper>
  );
};

export default InputTextarea;
