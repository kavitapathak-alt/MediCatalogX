"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, Truck, Shield, Star, ChevronRight, Phone, Zap, Award, Clock, Heart } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "Your Health, Our Priority",
      subtitle: "5000+ Genuine Medicines • Free Delivery • 24/7 Support",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Trusted Healthcare Partner",
      subtitle: "100% Genuine Products • Doctor Consultations • 1M+ Happy Customers",
      image: "https://media.istockphoto.com/id/1464253786/fr/photo/les-m%C3%A9dicaments-multicolores-en-comprim%C3%A9s-et-en-capsules-sont-dispers%C3%A9s-sur-une-surface-noire.jpg?s=1024x1024&w=is&k=20&c=9z2dUN8F5JxXJ5ZY73gIojfT-WZymU4qqeh1OEySnZ8="
    },
    {
      title: "Healthcare at Your Doorstep",
      subtitle: "Same Day Delivery • Emergency Services • Prescription Support",
      image: "https://thumbs.dreamstime.com/b/scattering-colorful-pills-capsules-various-shapes-sizes-flat-blue-surface-generative-ai-scattering-327628169.jpg"
    }
  ];

  const navCategories = [
    { 
      name: "Cancer Care", 
      href: "/cancer",
      badge: "RX",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&h=400&q=80",
      count: "45+ Products"
    },
    { 
      name: "Medicines", 
      href: "/medicines",
      hot: true,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&h=400&q=80",
      count: "5000+ Products"
    },
    { 
      name: "Pregnancy Care", 
      href: "/pregnancy",
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=600&h=400&q=80",
      count: "120+ Products"
    },
    { 
      name: "Medical Tubes", 
      href: "/tubes",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=600&h=400&q=80",
      count: "85+ Products"
    },
    { 
      name: "Injections", 
      href: "/injections",
      badge: "SALE",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&h=400&q=80",
      count: "200+ Products"
    },
    { 
      name: "Healthcare", 
      href: "/healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&h=400&q=80",
      count: "300+ Products"
    }
  ];

  const popularProducts = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      price: "₹25",
      originalPrice: "₹32",
      discount: "22%",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&h=600&q=80",
      rating: 4.8,
      sold: "10K+",
      tags: ["Pain Relief", "Fever"]
    },
    {
      id: 2,
      name: "Cetirizine 10mg",
      price: "₹45",
      originalPrice: "₹55",
      discount: "18%",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&h=600&q=80",
      rating: 4.6,
      sold: "8K+",
      tags: ["Allergy", "Antihistamine"]
    },
    {
      id: 3,
      name: "Vitamin C 500mg",
      price: "₹120",
      originalPrice: "₹150",
      discount: "20%",
      image: "https://st4.depositphotos.com/15311254/20766/i/1600/depositphotos_207666932-stock-photo-many-colorful-pills-tablets-capsules.jpg",
      rating: 4.9,
      sold: "12K+",
      tags: ["Immunity", "Vitamin"]
    },
    {
      id: 4,
      name: "Band Aid Pack",
      price: "₹85",
      originalPrice: "₹110",
      discount: "23%",
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&h=600&q=80",
      rating: 4.5,
      sold: "5K+",
      tags: ["First Aid", "Wound Care"]
    }
  ];

  const features = [
    { 
      icon: Truck, 
      title: "Free Delivery", 
      desc: "Above ₹499", 
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-700"
    },
    { 
      icon: Shield, 
      title: "100% Genuine", 
      desc: "Certified Products", 
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-700"
    },
    { 
      icon: Award, 
      title: "Trusted", 
      desc: "1M+ Customers", 
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconColor: "text-yellow-600"
    },
    { 
      icon: Clock, 
      title: "24/7 Support", 
      desc: "Always Available", 
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-700"
    }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/medicines?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel - Mobile Optimized */}
      <div className="relative h-[55vh] sm:h-[60vh] md:h-[65vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <img 
              src={slide.image} 
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content - Mobile Optimized */}
            <div className="absolute inset-0 flex items-center px-4">
              <div className="w-full max-w-3xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
                  <Zap className="w-3.5 h-3.5 text-yellow-400" />
                  <span className="text-xs sm:text-sm font-bold text-white">India's #1 Pharmacy</span>
                </div>

                {/* Title - Responsive */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white leading-tight">
                  Your Health,
                  <span className="block text-yellow-400 mt-1">
                    Our Priority
                  </span>
                </h1>
                
                {/* Subtitle - Mobile Friendly */}
                <p className="text-sm sm:text-base md:text-lg mb-6 text-white/90">
                  5000+ Genuine Medicines • Free Delivery • 24/7 Support
                </p>
                
                {/* Search Bar - Mobile Optimized */}
                <div className="relative">
                  <div className="relative bg-white rounded-lg shadow p-1.5">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                          placeholder="Search medicines..."
                          className="w-full py-2.5 px-4 rounded text-gray-800 focus:outline-none text-sm sm:text-base"
                        />
                      </div>
                      <button 
                        onClick={handleSearch}
                        className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2.5 rounded font-bold flex items-center justify-center gap-2 text-sm sm:text-base"
                      >
                        <Search className="w-4 h-4" />
                        <span>Search</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls - Mobile */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-1.5">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-yellow-500 w-5 sm:w-6' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features Section - Mobile Grid */}
      <div className="container mx-auto px-4 sm:px-6 mt-6 mb-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg p-3 sm:p-4 shadow-sm border ${feature.borderColor} ${feature.bgColor}`}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-2 sm:mb-3 border ${feature.borderColor}`}>
                <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section - Mobile Responsive */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Explore <span className="text-yellow-600">Categories</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">Browse medical categories</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {navCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
              onClick={() => router.push(category.href)}
            >
              {/* Category Image - Mobile Height */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                {(category.badge || category.hot) && (
                  <div className="absolute top-2 right-2">
                    <span className={`px-1.5 py-0.5 text-xs font-bold rounded-full ${
                      category.badge === 'RX' ? 'bg-red-500 text-white' :
                      category.badge === 'NEW' ? 'bg-green-500 text-white' :
                      category.badge === 'SALE' ? 'bg-yellow-500 text-white' :
                      'bg-orange-500 text-white'
                    }`}>
                      {category.badge || 'HOT'}
                    </span>
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Info */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-sm sm:text-base font-bold text-white">{category.name}</h3>
                  <p className="text-white/90 text-xs sm:text-sm">{category.count}</p>
                </div>
              </div>
              
              {/* Browse Button */}
              <div className="p-3">
                <button className="w-full py-2 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded text-sm sm:text-base transition-all flex items-center justify-center gap-2">
                  Browse
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Products - Mobile Responsive */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Top <span className="text-yellow-600">Sellers</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">Most purchased medicines</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {popularProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg shadow overflow-hidden border border-gray-200 hover:shadow-md transition-all"
              >
                {/* Product Image - Mobile Height */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-2 right-2">
                    <span className="px-1.5 py-0.5 text-xs font-bold bg-yellow-500 text-white rounded-full">
                      -{product.discount}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-2 left-2">
                    <div className="flex items-center gap-1 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-xs font-bold">{product.rating}</span>
                    </div>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-3">
                  <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-2 line-clamp-2 min-h-[40px]">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-base sm:text-lg font-bold text-blue-700">{product.price}</span>
                      <span className="text-xs text-gray-400 line-through ml-1 sm:ml-2">{product.originalPrice}</span>
                    </div>
                    <span className="text-xs text-gray-600">{product.sold} sold</span>
                  </div>
                  
                  <div className="flex gap-1.5">
                    <button className="flex-1 bg-blue-700 hover:bg-blue-800 text-white py-1.5 sm:py-2 rounded font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-1">
                      <ShoppingCart className="w-3 h-3" />
                      Add
                    </button>
                    <button className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-pink-50 hover:bg-pink-100 flex items-center justify-center transition-colors">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <button 
              onClick={() => router.push("/medicines")}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded font-bold text-sm sm:text-base transition-all"
            >
              View All Products
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}