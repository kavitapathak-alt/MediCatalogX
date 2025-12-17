"use client";

import { useState, useEffect } from "react";
import { Shield, AlertCircle, Pill, Filter, ChevronDown, Phone, Snowflake, Thermometer, Home, Syringe, Clock, Search, Star, Truck, X, Heart, Droplets, ChevronLeft, ChevronRight } from "lucide-react";

const cancerMedicines = [
  {
    id: 1,
    name: "Tecentriq (Atezolizumab)",
    type: "Immunotherapy",
    storage: "2-8°C",
    price: 85000,
    prescription: true,
    image: "https://www.bing.com/th/id/OIP.uo9SvjF0oCyo3uMJns4l3QHaDi?w=359&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    description: "Tecentriq (Atezolizumab) is a monoclonal antibody that targets PD-L1 protein, used in immunotherapy for various cancers including non-small cell lung cancer, small cell lung cancer, hepatocellular carcinoma, and triple-negative breast cancer.",
    rating: 4.8,
    brand: "Roche",
    dosage: "840mg/14mL or 1200mg/20mL",
    quantity: "1 vial",
    discount: 92000,
    isHot: true,
    stock: "Limited Stock",
    delivery: "72 hours",
    category: "immunotherapy"
  },
  {
    id: 2,
    name: "Keytruda (Pembrolizumab)",
    type: "Immunotherapy",
    storage: "2-8°C",
    price: 125000,
    prescription: true,
    image: "https://www.bing.com/th/id/OIP.aTAQW2sE08Wde96EBbZoOgHaEo?w=229&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    description: "Keytruda (Pembrolizumab) is a monoclonal antibody that targets PD-1 receptors, used for the treatment of various cancers including melanoma, non-small cell lung cancer, head and neck cancer, Hodgkin lymphoma, gastric cancer, and urothelial carcinoma.",
    rating: 4.9,
    brand: "Merck",
    dosage: "100mg/4mL",
    quantity: "1 vial",
    discount: 135000,
    isNew: true,
    stock: "In Stock",
    delivery: "48 hours",
    category: "immunotherapy"
  },
  {
    id: 3,
    name: "Opdivo (Nivolumab)",
    type: "Immunotherapy",
    storage: "2-8°C",
    price: 98000,
    prescription: true,
    image: "https://tse1.mm.bing.net/th/id/OIP.BBkdd0rX-EMuPxMh_qD4uwHaHa?pid=ImgDet&w=187&h=187&c=7",
    description: "Opdivo (Nivolumab) is a monoclonal antibody that targets PD-1 receptors, used for melanoma, non-small cell lung cancer, renal cell carcinoma, Hodgkin lymphoma, head and neck cancer, and urothelial carcinoma.",
    rating: 4.7,
    brand: "Bristol-Myers Squibb",
    dosage: "40mg/4mL, 100mg/10mL, or 240mg/24mL",
    quantity: "1 vial",
    discount: 105000,
    isSale: true,
    stock: "In Stock",
    delivery: "72 hours",
    category: "immunotherapy"
  },
  {
    id: 4,
    name: "Enhertu (Trastuzumab Deruxtecan)",
    type: "Targeted Therapy",
    storage: "2-8°C",
    price: 195000,
    prescription: true,
    image: "https://www.bing.com/th/id/OIP.XtCsnBPa9JBhFGdyil9MPQHaGV?w=214&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    description: "Enhertu (Trastuzumab Deruxtecan) is an antibody-drug conjugate that targets HER2 protein, used for HER2-positive breast cancer, gastric cancer, and non-small cell lung cancer.",
    rating: 4.9,
    brand: "Daiichi Sankyo/AstraZeneca",
    dosage: "100mg",
    quantity: "1 vial",
    discount: 210000,
    isHot: true,
    stock: "Limited Stock",
    delivery: "96 hours",
    category: "breast"
  }
];

const heroSlides = [
  {
    title: "Advanced Cancer Medicines",
    subtitle: "Oncologist Prescribed • Cold Chain Storage • 24/7 Support",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Targeted Cancer Therapy",
    subtitle: "Immunotherapy • Chemotherapy • Hormone Therapy • Precision Medicine",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Comprehensive Cancer Care",
    subtitle: "Prescription Validation • Temperature Monitoring • Safe Delivery",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Trusted Oncology Brands",
    subtitle: "Roche • Novartis • Merck • Bristol-Myers Squibb • Genentech",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function CancerPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<typeof cancerMedicines[number] | null>(null);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Filter logic
  const filteredMedicines = cancerMedicines
    .filter(medicine => {
      // Search filter - यहाँ FIXED है
      if (searchQuery.trim()) {
        const searchLower = searchQuery.toLowerCase().trim();
        const matchesSearch =
          medicine.name.toLowerCase().includes(searchLower) ||
          medicine.type.toLowerCase().includes(searchLower) ||
          medicine.brand?.toLowerCase().includes(searchLower) ||
          medicine.description.toLowerCase().includes(searchLower) ||
          medicine.category.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Category filter
      if (selectedCategory !== "all") {
        return medicine.category === selectedCategory;
      }

      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        default:
          return 0;
      }
    });

  const categories = [
    { id: "all", label: "All Products", icon: <Pill className="w-4 h-4" /> },
    { id: "immunotherapy", label: "Immunotherapy", icon: <Shield className="w-4 h-4" /> },
    { id: "targeted", label: "Targeted Therapy", icon: <Syringe className="w-4 h-4" /> },
    { id: "chemotherapy", label: "Chemotherapy", icon: <AlertCircle className="w-4 h-4" /> },
    { id: "hormone", label: "Hormone Therapy", icon: <Droplets className="w-4 h-4" /> },
    { id: "breast", label: "Breast Cancer", icon: <Heart className="w-4 h-4" /> }
  ];

  // Hero search handler - यहाँ FIXED है
  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality already works through state
    // You can add additional logic here if needed
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Slider with Search - FIXED */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-full mb-4">
                    <Shield className="w-5 h-5" />
                    <span className="font-bold">Cancer Care Pharmacy</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                    {slide.title}
                  </h1>

                  <p className="text-lg text-blue-100 mb-6">
                    {slide.subtitle}
                  </p>

                  {/* Hero Search Bar - FIXED and Working */}
                  <form onSubmit={handleHeroSearch} className="relative max-w-md">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for cancer medicines..."
                      className="w-full py-4 px-6 rounded-xl bg-white/95 backdrop-blur-sm border-2 border-blue-300 focus:border-blue-500 focus:outline-none text-gray-800 placeholder-gray-500 shadow-lg"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-all hover:scale-105"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Navigation */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>


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

        {/* Filters Container - BLUE YELLOW THEME */}
        <div className={`${showMobileFilters ? 'block' : 'hidden lg:block'} mb-6`}>
          {/* Filter Header */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              {/* Heading */}
              <h3 className="text-xl font-bold text-blue-900">
                Browse <span className="text-yellow-500">Cancer Medicines</span>
                <span className="block text-sm font-normal text-blue-700 mt-1">
                  {filteredMedicines.length} products found
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

            {/* Category Buttons - BLUE THEME */}
            <div className="mt-4">
              <h3 className="text-sm font-bold text-blue-800 mb-2">Filter by Cancer Type:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${selectedCategory === category.id
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

          {/* Active Filters Display - BLUE YELLOW */}
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

        {/* Products Grid - 2 Columns on Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map((product) => (
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
                      e.currentTarget.src = "https://via.placeholder.com/300x300?text=Cancer+Medicine";
                    }}
                  />
                  {/* Badges */}
                  <div className="absolute top-2 right-2 flex flex-col gap-1">
                    {product.isNew && <span className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold animate-pulse">NEW</span>}
                    {product.isHot && <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">HOT</span>}
                    {product.prescription && <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">RX</span>}
                  </div>
                  {/* Stock */}
                  {product.stock && (
                    <div className="absolute bottom-2 left-2">
                      <span className={`text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full ${product.stock === "In Stock"
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

                  {/* Price */}
                  <div className="flex items-baseline justify-between mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm sm:text-base font-bold text-gray-900">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.discount && (
                        <span className="text-[10px] text-gray-400 line-through">
                          ₹{product.discount.toLocaleString()}
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
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">No cancer medicines found</h3>
              <p className="text-gray-600 mb-4 max-w-md mx-auto">
                Try adjusting your filters or contact our oncology support team
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

        {/* Information Cards - BLUE YELLOW THEME */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Storage Guide */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 sm:p-6 border border-blue-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Snowflake className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Storage Requirements</h2>
                <p className="text-sm text-blue-600">Critical storage conditions for cancer medicines</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-200">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Thermometer className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Cold Chain (2-8°C)</h4>
                  <p className="text-gray-600 text-xs">• Biologics, Immunotherapy drugs</p>
                  <p className="text-gray-600 text-xs">• Use medical refrigerator only</p>
                  <p className="text-gray-600 text-xs">• Temperature monitoring essential</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-200">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Room Temperature</h4>
                  <p className="text-gray-600 text-xs">• Oral chemotherapy tablets</p>
                  <p className="text-gray-600 text-xs">• Keep in original packaging</p>
                  <p className="text-gray-600 text-xs">• Store away from moisture</p>
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
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Safety Guidelines</h2>
                <p className="text-sm text-yellow-600">Critical safety information for cancer treatment</p>
              </div>
            </div>

            <div className="space-y-2">
              {[
                "Valid oncologist prescription required",
                "Professional administration for injections",
                "Monitor for side effects regularly",
                "Store away from children and pets",
                "Dispose of unused medicine properly",
                "Follow dosage schedule strictly"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0 mt-1.5"></div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Warning Box */}
            <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <AlertCircle className="w-4 h-4 text-red-700" />
                <span className="font-bold text-red-800 text-sm">Critical Notice</span>
              </div>
              <p className="text-xs text-red-700">
                Cancer medicines should only be used under strict medical supervision.
                Do not self-medicate or adjust dosage without consulting your oncologist.
              </p>
            </div>
          </div>
        </div>

        {/* Modal for Product Details */}
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
                      e.currentTarget.src = "https://via.placeholder.com/400x400?text=Cancer+Medicine";
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
                      ₹{selectedProduct.price.toLocaleString()}
                    </span>
                    {selectedProduct.discount && (
                      <>
                        <span className="text-lg text-gray-400 line-through">
                          ₹{selectedProduct.discount.toLocaleString()}
                        </span>
                        <span className="text-xs bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded font-bold">
                          Save ₹{(selectedProduct.discount - selectedProduct.price).toLocaleString()}
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
                    <div className={`px-3 py-2 rounded-lg ${selectedProduct.stock === "In Stock"
                        ? "bg-green-100 text-green-800"
                        : selectedProduct.stock === "Limited Stock"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}>
                      <span className="font-medium">{selectedProduct.stock}</span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all hover:shadow-lg">
                      Add to Cart
                    </button>
                    <button className="px-4 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-lg transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section - BLUE YELLOW THEME */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl p-4 sm:p-6 text-center text-white shadow-lg">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
            <Phone className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-xs sm:text-sm font-bold">24/7 Oncology Support</span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold mb-3">Need Oncologist Consultation?</h2>
          <p className="text-sm sm:text-base mb-4 text-blue-100 max-w-lg mx-auto">
            Connect with our panel of certified oncologists for proper diagnosis,
            prescription, and ongoing treatment monitoring.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 justify-center">
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-4 py-2.5 rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm">
              <span className="text-base">👨‍⚕️</span>
              Consult Oncologist
            </button>
            <button className="bg-white/10 backdrop-blur-lg border-2 border-white/30 hover:bg-white/20 px-4 py-2.5 rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              Emergency: 9903241021
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}