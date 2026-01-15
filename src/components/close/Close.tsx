// Close.tsx

import type { FC } from 'react';

import Icon from '../Icon/Icon';

// import './Close.style.scss';

export interface CloseProps {
  theme?:
    | 'default'
    | 'white'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Close: FC<CloseProps> = (props: CloseProps) => {
  return (
    <button
      className={`close-btn ${props.theme || 'default'} ${props.size || 'md'}`}
      data-testid="Close"
      onClick={props.onClick}
    >
      <Icon icon="x" size={props.size || 'md'} />
    </button>
  );
};

export default Close;
