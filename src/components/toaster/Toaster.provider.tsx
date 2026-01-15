// src/components/Toaster/Toaster.provider.tsx

import React, { type ReactNode, useState } from 'react';

import { randomString } from '@/utils/random-string/random-string';

import Toast, { type ToastProps } from './Toast';
import Toaster from './Toaster';
import ToasterContext from './Toaster.context';

interface ToasterProviderProps {
  children: ReactNode;
}

export const ToasterProvider: React.FC<ToasterProviderProps> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  /**
   * Removes a single Toast from the #Toaster
   * @param toastId
   */
  const destroy = (toastId?: string): void => {
    if (toastId) {
      setToasts(prevToasts => prevToasts.filter(toast => toast.id !== toastId));
    }
  };

  /**
   * Pop one toast.
   */
  const pop = (newToast: ToastProps): void => {
    const newToastId = newToast.id || randomString();

    const newToastObject = {
      ...newToast,
      id: newToastId,
      duration: newToast.duration || 5000,
      onDestroy: () => {
        destroy(newToastId);
      },
    };

    setToasts(prevToasts => [...prevToasts, newToastObject]);

    // remove the toast after a given amount of time.
    setTimeout(() => {
      destroy(newToastId);
    }, newToastObject.duration);
  };

  return (
    <ToasterContext.Provider
      value={{
        destroy,
        pop,
      }}
    >
      {children}
      <Toaster>
        {toasts?.map(toast => (
          <Toast key={toast.id} {...toast} />
        ))}
      </Toaster>
    </ToasterContext.Provider>
  );
};
