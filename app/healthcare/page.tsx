"use client";

import { useState, useEffect } from "react";
import { Activity, Thermometer, Heart, Stethoscope, Bandage, Droplet, Filter, Zap, Home, Shield, ChevronDown, Phone, Clock, Search, Star, Truck, CheckCircle, AlertCircle, Package } from "lucide-react";
import MedicineCard from "@/app/components/MedicineCard";

const healthcareProducts = [
  {
    id: 1,
    name: "Digital Thermometer",
    type: "Monitoring Device",
    storage: "Room Temperature",
    price: 299,
    prescription: false,
    image: "/images/healthcare/thermometer.jpg",
    description: "Fast and accurate digital thermometer with LCD display and fever alarm. Features memory recall, automatic shut-off, and waterproof design for easy cleaning.",
    rating: 4.5,
    brand: "Omron",
    dosage: "Contactless",
    quantity: "1 Unit",
    discount: 399,
    isNew: true,
    stock: "In Stock",
    delivery: "Same day",
    category: "monitoring"
  },
  {
    id: 2,
    name: "BP Monitor",
    type: "Cardiac Care",
    storage: "Room Temperature",
    price: 1499,
    prescription: false,
    image: "/images/healthcare/bp-monitor.jpg",
    description: "Automatic blood pressure monitor with irregular heartbeat detection. Large LCD display, memory for 2 users, and WHO hypertension indicator.",
    rating: 4.7,
    brand: "Dr. Morepen",
    dosage: "Automatic",
    quantity: "1 Unit with Cuff",
    discount: 1999,
    isHot: true,
    stock: "In Stock",
    delivery: "24 hours",
    category: "monitoring"
  },
  {
    id: 3,
    name: "Pulse Oximeter",
    type: "Monitoring Device",
    storage: "Room Temperature",
    price: 899,
    prescription: false,
    image: "/images/healthcare/oximeter.jpg",
    description: "Portable oxygen saturation monitor with SpO2 and pulse rate measurement. Features OLED display, adjustable brightness, and low power consumption.",
    rating: 4.4,
    brand: "Accu-Chek",
    dosage: "Finger Clip",
    quantity: "1 Unit with Case",
    isNew: true,
    stock: "In Stock",
    delivery: "Same day",
    category: "monitoring"
  },
  {
    id: 4,
    name: "Stethoscope",
    type: "Diagnostic Tool",
    storage: "Room Temperature",
    price: 799,
    prescription: false,
    image: "/images/healthcare/stethoscope.jpg",
    description: "Professional dual-head stethoscope for accurate auscultation. Non-chill rim, tunable diaphragm, and latex-free tubing for comfort and hygiene.",
    rating: 4.6,
    brand: "Littmann",
    dosage: "Professional",
    quantity: "1 Unit",
    discount: 999,
    isSale: true,
    stock: "In Stock",
    delivery: "24 hours",
    category: "diagnostic"
  },
  {
    id: 5,
    name: "First Aid Kit",
    type: "Emergency Kit",
    storage: "Room Temperature",
    price: 599,
    prescription: false,
    image: "/images/healthcare/first-aid.jpg",
    description: "Comprehensive first aid kit with bandages, antiseptics, and basic medical supplies. Includes 100 essential items for home and travel emergencies.",
    rating: 4.8,
    brand: "Hansaplast",
    dosage: "100 Items",
    quantity: "1 Kit",
    isHot: true,
    stock: "In Stock",
    delivery: "Same day",
    category: "emergency"
  },
  {
    id: 6,
    name: "Glucometer",
    type: "Diabetes Care",
    storage: "Room Temperature",
    price: 1299,
    prescription: false,
    image: "/images/healthcare/glucometer.jpg",
    description: "Advanced glucose monitoring system with memory function and trend analysis. Includes 25 test strips, lancets, and control solution.",
    rating: 4.3,
    brand: "OneTouch",
    dosage: "Blood Glucose",
    quantity: "1 Unit + 25 Strips",
    discount: 1599,
    stock: "In Stock",
    delivery: "24 hours",
    category: "diabetes"
  },
  {
    id: 7,
    name: "Nebulizer Machine",
    type: "Respiratory Care",
    storage: "Room Temperature",
    price: 1899,
    prescription: false,
    image: "/images/healthcare/nebulizer.jpg",
    description: "Portable nebulizer for asthma and respiratory treatments with adjustable flow. Includes adult and child masks, mouthpiece, and tubing.",
    rating: 4.5,
    brand: "Rossmax",
    dosage: "Compressor",
    quantity: "1 Unit with Mask",
    isNew: true,
    stock: "In Stock",
    delivery: "48 hours",
    category: "respiratory"
  },
  {
    id: 8,
    name: "Weighing Scale",
    type: "Health Monitor",
    storage: "Room Temperature",
    price: 699,
    prescription: false,
    image: "/images/healthcare/weighing-scale.jpg",
    description: "Digital body weight scale with high precision sensors and LCD display. Features auto-calibration, low battery indicator, and tempered glass platform.",
    rating: 4.2,
    brand: "BPL",
    dosage: "Digital",
    quantity: "1 Unit",
    discount: 899,
    isSale: true,
    stock: "In Stock",
    delivery: "Same day",
    category: "monitoring"
  }
];

const rentalEquipment = [
  {
    id: 1,
    name: "Oxygen Concentrator",
    rent: "₹300/day",
    deposit: "₹5000",
    description: "5L Medical Grade Oxygen Concentrator",
    image: "/images/rental/oxygen.jpg"
  },
  {
    id: 2,
    name: "Hospital Bed",
    rent: "₹500/day",
    deposit: "₹10000",
    description: "Electric Adjustable Hospital Bed",
    image: "/images/rental/hospital-bed.jpg"
  },
  {
    id: 3,
    name: "Wheelchair",
    rent: "₹150/day",
    deposit: "₹3000",
    description: "Foldable Lightweight Wheelchair",
    image: "/images/rental/wheelchair.jpg"
  },
  {
    id: 4,
    name: "CPAP Machine",
    rent: "₹400/day",
    deposit: "₹8000",
    description: "Sleep Apnea Therapy Machine",
    image: "/images/rental/cpap.jpg"
  }
];

const heroSlides = [
  {
    title: "Healthcare Products & Equipment",
    subtitle: "Medical Devices • Home Healthcare • Professional Tools • 24/7 Support",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Medical Monitoring Devices",
    subtitle: "BP Monitors • Thermometers • Glucometers • Pulse Oximeters",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Home Healthcare Solutions",
    subtitle: "Nebulizers • First Aid • Diagnostic Tools • Emergency Equipment",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Trusted Medical Brands",
    subtitle: "Omron • Dr. Morepen • Accu-Chek • Littmann • Rossmax • BPL",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80"
  }
];

const categories = [
  { id: "all", name: "All Products", icon: "🏥", count: 8 },
  { id: "monitoring", name: "Monitoring", icon: "📊", count: 4 },
  { id: "diagnostic", name: "Diagnostic", icon: "🔬", count: 1 },
  { id: "emergency", name: "Emergency", icon: "🆘", count: 1 },
  { id: "diabetes", name: "Diabetes Care", icon: "🩸", count: 1 },
  { id: "respiratory", name: "Respiratory", icon: "🌬️", count: 1 },
  { id: "firstaid", name: "First Aid", icon: "🩹", count: 1 }
];

const equipmentTypes = [
  { id: "all", name: "All Equipment", icon: "🩺", count: 8 },
  { id: "personal", name: "Personal Use", icon: "👤", count: 6 },
  { id: "professional", name: "Professional", icon: "👨‍⚕️", count: 2 },
  { id: "home", name: "Home Care", icon: "🏠", count: 3 },
  { id: "hospital", name: "Hospital Grade", icon: "🏥", count: 2 }
];

export default function HealthcarePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedEquipment, setSelectedEquipment] = useState<string>("all");
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

  const filteredProducts = healthcareProducts.filter(product => {
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
                  <Activity className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold text-white">HEALTHCARE EQUIPMENT</span>
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
                        placeholder="Search healthcare products..."
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
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Browse Healthcare Products</h2>
              <p className="text-sm text-gray-600">Filter by category or equipment type</p>
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
                  className={`p-2 rounded-md transition-all text-sm ${viewMode === "grid"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-all text-sm ${viewMode === "list"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Product Categories</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  <span className="text-base">{category.icon}</span>
                  {category.name}
                  <span className="ml-1.5 bg-white/20 px-1.5 py-0.5 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Equipment Type Filters */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Equipment Types</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {equipmentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedEquipment(type.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedEquipment === type.id
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  <span className="text-base">{type.icon}</span>
                  {type.name}
                  <span className="ml-1.5 bg-white/20 px-1.5 py-0.5 rounded-full text-xs">
                    {type.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats - Blue Yellow Theme */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {[
            { label: "Quality Products", value: "100%", icon: "🛡️", color: "bg-blue-100 text-blue-700" },
            { label: "Brand Warranty", value: "1+ Year", icon: "📜", color: "bg-yellow-100 text-yellow-700" },
            { label: "Same Day Delivery", value: "24/7", icon: "🚚", color: "bg-blue-100 text-blue-700" },
            { label: "Customer Rating", value: "4.6★", icon: "⭐", color: "bg-yellow-100 text-yellow-700" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${stat.color.split(' ')[0]} rounded-lg flex items-center justify-center`}>
                  <span className="text-lg">{stat.icon}</span>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
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
                <Activity className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">No products found</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto px-4">
                Try adjusting your filters or browse different categories
              </p>
            </div>
          )}
        </div>

        {/* Rental Equipment Section - Blue Yellow */}
        <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 border border-blue-200 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Equipment Rental Service</h2>
                <p className="text-sm text-blue-600">Rent premium medical equipment for short-term needs</p>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2">
              View All Rentals
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {rentalEquipment.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all"
              >
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Activity className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Daily Rent:</span>
                      <span className="text-lg font-bold text-blue-600">{item.rent}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Security Deposit:</span>
                      <span className="font-semibold text-gray-800">{item.deposit}</span>
                    </div>
                    <button className="w-full mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Information Cards - Blue Yellow Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Quality Assurance - Blue */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 sm:p-6 border border-blue-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Quality Assurance</h2>
                <p className="text-sm text-blue-600">Certified medical devices with warranty</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-200">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Certified Products</h4>
                  <p className="text-gray-600 text-xs">• All products from certified manufacturers</p>
                  <p className="text-gray-600 text-xs">• Quality checks at multiple stages</p>
                  <p className="text-gray-600 text-xs">• ISO certified manufacturing</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-200">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Warranty Support</h4>
                  <p className="text-gray-600 text-xs">• Minimum 1-year warranty</p>
                  <p className="text-gray-600 text-xs">• Service centers across India</p>
                  <p className="text-gray-600 text-xs">• Easy warranty claim process</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Information - Yellow */}
          <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-4 sm:p-6 border border-yellow-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Services & Support</h2>
                <p className="text-sm text-yellow-600">Comprehensive healthcare support</p>
              </div>
            </div>

            <div className="space-y-2">
              {[
                "Free delivery on orders above ₹499",
                "Installation support available",
                "Doctor guidance for equipment use",
                "Training for complex devices",
                "24/7 customer support",
                "Easy return policy"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0 mt-1.5"></div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Note Box */}
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <AlertCircle className="w-4 h-4 text-blue-600" />
                <span className="font-bold text-blue-800 text-sm">Important Note</span>
              </div>
              <p className="text-xs text-blue-700">
                Some medical devices require proper training for use. We provide free
                training sessions and user manuals with all complex equipment.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Thermometer className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Accurate Readings</h3>
            <p className="text-sm text-gray-600">
              All monitoring devices calibrated for clinical accuracy with regular quality checks.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Truck className="w-5 h-5 text-yellow-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Fast Delivery</h3>
            <p className="text-sm text-gray-600">
              Same day delivery in metro cities. Installation support for complex equipment.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Expert Support</h3>
            <p className="text-sm text-gray-600">
              24/7 customer support with healthcare professionals for guidance and troubleshooting.
            </p>
          </div>
        </div>

        {/* Trusted Brands */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Trusted Healthcare Brands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {[
              { name: "Omron", logo: "🏢", color: "bg-blue-50" },
              { name: "Dr. Morepen", logo: "👨‍⚕️", color: "bg-yellow-50" },
              { name: "Accu-Chek", logo: "🩸", color: "bg-blue-50" },
              { name: "Rossmax", logo: "💊", color: "bg-yellow-50" },
              { name: "BPL", logo: "🏭", color: "bg-blue-50" },
              { name: "OneTouch", logo: "🩺", color: "bg-yellow-50" },
              { name: "Littmann", logo: "🎧", color: "bg-blue-50" },
              { name: "Hansaplast", logo: "🩹", color: "bg-yellow-50" },
              { name: "Cipla", logo: "💊", color: "bg-blue-50" },
              { name: "GSK", logo: "🏥", color: "bg-yellow-50" }
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
            <span className="text-xs sm:text-sm font-bold">24/7 Healthcare Support</span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold mb-3">Need Medical Equipment Guidance?</h2>
          <p className="text-sm sm:text-base mb-4 text-blue-100 max-w-lg mx-auto">
            Connect with our healthcare experts for personalized equipment recommendations,
            usage guidance, and post-purchase support.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 justify-center">
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-4 py-2.5 rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm">
              <span className="text-base">👨‍⚕️</span>
              Consult Healthcare Expert
            </button>
            <button className="bg-white/10 backdrop-blur-lg border-2 border-white/30 hover:bg-white/20 px-4 py-2.5 rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              Call: 9903241021
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}