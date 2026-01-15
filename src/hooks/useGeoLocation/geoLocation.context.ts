import { createContext } from 'react';

import type { GeoLocationData } from '@/hooks/useGeoLocation/useGeoLocation';

interface LocationContextType {
  location: GeoLocationData | null;
  error: string | null;
  isLoading: boolean;
  refetch: () => void;
}

export const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);
