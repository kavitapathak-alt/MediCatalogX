"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, User, Pill, Phone, Clock, Shield, Package, Heart, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Cancer", href: "/cancer", badge: "RX" },
    { name: "Medicines", href: "/medicines", hot: true },
    { name: "Pregnancy", href: "/pregnancy", badge: "NEW" },
    { name: "Tubes", href: "/tubes" },
    { name: "Injections", href: "/injections", badge: "SALE" },
    { name: "Healthcare", href: "/healthcare", sale: true },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Top Announcement Bar - Blue-Yellow Theme */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            {/* Left - Delivery & Genuine */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full">
                <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Free Delivery ₹499+</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">100% Genuine</span>
              </div>
            </div>
            
            {/* Right - Emergency & Phone */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 bg-yellow-500/90 px-2.5 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-bold whitespace-nowrap">24/7 Emergency</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">1800-123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sticky with Blue-Yellow */}
      <nav className="sticky top-0 z-50 bg-white border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          {/* Main Row */}
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center shadow-md">
                <Pill className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
                  MedStore
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-all"
                >
                  {item.name}
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[8px] font-bold bg-red-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.hot && (
                    <span className="absolute -top-1 -right-1 text-xs">🔥</span>
                  )}
                  {item.sale && (
                    <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[8px] font-bold bg-yellow-500 text-white rounded-full">
                      SALE
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Desktop Search */}
              <div className="hidden lg:flex items-center relative">
                <input
                  type="text"
                  placeholder="Search medicines..."
                  className="w-48 xl:w-56 py-1.5 pl-9 pr-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50"
                />
                <Search className="absolute left-2.5 w-4 h-4 text-gray-400" />
              </div>

              {/* Wishlist - Hidden on very small mobile */}
              <button className="hidden xs:flex relative p-2 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  5
                </span>
              </button>

              {/* Mobile Search Button */}
              <button 
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </button>

              {/* Cart */}
              <button className="relative p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
                <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-yellow-500 text-white text-[10px] sm:text-xs rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </button>

              {/* Login Button - Responsive */}
              <button className="hidden sm:flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-800 text-white font-medium hover:shadow-md transition-all text-sm">
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Login</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {showMobileSearch && (
            <div className="lg:hidden pb-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search medicines..."
                  className="w-full py-2.5 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <button 
                  onClick={() => setShowMobileSearch(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-3 border-t border-gray-200">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between py-2.5 px-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg font-medium text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-xs font-bold bg-red-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {item.hot && <span className="text-xs">🔥</span>}
                    {item.sale && (
                      <span className="px-2 py-0.5 text-xs font-bold bg-yellow-500 text-white rounded-full">
                        SALE
                      </span>
                    )}
                  </a>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-blue-700 to-blue-800 text-white font-medium text-sm">
                  <User className="w-4 h-4" />
                  Login
                </button>
                <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-pink-50 text-pink-600 font-medium text-sm">
                  <Heart className="w-4 h-4" />
                  Wishlist
                </button>
              </div>

              {/* Emergency Contact - Mobile */}
              <div className="mt-3 p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
                <div className="flex items-center gap-2 mb-1">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-bold text-gray-900">Emergency</span>
                </div>
                <div className="text-lg font-bold text-red-600">1800-123-4567</div>
                <div className="text-xs text-gray-600">24/7 Medical Support</div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}