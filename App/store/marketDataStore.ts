import {create} from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../api/axiosInstance"; // adjust path as needed
import { MarketData } from "../types/types"; // your typed interfaces

const STORAGE_KEY = "marketData";

interface MarketDataState {
  data: MarketData | null;
  loading: boolean;
  error: string | null;
  fetchMarketData: () => Promise<void>;
  loadFromStorage: () => Promise<void>;
}

const useMarketDataStore = create<MarketDataState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchMarketData: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get<MarketData>(
        "/core/api/market-data/?data_type=indian_indexes,global_indexes,mutual_funds,indian_stocks,us_stocks"
      );
      set({ data: res.data, loading: false, error: null });
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(res.data));
    } catch (e: any) {
      set({ error: e.message ?? "Failed to fetch", loading: false });
    }
  },

  loadFromStorage: async () => {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) set({ data: JSON.parse(saved) });
    } catch (e) {
      console.warn("Failed to load market data from storage", e);
    }
  },
}));

export default useMarketDataStore;
