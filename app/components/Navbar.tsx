"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  Pill,
  Phone,
  Shield,
  Package,
  Heart,
  Sparkles,
} from "lucide-react";

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
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /* ✅ WHOLE HEADER STICKY */
    <div className="w-full sticky top-0 z-[999] bg-white">
      {/* ================= TOP ANNOUNCEMENT BAR ================= */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full">
                <Package className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-medium">
                  Free Delivery ₹499+
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full">
                <Shield className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-medium">
                  100% Genuine
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-yellow-500 px-2.5 py-1 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-bold">
                  24/7 Emergency
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-medium">
                  9903241021
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav
        className={`w-full transition-all ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center">
                <Pill className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-blue-800">
                MedStore
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition"
                >
                  {item.name}
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[9px] bg-red-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.hot && (
                    <span className="absolute -top-1 -right-1 text-xs">
                      🔥
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Desktop Search */}
              <div className="hidden lg:block relative">
                <input
                  type="text"
                  placeholder="Search medicines..."
                  className="w-56 py-1.5 pl-9 pr-3 text-sm border rounded-lg"
                />
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Wishlist */}
              <button className="hidden sm:flex relative p-2 rounded-lg bg-pink-50">
                <Heart className="w-5 h-5 text-pink-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                  5
                </span>
              </button>

              {/* Cart */}
              <button className="relative p-2 rounded-lg bg-blue-50">
                <ShoppingCart className="w-5 h-5 text-blue-700" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Login */}
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white text-sm">
                <User className="w-4 h-4" /> Login
              </button>

              {/* Mobile Search */}
              <button
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="lg:hidden p-2 rounded-lg bg-gray-100"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100"
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {showMobileSearch && (
            <div className="lg:hidden pb-3">
              <input
                type="text"
                placeholder="Search medicines..."
                className="w-full py-2 px-4 border rounded-lg"
              />
            </div>
          )}

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-3 border-t">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 rounded-lg bg-blue-800 text-white mb-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
