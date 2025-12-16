"use client";

import { useState, useEffect } from "react";
import { Pill, Filter, Search, Shield, Thermometer, Home, Syringe, Clock, AlertCircle, ChevronDown, Phone, Star, Truck, CheckCircle } from "lucide-react";
import MedicineCard from "@/app/components/MedicineCard";

const generalMedicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    type: "Analgesic & Antipyretic",
    storage: "Room Temperature",
    price: 25,
    prescription: false,
    image: "/images/medicines/paracetamol.jpg",
    description: "Paracetamol (Acetaminophen) is a common analgesic and antipyretic used to treat mild to moderate pain and fever. It works by inhibiting prostaglandin synthesis in the brain. It's commonly used for headaches, muscle aches, arthritis, backache, toothaches, colds, and fevers.",
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
    image: "/images/medicines/amoxicillin.jpg",
    description: "Amoxicillin is a penicillin-type antibiotic that fights bacteria. It is used to treat many different types of infection caused by bacteria, such as tonsillitis, bronchitis, pneumonia, and infections of the ear, nose, throat, skin, or urinary tract.",
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
    image: "/images/medicines/cetirizine.jpg",
    description: "Cetirizine is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching. It works by blocking histamine, a substance in the body that causes allergic symptoms.",
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
    image: "/images/medicines/omeprazole.jpg",
    description: "Omeprazole is a proton pump inhibitor that decreases the amount of acid produced in the stomach. It is used to treat symptoms of gastroesophageal reflux disease (GERD) and other conditions caused by excess stomach acid.",
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
    image: "/images/medicines/metformin.jpg",
    description: "Metformin is used with a proper diet and exercise program to control high blood sugar in patients with type 2 diabetes. It helps control blood sugar by helping your body respond better to insulin and decreasing the amount of sugar your liver makes.",
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
    image: "/images/medicines/atorvastatin.jpg",
    description: "Atorvastatin is a statin medication used to prevent cardiovascular disease in those at high risk and to treat abnormal lipid levels. It works by blocking an enzyme in the liver that the body uses to make cholesterol.",
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
    image: "/images/medicines/vitamin-c.jpg",
    description: "Vitamin C is a water-soluble vitamin that is essential for normal growth and development. It is required for the growth and repair of tissues in all parts of your body. Vitamin C is also an antioxidant that helps protect your cells against free radicals.",
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
    image: "/images/medicines/diclofenac.jpg",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis. It works by reducing substances in the body that cause pain and inflammation.",
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
    image: "https://i.fbcd.co/products/resized/resized-750-500/a90202c9c0c8b0b4a345f1204a8f725fded7238480675961e5923d1513b084ab.jpg"
  },
  {
    title: "Chronic Disease Management",
    subtitle: "Diabetes • Hypertension • Cholesterol • Thyroid Care",
    image: "https://media.istockphoto.com/id/137939146/photo/colorful-assortment-of-medicine-tables-capsules.jpg?s=1024x1024&w=is&k=20&c=7dxYKzsS5rFf6Xss1leyMQ6qe4iKh20ijiQbtJ6OiYs="
  },
  {
    title: "Family Healthcare Essentials",
    subtitle: "First Aid • Cold & Cough • Digestive • Pain Relief",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Trusted Pharmaceutical Brands",
    subtitle: "Cipla • Sun Pharma • GSK • Abbott • Himalaya",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80"
  }
];

const categories = [
  { id: "all", name: "All Medicines", icon: "💊" },
  { id: "fever", name: "Fever & Pain", icon: "🤒" },
  { id: "allergy", name: "Allergy", icon: "🤧" },
  { id: "diabetes", name: "Diabetes", icon: "🩸" },
  { id: "heart", name: "Heart Care", icon: "❤️" },
  { id: "digestive", name: "Digestive", icon: "🩺" },
  { id: "antibiotics", name: "Antibiotics", icon: "🦠" },
  { id: "vitamins", name: "Vitamins", icon: "💊" },
  { id: "pain", name: "Pain Relief", icon: "😖" },
  { id: "skin", name: "Skin Care", icon: "🧴" }
];

export default function MedicinesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
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

  const filteredMedicines = selectedCategory === "all" 
    ? generalMedicines 
    : generalMedicines.filter(medicine => 
        medicine.category === selectedCategory
      );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleViewDetails = (id: number) => {
    console.log("View details for medicine ID:", id);
    // You can implement navigation or modal here
  };

  // Sort medicines based on sortBy
  const sortedMedicines = [...filteredMedicines].sort((a, b) => {
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
      {/* Hero Carousel */}
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

            {/* Green Overlay (changed from blue to green for medicines) */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/60 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-1 bg-green-500 px-2 py-1 rounded-full mb-3 max-w-max">
                  <Pill className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold text-white">Pharmacy & Medicines</span>
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
                        placeholder="Search medicines, brands, or symptoms..."
                        className="w-full py-2.5 px-4 rounded-lg text-gray-800 focus:outline-none text-sm"
                      />
                    </div>
                    <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 min-w-[100px]">
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

        {/* Category Filters - Green Yellow Theme */}
        <div className={`${showMobileFilters ? 'block' : 'hidden lg:block'} mb-6 sm:mb-8`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 sm:mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Browse Medicines</h2>
              <p className="text-sm text-gray-600">Filter by category or health condition</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              {/* Sort By */}
              <div className="relative w-full sm:w-auto">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
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
              <div className="flex items-center gap-1 bg-green-50 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-all text-sm ${
                    viewMode === "grid" 
                      ? "bg-green-600 text-white shadow-sm" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-all text-sm ${
                    viewMode === "list" 
                      ? "bg-green-600 text-white shadow-sm" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-green-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-base">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {[
            { label: "Total Medicines", value: "5000+", icon: "💊", color: "bg-green-100 text-green-700" },
            { label: "Trusted Brands", value: "50+", icon: "🏆", color: "bg-yellow-100 text-yellow-700" },
            { label: "Cities Covered", value: "100+", icon: "📍", color: "bg-blue-100 text-blue-700" },
            { label: "Happy Customers", value: "1L+", icon: "😊", color: "bg-purple-100 text-purple-700" }
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
            {sortedMedicines.map((medicine) => (
              <MedicineCard
                key={medicine.id}
                product={medicine}
                type={viewMode}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {/* No Results */}
          {sortedMedicines.length === 0 && (
            <div className="text-center py-10 sm:py-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
                <Pill className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">No medicines found</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto px-4">
                Try adjusting your filters or browse other categories
              </p>
            </div>
          )}
        </div>

        {/* Information Cards - Green Yellow Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Storage Guide */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-4 sm:p-6 border border-green-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Storage Guidelines</h2>
                <p className="text-sm text-green-600">Proper storage maintains medicine efficacy</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-200">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Thermometer className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Room Temperature</h4>
                  <p className="text-gray-600 text-xs">• Store between 15-30°C</p>
                  <p className="text-gray-600 text-xs">• Keep away from moisture</p>
                  <p className="text-gray-600 text-xs">• Avoid bathroom storage</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-200">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">General Tips</h4>
                  <p className="text-gray-600 text-xs">• Keep in original packaging</p>
                  <p className="text-gray-600 text-xs">• Check expiry dates regularly</p>
                  <p className="text-gray-600 text-xs">• Store out of children's reach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Information */}
          <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-4 sm:p-6 border border-yellow-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Safety First</h2>
                <p className="text-sm text-yellow-600">Important medication safety guidelines</p>
              </div>
            </div>
            
            <div className="space-y-2">
              {[
                "Take medicines as prescribed",
                "Never share your medicines",
                "Complete antibiotic courses",
                "Check for drug interactions",
                "Store away from children and pets",
                "Don't use expired medicines"
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
                Prescription medicines should only be taken under medical supervision. 
                Consult your doctor before starting any new medication.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Brands */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Trusted Pharmaceutical Brands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
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
                className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-green-50 rounded-full flex items-center justify-center text-xl">
                  {brand.logo}
                </div>
                <span className="font-medium text-gray-800">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Green Yellow */}
        <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-xl p-4 sm:p-6 text-center text-white shadow-lg">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
            <Phone className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-xs sm:text-sm font-bold">24/7 Pharmacy Support</span>
          </div>
          
          <h2 className="text-lg sm:text-xl font-bold mb-3">Need Medical Advice?</h2>
          <p className="text-sm sm:text-base mb-4 text-green-100 max-w-lg mx-auto">
            Our licensed pharmacists are available 24/7 to help you with medicine information, 
            dosage guidance, and health queries.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 justify-center">
            <button className="bg-white text-green-700 hover:bg-gray-100 px-4 py-2.5 rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm">
              <span className="text-base">👨‍⚕️</span>
              Consult Pharmacist
            </button>
            <button className="bg-white/10 backdrop-blur-lg border-2 border-white/30 hover:bg-white/20 px-4 py-2.5 rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              1800-123-4567
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}