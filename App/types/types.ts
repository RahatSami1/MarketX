// types.ts
export interface Exchange {
  id: number;
  name: string;
  country: string;
  currency: string;
  created_at: string;
  updated_at: string;
}

export interface Sector {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  is_block: boolean;
}

export interface Index {
  id: number;
  name: string;
  symbol: string;
  country: string;
  currency: string;
  created_at: string;
  updated_at: string;
  is_block: boolean;
}

export interface Stock {
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
  price_updated_at: string | null;
  updated_at: string;
  is_block: boolean;
}

export interface IndexItem {
  id: number;
  name: string;
  symbol: string;
  country: string;
  currency: string;
  created_at: string;
  updated_at: string;
  is_block: boolean;
}

export interface MutualFund {
  id: number;
  watchlist_status: boolean;
  name: string;
  category: string;
  nav: string;
}

export interface MarketData {
  indian_stocks: Stock[];
  us_stocks: Stock[];
  indian_indexes: IndexItem[];
  global_indexes: IndexItem[];
  mutual_funds: MutualFund[];
}
