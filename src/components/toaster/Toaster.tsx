// components/Toaster/Toaster.tsx

import type React from 'react';
import type { ReactNode } from 'react';

import './Toaster.style.scss';

export interface ToasterProps {
  children: ReactNode;
}

const Toaster: React.FC<ToasterProps> = (props: ToasterProps) => {
  return (
    <div className="toaster" data-testid="Toaster" id="Toaster">
      {props.children}
    </div>
  );
};

export default Toaster;
