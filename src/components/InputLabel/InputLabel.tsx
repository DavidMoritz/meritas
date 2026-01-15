// InputLabel.tsx

import { type ReactNode, useMemo } from 'react';

import Tooltip from '../Tooltip/Tooltip';

import './InputLabel.style.scss';

export interface InputLabelProps {
  required?: boolean;
  for: string;
  srOnlyLabel?: boolean;
  moreInfo?: string;
  useSkeleton?: boolean;
  children?: ReactNode | string | string[];
}

const InputLabel = (props: InputLabelProps) => {
  const getClasses = useMemo(() => {
    const classes = ['input-label'];

    if (props.required) classes.push('required');

    if (props.srOnlyLabel) classes.push('sr-only');

    if (props.useSkeleton) classes.push('skeleton-text');

    return classes.toString().replace(/,/g, ' ');
  }, [props.required, props.srOnlyLabel, props.useSkeleton]);

  return (
    <label className={getClasses} data-testid="InputLabel" htmlFor={props.for}>
      <span className="label-text">{props.children}</span>

      {props.required && (
        <span aria-hidden="true" className="required">
          *
        </span>
      )}

      <span className="flex-grow-1" />

      {props.moreInfo && <Tooltip tip={props.moreInfo} />}
    </label>
  );
};

export default InputLabel;
