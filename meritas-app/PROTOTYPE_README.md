# Meritas Mobile - Patriot Mobile Prototype

A professional React Native mobile app prototype built with Expo, designed to showcase Meritas Digital's capabilities for the Patriot Mobile proposal.

## 🎯 Purpose

This prototype demonstrates:
- **Technical Excellence**: Modern React Native architecture with clean JavaScript
- **Design Quality**: Professional, patriotic color scheme (deep blue #004C97 + red #C1272D)
- **Feature Completeness**: Key mobile carrier app functionality
- **Production-Ready Patterns**: Component library, navigation, theming system

## 🚀 Features Implemented

### ✅ Dashboard (Home)
- Linear gradient header with user welcome
- Quick action cards (Pay Bill, Usage, Devices, Support)
- Current bill summary with CTA
- Data usage progress bar (65% visualization)
- Account information display

### ✅ Billing Management
- Current balance display ($85.00)
- Due date indicator
- Payment history with 3 transactions

### ✅ Usage Monitoring
- Data usage tracking with progress bars (6.5 GB / 10 GB)
- Unlimited minutes display
- Unlimited messages display
- Visual usage indicators

### ✅ Device Shop
- Device browse interface (3 devices)
- Pricing display (iPhone 15 Pro, Samsung Galaxy S24, Google Pixel 8)
- Touch-enabled cards
- Ready for e-commerce integration

### ✅ Support Center
- Contact options (Chat, Call, Email)
- FAQ section with 3 common questions
- Touch-enabled support options

## 🏗️ Technical Stack

### Core Technologies
- **React Native**: 0.81.5
- **Expo**: ~54.0.25 (Managed workflow with New Architecture enabled)
- **React**: 19.1.0
- **JavaScript**: Clean ES6+ code

### Navigation & UI
- **React Navigation v6**: Native stack + bottom tabs
- **Expo Linear Gradient**: Beautiful gradient backgrounds on Home screen
- **Custom Design System**: Colors, typography, spacing tokens
- **Safe Area Context**: Proper device edge handling

### Component Library
- **Button**: 4 variants (primary, secondary, outline, ghost), 3 sizes
- **Card**: 3 variants (elevated, outlined, filled)
- **Input**: Full-featured text input with labels, errors, icons

## 📁 Project Structure

```
meritas-app/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Button.js
│   │   ├── Input.js
│   │   ├── Card.js
│   │   └── index.js
│   ├── screens/          # Screen components
│   │   ├── HomeScreen.js
│   │   ├── BillingScreen.js
│   │   ├── UsageScreen.js
│   │   ├── DevicesScreen.js
│   │   └── SupportScreen.js
│   ├── navigation/       # Navigation configuration
│   │   └── AppNavigator.js
│   ├── theme/            # Design system
│   │   ├── colors.js
│   │   ├── typography.js
│   │   ├── spacing.js
│   │   └── index.js
├── assets/              # App icons, splash screens
├── App.js              # Application entry
├── index.js            # Expo entry point
├── app.json            # Expo configuration
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #004C97 (Trust, stability) - 9 shades
- **Accent Red**: #C1272D (Energy, patriotism) - 8 shades
- **Neutrals**: Comprehensive gray scale (50-900)
- **Semantic**: Success, warning, error, info colors
- **Backgrounds**: Primary, secondary, tertiary
- **Text**: Primary, secondary, tertiary, inverse
- **Borders**: Light, main, dark

### Typography
- System fonts for best performance (no custom fonts needed)
- Consistent size scale (12px - 48px)
- **Weight variants**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **CRITICAL**: All fontWeight values are numbers (not strings) for React Native New Architecture compatibility
- **CRITICAL**: No lineHeight properties to avoid iOS text rendering issues with Fabric

### Spacing
- 4px grid system (spacing[0] through spacing[32])
- Consistent border radius (none, sm, md, lg, xl, 2xl, 3xl, full)
- Predefined shadow levels (sm, md, lg, xl) with iOS/Android elevation

## 🚀 Running the Prototype

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm start

# Start with tunnel (for testing on physical devices from anywhere)
npx expo start --tunnel

# Run on specific platform
npm run ios       # iOS simulator
npm run android   # Android emulator
npm run web       # Web browser
```

### Testing on Physical Device

1. Install **Expo Go** app on your iOS or Android device
2. Run `npx expo start --tunnel`
3. Wait for "Tunnel ready" message
4. Scan QR code with Expo Go (Android) or Camera app (iOS)
5. App will load on your device

### Quick Test Flow

1. **Start app** → See Home screen with gradient header
2. **View Dashboard** → See personalized home with "John Patriot"
3. **Tap quick actions** → Navigate to Billing, Usage, Devices, Support
4. **Navigate tabs** → Use bottom tab bar to switch screens
5. **Explore features** → Bill summary, data usage bar, device cards, FAQs

## 📋 Mock Data

The prototype uses hardcoded mock data:
- **User**: John Patriot, (555) 123-4567
- **Bill**: $85.00 due December 15, 2024
- **Data Usage**: 6.5 GB of 10 GB (65% used)
- **Plan**: Unlimited Plus, 2 Lines
- **Devices**: iPhone 15 Pro ($999), Samsung Galaxy S24 ($899), Google Pixel 8 ($699)

## 🎯 Alignment with Patriot Mobile Proposal

### Phase 1 ✅ - Discovery & Architecture
- Design system created with comprehensive color, typography, spacing tokens
- Component library built (Button, Input, Card)
- Navigation structure established (bottom tabs)

### Phase 2 ✅ - UI Design
- High-fidelity screens for all 5 tabs
- Consistent Meritas branding (blue + red color scheme)
- Accessible UI patterns (proper contrast, touch targets)

### Phase 3 🚧 - Development (Foundation Complete)
- Core features implemented with mock data
- Clean architecture ready for API integration
- Reusable components built for scalability

### Technical Requirements Met
- ✅ Expo + React Native
- ✅ React Navigation (Native Stack + Bottom Tabs)
- ✅ Component library approach
- ✅ Design system with theming
- ✅ Modern architecture patterns
- ✅ React Native New Architecture enabled
- ✅ Cross-platform (iOS, Android, Web)
- ✅ Linear gradients for visual polish

## 🔄 Next Steps for Full Development

1. **Authentication System**
   - Add login/registration screens
   - Implement Zustand or Context for auth state
   - Connect to backend authentication API

2. **API Integration**
   - Connect to BeQuick, Shopify, CMS
   - Real billing data from payment systems
   - Live usage data from carrier backend
   - Device catalog from e-commerce platform

3. **Advanced Features**
   - Bill payment processing with Stripe/payment gateway
   - Device diagnostics and troubleshooting
   - AI chat assistant integration
   - Push notifications for bills, usage alerts

4. **State Management**
   - Add TanStack Query for data fetching and caching
   - Implement Zustand for global state
   - Offline-first architecture with local persistence

5. **Testing & QA**
   - Vitest unit tests for components
   - Playwright or Detox E2E tests
   - Accessibility testing (screen readers, contrast)

6. **Production Prep**
   - EAS Build setup for standalone apps
   - App Store and Play Store submissions
   - CI/CD pipeline with GitHub Actions
   - Environment configuration (dev/staging/prod)

## 💡 Demo Talking Points

1. **Design Excellence**: Professional, trust-building UI matching major carrier app standards
2. **Technical Foundation**: Production-ready architecture built incrementally and tested at each step
3. **Feature Completeness**: All major carrier app sections represented (Home, Billing, Usage, Devices, Support)
4. **Extensibility**: Easy to add cause-engagement features and additional screens
5. **Performance**: Smooth animations, instant responses with mock data
6. **Cross-Platform**: Single codebase runs on iOS, Android, and Web
7. **Modern Stack**: Latest Expo SDK with React Native New Architecture enabled
8. **Tested Incrementally**: Each component and screen verified on both simulator and physical device

## 🐛 Known Implementation Details

### Typography Notes
- **fontWeight must be numbers** (400, 600, 700) not strings ('400', '600', '700')
  - React Native New Architecture (Fabric) enforces strict type checking
  - String fontWeights cause type errors and invisible text on iOS

- **No lineHeight in typography styles**
  - The `lineHeight` property can cause text rendering issues on iOS with Fabric
  - Removed from all typography style definitions to ensure text visibility

### Splash Screen
- Custom splash screen configured in `app.json`
- Uses `assets/splash-icon.png` for loading screen
- White background color (#ffffff)
- Also used as Android adaptive icon

## 📞 Support

For questions about this prototype:
- **Meritas Digital**: davidmoritz@gmail.com
- **Proposal Reference**: Patriot Mobile Mobile App | Client Portal

---

**Built with ❤️ by Meritas Digital**
*Crafting innovative and scalable applications*
