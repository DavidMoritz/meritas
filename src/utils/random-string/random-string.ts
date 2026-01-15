/**
 * Generates a random string of a given length.
 *
 * @param {number} length - The desired length of the random string.
 * @returns {string} A random string of the specified length.
 */
export function randomString(length = 16): string {
  const CHARACTERS =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' as const;
  let result = '';

  for (let i = 0; i < length; i += 1) {
    result += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }

  return result;
}
