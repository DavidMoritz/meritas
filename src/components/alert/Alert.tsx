// components/Alert/Alert.tsx

import type { ReactNode } from 'react';

import type { AlertTheme } from '@/components/alert/Alert.types';

import Close from '../close/Close';

import './Alert.style.scss';

export interface AlertProps {
  id?: string;
  className?: string;
  theme?: AlertTheme;
  open?: boolean;
  onDismiss?: CallableFunction;
  children?: ReactNode;
}

const defaultProps: AlertProps = {
  theme: 'default',
  open: true,
};

const Alert = (props: AlertProps = defaultProps) => {
  const closeAlert = () => {
    if (props.onDismiss) props.onDismiss(false);
  };

  const getClasses = (): string => {
    const classes = ['alert', 'open', `theme-${props.theme}`];

    if (props.className) classes.push(props.className);

    if (props.onDismiss) classes.push('dismissible');

    return classes.toString().replace(/,/g, ' ');
  };

  return props.open ? (
    <div className={getClasses()} data-testid="Alert" id={props.id}>
      {props.children}
      {!!props.onDismiss && (
        <Close onClick={() => closeAlert()} size="sm" theme={props.theme} />
      )}
    </div>
  ) : null;
};

export default Alert;
