// components/InputPhone/InputPhone.tsx

import {
  type ChangeEvent,
  type FocusEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { randomString } from '@/utils/random-string/random-string';

import InputText from '../InputText/InputText';

import './InputPhone.style.scss';
import type { SharedInputProps } from '@/types';

export interface InputPhoneProps extends SharedInputProps {
  // ref?: RefCallBack;
  // id?: string;
  // name: string;
  // label: string;
  // srOnlyLabel?: boolean;
  // moreInfo?: string;
  // footnote?: string;
  // size?: 'sm' | 'md' | 'lg';
  // theme?: InputThemeOptions;
  // useSkeleton?: boolean;
  // required?: boolean;
  invalid?: boolean;
  // invalidMessage?: string;
  placeholder?: string;
  autocomplete?: boolean;
  readonly?: boolean;
  // disabled?: boolean;
  defaultValue?: string;
  // value?: string | null;
  // onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onChange: (value: string) => void;
}

const phoneRegex = /^(\d{0,3})(\d{0,3})(\d{0,4})$/;
const AREA_CODE_LENGTH = 3;
const AREA_CODE_AND_EXCHANGE_LENGTH = 6;

const InputPhone = (props: InputPhoneProps) => {
  const id = useMemo<string>(() => props.id || randomString(), [props.id]);

  const formatPhoneNumber = useCallback(
    (phone: string | null | undefined): string => {
      if (!phone) return '';
      const cleaned = `${phone}`.replace(/\D/g, '');
      if (cleaned.length <= AREA_CODE_LENGTH) return phone;
      const match = cleaned.match(phoneRegex);
      if (!match) return '';

      if (cleaned.length <= AREA_CODE_AND_EXCHANGE_LENGTH)
        return `(${match[1]}) ${match[2]}`;

      return `(${match[1]}) ${match[2]}-${match[3]}`;
    },
    []
  );

  const [displayValue, setDisplayValue] = useState<string>(() =>
    formatPhoneNumber(props.value)
  );

  useEffect(() => {
    const formatedValue: string = formatPhoneNumber(props.value);
    setDisplayValue(formatedValue);
  }, [props.value, formatPhoneNumber]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const unformattedValue = e.target.value.replace(/[^\d]/g, '');
    if (unformattedValue.length > 10) return;

    props.onChange(unformattedValue);
    setDisplayValue(formatPhoneNumber(unformattedValue));
  };

  return (
    <div className="input-phone" data-testid="InputPhone">
      <InputText
        defaultValue={props.defaultValue}
        error={props.error}
        footnote={props.footnote}
        id={id}
        inputMode="tel"
        invalid={props.invalid}
        label={props.label}
        moreInfo={props.moreInfo}
        name={props.name}
        onBlur={props.onBlur}
        onChange={handleChange}
        onFocus={props.onFocus}
        placeholder={props.placeholder || '###-###-####'}
        prefixIcon="phone"
        readonly={props.readonly}
        ref={props.ref}
        required={props.required}
        size={props.size}
        srOnlyLabel={props.srOnlyLabel}
        theme={props.theme}
        type="text"
        value={displayValue}
      />
    </div>
  );
};

export default InputPhone;
