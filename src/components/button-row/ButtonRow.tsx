// components/ButtonRow/ButtonRow.tsx

import type { ReactNode } from 'react';

import './ButtonRow.style.scss';

export interface ButtonRowProps {
  id?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  noWrap?: boolean;
  children?: ReactNode;
}

const defaultProps: ButtonRowProps = {
  align: 'left',
  noWrap: false,
};

const ButtonRow = (props: ButtonRowProps = defaultProps) => {
  const getClasses = () => {
    const classes = ['button-row'];

    if (props.className) classes.push(props.className);

    if (props.noWrap) classes.push('no-wrap');

    classes.push(`align-${props.align || 'left'}`);

    return classes.toString().replace(/,/g, ' ');
  };

  return (
    <div className={getClasses()} data-testid="ButtonRow" id={props.id}>
      {props.children}
    </div>
  );
};

export default ButtonRow;
