"use client";

// components/HomeScreen.tsx
import React, { useCallback, useMemo, useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useRouter } from "next/navigation";
type MarketItem = {
  id: string;
  title: string;
  value: string;
  change: string;
};

type IndexItem = {
  id: string;
  name: string;
  value: string;
  change: string;
  time?: string;
};

type DisplayItem = {
  id: string;
  leftTitle: string;
  leftSubtitle?: string;
  rightValue: string;
  rightChange: string;
};

const uid = (prefix = "") => prefix + Math.random().toString(36).slice(2, 9);

export default function HomeScreen() {
  const mainTabs = ["Indices", "Indian Stocks", "US Stocks", "Mutual Funds"];
  const subTabs = ["Indian Indices", "Global Indices", "Commodities"];

  const [mainTab, setMainTab] = useState<string>("Indices");
  const [subTab, setSubTab] = useState<string>("Indian Indices");

  // Enhanced dummy data with more comprehensive datasets
  const [marketData] = useState<MarketItem[]>([
    {
      id: uid("m"),
      title: "Nifty 50",
      value: "24,649.55",
      change: "+73.20 (0.30%)",
    },
    {
      id: uid("m"),
      title: "Sensex",
      value: "80,623",
      change: "+120.15 (0.15%)",
    },
    {
      id: uid("m"),
      title: "Dow Jones",
      value: "39,200",
      change: "+200.40 (0.50%)",
    },
    {
      id: uid("m"),
      title: "NASDAQ",
      value: "16,855",
      change: "-45.30 (-0.27%)",
    },
    {
      id: uid("m"),
      title: "Gold",
      value: "2,345.60",
      change: "+12.80 (0.55%)",
    },
  ]);

  const [indicesData] = useState<Record<string, IndexItem[]>>({
    "Indian Indices": [
      {
        id: uid("ii"),
        name: "Sensex",
        value: "80,623",
        change: "+79.27 (0.10%)",
        time: "Aug 07, 16:10",
      },
      {
        id: uid("ii"),
        name: "Nifty 50",
        value: "24,649.55",
        change: "+73.20 (0.30%)",
        time: "Aug 07, 16:10",
      },
      {
        id: uid("ii"),
        name: "Bank Nifty",
        value: "52,100",
        change: "-120.50 (-0.23%)",
        time: "Aug 07, 16:10",
      },
      {
        id: uid("ii"),
        name: "Nifty IT",
        value: "40,850",
        change: "+245.30 (0.60%)",
        time: "Aug 07, 16:10",
      },
      {
        id: uid("ii"),
        name: "Nifty Pharma",
        value: "22,560",
        change: "-89.75 (-0.40%)",
        time: "Aug 07, 16:10",
      },
      {
        id: uid("ii"),
        name: "Nifty Auto",
        value: "24,320",
        change: "+156.80 (0.65%)",
        time: "Aug 07, 16:10",
      },
      {
        id: uid("ii"),
        name: "Nifty FMCG",
        value: "58,490",
        change: "+123.45 (0.21%)",
        time: "Aug 07, 16:10",
      },
      {
        id: uid("ii"),
        name: "Nifty Metal",
        value: "9,875",
        change: "-67.20 (-0.68%)",
        time: "Aug 07, 16:10",
      },
    ],
    "Global Indices": [
      {
        id: uid("gi"),
        name: "Dow Jones",
        value: "39,200",
        change: "+200.40 (0.50%)",
        time: "Aug 07, 09:30",
      },
      {
        id: uid("gi"),
        name: "S&P 500",
        value: "5,250",
        change: "+15.20 (0.29%)",
        time: "Aug 07, 09:30",
      },
      {
        id: uid("gi"),
        name: "NASDAQ",
        value: "16,855",
        change: "-45.30 (-0.27%)",
        time: "Aug 07, 09:30",
      },
      {
        id: uid("gi"),
        name: "FTSE 100",
        value: "8,150",
        change: "+23.50 (0.29%)",
        time: "Aug 07, 08:00",
      },
      {
        id: uid("gi"),
        name: "DAX",
        value: "18,450",
        change: "-78.90 (-0.43%)",
        time: "Aug 07, 09:00",
      },
      {
        id: uid("gi"),
        name: "Nikkei 225",
        value: "35,680",
        change: "+189.60 (0.53%)",
        time: "Aug 07, 06:00",
      },
    ],
    Commodities: [
      {
        id: uid("c"),
        name: "Gold",
        value: "2,350.50",
        change: "-10.20 (-0.43%)",
        time: "Aug 07, 14:00",
      },
      {
        id: uid("c"),
        name: "Silver",
        value: "28.65",
        change: "+0.45 (1.59%)",
        time: "Aug 07, 14:00",
      },
      {
        id: uid("c"),
        name: "Crude Oil",
        value: "78.90",
        change: "-1.25 (-1.56%)",
        time: "Aug 07, 14:00",
      },
      {
        id: uid("c"),
        name: "Natural Gas",
        value: "2.45",
        change: "+0.08 (3.37%)",
        time: "Aug 07, 14:00",
      },
      {
        id: uid("c"),
        name: "Copper",
        value: "4.15",
        change: "-0.02 (-0.48%)",
        time: "Aug 07, 14:00",
      },
    ],
  });

  const [indianStocks] = useState<IndexItem[]>([
    {
      id: uid("s"),
      name: "Reliance Industries",
      value: "2,950.25",
      change: "+20.15 (0.68%)",
    },
    {
      id: uid("s"),
      name: "Tata Consultancy Services",
      value: "3,550.50",
      change: "-15.40 (-0.43%)",
    },
    {
      id: uid("s"),
      name: "Infosys",
      value: "1,480.10",
      change: "+12.10 (0.82%)",
    },
    {
      id: uid("s"),
      name: "HDFC Bank",
      value: "1,675.80",
      change: "+8.90 (0.53%)",
    },
    {
      id: uid("s"),
      name: "ICICI Bank",
      value: "1,245.60",
      change: "-7.30 (-0.58%)",
    },
    {
      id: uid("s"),
      name: "State Bank of India",
      value: "825.40",
      change: "+15.25 (1.88%)",
    },
    {
      id: uid("s"),
      name: "Bharti Airtel",
      value: "1,568.90",
      change: "+23.45 (1.52%)",
    },
    {
      id: uid("s"),
      name: "ITC Limited",
      value: "465.80",
      change: "-2.10 (-0.45%)",
    },
    {
      id: uid("s"),
      name: "Wipro",
      value: "545.25",
      change: "+6.80 (1.26%)",
    },
    {
      id: uid("s"),
      name: "HCL Technologies",
      value: "1,756.40",
      change: "+18.90 (1.09%)",
    },
  ]);

  const [usStocks] = useState<IndexItem[]>([
    {
      id: uid("u"),
      name: "Apple Inc",
      value: "215.55",
      change: "+2.50 (1.18%)",
    },
    {
      id: uid("u"),
      name: "Microsoft Corp",
      value: "380.40",
      change: "+1.15 (0.30%)",
    },
    {
      id: uid("u"),
      name: "Amazon.com Inc",
      value: "145.75",
      change: "-3.20 (-2.15%)",
    },
    {
      id: uid("u"),
      name: "Alphabet Inc",
      value: "168.90",
      change: "+2.85 (1.72%)",
    },
    {
      id: uid("u"),
      name: "Tesla Inc",
      value: "248.30",
      change: "+5.60 (2.31%)",
    },
    {
      id: uid("u"),
      name: "Meta Platforms",
      value: "502.75",
      change: "-8.45 (-1.65%)",
    },
    {
      id: uid("u"),
      name: "NVIDIA Corp",
      value: "875.20",
      change: "+12.80 (1.48%)",
    },
    {
      id: uid("u"),
      name: "Netflix Inc",
      value: "645.85",
      change: "-4.75 (-0.73%)",
    },
  ]);

  const [mutualFunds] = useState<IndexItem[]>([
    {
      id: uid("mf"),
      name: "SBI Bluechip Fund",
      value: "412.50",
      change: "+2.30 (0.56%)",
    },
    {
      id: uid("mf"),
      name: "HDFC Top 100 Fund",
      value: "768.90",
      change: "+4.85 (0.63%)",
    },
    {
      id: uid("mf"),
      name: "ICICI Pru Bluechip Fund",
      value: "125.40",
      change: "-0.80 (-0.63%)",
    },
    {
      id: uid("mf"),
      name: "Axis Bluechip Fund",
      value: "89.65",
      change: "+1.25 (1.41%)",
    },
    {
      id: uid("mf"),
      name: "Mirae Asset Large Cap",
      value: "234.75",
      change: "+2.90 (1.25%)",
    },
    {
      id: uid("mf"),
      name: "Parag Parikh Flexi Cap",
      value: "567.30",
      change: "+8.45 (1.51%)",
    },
  ]);

  // Reset subTab when mainTab changes
  useEffect(() => {
    if (mainTab === "Indices") {
      if (!subTabs.includes(subTab)) {
        setSubTab("Indian Indices");
      }
    }
  }, [mainTab, subTab]);

  // Transform datasets to a consistent display structure
  const displayData = useMemo<DisplayItem[]>(() => {
    if (mainTab === "Indices") {
      const arr = indicesData[subTab] ?? [];
      return arr.map((i) => ({
        id: i.id,
        leftTitle: i.name,
        leftSubtitle: i.time,
        rightValue: i.value,
        rightChange: i.change,
      }));
    } else if (mainTab === "Indian Stocks") {
      return indianStocks.map((i) => ({
        id: i.id,
        leftTitle: i.name,
        rightValue: i.value,
        rightChange: i.change,
      }));
    } else if (mainTab === "US Stocks") {
      return usStocks.map((i) => ({
        id: i.id,
        leftTitle: i.name,
        rightValue: i.value,
        rightChange: i.change,
      }));
    } else {
      return mutualFunds.map((i) => ({
        id: i.id,
        leftTitle: i.name,
        rightValue: i.value,
        rightChange: i.change,
      }));
    }
  }, [mainTab, subTab, indicesData, indianStocks, usStocks, mutualFunds]);

  const handleMainTabChange = useCallback((newTab: string) => {
    setMainTab(newTab);
    if (newTab === "Indices") {
      setSubTab("Indian Indices");
    }
  }, []);

  const handleSubTabChange = useCallback((newSubTab: string) => {
    setSubTab(newSubTab);
  }, []);

  // Render a single row
  const renderRow = (item: DisplayItem) => {
    const isNegative = item.rightChange.trim().startsWith("-");
    return (
      <div
        key={item.id}
        className="flex items-center bg-gradient-to-r from-gray-900/50 to-gray-800/30 
                   backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 
                   p-4 rounded-xl mb-3 transition-all duration-300 hover:shadow-lg 
                   hover:shadow-gray-900/20 hover:scale-[1.01] group"
      >
        {/* Logo circle */}
        <div
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-black 
                        flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl 
                        transition-all duration-300 group-hover:scale-105"
        >
          <span className="text-white font-bold text-sm tracking-wide">
            {(item.leftTitle || "").slice(0, 2).toUpperCase()}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="text-white font-semibold text-lg truncate group-hover:text-blue-200 
                       transition-colors duration-300"
          >
            {item.leftTitle}
          </p>
          {item.leftSubtitle && (
            <p
              className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 
                         transition-colors duration-300"
            >
              {item.leftSubtitle}
            </p>
          )}
        </div>

        <div className="text-right">
          <p
            className="text-white font-bold text-lg group-hover:text-blue-200 
                       transition-colors duration-300"
          >
            ₹{item.rightValue}
          </p>
          <div
            className={`flex items-center justify-end mt-1 text-sm font-medium 
                          transition-all duration-300 ${
                            isNegative
                              ? "text-red-400 group-hover:text-red-300"
                              : "text-green-400 group-hover:text-green-300"
                          }`}
          >
            {isNegative ? (
              <TrendingDown className="w-4 h-4 mr-1" />
            ) : (
              <TrendingUp className="w-4 h-4 mr-1" />
            )}
            {item.rightChange}
          </div>
        </div>
      </div>
    );
  };

  // Market card render
  const renderMarketCard = (item: MarketItem) => {
    const isNeg = item.change.trim().startsWith("-");
    return (
      <div
        key={item.id}
        className="min-w-[200px] bg-gradient-to-br from-gray-900/80 to-gray-800/40 
                   backdrop-blur-lg border border-gray-700/40 rounded-2xl p-5 mr-4 
                   shadow-xl hover:shadow-2xl transition-all duration-300 
                   hover:scale-105 hover:border-gray-600/60 group cursor-pointer"
      >
        <p
          className="text-gray-200 font-bold text-lg mb-3 group-hover:text-white 
                     transition-colors duration-300"
        >
          {item.title}
        </p>
        <p
          className="text-white text-2xl font-bold mb-3 group-hover:text-blue-200 
                     transition-colors duration-300"
        >
          ₹{item.value}
        </p>
        <div
          className={`flex items-center text-sm font-medium transition-all duration-300 ${
            isNeg
              ? "text-red-400 group-hover:text-red-300"
              : "text-green-400 group-hover:text-green-300"
          }`}
        >
          {isNeg ? (
            <TrendingDown className="w-4 h-4 mr-1" />
          ) : (
            <TrendingUp className="w-4 h-4 mr-1" />
          )}
          {item.change}
        </div>
      </div>
    );
  };
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.05)_49%,rgba(255,255,255,0.05)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Content */}
        <div className="px-4 lg:px-8 py-6">
          {/* Market Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white font-bold text-xl lg:text-2xl">
              MARKET OVERVIEW
            </h2>
            <button
              onClick={() => router.push("/market")}
              className="text-blue-400 hover:text-blue-300 text-sm font-medium 
                 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 
                 hover:bg-blue-500/20 transition-all duration-300"
            >
              View All
            </button>
          </div>

          <div className="flex overflow-x-auto pb-4 mb-8 space-x-1 scrollbar-hide">
            {marketData.map(renderMarketCard)}
          </div>

          {/* Main Tabs */}
          <div
            className="flex space-x-1 mb-6 overflow-x-auto bg-gray-900/50 rounded-2xl p-2 
                         border border-gray-700/30 backdrop-blur-sm"
          >
            {mainTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleMainTabChange(tab)}
                className={`px-6 py-3 rounded-xl whitespace-nowrap text-sm font-medium 
                          transition-all duration-300 ${
                            mainTab === tab
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                              : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                          }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Sub-tabs for Indices */}
          {mainTab === "Indices" && (
            <div className="flex space-x-2 mb-6 overflow-x-auto">
              {subTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleSubTabChange(tab)}
                  className={`px-4 py-2 rounded-xl whitespace-nowrap text-sm font-medium 
                            border transition-all duration-300 ${
                              tab === subTab
                                ? "bg-white text-black border-white shadow-lg"
                                : "bg-gray-800/50 text-gray-300 border-gray-700/50 hover:bg-gray-700/50 hover:text-white"
                            }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}

          {/* Data List */}
          <div className="space-y-0">
            {displayData.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-gray-500" />
                </div>
                <p className="text-gray-400 text-lg">No data available</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {displayData.map(renderRow)}
              </div>
            )}
          </div>

          {/* Footer spacing */}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
}
