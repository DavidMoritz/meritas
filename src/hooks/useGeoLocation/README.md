# `useGeoLocation` Hook

A React custom hook for handling geolocation in your applications, providing access to the browser's Geolocation API with support for one-time location fetching or continuous watching.

## Usage

### Basic Usage

Import and use the `useGeoLocation` hook directly in a React component:

```tsx
import React from 'react';
import { useGeoLocation } from './hooks/useGeoLocation';

const LocationComponent: React.FC = () => {
  const { location, error, isLoading, refetch } = useGeoLocation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!location) return <div>No location available</div>;

  return (
    <div>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <p>Accuracy: {location.accuracy ? `${location.accuracy}m` : 'N/A'}</p>
      <p>Timestamp: {new Date(location.timestamp).toLocaleString()}</p>
      <button onClick={refetch}>Refetch Location</button>
    </div>
  );
};

export default LocationComponent;
```

### Using with Context and Provider

To share geolocation data across multiple components, use the `LocationProvider` and `LocationContext`:

```tsx
import React from 'react';
import { LocationProvider, LocationContext } from './hooks/useGeoLocation';

const LocationDisplay: React.FC = () => {
  const context = React.useContext(LocationContext);
  if (!context) return <div>Location context unavailable</div>;

  const { location, error, isLoading, refetch } = context;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!location) return <div>No location available</div>;

  return (
    <div>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <button onClick={refetch}>Refetch Location</button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LocationProvider options={{ enableHighAccuracy: true, watch: true }}>
      <LocationDisplay />
    </LocationProvider>
  );
};

export default App;
```

### Using with LocationSync

To synchronize the geolocation data with the `locationStore` for use outside of React components, include the `LocationSync` component within the `LocationProvider`:

```tsx
import React from 'react';
import { LocationProvider, LocationSync } from './hooks/useGeoLocation';
import { locationStore } from './hooks/useGeoLocation/locationStore';

const App: React.FC = () => {
  // Example of accessing locationStore outside React
  React.useEffect(() => {
    const unsubscribe = locationStore.subscribe((location) => {
      console.log('Current location:', locationStore.getLocationHeader());
    });
    return unsubscribe;
  }, []);

  return (
    <LocationProvider>
      <LocationSync />
      <YourComponent />
    </LocationProvider>
  );
};

export default App;
```

### Hook Configuration Options

The `useGeoLocation` hook accepts an optional configuration object:

```tsx
const options = {
  enableHighAccuracy: true, // Prioritize high accuracy (may consume more power)
  timeout: 10000, // Time to wait before timing out (in milliseconds)
  maximumAge: 300000, // Maximum age of cached position (in milliseconds)
  watch: false, // Set to true for continuous location updates
};

const { location, error, isLoading, refetch } = useGeoLocation(options);
```

### Hook Return Values

The hook returns an object with the following properties:

- **location**: A `GeoLocationData` object containing:
  - `latitude`: The latitude of the current position.
  - `longitude`: The longitude of the current position.
  - `accuracy`: The accuracy of the position in meters (optional).
  - `timestamp`: The time when the position was obtained.
- **error**: A string describing any error that occurred, or `null` if no error.
- **isLoading**: A boolean indicating whether the geolocation is currently being fetched.
- **refetch**: A function to manually refetch the current location.

### Using the Location Store

The `locationStore` provides a way to access and manage location data outside of React components:

```tsx
import { locationStore } from './hooks/useGeoLocation/locationStore';

// Subscribe to location updates
const unsubscribe = locationStore.subscribe((location) => {
  console.log('Location updated:', location);
});

// Get current location as a header string
const locationHeader = locationStore.getLocationHeader(); // e.g., "40.7128,-74.006"

// Unsubscribe when done
unsubscribe();
```

## Handling Permissions

The browser will prompt the user for permission to access their location. Ensure your application explains why location access is needed to improve user experience. If the user denies permission, the `error` property will return "Location access denied by user".

## Browser Support

The `useGeoLocation` hook relies on the browser's Geolocation API, which is supported by most modern browsers. If geolocation is unavailable, the `error` property will return "Geolocation is not supported by your browser". Consider providing fallbacks for unsupported browsers.

## Testing

The hook includes a test suite (`useGeoLocation.test.ts`) using Vitest and `@testing-library/react`. Ensure you mock the `navigator.geolocation` API for testing. Example tests cover:

- Initial loading state
- Successful geolocation retrieval
- Error handling
- Unsupported geolocation scenarios

Run tests with:

```bash
npm run test
```

## Limitations

- **Accuracy**: Location accuracy depends on the user's device and network conditions.
- **Permissions**: Requires user consent, which may be denied.
- **Privacy**: Always inform users about why location data is needed and handle it securely.
- **Browser Support**: Not all browsers support the Geolocation API, especially older versions.
- **Power Consumption**: High-accuracy mode or continuous watching may increase battery usage.
