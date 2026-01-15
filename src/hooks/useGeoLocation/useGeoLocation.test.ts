import { act, renderHook } from '@testing-library/react';
import { vitest } from 'vitest';

import { useGeoLocation } from './useGeoLocation';

describe('useGeoLocation', () => {
  // Mocking the geolocation
  const mockGeolocation = {
    getCurrentPosition: vitest.fn(),
    watchPosition: vitest.fn(),
    clearWatch: vitest.fn(),
  };

  beforeEach(() => {
    // Reset the mock before each test
    vitest.resetAllMocks();
    // Set the mock geolocation on the global navigator object
    Reflect.defineProperty(window.navigator, 'geolocation', {
      value: mockGeolocation,
      configurable: true,
    });
  });

  it('should return loading state initially', () => {
    const { result } = renderHook(() => useGeoLocation());
    expect(result.current.isLoading).toBe(true);
    expect(result.current.location).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('should handle successful geolocation', async () => {
    const mockPosition: GeolocationPosition = {
      // @ts-expect-error - Mocking the geolocation position
      coords: {
        latitude: 40.7128,
        longitude: -74.006,
        accuracy: 100,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
      },
      timestamp: Date.now(),
    };
    mockGeolocation.getCurrentPosition.mockImplementationOnce(success =>
      Promise.resolve(success(mockPosition))
    );

    const { result } = renderHook(() => useGeoLocation());

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0)); // Wait for useEffect
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.location).toEqual({
      latitude: mockPosition.coords.latitude,
      longitude: mockPosition.coords.longitude,
      accuracy: mockPosition.coords.accuracy,
      timestamp: mockPosition.timestamp,
    });
    expect(result.current.error).toBeNull();
  });

  it('should handle geolocation error', async () => {
    const mockError: GeolocationPositionError = {
      code: 1, // PERMISSION_DENIED
      message: 'Permission denied',
      PERMISSION_DENIED: 1,
      POSITION_UNAVAILABLE: 2,
      TIMEOUT: 3,
    };
    mockGeolocation.getCurrentPosition.mockImplementationOnce((_, error) =>
      Promise.resolve(error(mockError))
    );

    const { result } = renderHook(() => useGeoLocation());

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0)); // Wait for useEffect
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.location).toBeNull();
    expect(result.current.error).toBe('Location access denied by user');
  });

  it('should handle unsupported geolocation', async () => {
    Reflect.deleteProperty(window.navigator, 'geolocation');

    const { result } = renderHook(() => useGeoLocation());

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0)); // Wait for useEffect
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.location).toBeNull();
    expect(result.current.error).toBe(
      'Geolocation is not supported by your browser'
    );
  });
});
