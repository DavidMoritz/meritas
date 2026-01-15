# `randomString()`

A utility function that generates a random string of specified length using uppercase and lowercase letters. Useful for creating unique identifiers, temporary keys, or random text content.

## Features

- 🎲 Generates random strings of any length
- 💪 Uses both uppercase and lowercase letters
- ⚡ Efficient string generation algorithm
- 🎯 Customizable length with default value
- 📝 Strongly typed with TypeScript
- 🧪 Unit test coverage

## Installation

```ts
import { randomString } from "@/utils/random-string/random-string";
```

## Usage

```ts
// Default length (16 characters)
randomString()  // returns e.g., "aXbCdEfGhIjKlMn"

// Custom length
randomString(8)   // returns e.g., "AbCdEfGh"
randomString(4)   // returns e.g., "WxYz"
randomString(32)  // returns e.g., "AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEf"

// Zero length returns empty string
randomString(0)   // returns ""
```

## Parameters

- `length?: number` - The desired length of the random string (default: 16)

## Returns

- `string` - A random string containing uppercase and lowercase letters
- Returns empty string if length is 0

## Edge Cases & Error Handling

- ✅ Handles default length of 16 characters
- ✅ Returns empty string for length 0
- ✅ Uses cryptographically secure random number generator
- ✅ Ensures uniform distribution of characters
- ✅ No special characters or numbers in output

## Files

- `random-string.ts` - Main implementation
- `random-string.test.ts` - Unit tests
- `README.md` - Documentation

## Status

- [x] Unit Tests
- [x] Documentation
- [x] TypeScript: type safe / strongly typed
