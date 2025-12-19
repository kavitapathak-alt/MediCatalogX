"use client";

import { useState, useEffect, useRef } from "react";
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
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [search, setSearch] = useState("");

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

  useEffect(() => {
    if (showMobileSearch) {
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  }, [showMobileSearch]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search?q=${encodeURIComponent(search)}`);
    setShowMobileSearch(false);
  };

  return (
    <div className="w-full sticky top-0 z-[999] bg-white">
      {/* TOP BAR */}
      <div className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-3 py-2 flex justify-between items-center">
          <div className="flex gap-2">
            <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-xs">
              <Package className="w-4 h-4" /> Free Delivery ₹499+
            </span>
            <span className="hidden sm:flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-xs">
              <Shield className="w-4 h-4" /> 100% Genuine
            </span>
          </div>
          <span className="flex items-center gap-1 bg-yellow-500 px-3 py-1 rounded-full text-xs font-bold">
            <Sparkles className="w-4 h-4" /> 24/7 Emergency
          </span>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className={`transition ${isScrolled ? "shadow-lg" : "shadow-sm"}`}>
        <div className="max-w-7xl mx-auto px-3">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center">
                <Pill className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-blue-800">MedStore</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg"
                >
                  {item.name}
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 text-[9px] bg-red-500 text-white px-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.hot && (
                    <span className="absolute -top-1 -right-1 text-xs">🔥</span>
                  )}
                </a>
              ))}
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              {/* Desktop Search */}
              <form
                onSubmit={handleSearch}
                className="hidden lg:block relative"
              >
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search medicines..."
                  className="w-56 pl-9 pr-3 py-2 border rounded-lg text-sm"
                />
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </form>

              <button className="hidden sm:flex p-2 rounded-lg bg-pink-100">
                <Heart className="text-pink-600" />
              </button>

              <button className="p-2 rounded-lg bg-blue-100">
                <ShoppingCart className="text-blue-700" />
              </button>

              <button className="hidden sm:flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                <User className="w-4 h-4" /> Login
              </button>

              {/* MOBILE SEARCH ICON (FIXED VISIBILITY) */}
              <button
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="lg:hidden p-2 rounded-lg bg-blue-700 text-white"
              >
                <Search />
              </button>

              {/* MOBILE MENU ICON (FIXED VISIBILITY) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg bg-blue-700 text-white"
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          {showMobileSearch && (
            <form onSubmit={handleSearch} className="pb-3">
              <input
                ref={searchRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search medicines..."
                className="w-full py-2 px-4 border rounded-lg"
              />
            </form>
          )}

          {/* MOBILE MENU */}
          {isOpen && (
            <div className="lg:hidden pb-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block bg-blue-700 text-white px-4 py-3 rounded-lg mb-2"
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
