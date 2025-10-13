
<img width="3235" height="2222" alt="logo" src="https://github.com/user-attachments/assets/c2485e5a-36fb-48d3-b9b3-5e8347acb7d4" />

**marketX** is a feature-rich, full-fledged **React Native Expo** mobile application built for tracking stock markets, managing personalized watchlists, viewing real-time data, and reading financial news—all through a clean and responsive user interface.

Designed with performance, scalability, and user experience in mind, marketX leverages powerful frontend technologies and integrates with a RESTful backend for seamless interaction.

---

## 🚀 Features

### 🔐 User Authentication
- Secure login and registration system.
- Token-based authentication powered by REST API.
- Session management using `AsyncStorage`.

### 🏠 Home Screen
- Dynamic home layout featuring a top banner, sector tabs, and market overview cards.
- Smooth UI with intuitive navigation across all sections.

### ⭐ Watchlist Management
- Add/remove stocks to a personalized Watchlist.
- Persistent storage using `AsyncStorage`.
- Zustand-based global state for fast and efficient updates.
- Real-time syncing of Watchlist with backend data.

### 📈 Real-Time Stock Data
- Live stock prices fetched via Axios from backend endpoints.
- Optimized loading and error state handling for better user experience.
- Structured display of data including key metrics and changes.

### 📰 News Feed
- Dedicated tab for latest financial news headlines.
- Supports categories like Markets, Economy, and Crypto.
- Seamless WebView or browser redirect for reading full articles.

### 📊 Stock Details & Charts
- Detailed individual stock pages with charts and summaries.
- Timeframe filters (1D, 1W, 1M) using `react-native-chart-kit`.
- Clean overlays for data visualization and insights.

### 🔍 Smart Search
- Fast search input with dropdown suggestions.
- Real-time symbol and name matching with visual highlights.

### 💼 Portfolio Tracker
- Simulate investments with mock buy/sell functionality.
- View P&L breakdown and graphical holdings summary.
- Fully integrated with global app state.

### 🔔 Push Notifications
- Real-time alerts for stock price triggers and news highlights.
- Implemented using Expo Push Notification system.

### 🌙 Dark Mode & Settings
- Toggle between dark and light modes globally.
- Fully themed UI components with consistency across the app.

---

## 🛠 Technologies Used

- **React Native (Expo)**
- **TypeScript**
- **Zustand** for state management
- **React Navigation**
- **Axios**
- **AsyncStorage**
- **react-native-chart-kit**
- **Expo Notifications**
- **Figma/XD** for UI/UX design

---

## 📁 Project Structure

```

marketX/
├── assets/                 # App images and icons
├── components/            # Reusable UI elements
├── context/               # Global contexts if needed
├── store/                 # Zustand store(s) for state
├── navigation/            # Stack and tab navigation setup
├── screens/               # All screen components (Splash, Login, Home, etc.)
├── services/              # API handlers (Axios)
├── styles/                # Theming and global styles
├── utils/                 # Constants, helpers, etc.
├── App.tsx                # App root
└── package.json           # Dependencies and scripts

````

---

## 🧠 State Management

marketX uses **Zustand** for managing global state across the app. This allows:
- Reactive updates to the UI when stocks or watchlist items change.
- Lightweight state management without boilerplate.
- Easy persistence using middleware for watchlists and theme preferences.

---

## 📦 Installation & Setup

### 1. Clone the repository:
```bash
git clone https://github.com/<your-username>/marketX.git
cd marketX
````

### 2. Install dependencies:

```bash
npm install
```

### 3. Start the development server:

```bash
npx expo start
```

Scan the QR code using **Expo Go** on Android/iOS or run on a device emulator.

---

## 🌐 Backend Integration

marketX uses a **REST API backend** for authentication, stock data, news, and user-specific operations such as watchlist and portfolio tracking. Backend services are securely integrated and separated from the frontend codebase.

---

## 📸 Screenshots


<img width="393" height="852" alt="Screen 1" src="https://github.com/user-attachments/assets/7bd77c41-7520-40aa-88e3-fbc02a25d797" />

<img width="393" height="852" alt="Sign in" src="https://github.com/user-attachments/assets/867ab0e1-d6fb-458c-aeeb-2a5af1ee51ec" />

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Abhishek Gurjar**

* GitHub: [@abhishekboadgurjar](https://github.com/abhishekboadgurjar)

---
