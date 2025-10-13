import { create } from "zustand";
import axiosInstance from "../api/axiosInsatnce";

let refreshInterval: NodeJS.Timeout | null = null;

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  username: string | null;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  refreshAccessToken: () => Promise<void>;
  logout: () => Promise<void>;
  loadTokens: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  refreshToken: null,
  username: null,

  loadTokens: async () => {
    const access = localStorage.getItem("accessToken");
    const refresh = localStorage.getItem("refreshToken");
    const username = localStorage.getItem("username");

    if (refresh) {
      startRefreshInterval();
    }

    set({ accessToken: access, refreshToken: refresh, username });
  },

  signup: async (username, email, password) => {
    await axiosInstance.post("/accounts/api/register/", {
      username,
      email,
      password,
    });
  },

  login: async (username, password) => {
    const res = await axiosInstance.post("/accounts/api/login/", {
      username,
      password,
    });

    const { access, refresh } = res.data;

    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);
    localStorage.setItem("username", username);

    set({ accessToken: access, refreshToken: refresh, username });

    startRefreshInterval(); // 👈 Start token refresh cycle
  },

  refreshAccessToken: async () => {
    const refresh = get().refreshToken || localStorage.getItem("refreshToken");

    if (!refresh) return;

    try {
      const res = await axiosInstance.post("/accounts/api/token/refresh/", { refresh });
      const { access } = res.data;

      localStorage.setItem("accessToken", access);
      set({ accessToken: access });
    } catch (error) {
      console.warn("Token refresh failed", error);
      await get().logout();
    }
  },

  logout: async () => {
    const refresh = get().refreshToken || localStorage.getItem("refreshToken");

    try {
      if (refresh) {
        await axiosInstance.post("/accounts/api/logout/", { refresh });
      }
    } catch (e: any) {
      if (e.response?.status !== 401) {
        console.warn("Logout error", e);
      }
    }

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");

    if (refreshInterval) {
      clearInterval(refreshInterval);
      refreshInterval = null;
    }

    set({ accessToken: null, refreshToken: null, username: null });
  },
}));

function startRefreshInterval() {
  if (refreshInterval) clearInterval(refreshInterval);

  refreshInterval = setInterval(async () => {
    const { refreshAccessToken } = useAuthStore.getState();
    await refreshAccessToken();
  }, 5 * 60 * 1000); // 🔁 every 5 minutes
}
