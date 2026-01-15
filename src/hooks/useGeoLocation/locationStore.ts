// hooks/useGeoLocation/locationStore.ts

import type { GeoLocationData } from './useGeoLocation';

class LocationStore {
  private currentLocation: GeoLocationData | null = null;
  private listeners: Array<(location: GeoLocationData | null) => void> = [];

  setLocation(location: GeoLocationData | null) {
    this.currentLocation = location;
    this.listeners.forEach(listener => listener(location));
  }

  getLocation(): GeoLocationData | null {
    return this.currentLocation;
  }

  subscribe(listener: (location: GeoLocationData | null) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // Helper method to get location as header string
  getLocationHeader(): string | null {
    if (!this.currentLocation) return null;
    return `${this.currentLocation.latitude},${this.currentLocation.longitude}`;
  }
}

export const locationStore = new LocationStore();
