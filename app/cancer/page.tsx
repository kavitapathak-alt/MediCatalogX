"use client";

import { useState, useEffect } from "react";
import { Shield, AlertCircle, Pill, Filter, ChevronDown, Phone, Snowflake, Thermometer, Home, Syringe, Clock, Search, Star, Truck, CheckCircle, Droplets } from "lucide-react";
import MedicineCard from "@/app/components/MedicineCard";

const cancerMedicines = [
  {
    id: 1,
    name: "Tecentriq (Atezolizumab)",
    type: "Immunotherapy",
    storage: "2-8°C",
    price: 85000,
    prescription: true,
    image: "/images/cancer/tecentriq.png",
    description: "Tecentriq (Atezolizumab) is a monoclonal antibody that targets PD-L1 protein, used in immunotherapy for various cancers including non-small cell lung cancer, small cell lung cancer, hepatocellular carcinoma, and triple-negative breast cancer. It helps the immune system recognize and attack cancer cells by blocking the PD-L1/PD-1 pathway.",
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
    image: "/images/cancer/keytruda.png",
    description: "Keytruda (Pembrolizumab) is a monoclonal antibody that targets PD-1 receptors, used for the treatment of various cancers including melanoma, non-small cell lung cancer, head and neck cancer, Hodgkin lymphoma, gastric cancer, and urothelial carcinoma. It works by blocking the PD-1 pathway, allowing the immune system to attack cancer cells.",
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
    image: "/images/cancer/opdivo.png",
    description: "Opdivo (Nivolumab) is a monoclonal antibody that targets PD-1 receptors, used for melanoma, non-small cell lung cancer, renal cell carcinoma, Hodgkin lymphoma, head and neck cancer, and urothelial carcinoma. It is an immunotherapy drug that helps the immune system fight cancer by blocking the PD-1 pathway.",
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
    image: "/images/cancer/enhertu.png",
    description: "Enhertu (Trastuzumab Deruxtecan) is an antibody-drug conjugate that targets HER2 protein, used for HER2-positive breast cancer, gastric cancer, and non-small cell lung cancer. It combines the targeting ability of trastuzumab with a potent chemotherapy drug, delivering the drug directly to cancer cells while minimizing damage to healthy cells.",
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
    image: "https://connectmyindia.com/posts/images/2024/tata-cancer-tabletsjpg"
  },
  {
    title: "Targeted Cancer Therapy",
    subtitle: "Immunotherapy • Chemotherapy • Hormone Therapy • Precision Medicine",
    image: "https://4.bp.blogspot.com/-3gcVDexgPqA/W0HNcYDNcjI/AAAAAAAAApA/4OaKvTgIBkIVSP0NJy4cqsmCVQmnHNspQCEwYBhgL/s640/cancer.jpg"
  },
  {
    title: "Comprehensive Cancer Care",
    subtitle: "Prescription Validation • Temperature Monitoring • Safe Delivery",
    image: "https://images.tv9telugu.com/wp-content/uploads/2022/06/cancer.jpg"
  },
  {
    title: "Trusted Oncology Brands",
    subtitle: "Roche • Novartis • Merck • Bristol-Myers Squibb • Genentech",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function CancerPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTreatment, setSelectedTreatment] = useState<string>("all");
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

  const filteredMedicines = cancerMedicines.filter(medicine => {
    if (selectedCategory !== "all" && medicine.category !== selectedCategory) return false;
    if (selectedTreatment !== "all" && medicine.type !== selectedTreatment.replace("-", " ")) return false;
    return true;
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleViewDetails = (id: number) => {
    console.log("View details for medicine ID:", id);
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

            {/* Purple Overlay (cancer theme) */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/60 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-1 bg-pink-500 px-2 py-1 rounded-full mb-3 max-w-max">
                  <Shield className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold text-white">Cancer Care Specialist</span>
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
                        placeholder="Search cancer medicines..."
                        className="w-full py-2.5 px-4 rounded-lg text-gray-800 focus:outline-none text-sm"
                      />
                    </div>
                    <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 min-w-[100px]">
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

      {/* Warning Banner */}
      <div className="container mx-auto px-4 -mt-4 relative z-10">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-4 shadow-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-red-800 text-lg mb-1">Important Medical Notice</h3>
              <p className="text-red-700 text-sm">
                Cancer medicines require valid prescription from a registered oncologist. 
                Self-medication can be dangerous and life-threatening. Always consult your 
                doctor before starting any cancer treatment.
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

        {/* Category Filters - Purple Pink Theme */}
        <div className={`${showMobileFilters ? 'block' : 'hidden lg:block'} mb-6 sm:mb-8`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 sm:mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Browse Cancer Medicines</h2>
              <p className="text-sm text-gray-600">Filter by cancer type or treatment method</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              {/* Sort By */}
              <div className="relative w-full sm:w-auto">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
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
              <div className="flex items-center gap-1 bg-purple-50 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-all text-sm ${
                    viewMode === "grid" 
                      ? "bg-purple-600 text-white shadow-sm" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-all text-sm ${
                    viewMode === "list" 
                      ? "bg-purple-600 text-white shadow-sm" 
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
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-purple-50 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">No cancer medicines found</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto px-4">
                Try adjusting your filters or contact our oncology support team
              </p>
            </div>
          )}
        </div>

        {/* Information Cards - Purple Pink Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Storage Guide */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-4 sm:p-6 border border-purple-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Snowflake className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Storage Requirements</h2>
                <p className="text-sm text-purple-600">Critical storage conditions for cancer medicines</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-purple-200">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Thermometer className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Cold Chain (2-8°C)</h4>
                  <p className="text-gray-600 text-xs">• Biologics, Immunotherapy drugs</p>
                  <p className="text-gray-600 text-xs">• Use medical refrigerator only</p>
                  <p className="text-gray-600 text-xs">• Temperature monitoring essential</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-purple-200">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="w-4 h-4 text-purple-600" />
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
          <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-4 sm:p-6 border border-pink-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-600 to-pink-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Safety Guidelines</h2>
                <p className="text-sm text-pink-600">Critical safety information for cancer treatment</p>
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
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0 mt-1.5"></div>
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

        {/* Popular Brands */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Trusted Oncology Brands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {[
              { name: "Roche", logo: "🏥" },
              { name: "Novartis", logo: "💊" },
              { name: "Merck", logo: "🔬" },
              { name: "Bristol-Myers Squibb", logo: "💉" },
              { name: "Genentech", logo: "🧬" },
              { name: "Pfizer", logo: "🏢" },
              { name: "AstraZeneca", logo: "⚕️" },
              { name: "Sanofi", logo: "🇫🇷" },
              { name: "Cipla", logo: "🏭" },
              { name: "Sun Pharma", logo: "☀️" }
            ].map((brand, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-purple-50 rounded-full flex items-center justify-center text-xl">
                  {brand.logo}
                </div>
                <span className="font-medium text-gray-800 text-sm">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Purple Pink */}
        <div className="bg-gradient-to-r from-purple-700 to-pink-700 rounded-xl p-4 sm:p-6 text-center text-white shadow-lg">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
            <Phone className="w-3.5 h-3.5 text-white" />
            <span className="text-xs sm:text-sm font-bold">24/7 Oncology Support</span>
          </div>
          
          <h2 className="text-lg sm:text-xl font-bold mb-3">Need Oncologist Consultation?</h2>
          <p className="text-sm sm:text-base mb-4 text-purple-100 max-w-lg mx-auto">
            Connect with our panel of certified oncologists for proper diagnosis, 
            prescription, and ongoing treatment monitoring.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 justify-center">
            <button className="bg-white text-purple-700 hover:bg-gray-100 px-4 py-2.5 rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm">
              <span className="text-base">👨‍⚕️</span>
              Consult Oncologist
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