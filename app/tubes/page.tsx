"use client";

import { useState, useEffect } from "react";
import { Droplets, Package, Thermometer, Shield, Syringe, Home, Filter, ChevronDown, Phone, Clock, Search, Star, Truck, CheckCircle, AlertCircle, Heart } from "lucide-react";
import MedicineCard from "@/app/components/MedicineCard";

const tubeProducts = [
  {
    id: 1,
    name: "Skin Shine Cream",
    type: "Dermatological",
    storage: "Room Temperature",
    price: 299,
    prescription: false,
    image: "/images/tubes/skinshinecream.jpg",
    description: "Advanced skin brightening cream with natural ingredients for glowing skin. Reduces pigmentation and improves skin texture. Contains Vitamin C, Kojic Acid, and Licorice extracts.",
    rating: 4.5,
    brand: "SkinCare Labs",
    dosage: "50g",
    quantity: "1 tube",
    discount: 350,
    isHot: true,
    stock: "In Stock",
    delivery: "Same day",
    category: "skincare"
  },
  {
    id: 2,
    name: "Skin Shine Lotion",
    type: "Dermatological",
    storage: "Room Temperature",
    price: 350,
    prescription: false,
    image: "/images/tubes/skinshine.jpg",
    description: "Advanced skin nourishing lotion with Vitamin E and natural oils. Provides hydration and improves skin elasticity. Suitable for all skin types.",
    rating: 4.3,
    brand: "SkinCare Labs",
    dosage: "100ml",
    quantity: "1 bottle",
    isNew: true,
    stock: "In Stock",
    delivery: "24 hours",
    category: "skincare"
  },
  {
    id: 3,
    name: "Betnovate-C Cream",
    type: "Dermatological",
    storage: "Room Temperature",
    price: 85,
    prescription: true,
    image: "/images/tubes/betnovate-c.jpg",
    description: "Combination cream containing Betamethasone (steroid) and Clioquinol (antifungal). Used for inflammatory skin conditions with fungal infections.",
    rating: 4.4,
    brand: "GSK",
    dosage: "15g",
    quantity: "1 tube",
    isSale: true,
    stock: "Limited Stock",
    delivery: "24 hours",
    category: "steroid"
  },
  {
    id: 4,
    name: "Myfair Cream",
    type: "Dermatological",
    storage: "Room Temperature",
    price: 420,
    prescription: true,
    image: "/images/tubes/myfair.jpg",
    description: "Skin lightening cream containing glycolic acid and natural extracts. Reduces dark spots and evens skin tone. Dermatologist recommended.",
    rating: 4.7,
    brand: "Dermaceutics",
    dosage: "30g",
    quantity: "1 tube",
    discount: 500,
    isHot: true,
    stock: "In Stock",
    delivery: "48 hours",
    category: "skincare"
  },
  {
    id: 5,
    name: "Anovate Cream",
    type: "Dermatological",
    storage: "Room Temperature",
    price: 180,
    prescription: true,
    image: "/images/tubes/anovate.jpg",
    description: "Combination cream with steroid and local anesthetic for ano-rectal conditions. Provides relief from itching and inflammation.",
    rating: 4.2,
    brand: "Glaxo",
    dosage: "15g",
    quantity: "1 tube",
    isNew: true,
    stock: "In Stock",
    delivery: "Same day",
    category: "steroid"
  },
  {
    id: 6,
    name: "Panderm Plus Cream",
    type: "Dermatological",
    storage: "Room Temperature",
    price: 120,
    prescription: true,
    image: "/images/tubes/panderm++.jpg",
    description: "Triple combination cream with steroid, antibiotic and antifungal. Treats mixed skin infections with inflammation.",
    rating: 4.6,
    brand: "Macleods",
    dosage: "15g",
    quantity: "1 tube",
    stock: "In Stock",
    delivery: "Same day",
    category: "combination"
  },
  {
    id: 7,
    name: "Betadine Ointment",
    type: "Antiseptic",
    storage: "Room Temperature",
    price: 65,
    prescription: false,
    image: "/images/tubes/betadine.jpg",
    description: "Povidone-iodine antiseptic ointment for wound care. Prevents infection in cuts, burns and surgical wounds.",
    rating: 4.5,
    brand: "Win-Medicare",
    dosage: "25g",
    quantity: "1 tube",
    isSale: true,
    stock: "Limited Stock",
    delivery: "48 hours",
    category: "antiseptic"
  },
  {
    id: 8,
    name: "Tenovate Cream",
    type: "Dermatological",
    storage: "Room Temperature",
    price: 75,
    prescription: true,
    image: "/images/tubes/tenovate.jpg",
    description: "Topical corticosteroid cream containing Clobetasol Propionate. Used for severe inflammatory skin conditions.",
    rating: 4.4,
    brand: "Glaxo",
    dosage: "15g",
    quantity: "1 tube",
    stock: "In Stock",
    delivery: "24 hours",
    category: "steroid"
  },
  {
    id: 9,
    name: "Myfair Forte Cream",
    type: "Dermatological",
    storage: "Room Temperature",
    price: 550,
    prescription: true,
    image: "/images/tubes/myfair2.jpg",
    description: "Advanced skin lightening cream with higher concentration of active ingredients. For stubborn pigmentation and melasma.",
    rating: 4.8,
    brand: "Dermaceutics",
    dosage: "30g",
    quantity: "1 tube",
    discount: 650,
    isHot: true,
    stock: "In Stock",
    delivery: "24 hours",
    category: "skincare"
  },
  {
    id: 10,
    name: "Clobetasol Propionate Cream",
    type: "Dermatological",
    storage: "Room Temperature",
    price: 95,
    prescription: true,
    image: "/images/tubes/clopg.jpg",
    description: "Potent topical steroid cream for severe inflammatory skin conditions. Fast acting formula for quick relief.",
    rating: 4.3,
    brand: "Mankind",
    dosage: "15g",
    quantity: "1 tube",
    stock: "In Stock",
    delivery: "24 hours",
    category: "steroid"
  },
  {
    id: 11,
    name: "Mometasone Furoate Cream",
    type: "Dermatological",
    storage: "Room Temperature",
    price: 110,
    prescription: true,
    image: "/images/tubes/elosoneht.jpg",
    description: "Moderate potency steroid cream for various dermatological conditions. Suitable for sensitive skin areas.",
    rating: 4.5,
    brand: "Glenmark",
    dosage: "15g",
    quantity: "1 tube",
    stock: "In Stock",
    delivery: "24 hours",
    category: "steroid"
  },
  {
    id: 12,
    name: "Tenovate-G Cream",
    type: "Dermatological",
    storage: "Room Temperature",
    price: 85,
    prescription: true,
    image: "/images/tubes/tenovate.jpg",
    description: "Combination cream with Clobetasol and Gentamicin for infected inflammatory skin conditions.",
    rating: 4.4,
    brand: "Glaxo",
    dosage: "15g",
    quantity: "1 tube",
    stock: "In Stock",
    delivery: "24 hours",
    category: "combination"
  },
  {
    id: 13,
    name: "Betnovate-N Cream",
    type: "Dermatological",
    storage: "Room Temperature",
    price: 95,
    prescription: true,
    image: "/images/tubes/betnovate-n.png",
    description: "Combination cream containing Betamethasone (steroid) and Neomycin (antibiotic). Used for inflammatory skin conditions with secondary bacterial infections.",
    rating: 4.6,
    brand: "GSK",
    dosage: "15g",
    quantity: "1 tube",
    isNew: true,
    stock: "In Stock",
    delivery: "24 hours",
    category: "combination"
  }
];

const heroSlides = [
  {
    title: "Dermatological Creams & Ointments",
    subtitle: "Doctor Recommended • Skin Specialist Approved • 24/7 Support",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Skin Care Solutions",
    subtitle: "Acne Treatment • Pigmentation • Eczema • Psoriasis • Dermatitis",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Professional Skin Formulas",
    subtitle: "Steroid Creams • Antifungal • Antibiotic • Moisturizers • Specialized Care",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Trusted Dermatology Brands",
    subtitle: "GSK • Glaxo • Dermaceutics • Macleods • Glenmark • Mankind",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80"
  }
];

const categories = [
  { id: "all", name: "All Products", icon: "💊", count: 13 },
  { id: "skincare", name: "Skin Care", icon: "✨", count: 4 },
  { id: "steroid", name: "Steroid Creams", icon: "💊", count: 5 },
  { id: "antiseptic", name: "Antiseptic", icon: "🩹", count: 1 },
  { id: "combination", name: "Combination", icon: "🔄", count: 3 }
];

const skinConditions = [
  { id: "eczema", name: "Eczema/Dermatitis", icon: "🔴", count: 4 },
  { id: "psoriasis", name: "Psoriasis", icon: "🟡", count: 2 },
  { id: "acne", name: "Acne", icon: "⚫", count: 3 },
  { id: "pigmentation", name: "Pigmentation", icon: "🟤", count: 3 },
  { id: "fungal", name: "Fungal Infections", icon: "🦠", count: 2 },
  { id: "wound", name: "Wound Care", icon: "🩹", count: 1 }
];

export default function TubesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCondition, setSelectedCondition] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredProducts = tubeProducts.filter(product => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
    return true;
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleViewDetails = (id: number) => {
    console.log("View details for product ID:", id);
  };

  // Sort products based on sortBy
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel - Blue Theme */}
      <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Background Image */}
            <img 
              src={slide.image} 
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/60 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                {/* Badge - Yellow on Blue */}
                <div className="inline-flex items-center gap-1 bg-yellow-500 px-2 py-1 rounded-full mb-3 max-w-max">
                  <Droplets className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold text-white">DERMATOLOGY SPECIALIST</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                  {slide.title}
                </h1>
                
                {/* Subtitle */}
                <p className="text-sm sm:text-base text-white/90 mb-4 max-w-md">
                  {slide.subtitle}
                </p>
                
                {/* Search Bar */}
                <div className="max-w-md">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search creams, ointments..."
                        className="w-full py-2.5 px-4 rounded-lg text-gray-800 focus:outline-none text-sm"
                      />
                    </div>
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 min-w-[100px]">
                      <Search className="w-4 h-4" />
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-20"
        >
          ←
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-20"
        >
          →
        </button>
      </div>

      {/* Safety Banner - Yellow Theme */}
      <div className="container mx-auto px-4 -mt-4 relative z-10">
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl p-4 shadow-lg">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-yellow-800 text-lg mb-1">Important Safety Notice</h3>
              <p className="text-yellow-700 text-sm">
                Steroid creams require medical prescription. Long-term use without supervision can cause skin thinning and other side effects. 
                Always consult a dermatologist before using prescription creams.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center justify-between w-full p-3 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filters & Sort</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Category Filters - Blue Yellow Theme */}
        <div className={`${showMobileFilters ? 'block' : 'hidden lg:block'} mb-6 sm:mb-8`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 sm:mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Browse Skin Products</h2>
              <p className="text-sm text-gray-600">Filter by product type or skin condition</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              {/* Sort By */}
              <div className="relative w-full sm:w-auto">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rating</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1 bg-blue-50 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-all text-sm ${
                    viewMode === "grid" 
                      ? "bg-blue-600 text-white shadow-sm" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-all text-sm ${
                    viewMode === "list" 
                      ? "bg-blue-600 text-white shadow-sm" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

        </div>


        {/* Products Grid/List */}
        <div className="mb-8 sm:mb-12">
          <div className={`${viewMode === "grid" 
            ? "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" 
            : "space-y-4"
          }`}>
            {sortedProducts.map((product) => (
              <MedicineCard
                key={product.id}
                product={product}
                type={viewMode}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {/* No Results */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-10 sm:py-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                <Droplets className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">No products found</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto px-4">
                Try adjusting your filters or browse different categories
              </p>
            </div>
          )}
        </div>

        {/* Information Cards - Blue Yellow Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Storage Guide - Blue */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 sm:p-6 border border-blue-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Thermometer className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Storage & Usage</h2>
                <p className="text-sm text-blue-600">Proper care for skin products</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-200">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Room Temperature</h4>
                  <p className="text-gray-600 text-xs">• Store between 15-30°C</p>
                  <p className="text-gray-600 text-xs">• Keep away from direct sunlight</p>
                  <p className="text-gray-600 text-xs">• Close cap tightly after use</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-200">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Usage Guidelines</h4>
                  <p className="text-gray-600 text-xs">• Clean skin before application</p>
                  <p className="text-gray-600 text-xs">• Apply thin layer only</p>
                  <p className="text-gray-600 text-xs">• Wash hands after use</p>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Information - Yellow */}
          <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-4 sm:p-6 border border-yellow-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Safety Guidelines</h2>
                <p className="text-sm text-yellow-600">Important safety information for skin products</p>
              </div>
            </div>
            
            <div className="space-y-2">
              {[
                "Consult dermatologist before use",
                "Follow prescribed dosage strictly",
                "Do not use on broken skin unless directed",
                "Avoid eye and mucous membrane contact",
                "Discontinue if irritation occurs",
                "Keep away from children"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0 mt-1.5"></div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Warning Box */}
            <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <AlertCircle className="w-4 h-4 text-yellow-700" />
                <span className="font-bold text-yellow-800 text-sm">Important Notice</span>
              </div>
              <p className="text-xs text-yellow-700">
                Steroid creams should not be used for long periods without medical supervision. 
                Overuse can cause skin thinning, stretch marks, and other side effects.
              </p>
            </div>
          </div>
        </div>

        {/* Skin Conditions Treatment Guide */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Skin Conditions & Treatment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                condition: "Eczema/Dermatitis",
                treatment: "Corticosteroid creams",
                examples: ["Betnovate", "Tenovate", "Mometasone"],
                icon: "🔴",
                color: "bg-blue-50"
              },
              {
                condition: "Psoriasis",
                treatment: "Vitamin D analogues, Steroids",
                examples: ["Clobetasol", "Calcipotriol"],
                icon: "🟡",
                color: "bg-yellow-50"
              },
              {
                condition: "Fungal Infections",
                treatment: "Antifungal creams",
                examples: ["Clotrimazole", "Miconazole"],
                icon: "🦠",
                color: "bg-blue-50"
              },
              {
                condition: "Acne",
                treatment: "Benzoyl Peroxide, Retinoids",
                examples: ["Adapalene", "Clindamycin"],
                icon: "⚫",
                color: "bg-yellow-50"
              },
              {
                condition: "Pigmentation",
                treatment: "Skin lightening agents",
                examples: ["Kojic acid", "Glycolic acid"],
                icon: "🟤",
                color: "bg-blue-50"
              },
              {
                condition: "Wound Care",
                treatment: "Antiseptic ointments",
                examples: ["Povidone-iodine", "Fusidic acid"],
                icon: "🩹",
                color: "bg-yellow-50"
              }
            ].map((item, index) => (
              <div key={index} className={`${item.color} rounded-xl p-4 border border-gray-200`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.condition}</h3>
                    <p className="text-sm text-blue-600">{item.treatment}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {item.examples.map((example, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/70 rounded text-xs text-gray-700">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Brands */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Trusted Dermatology Brands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {[
              { name: "GSK", logo: "🏥", color: "bg-blue-50" },
              { name: "Glaxo", logo: "💊", color: "bg-yellow-50" },
              { name: "Dermaceutics", logo: "✨", color: "bg-blue-50" },
              { name: "Macleods", logo: "🏭", color: "bg-yellow-50" },
              { name: "Glenmark", logo: "🌿", color: "bg-blue-50" },
              { name: "Mankind", logo: "👨‍👩‍👧‍👦", color: "bg-yellow-50" },
              { name: "Win-Medicare", logo: "🩹", color: "bg-blue-50" },
              { name: "Cipla", logo: "🏢", color: "bg-yellow-50" },
              { name: "Emcure", logo: "💉", color: "bg-blue-50" },
              { name: "Sun Pharma", logo: "☀️", color: "bg-yellow-50" }
            ].map((brand, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className={`w-12 h-12 mx-auto mb-3 ${brand.color} rounded-full flex items-center justify-center text-xl`}>
                  {brand.logo}
                </div>
                <span className="font-medium text-gray-800 text-sm">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Blue Yellow */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl p-4 sm:p-6 text-center text-white shadow-lg">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
            <Phone className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-xs sm:text-sm font-bold">24/7 Dermatology Support</span>
          </div>
          
          <h2 className="text-lg sm:text-xl font-bold mb-3">Need Dermatologist Consultation?</h2>
          <p className="text-sm sm:text-base mb-4 text-blue-100 max-w-lg mx-auto">
            Connect with our panel of certified dermatologists for personalized skin care, 
            treatment plans, and expert guidance.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 justify-center">
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-4 py-2.5 rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm">
              <span className="text-base">👨‍⚕️</span>
              Consult Dermatologist
            </button>
            <button className="bg-white/10 backdrop-blur-lg border-2 border-white/30 hover:bg-white/20 px-4 py-2.5 rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              Emergency: 1800-123-4567
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}