# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Meritas Mobile is an Expo-based React Native application. The project uses:
- **Expo SDK**: ~54.0.25
- **React**: 19.1.0
- **React Native**: 0.81.5
- **New Architecture**: Enabled (React Native's new renderer and native module system)

## Development Commands

### Starting the Development Server
```bash
npm start              # Start Expo dev server with interactive menu
npm run android        # Start and open on Android emulator/device
npm run ios            # Start and open on iOS simulator/device
npm run web            # Start and open in web browser
```

### Platform-Specific Development
- **iOS**: Requires macOS with Xcode installed
- **Android**: Requires Android Studio and configured emulator or physical device
- **Web**: Runs in any modern web browser

## Project Structure

```
meritasMobile/
├── App.js              # Main application entry component
├── index.js            # Expo entry point (registers App component)
├── app.json            # Expo configuration (app name, icons, splash screen, etc.)
├── package.json        # Dependencies and scripts
└── assets/             # Static assets (icons, splash screens, images)
    ├── icon.png
    ├── splash-icon.png
    ├── adaptive-icon.png
    └── favicon.png
```

## Architecture Notes

### Entry Point Flow
1. `index.js` registers the root component using `registerRootComponent(App)`
2. `App.js` contains the main application component
3. The app currently uses a single-file structure (expand into organized directories as features grow)

### New Architecture
This project has `newArchEnabled: true` in `app.json`, which enables:
- **Fabric**: New rendering system (replaces the legacy bridge)
- **TurboModules**: New native module system for better performance
- When adding native modules, ensure they're compatible with the new architecture

### Configuration
All Expo-specific configuration lives in `app.json`:
- App metadata (name, version, slug)
- Platform-specific settings (iOS, Android, web)
- Asset paths (icons, splash screens)
- UI preferences (orientation, interface style)

## Development Workflow

### Adding Dependencies
```bash
npm install <package-name>
# or for Expo-compatible packages
npx expo install <package-name>
```

Use `npx expo install` when installing packages that require native code, as it ensures version compatibility with your Expo SDK version.

### Testing on Devices
- Install Expo Go app on your physical device
- Scan QR code from `npm start` terminal output
- For custom native code, you'll need to use development builds (not Expo Go)

## Important Conventions

### File Organization
As the app grows, organize code into:
- `src/components/` - Reusable UI components
- `src/screens/` - Screen-level components
- `src/navigation/` - Navigation configuration
- `src/utils/` - Helper functions and utilities
- `src/hooks/` - Custom React hooks
- `src/constants/` - App-wide constants

### Styling
- Use `StyleSheet.create()` for component styles (better performance than inline styles)
- Consider using a consistent theming approach as the app scales
