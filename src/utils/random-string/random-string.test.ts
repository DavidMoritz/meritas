import { randomString } from './random-string'; // Update this import with your file path

describe('randomString', () => {
  it('should generate a random string of default length (16)', () => {
    const result = randomString();
    expect(typeof result).toBe('string');
    expect(result.length).toBe(16);
  });

  it('should generate a random string of specified length', () => {
    const length = 10;
    const result = randomString(length);
    expect(typeof result).toBe('string');
    expect(result.length).toBe(length);
  });

  it('should generate a random string with only uppercase and lowercase letters', () => {
    const result = randomString(20);
    const regex = /^[A-Za-z]+$/;
    expect(regex.test(result)).toBe(true);
  });

  it('should generate different strings on multiple calls', () => {
    const result1 = randomString();
    const result2 = randomString();
    expect(result1).not.toBe(result2);
  });

  it('should return an empty string for length 0', () => {
    const result = randomString(0);
    expect(result).toBe('');
  });

  it('should return an empty string for negative length', () => {
    const result = randomString(-10);
    expect(result).toBe('');
  });

  it('should return an empty string for non-numeric length', () => {
    const result = randomString(Number.NaN);
    expect(result).toBe('');
  });
});
