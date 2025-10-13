import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../api/axiosInstance";

// ---- Types ----
interface Exchange {
  id: number;
  name: string;
  country: string;
  currency: string;
}

interface Sector {
  id: number;
  name: string;
  is_block: boolean;
}

interface Index {
  id: number;
  name: string;
  symbol: string;
  country: string;
  currency: string;
  is_block: boolean;
}

interface Stock {
  id: number;
  exchange: Exchange;
  sector: Sector;
  index: Index;
  price_difference: number;
  price_difference_percentage: number;
  watchlist_status: boolean;
  symbol: string;
  name: string;
  last_price: string;
  previous_close_price: string;
  currency: string;
}

interface MutualFund {
  id: number;
  watchlist_status: boolean;
  name: string;
  category: string;
  nav: string;
}

interface IndexData {
  id: number;
  name: string;
  symbol: string;
  country: string;
  currency: string;
  is_block: boolean;
}

interface WatchlistData {
  stocks: Stock[];
  mutual_funds: MutualFund[];
  indexes: IndexData[];
}

interface WatchlistStore {
  watchlist: WatchlistData;
  loading: boolean;
  error: string | null;
  fetchWatchlist: () => Promise<void>;
    addAsset: (asset_type: "stock" | "mutual_fund" | "index", asset_id: number) => Promise<void>;
  removeAsset: (
    asset_type: "stock" | "mutual_fund" | "index",
    asset_id: number
  ) => Promise<void>;
}

export const useWatchlistStore = create<WatchlistStore>((set, get) => ({
  watchlist: { stocks: [], mutual_funds: [], indexes: [] },
  loading: false,
  error: null,

  // --- Fetch watchlist from API ---
  fetchWatchlist: async () => {
    set({ loading: true, error: null });
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) throw new Error("No access token found");

      const response = await axiosInstance.get("/core/api/watchlist/", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data: WatchlistData = response.data;
      await AsyncStorage.setItem("watchlistData", JSON.stringify(data));
      set({ watchlist: data, loading: false });
    } catch (err: any) {
      console.error("Error fetching watchlist:", err.response?.data || err.message);
      set({ error: err.message || "Failed to fetch watchlist", loading: false });

      // Load offline cache if available
      try {
        const offlineData = await AsyncStorage.getItem("watchlistData");
        if (offlineData) {
          set({ watchlist: JSON.parse(offlineData) });
        }
      } catch (offlineErr) {
        console.error("Failed to load offline watchlist:", offlineErr);
      }
    }
  },

  // --- Remove asset from watchlist ---
  removeAsset: async (asset_type, asset_id) => {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) throw new Error("No access token found");

      // Map to backend naming
      const apiAssetTypeMap: Record<string, string> = {
        stock: "stock",
        mutual_fund: "mutualfund", // match backend naming
        index: "index",
      };

      await axiosInstance.delete("/core/api/watchlist/remove-asset/", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: {
          asset_type: apiAssetTypeMap[asset_type],
          asset_id,
        },
      });

      // --- Optimistic local update ---
      const current = get().watchlist;
      const updated = { ...current };

      if (asset_type === "stock") {
        updated.stocks = current.stocks.filter(s => s.id !== asset_id);
      } else if (asset_type === "mutual_fund") {
        updated.mutual_funds = current.mutual_funds.filter(m => m.id !== asset_id);
      } else if (asset_type === "index") {
        updated.indexes = current.indexes.filter(i => i.id !== asset_id);
      }

      set({ watchlist: updated });
      await AsyncStorage.setItem("watchlistData", JSON.stringify(updated));
    } catch (err: any) {
      console.error(
        "Error removing asset:",
        err.response?.data || err.message
      );
      set({ error: err.response?.data?.detail || err.message || "Failed to remove asset" });
    }
  },
  
// --- Add asset to watchlist ---
addAsset: async (asset_type, asset_id) => {
  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) throw new Error("No access token found");

    // Map frontend type to backend type
    const apiAssetTypeMap: Record<string, string> = {
      stock: "stock",
      mutual_fund: "mutualfund", // backend expects "mutualfund"
      index: "index",
    };

    if (!asset_type || !asset_id) throw new Error("asset_type and asset_id are required");

    await axiosInstance.post(
      "/core/api/watchlist/add-asset/",
      {
        asset_type: apiAssetTypeMap[asset_type],
        asset_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // <-- important
        },
      }
    );

    // Refresh local watchlist
    await get().fetchWatchlist();
  } catch (err: any) {
    console.error("Error adding asset:", err.response?.data || err.message);
    set({
      error: err.response?.data?.error || err.message || "Failed to add asset",
    });
  }
},

}));
