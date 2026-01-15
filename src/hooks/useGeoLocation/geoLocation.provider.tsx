// LocationContext.tsx
import type { ReactNode } from 'react';

import { LocationContext } from './geoLocation.context';
import { useGeoLocation } from './useGeoLocation';

interface LocationProviderProps {
  children: ReactNode;
  options?: Parameters<typeof useGeoLocation>[0];
}

export function LocationProvider({ children, options }: LocationProviderProps) {
  const geoLocation = useGeoLocation(options);

  return (
    <LocationContext.Provider value={geoLocation}>
      {children}
    </LocationContext.Provider>
  );
}
