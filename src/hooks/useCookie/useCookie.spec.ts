import { act, renderHook } from '@testing-library/react';

import useCookie from './useCookie';

describe('useCookie', () => {
  beforeEach(() => {
    // Clear the cookies before each test
    document.cookie = '';
  });

  it('should return initial value when cookie is not set', () => {
    const { result } = renderHook(() =>
      useCookie('testCookie', 'initialValue')
    );

    const [cookieValue] = result.current;
    expect(cookieValue).toBe('initialValue');
  });

  it('should return the existing cookie value if it is set', () => {
    document.cookie = 'testCookie=existingValue';

    const { result } = renderHook(() => useCookie('testCookie'));

    const [cookieValue] = result.current;
    expect(cookieValue).toBe('existingValue');
  });

  it('should set a new cookie value', () => {
    const { result } = renderHook(() => useCookie('testCookie'));

    const [, setCookie] = result.current;

    act(() => {
      setCookie('newValue');
    });

    const [cookieValue] = result.current;
    expect(cookieValue).toBe('newValue');
    expect(document.cookie).toContain('testCookie=newValue');
  });

  it('should set a cookie with options', () => {
    const { result } = renderHook(() => useCookie('testCookie'));

    const [, setCookie] = result.current;

    act(() => {
      setCookie('newValue', { path: '/test' }); // Use a different path to test the option
    });

    const [cookieValue] = result.current;
    expect(cookieValue).toBe('newValue');
    expect(document.cookie).toContain('testCookie=newValue');
    /**
     * Note: jsdom doesn't preserve cookie options in document.cookie, so we
     * can't test `path=/test`.
     * In a real browser, this would show the full cookie string with options
     */
  });

  it('should delete a cookie', () => {
    document.cookie = 'testCookie=existingValue';

    const { result } = renderHook(() => useCookie('testCookie'));

    const [, , deleteCookie] = result.current;

    act(() => {
      deleteCookie();
    });

    const [cookieValue] = result.current;
    expect(cookieValue).toBeUndefined();
    expect(document.cookie).not.toContain('testCookie=existingValue');
  });

  it('should handle non-existent cookie gracefully', () => {
    const { result } = renderHook(() => useCookie('nonExistentCookie'));

    const [cookieValue] = result.current;
    expect(cookieValue).toBeUndefined();
  });
});
