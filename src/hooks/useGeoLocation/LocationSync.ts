import { useContext, useEffect } from 'react';

import { LocationContext } from '@/hooks/useGeoLocation/geoLocation.context.ts';
import { locationStore } from '@/hooks/useGeoLocation/locationStore.ts';

export function LocationSync() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error(
      'useLocationContext must be used within a LocationProvider'
    );
  }

  useEffect(() => {
    locationStore.setLocation(context.location);
  }, [context]);

  return null;
}
