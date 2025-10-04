# Welcome to Travel Planner 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

This app aims to help an user while planning its trip, given some info like destiny, budget, travel duration and time, it will use google AI to generate a guide.

https://github.com/user-attachments/assets/ee2b9b4b-0827-455d-af6d-95e1d356bdf3

## Get started

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

## Folder Structure and Patterns

The project folder structure is designed for clarity, maintainability, and scalability. Below is an overview of the main directories and the patterns used:

```
travel-planner/
├── app/                # Main application code, screens, and routes
│   └── index.tsx       # Home screen (entry point)
├── components/         # Reusable UI components (e.g., buttons, inputs)
├── services/           # External services and integrations (e.g., AI API)
│   └── ai/             # AI-related service logic
├── styles/             # Global styles and theme files
├── assets/             # Images, fonts, and other static resources
├── README.md           # Project documentation
├── package.json        # Project dependencies and scripts
└── ...                 # Other configuration files
```

### Adopted Patterns

- **Componentization:** UI components are placed in `components/` and reused across different screens.
- **Service separation:** Logic for external API integrations is kept in `services/`, making testing and maintenance easier.
- **Centralized styles:** Global styles and themes are stored in `styles/` for visual consistency.
- **File-based routing:** Screens and routes are organized by file inside the `app/` folder, following the Expo Router convention.

This structure makes collaboration easier and helps keep the project scalable and organized.
