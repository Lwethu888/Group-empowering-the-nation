
# Empowering the Nation App

This is a React Native mobile application built with [Expo](https://expo.dev), designed to empower and educate users through various features and calculators. The app includes six-week and six-month programs, an exploration section, and various interactive components.

## Features

- **Six-Week Program**: Progressive learning modules delivered over six weeks
- **Six-Month Program**: Extended educational content and resources
- **Calculator**: Interactive financial calculator tool
- **Explore Section**: Browse through various educational resources
- **Contact**: Easy access to support and communication
- **Dark/Light Theme**: Supports both dark and light mode for better user experience

## Project Structure

```
app/
â”œâ”€â”€ (tabs)/          # Main tab navigation
â”œâ”€â”€ six-month/       # Six-month program content
â”œâ”€â”€ six-week/        # Six-week program content
â”œâ”€â”€ calculator.js    # Financial calculator
â””â”€â”€ contact.js       # Contact information
```

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Technical Details

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Dependencies

This project uses:
- React Native v0.81.4
- Expo SDK v54
- React Navigation v7
- TypeScript
- Expo Router for file-based routing
- React Native Reanimated for animations
- Expo Haptics for haptic feedback
- Various Expo modules for enhanced functionality

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Lwethu888/Group-empowering-the-nation.git
   cd empowering-nation-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

### Running on Different Platforms

- For iOS:
  ```bash
  npm run ios
  ```

- For Android:
  ```bash
  npm run android
  ```

- For Web:
  ```bash
  npm run web
  ```

## Project Structure

The project follows a feature-based structure:

- `/app`: Main application routes and screens
- `/components`: Reusable UI components
- `/constants`: Theme and configuration constants
- `/hooks`: Custom React hooks
- `/assets`: Images and other static resources

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [React Navigation Documentation](https://reactnavigation.org/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

