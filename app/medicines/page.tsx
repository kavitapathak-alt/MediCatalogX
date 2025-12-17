"use client";

import { useState, useEffect } from "react";
import { Pill, Filter, Search, Shield, Thermometer, ChevronDown, Phone, Star, Truck, X, ShoppingCart, AlertCircle, CheckCircle } from "lucide-react";

const generalMedicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    type: "Analgesic & Antipyretic",
    storage: "Room Temperature",
    price: 25,
    prescription: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/4/407801097/RC/YV/RU/13501949/furosemide-20mg-spironolactone-50mg-tablets-1000x1000.jpeg",
    description: "Paracetamol (Acetaminophen) is a common analgesic and antipyretic used to treat mild to moderate pain and fever. It works by inhibiting prostaglandin synthesis in the brain.",
    rating: 4.2,
    brand: "Cipla",
    dosage: "500 mg",
    quantity: "10 tablets",
    discount: 30,
    isHot: true,
    stock: "In Stock",
    delivery: "2 hours",
    category: "fever"
  },
  {
    id: 2,
    name: "Amoxicillin 250mg",
    type: "Antibiotic",
    storage: "Room Temperature",
    price: 120,
    prescription: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/1/AV/FS/MP/13166357/frusemde-ip-20mg-spironolactone-ip-50mg--1000x1000.jpg",
    description: "Amoxicillin is a penicillin-type antibiotic that fights bacteria. It is used to treat many different types of infection caused by bacteria.",
    rating: 4.0,
    brand: "GSK",
    dosage: "250 mg",
    quantity: "10 capsules",
    discount: 15,
    isNew: true,
    stock: "In Stock",
    delivery: "4 hours",
    category: "antibiotics"
  },
  {
    id: 3,
    name: "Cetirizine 10mg",
    type: "Antihistamine",
    storage: "Room Temperature",
    price: 45,
    prescription: false,
    image: "https://alleviareindia.com/wp-content/uploads/elementor/thumbs/evrysdi-qd79yu1mhqvj81z21wpnct3yk5svfcpw6zxtue1y14.webp",
    description: "Cetirizine is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching.",
    rating: 4.5,
    brand: "Dr. Reddy's",
    dosage: "10 mg",
    quantity: "10 tablets",
    discount: 10,
    stock: "In Stock",
    delivery: "Same day",
    category: "allergy"
  },
  {
    id: 4,
    name: "Omeprazole 20mg",
    type: "Proton Pump Inhibitor",
    storage: "Room Temperature",
    price: 85,
    prescription: true,
    image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?auto=format&fit=crop&w=400&h=400&q=80",
    description: "Omeprazole is a proton pump inhibitor that decreases the amount of acid produced in the stomach. Used to treat GERD and other acid-related conditions.",
    rating: 4.3,
    brand: "Sun Pharma",
    dosage: "20 mg",
    quantity: "10 capsules",
    discount: 25,
    isSale: true,
    stock: "In Stock",
    delivery: "6 hours",
    category: "digestive"
  },
  {
    id: 5,
    name: "Metformin 500mg",
    type: "Anti-diabetic",
    storage: "Room Temperature",
    price: 65,
    prescription: true,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=400&h=400&q=80",
    description: "Metformin is used with a proper diet and exercise program to control high blood sugar in patients with type 2 diabetes.",
    rating: 4.4,
    brand: "USV",
    dosage: "500 mg",
    quantity: "10 tablets",
    discount: 20,
    stock: "In Stock",
    delivery: "24 hours",
    category: "diabetes"
  },
  {
    id: 6,
    name: "Atorvastatin 10mg",
    type: "Cholesterol Lowering",
    storage: "Room Temperature",
    price: 95,
    prescription: true,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&h=400&q=80",
    description: "Atorvastatin is a statin medication used to prevent cardiovascular disease in those at high risk and to treat abnormal lipid levels.",
    rating: 4.6,
    brand: "Pfizer",
    dosage: "10 mg",
    quantity: "10 tablets",
    discount: 18,
    isHot: true,
    stock: "Limited Stock",
    delivery: "12 hours",
    category: "heart"
  },
  {
    id: 7,
    name: "Vitamin C 500mg",
    type: "Vitamin Supplement",
    storage: "Cool & Dry Place",
    price: 40,
    prescription: false,
    image: "https://images.unsplash.com/photo-1556228578-9d7257f5f8fb?auto=format&fit=crop&w=400&h=400&q=80",
    description: "Vitamin C is a water-soluble vitamin that is essential for normal growth and development. Required for the growth and repair of tissues.",
    rating: 4.7,
    brand: "Himalaya",
    dosage: "500 mg",
    quantity: "10 tablets",
    stock: "In Stock",
    delivery: "Same day",
    category: "vitamins"
  },
  {
    id: 8,
    name: "Diclofenac 50mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://images.unsplash.com/photo-1556228578-9d7257f5f8fb?auto=format&fit=crop&w=400&h=400&q=80",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  }
];

const heroSlides = [
  {
    title: "Essential General Medicines",
    subtitle: "Prescription & OTC • Quality Assured • 24/7 Delivery",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Chronic Disease Management",
    subtitle: "Diabetes • Hypertension • Cholesterol • Thyroid Care",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80"
  }
];

const categories = [
  { id: "all", label: "All Products", icon: <Pill className="w-4 h-4" /> },
  { id: "fever", label: "Fever & Pain", icon: <span>🤒</span> },
  { id: "allergy", label: "Allergy", icon: <span>🤧</span> },
  { id: "diabetes", label: "Diabetes", icon: <AlertCircle className="w-4 h-4" /> },
  { id: "heart", label: "Heart Care", icon: <span>❤️</span> },
  { id: "digestive", label: "Digestive", icon: <span>🩺</span> },
  { id: "antibiotics", label: "Antibiotics", icon: <span>🦠</span> },
  { id: "vitamins", label: "Vitamins", icon: <span>💊</span> }
];

export default function MedicinesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<typeof generalMedicines[0] | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Filter logic - EXACTLY like injections page
  const filteredProducts = generalMedicines
    .filter(product => {
      // Search filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = 
          product.name.toLowerCase().includes(searchLower) ||
          product.type.toLowerCase().includes(searchLower) ||
          product.brand?.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }
      
      // Category filter
      if (selectedCategory !== "all") {
        return product.category === selectedCategory;
      }
      
      return true;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        default:
          return 0; // featured order
      }
    });

  const handleAddToCart = (product: typeof generalMedicines[0]) => {
    console.log("Added to cart:", product.name);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero - EXACTLY like injections page */}
      <div className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-1 bg-yellow-500 px-2 py-1 rounded-full mb-2">
                  <Pill className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold text-white">Pharmacy Specialists</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{slide.title}</h1>
                <p className="text-sm text-white/90 mb-3">{slide.subtitle}</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search medicines, brands..."
                    className="flex-1 py-2 px-3 rounded-lg text-sm"
                  />
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-3 py-6">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center justify-between w-full p-3 bg-white rounded-lg shadow-sm border border-blue-200"
          >
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-blue-800">Filters & Sort</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-blue-600 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filters Container - EXACTLY like injections page */}
        <div className={`${showMobileFilters ? 'block' : 'hidden lg:block'} mb-6`}>
          {/* Filter Header */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              {/* Heading */}
              <h3 className="text-xl font-bold text-blue-900">
                Browse <span className="text-yellow-500">Medicines</span>
                <span className="block text-sm font-normal text-blue-700 mt-1">
                  {filteredProducts.length} products found
                </span>
              </h3>

              {/* Sort Dropdown */}
              <div className="relative w-full sm:w-56">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none px-4 py-2 pr-10
                             bg-white border border-blue-300 rounded-lg
                             text-sm font-medium text-blue-900
                             focus:outline-none focus:ring-2 focus:ring-yellow-400
                             cursor-pointer"
                >
                  <option value="featured">⭐ Featured</option>
                  <option value="price-low">⬇ Price: Low to High</option>
                  <option value="price-high">⬆ Price: High to Low</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-blue-600">
                  ▼
                </span>
              </div>
            </div>

            {/* Category Buttons */}
            <div className="mt-4">
              <h3 className="text-sm font-bold text-blue-800 mb-2">Filter by Category:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-blue-800 hover:bg-blue-100 border border-blue-300'
                    }`}
                  >
                    {category.icon}
                    <span className="text-xs font-medium">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory !== "all" || searchQuery) && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-yellow-800">Active Filters:</span>
                {selectedCategory !== "all" && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                    {categories.find(c => c.id === selectedCategory)?.label}
                    <button 
                      onClick={() => setSelectedCategory("all")}
                      className="ml-1 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">
                    Search: "{searchQuery}"
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="ml-1 text-yellow-600 hover:text-yellow-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                <button 
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="ml-auto text-xs text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Total Medicines", value: "5000+", icon: "💊", color: "bg-blue-100" },
            { label: "Trusted Brands", value: "50+", icon: "🏆", color: "bg-yellow-100" },
            { label: "Cities Covered", value: "100+", icon: "📍", color: "bg-green-100" },
            { label: "Happy Customers", value: "1L+", icon: "😊", color: "bg-purple-100" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-3 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-base">{stat.icon}</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Products Grid - 2 Columns on Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Image */}
                <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/300x300?text=Medicine";
                    }}
                  />
                  {/* Badges */}
                  <div className="absolute top-2 right-2 flex flex-col gap-1">
                    {product.isNew && <span className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold animate-pulse">NEW</span>}
                    {product.isHot && <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">HOT</span>}
                    {product.prescription && <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">RX</span>}
                    {product.isSale && <span className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">SALE</span>}
                  </div>
                  {/* Stock */}
                  {product.stock && (
                    <div className="absolute bottom-2 left-2">
                      <span className={`text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        product.stock === "In Stock" 
                          ? "bg-green-100 text-green-800 border border-green-300"
                          : product.stock === "Limited Stock"
                          ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                          : "bg-red-100 text-red-800 border border-red-300"
                      }`}>
                        {product.stock}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-2 sm:p-3">
                  {/* Category */}
                  <div className="mb-1">
                    <span className="text-[10px] text-blue-600 font-medium uppercase">
                      {product.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem] group-hover:text-blue-700 transition-colors">
                    {product.name}
                  </h3>

                  {/* Brand */}
                  <div className="mb-2">
                    <span className="text-[10px] text-gray-500">by {product.brand}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline justify-between mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm sm:text-base font-bold text-gray-900">
                        ₹{product.price}
                      </span>
                      {product.discount && (
                        <span className="text-[10px] text-gray-400 line-through">
                          ₹{product.discount}
                        </span>
                      )}
                    </div>
                    {product.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-medium">{product.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* View Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="w-full py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <Pill className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">No medicines found</h3>
              <p className="text-gray-600 mb-4 max-w-md mx-auto">
                Try adjusting your filters or search for something else
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Safety Info */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 mb-8">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-yellow-800 text-lg mb-2">⚠️ Medicine Safety Guidelines</h3>
              <p className="text-yellow-700 text-sm">
                Prescription medicines should only be taken under medical supervision.
                Consult your doctor before starting any new medication. Never self-medicate.
              </p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Storage Info */}
          <div className="bg-white border border-blue-200 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Thermometer className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900">Storage Guidelines</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Store between 15-30°C
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Keep away from moisture
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Avoid bathroom storage
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Store out of children's reach
              </li>
            </ul>
          </div>

          {/* Usage Info */}
          <div className="bg-white border border-green-200 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900">Usage Guidelines</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Take medicines as prescribed
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Never share your medicines
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Complete antibiotic courses
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Check for drug interactions
              </li>
            </ul>
          </div>
        </div>

        {/* Brands */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Trusted Pharmaceutical Brands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { name: "Cipla", logo: "💊" },
              { name: "Sun Pharma", logo: "☀️" },
              { name: "GSK", logo: "🏢" },
              { name: "Abbott", logo: "🏥" },
              { name: "Himalaya", logo: "⛰️" },
              { name: "Dr. Reddy's", logo: "👨‍⚕️" },
              { name: "Pfizer", logo: "🔬" },
              { name: "Novartis", logo: "💉" },
              { name: "USV", logo: "💊" },
              { name: "Mankind", logo: "👨‍👩‍👧‍👦" }
            ].map((brand, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-3 text-center hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-10 h-10 mx-auto mb-2 bg-blue-50 rounded-full flex items-center justify-center text-lg">
                  {brand.logo}
                </div>
                <span className="font-medium text-gray-800 text-sm">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Product Details - EXACTLY like injections page */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold">Product Details</h2>
                  <p className="text-blue-100 text-sm">{selectedProduct.type}</p>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Image */}
                <div className="relative h-48 sm:h-64 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-contain p-4"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/400x400?text=Medicine";
                    }}
                  />
                </div>

                {/* Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{selectedProduct.name}</h3>
                    {selectedProduct.brand && <p className="text-sm text-gray-600">by {selectedProduct.brand}</p>}
                  </div>

                  {/* Rating */}
                  {selectedProduct.rating && (
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-medium">{selectedProduct.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({Math.floor(Math.random() * 100) + 50} reviews)</span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{selectedProduct.price}
                    </span>
                    {selectedProduct.discount && (
                      <>
                        <span className="text-lg text-gray-400 line-through">
                          ₹{selectedProduct.discount}
                        </span>
                        <span className="text-xs bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded font-bold">
                          Save ₹{(selectedProduct.discount - selectedProduct.price)}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Description</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{selectedProduct.description}</p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-gray-200">
                    {selectedProduct.dosage && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Dosage</p>
                        <p className="text-sm font-medium text-gray-900">{selectedProduct.dosage}</p>
                      </div>
                    )}
                    {selectedProduct.storage && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Storage</p>
                        <p className="text-sm font-medium text-gray-900">{selectedProduct.storage}</p>
                      </div>
                    )}
                    {selectedProduct.quantity && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Package</p>
                        <p className="text-sm font-medium text-gray-900">{selectedProduct.quantity}</p>
                      </div>
                    )}
                    {selectedProduct.delivery && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Delivery</p>
                        <p className="text-sm font-medium text-gray-900 flex items-center gap-1">
                          <Truck className="w-3 h-3 text-blue-600" />
                          {selectedProduct.delivery}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Stock Status */}
                  {selectedProduct.stock && (
                    <div className={`px-3 py-2 rounded-lg ${
                      selectedProduct.stock === "In Stock" 
                        ? "bg-green-100 text-green-800"
                        : selectedProduct.stock === "Limited Stock"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      <span className="font-medium">{selectedProduct.stock}</span>
                    </div>
                  )}

                  {/* Prescription Warning */}
                  {selectedProduct.prescription && (
                    <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm font-medium text-yellow-800">Prescription Required</span>
                      </div>
                      <p className="text-xs text-yellow-700 mt-1">
                        This medicine requires a valid doctor's prescription. Consult your physician before use.
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button 
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all hover:shadow-lg"
                    >
                      Add to Cart
                    </button>
                    <button className="px-4 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-lg transition-colors">
                      <span className="text-lg">❤️</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl p-6 text-center text-white shadow-lg">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
            <Phone className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-sm font-bold">24/7 Pharmacy Support</span>
          </div>
          
          <h2 className="text-xl font-bold mb-3">Need Medical Advice?</h2>
          <p className="text-blue-100 mb-4 max-w-lg mx-auto">
            Our licensed pharmacists are available 24/7 to help you with medicine information,
            dosage guidance, and health queries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2">
              <span className="text-lg">👨‍⚕️</span>
              Consult Pharmacist
            </button>
            <button className="bg-white/10 backdrop-blur-lg border-2 border-white/30 hover:bg-white/20 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              9903241021
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}