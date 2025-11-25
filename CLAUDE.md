# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Meritas Mobile is a monorepo containing:
1. **Mobile App** (`expo/`) - Cross-platform mobile application built with Expo and React Native
2. **Website** (`website/`) - Company marketing website for Meritas Digital, LLC

### Mobile App Technology
- **Expo SDK**: ~54.0.25
- **React**: 19.1.0
- **React Native**: 0.81.5
- **New Architecture**: Enabled (React Native's new renderer and native module system)

### Website Technology
- **HTML5**: Semantic, accessible markup
- **CSS3**: Modern styling with Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No frameworks, lightweight (~5KB total)
- **Design**: Modern minimalist, single-page with smooth scrolling
- **Colors**: Deep blue (#004C97) and red (#C1272D) from company logo
- **Hosting**: GitHub Pages

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
│   ├── index.html      # Main HTML file (single-page)
│   ├── css/
│   │   └── styles.css  # All styling
│   ├── js/
│   │   └── main.js     # Navigation, form handling, animations
│   ├── public/         # Logo and image assets
│   ├── package.json    # Deployment scripts
│   └── README.md       # Website-specific documentation
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

All commands should be run from the `website/` directory:

```bash
cd website

# Local Development
python3 -m http.server 8000  # Python HTTP server (recommended)
npx serve .                   # Node.js alternative

# Deployment
npm install                   # First time only
npm run deploy                # Deploy to GitHub Pages
```

Open http://localhost:8000 after starting local server.

## Platform-Specific Requirements

### Mobile App
- **iOS Development**: Requires macOS with Xcode installed
- **Android Development**: Requires Android Studio with configured emulator or physical device
- **Web Development**: Runs in any modern web browser (no additional setup)
- **Physical Device Testing**: Install Expo Go app and scan QR code from `npm start`

### Website
- **No build process**: Plain HTML/CSS/JS, edit and refresh
- **Python 3**: For local development server (built-in on macOS/Linux)
- **Node.js**: Optional, for deployment scripts via gh-pages package
- **Modern browser**: Any recent Chrome, Firefox, Safari, or Edge

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

### Website Architecture

#### Single-Page Design
The website uses a single HTML file with JavaScript-powered smooth scrolling navigation:
- All sections on one page: Hero, About, Services, Team, Contact
- Navigation links trigger smooth scroll to section anchors
- Mobile-responsive hamburger menu
- No page reloads, seamless UX

#### File Organization
```
website/
├── index.html          # Structure and content
├── css/styles.css      # All styling (mobile-first, responsive)
├── js/main.js          # Behavior (navigation, forms, animations)
└── public/             # Static assets only
```

#### Key Features
- **Smooth scrolling**: CSS `scroll-behavior: smooth` with JS fallback
- **Intersection Observer**: Fade-in animations for cards on scroll
- **Responsive navigation**: Desktop menu, mobile hamburger
- **Contact form**: Configurable (mailto fallback, can use Formspree/Web3Forms)
- **Social links**: LinkedIn, Twitter/X, Email
- **Team profiles**: Links to LinkedIn profiles

#### Contact Form Configuration
The form uses a configurable endpoint in `js/main.js`:
```javascript
const CONFIG = {
    adminEmail: 'davidmoritz@gmail.com',
    formEndpoint: null  // Set to Formspree/Web3Forms URL for production
};
```

Without `formEndpoint`, form uses `mailto:` (opens email client). For production:
1. Sign up at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com)
2. Get endpoint URL
3. Update `CONFIG.formEndpoint` in `js/main.js`

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

### Working on Website

1. Navigate to `website/` directory
2. Start local server: `python3 -m http.server 8000`
3. Open http://localhost:8000 in browser
4. Edit HTML/CSS/JS files
5. Refresh browser to see changes (no build step!)
6. Test responsive design using browser dev tools

#### Making Content Updates
- **Text changes**: Edit `index.html` directly
- **Styling**: Modify `css/styles.css` (uses CSS custom properties for colors)
- **Behavior**: Update `js/main.js`
- **Images**: Add to `public/` and reference in HTML

#### Color Scheme
Colors defined as CSS custom properties in `styles.css`:
```css
--primary-blue: #004C97;
--primary-red: #C1272D;
```
Change these to update colors site-wide.

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

### Website

#### Code Style
- **Semantic HTML**: Use appropriate tags (`<nav>`, `<section>`, `<article>`)
- **CSS Organization**: Organized by sections with clear comments
- **JavaScript**: Vanilla JS, ES6+ features, event-driven
- **Mobile-first**: Base styles for mobile, media queries for desktop
- **Accessibility**: ARIA labels, keyboard navigation, semantic markup

#### Performance
- **No bundler**: Zero build time, instant refresh
- **Minimal JS**: ~5KB total JavaScript
- **Google Fonts**: Preconnect for faster loading
- **Images**: Optimize before adding to `public/`

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

### Website

```bash
cd website

# Install deployment dependencies (first time only)
npm install

# Deploy to GitHub Pages
npm run deploy
```

This creates/updates the `gh-pages` branch and deploys the site. GitHub automatically serves it.

#### Custom Domain Setup

To use a custom domain (e.g., meritasdigital.com):

1. Create `CNAME` file in `website/`:
   ```bash
   echo "meritasdigital.com" > CNAME
   ```

2. Configure DNS with your domain registrar:
   - Add A records pointing to GitHub Pages IPs, OR
   - Add CNAME record pointing to `<username>.github.io`

3. In GitHub repo settings, set custom domain to `meritasdigital.com`

4. Redeploy: `npm run deploy`

## Common Issues and Solutions

### Mobile App

**Issue**: Native module not found after installing
- **Solution**: Some packages require running `npx expo prebuild` or creating a development build

**Issue**: Simulator/emulator not opening
- **Solution**: Ensure Xcode Command Line Tools are installed (iOS) or Android Studio is properly configured (Android)

**Issue**: Metro bundler errors
- **Solution**: Try clearing cache with `npx expo start -c`

### Website

**Issue**: Contact form doesn't work
- **Solution**: Form uses mailto by default (opens email client). For production, configure a form service:
  1. Sign up at Formspree.io or Web3Forms.com
  2. Get your endpoint URL
  3. Update `CONFIG.formEndpoint` in `js/main.js`

**Issue**: Deployment fails with gh-pages
- **Solution**: Ensure you've initialized git and have push access to the repository
- **Solution**: Run `npm install` first to install `gh-pages` package
- **Solution**: Check that `.nojekyll` file exists (prevents Jekyll processing)

**Issue**: Styles not loading after deployment
- **Solution**: Check that file paths are relative (not absolute) in HTML
- **Solution**: Clear browser cache and hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

**Issue**: Images not showing
- **Solution**: Verify images are in `public/` directory
- **Solution**: Check file paths in HTML are correct (`public/image-name.jpeg`)
- **Solution**: Ensure image files were committed to git before deploying
