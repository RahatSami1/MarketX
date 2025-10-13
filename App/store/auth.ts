import { create } from "zustand";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = "https://marketX-backend.onrender.com";

let refreshInterval: NodeJS.Timeout | null = null;

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  username: string | null;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  refreshAccessToken: () => Promise<string | null>;
  logout: () => Promise<void>;
  loadTokens: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  refreshToken: null,
  username: null,

  loadTokens: async () => {
    const access = await AsyncStorage.getItem("accessToken");
    const refresh = await AsyncStorage.getItem("refreshToken");
    const username = await AsyncStorage.getItem("username");

    if (refresh) startRefreshInterval();

    set({ accessToken: access, refreshToken: refresh, username });
  },

  signup: async (username, email, password) => {
    await axios.post(`${baseURL}/accounts/api/register/`, {
      username,
      email,
      password,
    });
  },

  login: async (username, password) => {
    const res = await axios.post(`${baseURL}/accounts/api/login/`, {
      username,
      password,
    });

    const { access, refresh } = res.data;

    await AsyncStorage.setItem("accessToken", access);
    await AsyncStorage.setItem("refreshToken", refresh);
    await AsyncStorage.setItem("username", username);

    set({ accessToken: access, refreshToken: refresh, username });

    startRefreshInterval();
  },

  refreshAccessToken: async () => {
    const refresh = get().refreshToken || (await AsyncStorage.getItem("refreshToken"));
    if (!refresh) return null;

    try {
      const res = await axios.post(`${baseURL}/accounts/api/token/refresh/`, { refresh });
      const { access } = res.data;

      await AsyncStorage.setItem("accessToken", access);
      set({ accessToken: access });

      return access;
    } catch (error) {
      console.warn("Token refresh failed", error);
      get().logout();
      return null;
    }
  },

  logout: async () => {
    const refresh = get().refreshToken || (await AsyncStorage.getItem("refreshToken"));

    try {
      if (refresh) {
        await axios.post(`${baseURL}/accounts/api/logout/`, { refresh });
      }
    } catch (e: any) {
      if (e.response?.status !== 401) console.warn("Logout error", e);
    }

    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("refreshToken");
    await AsyncStorage.removeItem("username");

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
    console.log("Refreshing token...");
    await useAuthStore.getState().refreshAccessToken();
  }, 23 * 60 * 60 * 1000); 
}
