// hooks/useCookie/useCookie.ts

import { useCallback, useState } from 'react';

import env from '@/config/environment.config';

/**
 * Optional parameters that can be used when setting a cookie.
 */
interface CookieOptions {
  /**
   * The expiry date of the cookie.
   */
  expires?: Date;
  /**
   * Number of seconds until the cookie expires. A zero or negative number will
   * expire the cookie immediately. If both `Expires` and `Max-Age` are set,
   * `Max-Age` has precedence.
   */
  maxAge?: number;
  /**
   * The path where the cookie is available.
   */
  path?: string;
  /**
   * The domain where the cookie is available.
   */
  domain?: string;
  /**
   * Whether the cookie is secure or not.
   */
  secure?: boolean;
  /**
   * The SameSite attribute of the cookie.
   */
  sameSite?: 'Strict' | 'Lax' | 'None';
}

/**
 * Retrieves the value of a cookie by name.
 *
 * @param {string} name - The name of the cookie to retrieve.
 * @returns {string | undefined} - The value of the cookie, or `undefined` if not found.
 */
function getCookie(name: string): string | undefined {
  // Use the same prefix logic as setCookie for consistency
  const cookieName = (env?.cookies.prefix || '') + name;
  const matches = document.cookie.match(
    new RegExp(`(?:^|; )${encodeURIComponent(cookieName)}=([^;]*)`)
  );

  return matches?.[1] ? decodeURIComponent(matches[1]) : undefined;
}

// type UseCookieHook = (
// 	key: string,
// 	initialValue?: string,
// ) => [string | undefined, (value: string, options?: CookieOptions) => void, () => void];

/**
 * A React hook for managing browser cookies.
 *
 * @param {string} key - The name of the cookie.
 * @param {string} initialValue - The initial value of the cookie.
 * @returns {[string | undefined, (value: string, options?: CookieOptions) => void, () => void]}
 * An array containing the current cookie value, a function to set the cookie, and a function to delete the cookie.
 */
function useCookie(
  key: string,
  initialValue?: string
): [
  string | undefined,
  (value: string, options?: CookieOptions) => void,
  () => void,
] {
  const [cookieValue, setCookieValue] = useState<string | undefined>(() => {
    return getCookie(key) || initialValue;
  });

  /**
   * Sets a cookie with the specified name and value.
   *
   * @param {string} value - The value to set for the cookie.
   * @param {CookieOptions} [options] - Optional parameters for the cookie like `expires`, `path`, etc.
   */
  const setCookie = useCallback(
    (value: string, options?: CookieOptions) => {
      const cookieOptions: CookieOptions = {
        path: env?.cookies.path || '/',
        sameSite: env?.cookies.sameSite || 'Strict',
        secure: env?.environment !== 'test', // Disable secure in test environment
        maxAge: env?.cookies.maxAge || undefined,
        ...options,
      };

      // Attach a prefix to all cookies, so they are grouped together
      const cookieName = (env?.cookies.prefix || '') + key;

      let cookieString = `${encodeURIComponent(cookieName)}=${encodeURIComponent(value)}`;

      if (cookieOptions.expires) {
        cookieString += `; Expires=${cookieOptions.expires.toUTCString()}`;
      }

      if (cookieOptions.maxAge) {
        cookieString += `; Max-Age=${cookieOptions.maxAge}`;
      }

      if (cookieOptions.path) {
        cookieString += `; path=${cookieOptions.path}`;
      }

      if (cookieOptions.domain) {
        cookieString += `; Domain=${cookieOptions.domain}`;
      }

      if (cookieOptions.secure) {
        cookieString += '; secure';
      }

      if (cookieOptions.sameSite) {
        cookieString += `; samesite=${cookieOptions.sameSite}`;
      }

      document.cookie = cookieString;
      setCookieValue(value);
    },
    [key]
  );

  /**
   * Deletes the cookie by setting its expiry date to a past date.
   */
  const deleteCookie = useCallback(() => {
    setCookie('', { expires: new Date(0) });
    setCookieValue(undefined);
  }, [setCookie]);

  return [cookieValue, setCookie, deleteCookie];
}

export default useCookie;
