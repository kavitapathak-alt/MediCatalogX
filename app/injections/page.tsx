"use client";

import { useState, useEffect } from "react";
import { Syringe, Shield, Thermometer, Snowflake, Home, Filter, Droplets, Pill, Heart, Clock, AlertCircle, ChevronDown, Search, Phone } from "lucide-react";
import MedicineCard from "@/app/components/MedicineCard";

const injections = [
  {
  id: 1,
  name: "Novoseven",
  type: "Recombinant Factor VIIa",
  storage: "2-8°C",
  price: 12795,
  prescription: true,
  image: "/images/injections/nevoseven.png",
  description: "Novoseven (Eptacog alfa) is a recombinant Factor VIIa injection used to control bleeding episodes in patients with hemophilia A or B with inhibitors, congenital Factor VII deficiency, or Glanzmann’s thrombasthenia. It helps the blood clot quickly and is administered via intravenous injection.",
  rating: 4.8,
  brand: "Novo Nordisk",
  dosage: "1 mg (50 KIU)",
  quantity: "Injection vial with solvent",
  discount: 13500,
  isHot: true,
  stock: "In Stock",
  delivery: "24 hours"
}
  ,
 {
  id: 2,
  name: "Faslodex (Fulvestrant)",
  type: "Oncology / Breast Cancer",
  storage: "2-8°C",
  price: 24800,
  prescription: true,
  image: "/images/injections/faslodex.png",
  description: "Faslodex (Fulvestrant) is an estrogen receptor antagonist used for the treatment of hormone receptor-positive metastatic breast cancer in postmenopausal women who have progressed following antiestrogen therapy. It works by downregulating estrogen receptors and inhibiting estrogen signaling. Administered as a monthly intramuscular injection (two 5mL injections, one in each buttock). Must be stored refrigerated at 2-8°C and protected from light.",
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
  image: "/images/injections/alimta.png",
  description: "Alimta (Pemetrexed) is a multi-targeted antifolate chemotherapy agent used for the treatment of malignant pleural mesothelioma and non-small cell lung cancer (NSCLC). It works by inhibiting multiple folate-dependent enzymes involved in purine and pyrimidine synthesis, thereby disrupting cancer cell replication. Administered via intravenous infusion after reconstitution with 0.9% sodium chloride. Requires pre-medication with folic acid, vitamin B12, and dexamethasone to reduce toxicity.",
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
  image: "/images/injections/cyramza.png",
  description: "Cyramza (Ramucirumab) is a monoclonal antibody that specifically binds to VEGFR-2 (Vascular Endothelial Growth Factor Receptor-2), blocking the binding of VEGF ligands and inhibiting angiogenesis. It is indicated for the treatment of advanced or metastatic gastric cancer, non-small cell lung cancer, colorectal cancer, and hepatocellular carcinoma, either as monotherapy or in combination with other chemotherapeutic agents. Administered as an intravenous infusion every 2-3 weeks. Storage requires refrigeration at 2-8°C and protection from light.",
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
    image: "/images/injections/ozempic-025.jpg",
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
    image: "/images/injections/ozempic-05.jpg",
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
    image: "/images/injections/mabthera.jpg",
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
    image: "/images/injections/opdivo.jpg",
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
  image: "/images/injections/avastin.png",
  description: "Avastin (Bevacizumab) is a recombinant humanized monoclonal antibody that inhibits angiogenesis by targeting Vascular Endothelial Growth Factor (VEGF). It is used for the treatment of various cancers including colorectal cancer, non-small cell lung cancer, glioblastoma, renal cell carcinoma, cervical cancer, and ovarian cancer. By binding to VEGF, it prevents the formation of new blood vessels that tumors need to grow. Administered as an intravenous infusion every 2-3 weeks. Must be stored refrigerated at 2-8°C and protected from light.",
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
  image: "/images/injections/tremfya.png",
  description: "Tremfya (Guselkumab) is a human monoclonal antibody that selectively targets interleukin-23 (IL-23), a key cytokine involved in inflammatory processes. It is indicated for the treatment of moderate to severe plaque psoriasis and active psoriatic arthritis in adults. By inhibiting IL-23, Tremfya reduces inflammation and improves skin and joint symptoms. Administered as a subcutaneous injection with an initial loading dose at weeks 0 and 4, followed by maintenance dosing every 8 weeks. Must be stored refrigerated at 2-8°C and protected from light; can be kept at room temperature for up to 30 days.",
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
  image: "/images/injections/zaladexla.png",
  description: "Zoladex (Goserelin Acetate) is a gonadotropin-releasing hormone (GnRH) agonist used for the treatment of prostate cancer, breast cancer, endometriosis, and certain benign gynecological disorders. It works by initially stimulating then suppressing pituitary gonadotropin secretion, leading to reduced production of sex hormones (testosterone or estrogen). Administered as a subcutaneous implant via pre-filled syringe into the anterior abdominal wall, providing sustained release over 1 month (3.6 mg) or 3 months (10.8 mg). Store at room temperature below 25°C, protected from light and moisture.",
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
  image: "/images/injections/yervoy.png",
  description: "Yervoy (Ipilimumab) is a monoclonal antibody that blocks cytotoxic T-lymphocyte-associated antigen 4 (CTLA-4), enhancing the immune system's ability to recognize and attack cancer cells. It is indicated for the treatment of advanced melanoma, renal cell carcinoma, colorectal cancer with MSI-H/dMMR, hepatocellular carcinoma, and non-small cell lung cancer, often in combination with nivolumab (Opdivo). Administered as an intravenous infusion over 90 minutes. Requires refrigeration at 2-8°C and protection from light. Due to its mechanism of immune activation, Yervoy can cause serious immune-mediated adverse reactions affecting various organs.",
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
  image: "/images/injections/cefoma-s-1gm.png",
  description: "Cefoma-S is a combination injectable antibiotic containing Cefoperazone (third-generation cephalosporin) and Sulbactam (beta-lactamase inhibitor). It is indicated for the treatment of moderate to severe infections caused by susceptible organisms, including respiratory tract infections, urinary tract infections, intra-abdominal infections, skin and soft tissue infections, and sepsis. Sulbactam extends the antibacterial spectrum by inhibiting beta-lactamase enzymes that would otherwise inactivate Cefoperazone. Administered via intravenous or intramuscular injection. Reconstituted solution should be used immediately and any unused portion discarded. Store vials at room temperature, protected from light and moisture.",
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
  image: "/images/injections/suruvantaberactant.png",
  description: "Suruvanta (Beractant) is a natural bovine lung surfactant extract used for the prevention and treatment of Respiratory Distress Syndrome (RDS) in premature infants. It contains phospholipids, neutral lipids, fatty acids, and surfactant-associated proteins that reduce surface tension in the alveoli, preventing collapse and improving lung compliance. Indicated for premature infants with clinical evidence of RDS or those at high risk of developing RDS. Administered via endotracheal tube as a sterile suspension in four divided doses. Must be stored refrigerated at 2-8°C and protected from light; do not freeze. Unopened vials may be warmed to room temperature before administration.",
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
  image: "/images/injections/paracetamolinfusionip.png",
  description: "Paracetamol (Acetaminophen) Infusion is a non-opioid analgesic and antipyretic used for the management of mild to moderate pain and reduction of fever when oral administration is not possible. It works by inhibiting prostaglandin synthesis in the central nervous system. Indicated for postoperative pain, dental pain, headache, musculoskeletal pain, and febrile conditions. Administered as an intravenous infusion over 15 minutes. Available in various strengths (100 mg/mL, 500 mg/50 mL, 1 g/100 mL). Store at room temperature protected from light; do not freeze. Compatible with most IV fluids including 0.9% sodium chloride, 5% dextrose, and Ringer's lactate.",
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
  storage: "2-8°C (unopened), Room Temp (in use: up to 28 days)",
  price: 480,
  prescription: true,
  image: "/images/injections/biphasicisophaneinsulininjectionip.png",
  description: "Biphasic Isophane Insulin (Human Insulin 30/70) is a premixed insulin formulation containing 30% soluble insulin (rapid-acting) and 70% isophane insulin (intermediate-acting). It is indicated for the management of type 1 and type 2 diabetes mellitus, providing both prandial glucose control and basal insulin coverage. The soluble insulin component acts within 30 minutes to control post-meal glucose spikes, while the isophane component provides sustained action for up to 24 hours. Administered subcutaneously, typically twice daily before breakfast and dinner. Unopened vials must be refrigerated at 2-8°C; in-use vials can be kept at room temperature (below 25°C) for up to 28 days. Do not freeze or expose to direct heat/light.",
  rating: 4.7,
  brand: "Biocon, Wockhardt, etc.",
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
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Diabetes Care Solutions",
    subtitle: "Insulin Pens • GLP-1 Agonists • Expert Guidance",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Cancer Treatment Injections",
    subtitle: "Chemotherapy • Immunotherapy • Targeted Therapy",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Professional Biologics",
    subtitle: "Refrigerated Storage • Quality Assured • Fast Delivery",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function InjectionsPage() {
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

  
  const filteredInjections = selectedCategory === "all" 
    ? injections 
    : injections.filter(inj => {
        if (selectedCategory === "diabetes") return inj.name.toLowerCase().includes("insulin") || inj.type.includes("Anti-diabetic");
        if (selectedCategory === "oncology") return inj.type.includes("Oncology");
        if (selectedCategory === "biologics") return inj.type.includes("Biologic") || inj.type.includes("Immunology");
        if (selectedCategory === "antibiotics") return inj.type === "Antibiotic";
        if (selectedCategory === "analgesics") return inj.name.toLowerCase().includes("paracetamol");
        if (selectedCategory === "vitamins") return inj.type === "Supplement";
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel - FIXED FOR MOBILE */}
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

            {/* Content - MOBILE FRIENDLY */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                {/* Badge - SMALL ON MOBILE */}
                <div className="inline-flex items-center gap-1 bg-yellow-500 px-2 py-1 rounded-full mb-3 max-w-max">
                  <Syringe className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold text-white">Injectable Pharmacy</span>
                </div>

                {/* Title - RESPONSIVE TEXT */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                  {slide.title}
                </h1>
                
                {/* Subtitle - SMALLER ON MOBILE */}
                <p className="text-sm sm:text-base text-white/90 mb-4 max-w-md">
                  {slide.subtitle}
                </p>
                
                {/* Search Bar - COMPACT ON MOBILE */}
                <div className="max-w-md">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search injections..."
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
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Browse Injections</h2>
              <p className="text-sm text-gray-600">Filter by category or storage requirements</p>
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

       

        {/* Products Grid/List - Using MedicineCard Component */}
        <div className="mb-8 sm:mb-12">
          <div className={`${viewMode === "grid" 
            ? "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" 
            : "space-y-4"
          }`}>
            {filteredInjections.map((injection) => (
              <MedicineCard
                key={injection.id}
                product={injection}
                type={viewMode}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {/* No Results */}
          {filteredInjections.length === 0 && (
            <div className="text-center py-10 sm:py-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                <Syringe className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">No injections found</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto px-4">
                Try adjusting your filters or browse other categories
              </p>
            </div>
          )}
        </div>

        {/* Information Cards - Blue Yellow Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Storage Guide */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 sm:p-6 border border-blue-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Snowflake className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Storage Requirements</h2>
                <p className="text-sm text-blue-600">Proper storage ensures safety and efficacy</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-200">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Thermometer className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Cold Chain (2-8°C)</h4>
                  <p className="text-gray-600 text-xs">• Insulin, Biologics, Vaccines</p>
                  <p className="text-gray-600 text-xs">• Use medical refrigerator</p>
                  <p className="text-gray-600 text-xs">• Never freeze</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-200">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Room Temperature</h4>
                  <p className="text-gray-600 text-xs">• Vitamins, Antibiotics</p>
                  <p className="text-gray-600 text-xs">• Store in cool, dry place</p>
                  <p className="text-gray-600 text-xs">• Avoid direct sunlight</p>
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
                <p className="text-sm text-yellow-600">Important safety instructions for injections</p>
              </div>
            </div>
            
            <div className="space-y-2">
              {[
                "Requires valid medical prescription",
                "Professional administration recommended",
                "Check expiry date before use",
                "Store away from children and pets",
                "Dispose of sharps properly",
                "Monitor for allergic reactions"
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
                Injectable medicines should only be used under medical supervision. 
                Do not self-administer without proper training.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section - Blue Yellow */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl p-4 sm:p-6 text-center text-white shadow-lg">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
            <Phone className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-xs sm:text-sm font-bold">24/7 Emergency Support</span>
          </div>
          
          <h2 className="text-lg sm:text-xl font-bold mb-3">Need Professional Advice?</h2>
          <p className="text-sm sm:text-base mb-4 text-blue-100 max-w-lg mx-auto">
            Our licensed pharmacists are available 24/7 to help you understand injectable medicines, 
            dosage, and administration guidelines.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 justify-center">
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-4 py-2.5 rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm">
              <span className="text-base">👨‍⚕️</span>
              Chat with Pharmacist
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