
<img width="3235" height="2222" alt="logo" src="https://github.com/user-attachments/assets/c2485e5a-36fb-48d3-b9b3-5e8347acb7d4" />

**marketX** is a powerful, feature-packed **Next.js** web application designed for real-time stock market tracking, personalized watchlists, live data updates, and the latest financial news. Built with **TypeScript** and **Zustand** for state management, it provides a smooth and responsive experience with scalable frontend architecture and seamless backend integration.

---

## 🚀 Features

### 🔐 User Authentication
- Secure signup and login functionality.
- JWT-based token authentication.
- Session persistence using `localStorage`.

### 🏠 Dashboard/Home
- Personalized dashboard with key stock market insights.
- Sector-wise tabs and stock overview cards.
- Responsive and modern UI layout.

### ⭐ Watchlist Management
- Add and remove stocks to/from your Watchlist.
- Real-time updates using Zustand.
- Persistent watchlist stored in `localStorage`.

### 📈 Live Stock Data
- Real-time stock prices from backend API.
- Clean error/loading states.
- Display of key stock metrics (price, change %, volume).

### 📰 Financial News
- Latest headlines in finance, crypto, and markets.
- News fetched via backend and displayed in card format.
- External links open in a new tab for full articles.

### 📊 Stock Detail View
- Individual stock pages with detailed metrics and summaries.
- Integrated charts (e.g., 1D, 1W, 1M) using chart libraries.
- Responsive charts with clear legends and data points.

### 🔍 Smart Search
- Fast stock symbol and name search.
- Real-time dropdown suggestions.
- Highlighted matching results.

### 💼 Portfolio Simulator
- Simulate mock stock purchases and sales.
- Track portfolio value and P&L metrics.
- Graphical overview of holdings.

### 🌙 Dark Mode Support
- Toggle between light and dark themes.
- Theme stored in global state and persisted in localStorage.

---

## 🛠 Technologies Used

- **Next.js (App Router)**
- **TypeScript**
- **Zustand** for state management
- **Axios** for API calls
- **Tailwind CSS** for styling
- **Chart.js / Recharts** for charts
- **React Toastify** for notifications
- **Headless UI / Radix UI** (optional for modals, dropdowns)
- **localStorage** for persisting data

---

## 📁 Project Structure

```

marketX-Web/
├── app/                   # App router pages and layouts
├── components/            # Reusable UI components
├── store/                 # Zustand global state
├── services/              # Axios API services
├── utils/                 # Helper functions and constants
├── styles/                # Tailwind config and global CSS
├── public/                # Static assets
├── middleware.ts          # Middleware for auth routes
├── next.config.js         # Next.js config
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies and scripts

````

---

## 🧠 State Management

**Zustand** is used for managing app-wide state such as:
- Auth tokens and user session
- Watchlist state
- Theme preferences (dark/light)
- Portfolio data

Zustand's middleware is used to persist selective state slices using `localStorage`.

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/marketX-Web.git
cd marketX-Web
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open your browser at `http://localhost:3000`.

---

## 🌐 Backend Integration

marketX web integrates with a secure **REST API backend** for:

* User authentication (JWT-based)
* Stock data retrieval
* Financial news
* Watchlist and portfolio endpoints

All API interactions are handled via Axios services inside `/services`.

---

## 📸 Screenshots


<img width="1913" height="851" alt="Screenshot 2025-08-05 174936" src="https://github.com/user-attachments/assets/8116f383-e33b-4ae4-b480-22fc8f48a839" />

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Abhishek Gurjar**

* GitHub: [@abhishekgurjar-in](https://github.com/abhishekgurjar-in)



