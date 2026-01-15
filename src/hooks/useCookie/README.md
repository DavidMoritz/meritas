# `useCookie` hook

The `useCookie` React hook provides an easy way to manage browser cookies in your React applications. It allows you to get, set, and delete cookies with simple and intuitive functions.

## Features

- Get the current value of a cookie.
- Set a new cookie with optional parameters (like `expires`, `path`, `domain`, etc.).
- Delete a cookie by name.

## Installation

To use the `useCookie` hook in your project, you can copy the `useCookie.ts` file into your project's hooks directory.

### Requirements

- React 16.8 or higher (for Hooks support)
- TypeScript (for type safety)

### Optional

- `Vitest` for unit testing (if you want to run the tests)

## Usage

### Import the Hook

```typescript
import useCookie from './useCookie';
```

### Example Usage in a Component

```tsx
import React from 'react';
import useCookie from './useCookie';

const MyComponent: React.FC = () => {
  const [cookie, setCookie, deleteCookie] = useCookie('myCookie', 'defaultValue');

  const handleSetCookie = () => {
    setCookie('newValue', { expires: new Date('2024-12-31'), path: '/' });
  };

  const handleDeleteCookie = () => {
    deleteCookie();
  };

  return (
    <div>
      <p>Cookie Value: {cookie}</p>
      <button onClick={handleSetCookie}>Set Cookie</button>
      <button onClick={handleDeleteCookie}>Delete Cookie</button>
    </div>
  );
};

export default MyComponent;
```

### Hook Signature

```typescript
useCookie(
  key: string,
  initialValue?: string
): [string | undefined, (value: string, options?: CookieOptions) => void, () => void]
```

- **key**: The name of the cookie.
- **initialValue**: The initial value of the cookie (optional).

### Return Value

The hook returns an array containing:

- **cookieValue**: The current value of the cookie (or undefined if not set).
- **setCookie**: A function to set a new cookie value. It accepts the cookie value and an optional object of cookie options.
- **deleteCookie**: A function to delete the cookie.

### Cookie Options

When setting a cookie, you can provide the following options:

- **expires**: Date - The expiration date of the cookie.
- **path**: string - The path where the cookie is available.
- **domain**: string - The domain where the cookie is available.
- **secure**: boolean - Whether the cookie is secure.
- **sameSite**: 'Strict' | 'Lax' | 'None' - The SameSite attribute of the cookie.
