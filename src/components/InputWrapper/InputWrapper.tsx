// InputWrapper.tsx

import { type ReactNode, useMemo } from 'react';

import InputFootnote from '../InputFootnote/InputFootnote';
import InputInvalidMessage from '../InputInvalidMessage/InputInvalidMessage';
import InputLabel from '../InputLabel/InputLabel';

import './InputWrapper.style.scss';

export interface InputWrapperProps {
  id: string;
  theme?: string;
  label: ReactNode | string;
  required?: boolean;
  srOnlyLabel?: boolean;
  moreInfo?: string;
  footnote?: string;
  invalid?: boolean;
  invalidMessage?: string;
  inline?: boolean;
  useSkeleton?: boolean;
  children?: ReactNode;
}

const InputWrapper = (props: InputWrapperProps) => {
  const getClasses = useMemo((): string => {
    const classes = ['input-wrapper'];

    // THEME
    classes.push(`theme-${props.theme || 'default'}`);

    // INVALID
    if (props.invalid) classes.push('is-invalid');

    // INLINE FORM
    if (props.inline) classes.push('inline');

    // UES SKELETON
    if (props.useSkeleton) classes.push('skeleton');

    return classes.toString().replace(/,/g, ' ');
  }, [props.inline, props.invalid, props.theme, props.useSkeleton]);

  return (
    <div className={getClasses} data-testid="InputWrapper">
      <InputLabel
        for={props.id}
        moreInfo={props.moreInfo}
        required={props.required}
        srOnlyLabel={props.srOnlyLabel}
        useSkeleton={props.useSkeleton}
      >
        {props.label}
      </InputLabel>

      {props.children}

      {!!props.footnote && !props.invalid && (
        <InputFootnote>{props.footnote}</InputFootnote>
      )}

      {!!props.invalid && !!props.invalidMessage && !props.inline && (
        <InputInvalidMessage message={props.invalidMessage} />
      )}
    </div>
  );
};

export default InputWrapper;
