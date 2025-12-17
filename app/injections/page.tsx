"use client";

import { useState, useEffect } from "react";
import { Syringe, Shield, Thermometer, Snowflake, Home, Filter, Droplets, Pill, Heart, Clock, AlertCircle, ChevronDown, Search, Phone, X, Star, Truck } from "lucide-react";

const injections = [
  {
    id: 1,
    name: "Novoseven",
    type: "Recombinant Factor VIIa",
    storage: "2-8°C",
    price: 12795,
    prescription: true,
    image: "https://th.bing.com/th/id/R.f819385736704d0e5650a4867661ca64?rik=g8ZKgxAO3tiQ3A&riu=http%3a%2f%2fegyptiandrugstore.com%2fimage%2fcache%2fdata%2fmanar%2fnovoseven-400x400.png&ehk=alPpd0bbohYAnM1%2b6Yl5mLvEucxPIZwYZxUCI2YrLH0%3d&risl=&pid=ImgRaw&r=0",
    description: "Novoseven (Eptacog alfa) is a recombinant Factor VIIa injection used to control bleeding episodes in patients with hemophilia A or B with inhibitors, congenital Factor VII deficiency, or Glanzmann's thrombasthenia. It helps the blood clot quickly and is administered via intravenous injection.",
    rating: 4.8,
    brand: "Novo Nordisk",
    dosage: "1 mg (50 KIU)",
    quantity: "Injection vial with solvent",
    discount: 13500,
    isHot: true,
    stock: "In Stock",
    delivery: "24 hours"
  },
  {
    id: 2,
    name: "Faslodex (Fulvestrant)",
    type: "Oncology / Breast Cancer",
    storage: "2-8°C",
    price: 24800,
    prescription: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/4/408657614/QN/XB/WR/10526113/faslodex-injection-500x500.jpg",
    description: "Faslodex (Fulvestrant) is an estrogen receptor antagonist used for the treatment of hormone receptor-positive metastatic breast cancer in postmenopausal women who have progressed following antiestrogen therapy.",
    rating: 4.5,
    brand: "AstraZeneca",
    dosage: "500 mg",
    quantity: "Two 5mL pre-filled syringes",
    isNew: true,
    stock: "Limited Stock",
    delivery: "48-72 hours"
  },
  {
    id: 3,
    name: "Alimta (Pemetrexed)",
    type: "Oncology / Chemotherapy",
    storage: "2-8°C",
    price: 18500,
    prescription: true,
    image: "https://tse1.mm.bing.net/th/id/OIP.T5Bz7GBkQ21_YobF5ppfSgHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=187&h=187&c=7&dpr=1.3&o=7&rm=3",
    description: "Alimta (Pemetrexed) is a multi-targeted antifolate chemotherapy agent used for the treatment of malignant pleural mesothelioma and non-small cell lung cancer (NSCLC).",
    rating: 4.4,
    brand: "Eli Lilly",
    dosage: "500 mg/m²",
    quantity: "1 vial (500 mg)",
    stock: "In Stock",
    delivery: "24-48 hours"
  },
  {
    id: 4,
    name: "Cyramza (Ramucirumab)",
    type: "Oncology / Targeted Therapy",
    storage: "2-8°C",
    price: 42500,
    prescription: true,
    image: "https://tse3.mm.bing.net/th/id/OIP.Wnp7ihzSG2dnQax_5096MgHaHW?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Cyramza (Ramucirumab) is a monoclonal antibody that specifically binds to VEGFR-2, blocking the binding of VEGF ligands and inhibiting angiogenesis.",
    rating: 4.3,
    brand: "Eli Lilly",
    dosage: "8 mg/kg",
    quantity: "1 vial (100 mg/10 mL or 500 mg/50 mL)",
    stock: "In Stock",
    delivery: "48-72 hours"
  },
  {
    id: 5,
    name: "Ozempic 0.25 mg",
    type: "Anti-diabetic / Weight Control",
    storage: "2-8°C",
    price: 3200,
    prescription: true,
    image: "https://th.bing.com/th/id/OIP.ChVAJ5AZJ43pOAB9eZxkRAHaHa?w=177&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    description: "A once-weekly Semaglutide injection used for blood sugar control and weight management. Requires refrigeration.",
    rating: 4.8,
    brand: "Novo Nordisk",
    dosage: "0.25 mg",
    quantity: "1 pen",
    isHot: true,
    stock: "In Stock",
    delivery: "24 hours"
  },
  {
    id: 6,
    name: "Ozempic 0.5 mg",
    type: "Anti-diabetic / Weight Control",
    storage: "2-8°C",
    price: 3400,
    prescription: true,
    image: "https://tse1.mm.bing.net/th/id/OIP.M9VrUcTdJAqftaplawJ_5gAAAA?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=184&h=153&c=7&dpr=1.3&o=7&rm=3",
    description: "Higher-dose Semaglutide injection for diabetes and metabolic improvement. Must be kept in 2–8°C cold chain.",
    rating: 4.6,
    brand: "Novo Nordisk",
    dosage: "0.5 mg",
    quantity: "1 pen",
    stock: "Out of Stock",
    delivery: "Pre-order"
  },
  {
    id: 7,
    name: "MabThera (Rituximab)",
    type: "Oncology / Autoimmune",
    storage: "2-8°C",
    price: 18500,
    prescription: true,
    image: "https://tse3.mm.bing.net/th/id/OIP.WYnZdRBtC4zghv0QW_fqBgHaFz?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=187&h=146&c=7&dpr=1.3&o=7&rm=3",
    description: "A monoclonal antibody for lymphoma, leukemia, and rheumatoid arthritis. Hospital-use IV infusion medicine.",
    rating: 4.4,
    brand: "Roche",
    dosage: "500 mg",
    quantity: "1 vial",
    isNew: true,
    stock: "In Stock",
    delivery: "48 hours"
  },
  {
    id: 8,
    name: "Opdivo (Nivolumab)",
    type: "Oncology / Immunotherapy",
    storage: "2-8°C",
    price: 92000,
    prescription: true,
    image: "https://tse1.mm.bing.net/th/id/OIP.BBkdd0rX-EMuPxMh_qD4uwHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=187&h=187&c=7&dpr=1.3&o=7&rm=3",
    description: "A high-grade PD-1 checkpoint inhibitor used for advanced cancers. Must be refrigerated and administered in hospital settings.",
    rating: 4.9,
    brand: "Bristol-Myers Squibb",
    dosage: "240 mg",
    quantity: "1 vial",
    stock: "In Stock",
    delivery: "72 hours"
  },
  {
    id: 9,
    name: "Avastin (Bevacizumab)",
    type: "Oncology / Targeted Therapy",
    storage: "2-8°C",
    price: 38500,
    prescription: true,
    image: "https://tse3.mm.bing.net/th/id/OIP.pFY0DGfsUKebw6heSiq7WwAAAA?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=187&h=143&c=7&dpr=1.3&o=7&rm=3",
    description: "Avastin (Bevacizumab) is a recombinant humanized monoclonal antibody that inhibits angiogenesis by targeting Vascular Endothelial Growth Factor (VEGF).",
    rating: 4.6,
    brand: "Genentech/Roche",
    dosage: "5-15 mg/kg",
    quantity: "1 vial (100 mg/4 mL or 400 mg/16 mL)",
    isNew: true,
    stock: "In Stock",
    delivery: "24-48 hours"
  },
  {
    id: 10,
    name: "Tremfya (Guselkumab)",
    type: "Immunology / Biologic",
    storage: "2-8°C",
    price: 28500,
    prescription: true,
    image: "https://tse4.mm.bing.net/th/id/OIP.FwPIPC_T21l5ubSSsigZJQHaGt?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=184&h=166&c=7&dpr=1.3&o=7&rm=3",
    description: "Tremfya (Guselkumab) is a human monoclonal antibody that selectively targets interleukin-23 (IL-23), a key cytokine involved in inflammatory processes.",
    rating: 4.7,
    brand: "Janssen",
    dosage: "100 mg",
    quantity: "1 pre-filled syringe (100 mg/mL)",
    stock: "In Stock",
    delivery: "24-48 hours"
  },
  {
    id: 11,
    name: "Zoladex (Goserelin Acetate)",
    type: "Oncology / Hormone Therapy",
    storage: "Room Temp (below 25°C)",
    price: 16200,
    prescription: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/2/LX/AD/RL/67230705/zoladex-injection-goserelin-acetate-500x500.jpeg",
    description: "Zoladex (Goserelin Acetate) is a gonadotropin-releasing hormone (GnRH) agonist used for the treatment of prostate cancer, breast cancer, endometriosis.",
    rating: 4.4,
    brand: "AstraZeneca",
    dosage: "3.6 mg (1-month) or 10.8 mg (3-month)",
    quantity: "1 pre-filled syringe with SafeSystem™ needle",
    isSale: true,
    discount: 17500,
    stock: "In Stock",
    delivery: "24 hours"
  },
  {
    id: 12,
    name: "Yervoy (Ipilimumab)",
    type: "Oncology / Immunotherapy",
    storage: "2-8°C",
    price: 98500,
    prescription: true,
    image: "https://tse4.mm.bing.net/th/id/OIP.40ypQWZ0psmjipxgoYKTRwHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Yervoy (Ipilimumab) is a monoclonal antibody that blocks cytotoxic T-lymphocyte-associated antigen 4 (CTLA-4), enhancing the immune system's ability to recognize and attack cancer cells.",
    rating: 4.8,
    brand: "Bristol-Myers Squibb",
    dosage: "1-3 mg/kg",
    quantity: "1 vial (50 mg/10 mL or 200 mg/40 mL)",
    isHot: true,
    stock: "Limited Stock",
    delivery: "72-96 hours"
  },
  {
    id: 13,
    name: "Cefoma-S (Cefoperazone + Sulbactam)",
    type: "Antibiotic",
    storage: "Room Temp (below 25°C)",
    price: 450,
    prescription: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/2/CZ/HP/OA/13087301/cefoperazone-1000mg-sulbactam-500mg-1000x1000.jpg",
    description: "Cefoma-S is a combination injectable antibiotic containing Cefoperazone and Sulbactam for treating moderate to severe infections.",
    rating: 4.5,
    brand: "Macleods",
    dosage: "1 g (Cefoperazone 0.5g + Sulbactam 0.5g)",
    quantity: "1 vial with diluent",
    stock: "In Stock",
    delivery: "Same day"
  },
  {
    id: 14,
    name: "Suruvanta (Beractant)",
    type: "Neonatal / Respiratory",
    storage: "2-8°C",
    price: 12500,
    prescription: true,
    image: "https://tse2.mm.bing.net/th/id/OIP.V13WGvVyiqUlWFOHESWxMAAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Suruvanta (Beractant) is a natural bovine lung surfactant extract used for the prevention and treatment of Respiratory Distress Syndrome (RDS) in premature infants.",
    rating: 4.9,
    brand: "Lyomark",
    dosage: "100 mg phospholipids/mL (4 mL per dose)",
    quantity: "1 vial (8 mL)",
    stock: "In Stock",
    delivery: "24 hours"
  },
  {
    id: 15,
    name: "Paracetamol Infusion",
    type: "Analgesic / Antipyretic",
    storage: "Room Temp (below 30°C)",
    price: 85,
    prescription: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/4/303127563/WO/AI/OG/182944038/paracetamol-1000mg-intravenous-infusion-500x500.jpg",
    description: "Paracetamol (Acetaminophen) Infusion is a non-opioid analgesic and antipyretic used for the management of mild to moderate pain and reduction of fever.",
    rating: 4.6,
    brand: "Multiple Brands",
    dosage: "Adults: 1 g every 4-6 hours (max 4 g/day)",
    quantity: "1 vial/bag (100 mL containing 1 g)",
    stock: "In Stock",
    delivery: "Same day"
  },
  {
    id: 16,
    name: "Biphasic Isophane Insulin Injection",
    type: "Anti-diabetic",
    storage: "2-8°C (unopened)",
    price: 480,
    prescription: true,
    image: "https://tse3.mm.bing.net/th/id/OIP.RVUws3MDk9ttNlZMLfNC2gHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Biphasic Isophane Insulin (Human Insulin 30/70) is a premixed insulin formulation containing 30% soluble insulin and 70% isophane insulin.",
    rating: 4.7,
    brand: "Biocon, Wockhardt",
    dosage: "Individualized (typically 0.3-1.0 units/kg/day)",
    quantity: "1 vial (10 mL, 100 IU/mL)",
    stock: "In Stock",
    delivery: "Same day"
  }
];

const heroSlides = [
  {
    title: "Premium Injectable Medicines",
    subtitle: "Cold Chain Storage • Certified Quality • 24/7 Support",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Diabetes Care Solutions",
    subtitle: "Insulin Pens • GLP-1 Agonists • Expert Guidance",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=1200&q=80"
  }
];
export default function InjectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<typeof injections[number] | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Filter logic - FIXED
  const filteredInjections = injections
    .filter(inj => {
      // Search filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = 
          inj.name.toLowerCase().includes(searchLower) ||
          inj.type.toLowerCase().includes(searchLower) ||
          inj.brand?.toLowerCase().includes(searchLower) ||
          inj.description.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }
      
      // Category filter - FIXED
      if (selectedCategory !== "all") {
        switch(selectedCategory) {
          case "diabetes":
            return inj.type.includes("Anti-diabetic") || inj.name.toLowerCase().includes("insulin");
          case "oncology":
            return inj.type.includes("Oncology");
          case "biologics":
            return inj.type.includes("Biologic") || inj.type.includes("Immunology");
          case "antibiotics":
            return inj.type === "Antibiotic";
          case "analgesics":
            return inj.type.includes("Analgesic") || inj.name.toLowerCase().includes("paracetamol");
          default:
            return true;
        }
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

  const categories = [
    { id: "all", label: "All Products", icon: <Pill className="w-4 h-4" /> },
    { id: "diabetes", label: "Diabetes", icon: <Droplets className="w-4 h-4" /> },
    { id: "oncology", label: "Oncology", icon: <AlertCircle className="w-4 h-4" /> },
    { id: "biologics", label: "Biologics", icon: <Syringe className="w-4 h-4" /> },
    { id: "antibiotics", label: "Antibiotics", icon: <Shield className="w-4 h-4" /> },
    { id: "analgesics", label: "Analgesics", icon: <Thermometer className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
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
                  <Syringe className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold text-white">Injectable Pharmacy</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{slide.title}</h1>
                <p className="text-sm text-white/90 mb-3">{slide.subtitle}</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search injections..."
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

        {/* Filters Container - FIXED with Category Buttons */}
        <div className={`${showMobileFilters ? 'block' : 'hidden lg:block'} mb-6`}>
          {/* Filter Header */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              {/* Heading */}
              <h3 className="text-xl font-bold text-blue-900">
                Browse <span className="text-yellow-500">Injections</span>
                <span className="block text-sm font-normal text-blue-700 mt-1">
                  {filteredInjections.length} products found
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

            {/* Category Buttons - FIXED */}
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

        {/* Products Grid - 2 Columns on Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {filteredInjections.length > 0 ? (
            filteredInjections.map((product) => (
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
                      e.currentTarget.src = "https://via.placeholder.com/300x300?text=Medicine+Image";
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
                      {product.type.split('/')[0]}
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
                <Syringe className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">No injections found</h3>
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

        {/* Modal for Product Details */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up" onClick={(e) => e.stopPropagation()}>
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
                      e.currentTarget.src = "https://via.placeholder.com/400x400?text=Medicine+Image";
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
      </div>
    </div>
  );
}