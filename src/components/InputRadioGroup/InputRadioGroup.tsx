// InputRadioPillGroup.tsx

import {
  type ChangeEventHandler,
  type FocusEventHandler,
  useMemo,
} from 'react';

import { randomString } from '@/utils/random-string/random-string';

import InputWrapper from '../InputWrapper/InputWrapper';

import InputRadio from './InputRadio';

import './InputRadioGroup.style.scss';

export interface RadioOption {
  id?: string;
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface InputRadioGroupProps {
  id?: string;
  groupName: string;
  label: string;
  moreInfo?: string;
  srOnlyLabel?: boolean;
  footnote?: string;
  options: RadioOption[] | readonly RadioOption[];
  required?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  inline?: boolean;
  value?: string | number;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputRadioGroup = (props: InputRadioGroupProps) => {
  const id = useMemo<string>(() => props.id || randomString(), [props.id]);
  const [groupName] = useMemo(
    () => props.groupName || randomString(),
    [props.groupName]
  );

  const radioList = props.options?.map(option => {
    return (
      <InputRadio
        disabled={option.disabled}
        groupName={groupName}
        id={option.id || randomString()}
        key={option.value}
        label={option.label}
        onChange={props.onChange}
        selected={props.value}
        value={option.value}
      />
    );
  });

  return (
    <InputWrapper
      footnote={props.footnote}
      id={id}
      invalid={props.invalid}
      invalidMessage={props.invalidMessage}
      label={props.label}
      moreInfo={props.moreInfo}
      required={props.required}
      srOnlyLabel={props.srOnlyLabel}
    >
      <div
        className={`input-radio-group ${props.invalid ? 'is-invalid' : ''} ${props.inline ? 'inline' : ''}`}
        data-testid="InputRadioGroup"
      >
        {radioList}
      </div>
    </InputWrapper>
  );
};

export default InputRadioGroup;
