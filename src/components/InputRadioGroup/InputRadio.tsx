// components/InputRadioPillGroup/InputRadioPill.tsx

import type { ChangeEvent } from 'react';

import './InputRadio.style.scss';

export interface InputRadioProps {
  id: string;
  label?: string;
  disabled?: boolean;
  invalid?: boolean;
  groupName?: string;
  value?: string | number;
  selected?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputRadio = (props: InputRadioProps) => {
  return (
    <div className="input-radio" data-testid="InputRadio">
      <input
        className={`${props.invalid ? 'is-invalid' : ''}`}
        defaultChecked={props.value === props.selected}
        disabled={props.disabled}
        id={props.id}
        name={props.groupName}
        onChange={props.onChange}
        type="radio"
        value={props.value}
      />

      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default InputRadio;
