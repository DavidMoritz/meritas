# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Meritas Mobile is a monorepo containing:
1. **Mobile App** (`expo/`) - Cross-platform mobile application built with Expo and React Native
2. **Website** (`website/`) - Marketing/landing website (to be developed)

### Mobile App Technology
- **Expo SDK**: ~54.0.25
- **React**: 19.1.0
- **React Native**: 0.81.5
- **New Architecture**: Enabled (React Native's new renderer and native module system)

## Repository Structure

```
meritasMobile/
├── expo/               # Mobile app (iOS, Android, Web via Expo)
│   ├── App.js          # Main application component
│   ├── index.js        # Expo entry point
│   ├── app.json        # Expo configuration
│   ├── package.json    # Mobile app dependencies
│   └── assets/         # App icons, splash screens, images
├── website/            # Marketing/landing website
├── README.md           # Project documentation
├── LICENSE             # MIT License
└── CLAUDE.md           # This file
```

## Development Commands

### Mobile App (Expo)

All commands should be run from the `expo/` directory:

```bash
cd expo

# Development
npm start              # Start Expo dev server with interactive menu
npm run ios            # Start and open on iOS simulator
npm run android        # Start and open on Android emulator
npm run web            # Start and open in web browser

# Installing dependencies
npx expo install <pkg> # For packages with native code (ensures compatibility)
npm install <pkg>      # For JavaScript-only packages
```

### Website

Commands will be added once the website is set up.

## Platform-Specific Requirements

### Mobile App
- **iOS Development**: Requires macOS with Xcode installed
- **Android Development**: Requires Android Studio with configured emulator or physical device
- **Web Development**: Runs in any modern web browser (no additional setup)
- **Physical Device Testing**: Install Expo Go app and scan QR code from `npm start`

## Architecture Notes

### Mobile App Architecture

#### Entry Point Flow
1. `expo/index.js` registers the root component using `registerRootComponent(App)`
2. `expo/App.js` contains the main application component
3. Currently uses a single-file structure (expand into organized directories as features grow)

#### React Native New Architecture
The mobile app has `newArchEnabled: true` in `app.json`, which enables:
- **Fabric**: New rendering system (replaces the legacy bridge)
- **TurboModules**: New native module system for better performance
- **Important**: When adding native modules, verify they're compatible with the new architecture

#### Expo Configuration
All Expo-specific configuration lives in `expo/app.json`:
- App metadata (name, version, slug)
- Platform-specific settings (iOS, Android, web)
- Asset paths (icons, splash screens)
- UI preferences (orientation, interface style)

### Recommended Mobile App Structure

As the mobile app grows, organize code into:
```
expo/
├── src/
│   ├── components/     # Reusable UI components
│   ├── screens/        # Screen-level components
│   ├── navigation/     # Navigation configuration (React Navigation)
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Helper functions and utilities
│   ├── constants/      # App-wide constants
│   ├── services/       # API calls and external service integrations
│   └── types/          # TypeScript types (if/when adding TypeScript)
├── App.js
└── index.js
```

## Development Workflow

### Working on Mobile App

1. Navigate to `expo/` directory
2. Run `npm start` to start the development server
3. Make changes to code - app will hot reload automatically
4. Test on multiple platforms (iOS, Android, Web)
5. Use `npx expo install` for native dependencies

### Adding Dependencies to Mobile App

```bash
cd expo
npx expo install <package-name>  # For native-compatible packages (RECOMMENDED)
npm install <package-name>       # For JavaScript-only packages
```

**Important**: Use `npx expo install` for packages that might include native code. This ensures version compatibility with your Expo SDK version.

### Testing on Physical Devices

- Install Expo Go app on your iOS or Android device
- Ensure device is on same network as development machine
- Run `npm start` in the `expo/` directory
- Scan QR code with Expo Go (Android) or Camera app (iOS)
- For custom native code, you'll need to create development builds (Expo Go doesn't support custom native code)

## Code Style and Conventions

### Mobile App

#### Component Structure
- Use functional components with hooks (not class components)
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks

#### Styling
- Use `StyleSheet.create()` for component styles (better performance than inline styles)
- Consider implementing a consistent theming system as the app scales
- Use Expo's built-in support for responsive design

#### State Management
- Start with React's built-in state management (useState, useContext)
- Consider adding Redux, Zustand, or Jotai as complexity grows

## Building for Production

### Mobile App

```bash
cd expo

# Using EAS Build (recommended by Expo)
npx eas build --platform ios
npx eas build --platform android
npx eas build --platform all

# Traditional build (if not using EAS)
npx expo build:ios
npx expo build:android
```

## Common Issues and Solutions

### Mobile App

**Issue**: Native module not found after installing
- **Solution**: Some packages require running `npx expo prebuild` or creating a development build

**Issue**: Simulator/emulator not opening
- **Solution**: Ensure Xcode Command Line Tools are installed (iOS) or Android Studio is properly configured (Android)

**Issue**: Metro bundler errors
- **Solution**: Try clearing cache with `npx expo start -c`
