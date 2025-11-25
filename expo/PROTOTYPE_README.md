# Meritas Mobile - Patriot Mobile Prototype

A professional React Native mobile app prototype built with Expo, designed to showcase Meritas Digital's capabilities for the Patriot Mobile proposal.

## 🎯 Purpose

This prototype demonstrates:
- **Technical Excellence**: Modern React Native architecture with TypeScript
- **Design Quality**: Professional, patriotic color scheme (deep blue #004C97 + red #C1272D)
- **Feature Completeness**: Key mobile carrier app functionality
- **Production-Ready Patterns**: State management, navigation, component library

## 🚀 Features Implemented

### ✅ Authentication
- **Login Screen** - Gradient background, form validation
- **Registration Screen** - Multi-field form with password confirmation
- **Persistent Auth** - Zustand store with persistence ready

### ✅ Dashboard (Home)
- Welcome header with user name
- Quick action cards (Pay Bill, Usage, Devices, Support)
- Current bill summary with CTA
- Data usage progress bar
- Account information display

### ✅ Billing Management
- Current balance display
- Payment history
- Payment status indicators

### ✅ Usage Monitoring
- Data usage tracking with progress bars
- Unlimited minutes/messages display
- Visual usage indicators

### ✅ Device Shop
- Device browse interface
- Pricing display
- Ready for e-commerce integration

### ✅ Support Center
- Contact options (Chat, Call, Email)
- FAQ section
- Support ticket placeholder

## 🏗️ Technical Stack

### Core Technologies
- **React Native**: 0.81.5
- **Expo**: ~54.0.25 (Managed workflow)
- **React**: 19.1.0
- **TypeScript**: Full type safety

### State Management & Data
- **Zustand**: Global state management
- **TanStack Query v5**: Data fetching, caching, offline support
- **React Navigation v6**: Native stack + bottom tabs

### UI/UX
- **Expo Linear Gradient**: Beautiful gradient backgrounds
- **Custom Design System**: Colors, typography, spacing tokens
- **Component Library**: Button, Input, Card (reusable)
- **Safe Area Context**: Proper device edge handling

## 📁 Project Structure

```
expo/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   ├── screens/          # Screen components
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── BillingScreen.tsx
│   │   ├── UsageScreen.tsx
│   │   ├── DevicesScreen.tsx
│   │   └── SupportScreen.tsx
│   ├── navigation/       # Navigation configuration
│   │   └── AppNavigator.tsx
│   ├── stores/           # State management
│   │   └── authStore.ts
│   ├── theme/            # Design system
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   └── [hooks, utils, services, types]
├── App.js               # Application entry
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #004C97 (Trust, stability)
- **Accent Red**: #C1272D (Energy, patriotism)
- **Neutrals**: Comprehensive gray scale
- **Semantic**: Success, warning, error, info colors

### Typography
- System fonts for best performance
- Consistent size scale (12px - 48px)
- Weight variants (regular, medium, semibold, bold)

### Spacing
- 4px grid system (spacing 0-32)
- Consistent border radius (sm to 3xl)
- Predefined shadow levels

## 🚀 Running the Prototype

```bash
# Navigate to expo directory
cd expo

# Install dependencies (if needed)
npm install

# Start development server
npm start

# Run on specific platform
npm run ios       # iOS simulator
npm run android   # Android emulator
npm run web       # Web browser
```

### Quick Test Flow

1. **Start app** → See Login screen
2. **Tap "Sign Up"** → See Registration screen
3. **Fill any data** → Creates mock account and logs in
4. **View Dashboard** → Shows personalized home screen
5. **Navigate tabs** → Explore Billing, Usage, Devices, Support
6. **Quick actions** → Tap dashboard cards to navigate

## 📋 Demo Credentials

Any email/password combination works (mock auth):
- Email: demo@example.com
- Password: password

## 🎯 Alignment with Patriot Mobile Proposal

### Phase 1 ✅ - Discovery & Architecture
- Design system created
- Component library built
- Navigation structure established

### Phase 2 ✅ - UI Design
- High-fidelity screens
- Consistent branding
- Accessible UI patterns

### Phase 3 🚧 - Development (Partially Complete)
- Core features implemented
- Ready for API integration
- Offline support architecture in place

### Technical Requirements Met
- ✅ Expo + React Native
- ✅ TypeScript with strict mode
- ✅ React Navigation
- ✅ TanStack Query for data fetching
- ✅ Zustand for state management
- ✅ Component library approach
- ✅ Accessibility considerations
- ✅ Modern architecture patterns

## 🔄 Next Steps for Full Development

1. **API Integration**
   - Connect to BeQuick, Shopify, CMS
   - Real authentication
   - Live billing data

2. **Advanced Features**
   - Bill payment processing
   - Device diagnostics
   - AI chat assistant
   - Push notifications

3. **Testing & QA**
   - Vitest unit tests
   - Playwright E2E tests
   - Accessibility testing

4. **Production Prep**
   - EAS Build setup
   - App Store submissions
   - CI/CD pipeline

## 💡 Demo Talking Points

1. **Design Excellence**: Professional, trust-building UI matching carrier standards
2. **Technical Foundation**: Production-ready architecture, not a throwaway prototype
3. **Feature Completeness**: All major carrier app sections represented
4. **Extensibility**: Easy to add cause-engagement features (Phase 2)
5. **Performance**: Smooth animations, instant responses (mock data)
6. **Offline-Ready**: TanStack Query configured for offline-first

## 📞 Support

For questions about this prototype:
- **Meritas Digital**: info@meritasdigital.com
- **Proposal Reference**: Patriot Mobile Mobile App | Client Portal

---

**Built with ❤️ by Meritas Digital**
*Crafting innovative and scalable applications*
