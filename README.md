# Insect App - Management and Control

A comprehensive React Native (Expo) Android application for understanding and managing storage insects in grains.

## Features

### 🎯 Main Modules

1. **Knowledge Hub**
   - Storage Insects (Primary & Secondary)
   - Sources of Infestation
   - Methods of Detection

2. **Control Measures**
   - Preventive measures
   - Physical control methods
   - Chemical control guidelines
   - Integrated Pest Management (IPM)

3. **Fumigant Recommendations**
   - Safety guidelines
   - Professional consultation information
   - Educational content about fumigation

## App Structure

### Screens Flow

```
Splash Screen (3 seconds)
    ↓
Sign In Screen (hardcoded credentials)
    ↓
Home Screen (3 main cards)
    ├── Knowledge Hub
    │   ├── Storage Insects
    │   │   ├── Primary Insects List (8 insects)
    │   │   │   └── Insect Detail
    │   │   └── Secondary Insects List (5 insects)
    │   │       └── Insect Detail
    │   ├── Sources of Infestation
    │   └── Methods of Detection
    ├── Control Measures
    └── Fumigant Recommendations
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Expo Go app (for testing on physical device)
- Android Studio (for Android emulator)

### Installation

1. Navigate to the project directory:
   ```bash
   cd "E:\My Apps\IINFT"
   ```

2. Install dependencies (already done):
   ```bash
   npm install
   ```

### Running the App

1. Start the Expo development server:
   ```bash
   npm start
   ```

2. Run on Android:
   - Press `a` to open in Android emulator
   - Or scan the QR code with Expo Go app on your Android device

3. Run on web (for testing):
   - Press `w` to open in web browser

### Login Credentials

**Email:** `insect_admin@app.com`  
**Password:** `Insect@123`

## Project Structure

```
IINFT/
├── App.tsx                 # Main navigation setup
├── src/
│   ├── data/
│   │   └── insectsData.ts  # Mock data for insects and information
│   ├── navigation/
│   │   └── types.ts        # TypeScript navigation types
│   └── screens/
│       ├── SplashScreen.tsx
│       ├── SignInScreen.tsx
│       ├── HomeScreen.tsx
│       ├── KnowledgeHubScreen.tsx
│       ├── StorageInsectsScreen.tsx
│       ├── PrimaryInsectsListScreen.tsx
│       ├── SecondaryInsectsListScreen.tsx
│       ├── InsectDetailScreen.tsx
│       ├── SourcesOfInfestationScreen.tsx
│       ├── MethodsOfDetectionScreen.tsx
│       ├── ControlMeasuresScreen.tsx
│       └── FumigantRecommendationsScreen.tsx
├── package.json
├── app.json
└── tsconfig.json
```

## Insect Database

### Primary Insects (8 Species)
1. Rice Weevil
2. Lesser Grain Borer
3. Angoumois Grain Moth
4. Granary Weevil
5. Maize Weevil
6. Indian Meal Moth
7. Rust-Red Flour Beetle
8. Khapra Beetle

### Secondary Insects (5 Species)
1. Saw-Toothed Grain Beetle
2. Confused Flour Beetle
3. Flat Grain Beetle
4. Foreign Grain Beetle
5. Red Flour Beetle

## Design Features

- ✅ Clean, minimal, mobile-friendly UI
- ✅ Neutral color scheme with green accents (#4CAF50, #2E7D32)
- ✅ Card-based layouts with shadows
- ✅ Icon-based navigation
- ✅ Comprehensive static educational content
- ✅ No backend required - all data is local
- ✅ TypeScript for type safety
- ✅ React Navigation stack navigator

## Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Development and build toolchain
- **TypeScript**: Type-safe development
- **React Navigation**: Navigation and routing
- **React Native Safe Area Context**: Handle safe areas
- **React Native Screens**: Native screen components

## Building for Production

### Android APK

```bash
# Install EAS CLI
npm install -g eas-cli

# Configure EAS
eas build:configure

# Build APK
eas build --platform android --profile preview
```

## Notes

- This is an **educational app** - not a replacement for professional pest management consultation
- All fumigation and chemical control information is for educational purposes only
- Users should always consult with licensed professionals for pest control operations
- No backend or authentication system - credentials are hardcoded for demo purposes

## Future Enhancements (Optional)

- [ ] Add images for each insect species
- [ ] Implement user accounts with backend
- [ ] Add offline mode with local storage
- [ ] Include region-specific pest information
- [ ] Add pest identification using camera
- [ ] Implement push notifications for alerts
- [ ] Multi-language support

## License

Private project - All rights reserved

## Support

For issues or questions about the app, contact the development team.

---

**Version**: 1.0.0  
**Last Updated**: November 2025
