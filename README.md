<div align="center">


# 📈 MarketX

### Your Complete Stock Market Companion

**A full-stack financial platform featuring a responsive web application and a native mobile app for real-time stock market tracking, portfolio management, and financial insights.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation--setup) 

</div>

---

## 🎯 Mission & Vision

**MarketX** empowers investors, traders, and financial enthusiasts with real-time market data, intelligent portfolio tracking, and comprehensive financial news—all in one seamless platform. Our mission is to democratize access to professional-grade financial tools through intuitive design and cutting-edge technology.

### 🎪 Why MarketX?

- **📱 Cross-Platform**: Access your portfolio anywhere—native mobile app (iOS/Android) and responsive web application
- **⚡ Real-Time Data**: Live stock prices, market movements, and instant updates
- **🎨 Modern UI/UX**: Beautiful, intuitive interface with dark mode support
- **🔒 Secure**: JWT-based authentication with encrypted data transmission
- **📊 Comprehensive**: From watchlists to portfolio tracking to financial news—everything you need in one place

---

## ✨ Features

### 🔐 **Authentication & Security**
- Secure user registration and login system
- JWT token-based authentication
- Session persistence across devices
- Password encryption and secure data handling

### 🏠 **Smart Dashboard**
- Personalized home screen with market overview
- Sector-wise categorization and analysis
- Quick access to trending stocks and market movers
- Customizable layout and widgets

### ⭐ **Watchlist Management**
- Create and manage multiple watchlists
- Add/remove stocks with a single tap
- Real-time price updates for watched stocks
- Persistent storage with cloud sync
- Sort and filter by various metrics

### 📈 **Real-Time Stock Data**
- Live stock prices with millisecond updates
- Historical data with multiple timeframes (1D, 1W, 1M, 3M, 1Y, 5Y)
- Key metrics: Open, High, Low, Close, Volume, Market Cap
- Percentage change indicators with color coding
- Pre-market and after-hours data

### 📊 **Interactive Charts & Visualization**
- Beautiful, responsive charts using Chart.js and React Native Chart Kit
- Multiple chart types: Line, Candlestick, Bar
- Timeframe selection (Intraday, Daily, Weekly, Monthly)
- Technical indicators and overlays
- Zoom and pan functionality
- Export charts as images

### 💼 **Portfolio Tracker**
- Simulate real investments with virtual portfolio
- Track multiple holdings and transactions
- Real-time P&L (Profit & Loss) calculations
- Portfolio performance graphs
- Asset allocation pie charts
- Transaction history with detailed logs
- Cost basis and return calculations

### 📰 **Financial News Feed**
- Latest market news and headlines
- Category filters: Markets, Economy, Crypto, Commodities
- In-app article reader with WebView
- Bookmark favorite articles
- Share news on social media
- Personalized news based on watchlist

### 🔍 **Smart Search**
- Lightning-fast stock symbol and company name search
- Real-time dropdown suggestions
- Search history and favorites
- Fuzzy matching for typo tolerance
- Advanced filters (sector, market cap, price range)

### 🔔 **Push Notifications**
- Price alerts for specific stocks
- Breaking news notifications
- Portfolio milestone alerts
- Customizable notification preferences
- Daily market summary

### 🌙 **Dark Mode & Theming**
- System-wide dark and light mode toggle
- Automatic theme switching based on time
- Consistent theming across all components
- High contrast mode for accessibility
- Custom color schemes

### 📱 **Responsive Design**
- Optimized for all screen sizes
- Touch-friendly mobile interface
- Desktop-optimized web experience
- Tablet support with adaptive layouts

---

## 🛠 Tech Stack

### **Mobile App (React Native + Expo)**

| Category | Technologies |
|----------|-------------|
| **Framework** | React Native 0.81.4, Expo 54.0 |
| **Language** | TypeScript 5.8 |
| **State Management** | Zustand 5.0 |
| **Navigation** | React Navigation 7.x (Stack & Bottom Tabs) |
| **HTTP Client** | Axios 1.11 |
| **Charts** | React Native Chart Kit 6.12 |
| **Storage** | AsyncStorage 2.2 |
| **UI Components** | React Native Vector Icons, Expo Vector Icons |
| **Animations** | Lottie React Native 7.3, React Native Reanimated 4.1 |
| **Notifications** | React Native Toast Message 2.3 |
| **Utilities** | Lodash 4.17, use-debounce 10.0 |

### **Web Application (Next.js)**

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15.4 (App Router) |
| **Language** | TypeScript 5.x |
| **State Management** | Zustand 5.0 |
| **HTTP Client** | Axios 1.11 |
| **Styling** | Tailwind CSS 4.0 |
| **Icons** | Lucide React 0.536 |
| **Notifications** | React Hot Toast 2.5 |
| **Build Tools** | ESLint 9, PostCSS |

### **Common Technologies**

- **Authentication**: JWT (JSON Web Tokens)
- **API Architecture**: RESTful API
- **Version Control**: Git & GitHub
- **Package Manager**: npm
- **Code Quality**: ESLint, TypeScript strict mode

---

## 📁 Project Structure

```
MarketX/
│
├── App/                          # React Native Mobile Application
│   ├── assets/                   # Images, fonts, and static assets
│   ├── components/               # Reusable UI components
│   │   ├── Common/              # Shared components (buttons, cards, etc.)
│   │   ├── Home/                # Home screen components
│   │   ├── Market/              # Market-related components
│   │   ├── News/                # News feed components
│   │   ├── Profile/             # User profile components
│   │   └── Watchlist/           # Watchlist components
│   ├── navigation/              # Navigation configuration
│   │   ├── AppNavigator.tsx    # Main navigation setup
│   │   └── TabNavigator.tsx    # Bottom tab navigation
│   ├── screens/                 # Screen components
│   │   ├── Dashboard/          # Main dashboard screens
│   │   │   ├── Home.tsx
│   │   │   ├── Market.tsx
│   │   │   ├── News.tsx
│   │   │   ├── Watchlist.tsx
│   │   │   ├── Profile.tsx
│   │   │   ├── DetailScreen.tsx
│   │   │   ├── ChartScreen.tsx
│   │   │   ├── SearchScreen.tsx
│   │   │   └── Notification.tsx
│   │   ├── Splash.tsx          # Splash screen
│   │   ├── Welcome.tsx         # Welcome/onboarding
│   │   ├── Login.tsx           # Login screen
│   │   └── Signup.tsx          # Registration screen
│   ├── store/                   # Zustand state management
│   ├── api/                     # API service layer
│   ├── types/                   # TypeScript type definitions
│   ├── App.tsx                  # App entry point
│   ├── app.json                 # Expo configuration
│   ├── eas.json                 # Expo Application Services config
│   ├── package.json             # Dependencies
│   └── tsconfig.json            # TypeScript configuration
│
├── Web/                         # Next.js Web Application
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── app/                # Next.js App Router
│   │   │   ├── (auth)/        # Authentication routes
│   │   │   │   ├── login/
│   │   │   │   └── signup/
│   │   │   ├── (main)/        # Main application routes
│   │   │   │   ├── dashboard/
│   │   │   │   ├── market/
│   │   │   │   ├── news/
│   │   │   │   ├── watchlist/
│   │   │   │   ├── portfolio/
│   │   │   │   └── profile/
│   │   │   ├── layout.tsx     # Root layout
│   │   │   ├── page.tsx       # Home page
│   │   │   └── globals.css    # Global styles
│   │   ├── components/        # Reusable components
│   │   ├── store/             # Zustand state management
│   │   └── api/               # API service layer
│   ├── next.config.ts          # Next.js configuration
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   ├── package.json            # Dependencies
│   └── tsconfig.json           # TypeScript configuration
│
└── README.md                    # This file
```

---

## 🧠 State Management Architecture

MarketX uses **Zustand** for lightweight, performant state management across both platforms:

### Key State Slices:

1. **Auth Store**
   - User authentication state
   - JWT token management
   - Session persistence

2. **Watchlist Store**
   - User's watched stocks
   - Real-time price updates
   - Add/remove operations

3. **Portfolio Store**
   - Holdings and transactions
   - P&L calculations
   - Performance metrics

4. **Theme Store**
   - Dark/light mode preference
   - Custom theme settings

5. **Market Store**
   - Stock data cache
   - Market overview
   - Sector performance

### Benefits:
- ⚡ Minimal boilerplate
- 🔄 Reactive UI updates
- 💾 Persistent storage with middleware
- 🎯 Selective re-renders for optimal performance

---

## 📦 Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo CLI** (for mobile app)
- **Git**

### 🚀 Quick Start

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/abhishekboadgurjar/MarketX.git
cd MarketX
```

---

### 📱 Mobile App Setup

```bash
# Navigate to App directory
cd App

# Install dependencies
npm install

# Start Expo development server
npx expo start

# Run on specific platform
npm run android    # For Android
npm run ios        # For iOS
npm run web        # For web browser
```

**Scan the QR code** using the **Expo Go** app on your mobile device, or run on an emulator.

#### Build for Production

```bash
# Build for Android
eas build --platform android

# Build for iOS
eas build --platform ios
```

---

### 🌐 Web Application Setup

```bash
# Navigate to Web directory
cd Web

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open your browser at **http://localhost:3000**

---

### 🔧 Environment Variables

Create `.env.local` files in both `App/` and `Web/` directories:

**App/.env.local**
```env
EXPO_PUBLIC_API_URL=https://your-api-endpoint.com
EXPO_PUBLIC_API_KEY=your_api_key_here
```

**Web/.env.local**
```env
NEXT_PUBLIC_API_URL=https://your-api-endpoint.com
NEXT_PUBLIC_API_KEY=your_api_key_here
```

---

## 🌐 Backend Integration

MarketX integrates with a **RESTful API backend** for:

- **User Management**: Registration, login, profile updates
- **Stock Data**: Real-time prices, historical data, company info
- **Watchlist**: CRUD operations for user watchlists
- **Portfolio**: Transaction tracking and P&L calculations
- **News**: Financial news aggregation and filtering
- **Notifications**: Push notification delivery

### API Endpoints Structure:

```
/api/v1/
  ├── auth/
  │   ├── POST /register
  │   ├── POST /login
  │   └── POST /logout
  ├── stocks/
  │   ├── GET /search
  │   ├── GET /:symbol
  │   └── GET /:symbol/history
  ├── watchlist/
  │   ├── GET /
  │   ├── POST /add
  │   └── DELETE /remove
  ├── portfolio/
  │   ├── GET /
  │   ├── POST /transaction
  │   └── GET /performance
  └── news/
      ├── GET /latest
      └── GET /category/:category
```

All API calls are authenticated using JWT tokens passed in the Authorization header.

---

## 🎨 Design Philosophy

MarketX follows modern design principles:

- **Minimalism**: Clean, clutter-free interface
- **Consistency**: Unified design language across platforms
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Optimized for speed and efficiency
- **Responsiveness**: Fluid layouts for all screen sizes

---

## 🚀 Performance Optimizations

- **Code Splitting**: Lazy loading of components and routes
- **Image Optimization**: Next.js Image component with automatic optimization
- **Caching**: Intelligent API response caching
- **Memoization**: React.memo and useMemo for expensive computations
- **Virtual Lists**: Efficient rendering of large lists
- **Bundle Size**: Tree-shaking and minification

---

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards:
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📝 Roadmap

### Upcoming Features:

- [ ] **Social Trading**: Follow and copy successful traders
- [ ] **AI-Powered Insights**: Machine learning-based stock recommendations
- [ ] **Options Trading**: Support for options and derivatives
- [ ] **Crypto Integration**: Cryptocurrency tracking and trading
- [ ] **Advanced Charting**: More technical indicators and drawing tools
- [ ] **Backtesting**: Test trading strategies with historical data
- [ ] **Multi-Language Support**: Internationalization (i18n)
- [ ] **Voice Commands**: Voice-activated stock lookup and trading
- [ ] **Widgets**: Home screen widgets for quick market overview
- [ ] **Watchlist Sharing**: Share watchlists with friends

---

## 🙋‍♂️ Author

<div align="center">

### **Abhishek Gurjar**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/abhishekboadgurjar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/abhishekboadgurjar)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/abhishekbgurjar)

*Full-Stack Developer | React Native Enthusiast | Financial Technology Innovator*

</div>

---

## 🌟 Acknowledgments

- **Expo Team** for the amazing React Native framework
- **Vercel** for Next.js and hosting solutions
- **Zustand** for lightweight state management
- **TailwindCSS** for utility-first styling
- **Financial Data Providers** for real-time market data
- **Open Source Community** for invaluable tools and libraries

---

## 📞 Support

If you encounter any issues or have questions:

- 🐛 Issues: [GitHub Issues](https://github.com/abhishekboadgurjar/MarketX/issues)

---

## ⭐ Show Your Support

If you find MarketX helpful, please consider:

- ⭐ Starring this repository
- 🍴 Forking the project
- 📢 Sharing with others
- 💖 Sponsoring the development

---

<div align="center">

### Made with ❤️ by Abhishek Gurjar

**MarketX** - *Empowering Financial Decisions*

[⬆ Back to Top](#-marketx)

</div>
