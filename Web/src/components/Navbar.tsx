"use client";

import Link from "next/link";
import Image from "next/image";
import { User, Menu, X, Search, Bell } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-2xl w-full border-b border-gray-800 sticky top-0 z-50">
      <div className="px-4 md:px-8 py-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3 group flex-shrink-0">
            <Link
              href="/home"
              className="flex items-center space-x-2 md:space-x-3"
            >
              <div className="relative">
                <Image
                  src="/logoround.png"
                  alt="marketX Round Logo"
                  width={40}
                  height={40}
                  className="md:w-12 md:h-12 rounded-full object-cover ring-2 ring-green-400/20 group-hover:ring-green-400/50 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <Image
                src="/logoname.png"
                alt="marketX Text Logo"
                width={100}
                height={28}
                className="md:w-[120px] md:h-8 object-contain group-hover:brightness-110 transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-6 xl:space-x-8">
            <NavItem href="/home" label="Home" />
            <NavItem href="/market" label="Market" />
            <NavItem href="/stock" label="Stock" />
            <NavItem href="/watchlist" label="Watchlist" />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center bg-gray-800/50 backdrop-blur-sm rounded-xl px-4 py-2 border border-gray-700/50 hover:border-green-400/30 transition-all duration-300 group">
              <Search className="w-5 h-5 text-gray-400 mr-3 group-hover:text-green-400 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search stocks, indices..."
                className="bg-transparent text-gray-200 placeholder-gray-400 flex-1 outline-none w-64 text-sm"
              />
            </div>

            {/* Mobile Search Icon */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 hover:border-green-400/30 transition-all duration-300 group"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-300 group-hover:text-green-400 transition-colors duration-300" />
            </button>

            {/* Notification Icon as Link */}
            <Link href="/notifications" className="relative group">
              <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 hover:border-green-400/30 transition-all duration-300">
                <Bell className="w-5 h-5 text-gray-300 group-hover:text-green-400 transition-colors duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">3</span>
              </div>
            </Link>

            {/* Profile Icon on all screens */}
            <Link href="/profile">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700/50 hover:border-green-400/30 transition-all duration-300 group">
                <User
                  className="text-gray-400 group-hover:text-green-400 transition-colors duration-300"
                  size={18}
                />
              </div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700/50 hover:border-green-400/30 transition-all duration-300 group"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X
                  size={20}
                  className="text-gray-400 group-hover:text-green-400 transition-colors duration-300"
                />
              ) : (
                <Menu
                  size={20}
                  className="text-gray-400 group-hover:text-green-400 transition-colors duration-300"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
          {/* Mobile Search */}
          <div className="md:hidden mb-4">
            <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-700/50">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search stocks, indices..."
                className="bg-transparent text-gray-200 placeholder-gray-400 flex-1 outline-none text-sm"
              />
            </div>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col space-y-3">
            <MobileNavItem
              href="/home"
              label="Home"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavItem
              href="/market"
              label="Market"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavItem
              href="/stock"
              label="Stock"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavItem
              href="/watchlist"
              label="Watchlist"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="relative px-3 py-2 text-sm md:text-base font-medium text-gray-300 hover:text-white transition-all duration-300 group"
  >
    <span className="relative z-10">{label}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
  </Link>
);

const MobileNavItem = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) => (
  <Link href={href}>
    <div
      onClick={onClick}
      className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-green-400/10 hover:to-emerald-400/10 rounded-lg transition-all duration-200 font-medium group"
    >
      <span className="relative">
        {label}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full transition-all duration-300"></div>
      </span>
    </div>
  </Link>
);

export default Navbar;
