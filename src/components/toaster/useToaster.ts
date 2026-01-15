import { useContext } from 'react';

import ToasterContext from './Toaster.context';

export const useToaster = () => {
  const toasterContext = useContext(ToasterContext);

  if (!toasterContext) {
    throw new Error('useToaster must be used within a ModalProvider');
  }

  return { ...toasterContext };
};
