# MSA App 📱

A comprehensive mobile application for Muslim Student Associations (MSA) built with Expo and React Native. This app provides essential features for managing Islamic events, prayer times, and community resources.

## Features ✨

- **Prayer Times**: Track daily prayer times with athan and iqama schedules
- **Events Management**: Create and manage Islamic events with details like:
  - Event name and description
  - Date and time
  - Location
  - Event links
  - Event images
- **Places Directory**: Find and share information about:
  - Islamic centers
  - Halal restaurants
  - Prayer spaces
  - Other community resources
- **Reminders**: Access Islamic reminders with:
  - English and Arabic text
  - Reference sources
- **Push Notifications**: Stay updated with important announcements and prayer times

## Tech Stack 🛠

- [Expo](https://expo.dev/) - React Native framework
- [Supabase](https://supabase.io/) - Backend and database
- [React Native](https://reactnative.dev/) - Mobile app development
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [pnpm](https://pnpm.io/) - Package manager

## Getting Started 🚀

1. **Prerequisites**
   - Node.js (LTS version)
   - pnpm (`npm install -g pnpm`)
   - Expo CLI (`pnpm add -g expo-cli`)

2. **Installation**
   ```bash
   # Clone the repository
   git clone [repository-url]
   cd MSA-App

   # Install dependencies
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with:
   ```
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Running the App**
   ```bash
   # Start the development server
   pnpm expo start
   ```

   Then choose your preferred method to run the app:
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
   - Scan QR code with Expo Go app on your device

## Project Structure 📁

```
MSA-App/
├── app/                 # Main application code
│   ├── components/     # Reusable UI components
│   └── (tabs)/        # Tab-based navigation screens
├── Utils/             # Utility functions and types
├── lib/               # Library configurations
└── assets/            # Static assets (images, fonts)
```

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📝

This project is licensed under the MIT License - see the LICENSE file for details.

## Support 💬

For support, please open an issue in the GitHub repository or contact the development team.
