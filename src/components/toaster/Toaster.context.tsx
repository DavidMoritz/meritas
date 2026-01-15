// src/components/Toaster/Toaster.context.tsx

import { createContext } from 'react';

import type { ToastProps } from './Toast';

interface ToasterContextType {
  destroy: (toastId: string) => void;
  pop: (newToast: ToastProps) => void;
}

const ToasterContext = createContext<ToasterContextType | undefined>(undefined);

export default ToasterContext;
