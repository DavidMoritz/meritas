// hooks/useGeoLocation/useGeoLocation.ts

import { useCallback, useEffect, useState } from 'react';

export interface GeoLocationData {
  latitude: number;
  longitude: number;
  accuracy?: number;
  timestamp: number;
}

export interface UseGeoLocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
  watch?: boolean; // Whether to continuously watch for position changes
}

/**
 * Custom React hook for handling geolocation.
 *
 * This hook uses the browser's Geolocation API to get the user's current location.
 * It provides states for the current position, error messages, and loading status.
 *
 * @param options - Configuration options for geolocation
 * @returns An object containing:
 *   - `position`: The current position with latitude and longitude.
 *   - `error`: Any error message from the geolocation API.
 *   - `isLoading`: A boolean indicating if the location is currently being fetched.
 *   - `refetch`: A function to manually refetch the location.
 */
export function useGeoLocation(options: UseGeoLocationOptions = {}) {
  const {
    enableHighAccuracy = true,
    timeout = 10_000, // Increased timeout
    maximumAge = 300_000, // 5-minute cache
    watch = false,
  } = options;

  // State for storing the current position
  const [position, setPosition] = useState<GeoLocationData | null>(null);

  // State for storing any errors
  const [error, setError] = useState<string | null>(null);

  // State for loading status
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Function to handle successful geolocation retrieval
  const onSuccess = useCallback((geoPosition: GeolocationPosition) => {
    const locationData: GeoLocationData = {
      latitude: geoPosition.coords.latitude,
      longitude: geoPosition.coords.longitude,
      accuracy: geoPosition.coords.accuracy,
      timestamp: geoPosition.timestamp,
    };

    setPosition(locationData);
    setError(null);
    setIsLoading(false);
  }, []);

  // Function to handle errors in geolocation retrieval
  const onError = useCallback((geoError: GeolocationPositionError) => {
    let errorMessage = 'An unknown error occurred';

    switch (geoError.code) {
      case geoError.PERMISSION_DENIED:
        errorMessage = 'Location access denied by user';
        break;
      case geoError.POSITION_UNAVAILABLE:
        errorMessage = 'Location information unavailable';
        break;
      case geoError.TIMEOUT:
        errorMessage = 'Location request timed out';
        break;
    }

    setError(errorMessage);
    setIsLoading(false);
  }, []);

  // Manual refetch function
  const refetch = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy,
      timeout,
      maximumAge,
    });
  }, [enableHighAccuracy, timeout, maximumAge, onSuccess, onError]);

  useEffect(() => {
    // Check if geolocation is available in the browser
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setIsLoading(false);
      return;
    }

    let watchId: number | undefined;

    if (watch) {
      // Use watchPosition for continuous updates
      watchId = navigator.geolocation.watchPosition(onSuccess, onError, {
        enableHighAccuracy,
        timeout,
        maximumAge,
      });
    } else {
      // Use getCurrentPosition for one-time location fetch
      navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        enableHighAccuracy,
        timeout,
        maximumAge,
      });
    }

    // Cleanup function
    return () => {
      if (watchId !== undefined) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [enableHighAccuracy, timeout, maximumAge, watch, onSuccess, onError]);

  return {
    location: position,
    error,
    isLoading,
    refetch,
  };
}
