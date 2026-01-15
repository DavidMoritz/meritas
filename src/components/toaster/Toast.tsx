// components/Toast/Toast.tsx

import type React from 'react';
import { useMemo } from 'react';

import type { IconOption } from '@/components/Icon/Icon.types';

import Close from '../Close/Close';
import Icon from '../Icon/Icon';

import type { ToastType } from './Toaster.types';

import './Toast.style.scss';

export interface ToastProps {
  id?: string;
  type?: ToastType;
  title?: string;
  message: string;
  duration?: number;
  onDestroy?: () => void;
}

const Toast: React.FC<ToastProps> = props => {
  const getIcon: IconOption = useMemo(() => {
    switch (props.type) {
      case 'success':
        return 'check-circle';
      case 'error':
        return 'x-circle';
      case 'info':
        return 'info';
      case 'warning':
        return 'warning';
      default:
        return 'info';
    }
  }, [props.type]);

  return (
    <div className={`toast ${props.type || 'info'}`} data-testid="Toast">
      <div className="toast-icon">
        <Icon icon={getIcon} size="lg" theme={props.type || 'info'} />
      </div>
      <div className="toast-body">
        <h6 className="toast-heading">{props.type || 'info'}</h6>
        <p className="no-margin">{props.message}</p>
      </div>
      <div className="toast-close">
        <Close onClick={props.onDestroy} size="lg" />
      </div>
    </div>
  );
};

export default Toast;
