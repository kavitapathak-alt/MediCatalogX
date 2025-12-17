"use client";

import { useState } from "react";
import { Pill, Heart, Star, Shield, Thermometer, Clock, Truck, ChevronRight } from "lucide-react";

interface MedicineCardProps {
  product: {
    id: number;
    name: string;
    type: string;
    description: string;
    price: number;
    prescription: boolean;
    storage: string;
    image: string;
    rating?: number;
    brand?: string;
    dosage?: string;
    quantity?: string;
    discount?: number;
    isNew?: boolean;
    isHot?: boolean;
    isSale?: boolean;
    stock?: string;
    delivery?: string;
  };
  type?: "grid" | "list";
  onViewDetails?: (id: number) => void;
}

const MedicineCard = ({ product, type = "grid", onViewDetails }: MedicineCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Default fallback image
  const defaultImage = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&h=400&q=80";

  // Get valid image URL
  const getImageUrl = (url: string) => {
    if (!url || imgError) return defaultImage;
    return url;
  };

  // Handle image error
  const handleImageError = () => {
    setImgError(true);
  };

  // Handle view details
  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onViewDetails) {
      onViewDetails(product.id);
    }
  };

  // Handle like button
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  if (type === "grid") {
    return (
      <div 
        className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-blue-300 transition-all duration-300 group cursor-pointer flex flex-col h-full relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => handleViewDetails(e)}
      >
        {/* Image Container - Height Increased */}
        <div className="relative h-48 xs:h-52 sm:h-56 md:h-60 lg:h-64 overflow-hidden bg-white">
          <div className="absolute inset-0">
            <img
              src={getImageUrl(product.image)}
              alt={product.name}
              className={`w-full h-full object-cover transition-transform duration-300 ease-out ${
                isHovered ? "scale-105" : "scale-100"
              }`}
              onError={handleImageError}
            />
          </div>
          
          {/* Badges - Top Right */}
          <div className="absolute top-2 right-2 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="bg-green-500 text-white text-[10px] xs:text-xs font-bold px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full">
                NEW
              </span>
            )}
            {product.isHot && (
              <span className="bg-red-500 text-white text-[10px] xs:text-xs font-bold px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full">
                HOT
              </span>
            )}
            {product.isSale && (
              <span className="bg-yellow-500 text-white text-[10px] xs:text-xs font-bold px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full">
                SALE
              </span>
            )}
            {product.prescription && (
              <span className="bg-blue-600 text-white text-[10px] xs:text-xs font-bold px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full">
                RX
              </span>
            )}
          </div>
          
          {/* Like Button */}
          <button 
            onClick={handleLike}
            className="absolute top-2 left-2 w-7 h-7 xs:w-8 xs:h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors z-10 border border-gray-300"
          >
            <Heart 
              className={`w-3.5 h-3.5 xs:w-4 xs:h-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`}
            />
          </button>
          
          {/* Stock Status */}
          {product.stock && (
            <div className="absolute bottom-2 left-2">
              <span className={`text-[10px] xs:text-xs font-bold px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full ${
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
          
          {/* Delivery Time */}
          {product.delivery && (
            <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full border border-gray-300">
              <Truck className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-blue-600" />
              <span className="text-[10px] xs:text-xs font-medium text-gray-700">{product.delivery}</span>
            </div>
          )}
          
          {/* Fallback for Image Error */}
          {imgError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-300">
                <Pill className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-3 sm:p-4 flex flex-col flex-grow border-t border-gray-200">
          {/* Product Type */}
          <div className="mb-1 sm:mb-2">
            <span className="text-[10px] xs:text-xs text-gray-500 font-medium uppercase tracking-wide">
              {product.type}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="text-sm xs:text-base font-bold text-gray-900 mb-1.5 sm:mb-2 line-clamp-2 hover:text-blue-600 transition-colors min-h-[2.5rem] xs:min-h-[2.8rem]">
            {product.name}
          </h3>

          {/* Brand (if available) */}
          {product.brand && (
            <div className="text-xs xs:text-sm text-gray-600 mb-2 sm:mb-3">
              by <span className="font-medium">{product.brand}</span>
            </div>
          )}

          {/* Price Section */}
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="flex items-baseline gap-1.5 xs:gap-2">
              <span className="text-lg xs:text-xl font-bold text-gray-900">
                ₹{product.price}
              </span>
              {product.discount && product.discount > 0 && (
                <>
                  <span className="text-xs xs:text-sm text-gray-400 line-through">
                    ₹{product.discount}
                  </span>
                  <span className="text-[10px] xs:text-xs font-bold bg-green-100 text-green-800 px-1 xs:px-1.5 py-0.5 rounded border border-green-300">
                    SAVE ₹{product.discount - product.price}
                  </span>
                </>
              )}
            </div>
            
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-0.5 xs:gap-1">
                <Star className="w-3 h-3 xs:w-4 xs:h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-xs xs:text-sm font-medium text-gray-700">
                  {product.rating}
                </span>
              </div>
            )}
          </div>

          {/* Description (short) */}
          <p className="text-xs xs:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 flex-grow">
            {product.description}
          </p>

          {/* Blue Browse Button - Category Style */}
          <div className="mt-auto pt-2">
            <button 
              onClick={handleViewDetails}
              className="w-full py-2 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded text-sm sm:text-base transition-all flex items-center justify-center gap-2 border border-blue-800"
            >
              <span>View Details</span>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 group cursor-pointer"
      onClick={(e) => handleViewDetails(e)}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Section - Height Increased */}
        <div className="md:w-2/5 relative h-56 sm:h-64 md:h-auto overflow-hidden bg-white">
          <div className="absolute inset-0">
            <img
              src={getImageUrl(product.image)}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              onError={handleImageError}
            />
          </div>
          
          {/* Badges */}
          <div className="absolute top-2 right-2 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </span>
            )}
            {product.prescription && (
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                RX
              </span>
            )}
          </div>
          
          {/* Like Button */}
          <button 
            onClick={handleLike}
            className="absolute top-2 left-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors z-10 border border-gray-300"
          >
            <Heart 
              className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`}
            />
          </button>
          
          {/* Fallback for Image Error */}
          {imgError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center border border-gray-300">
                <Pill className="w-10 h-10 text-gray-400" />
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="md:w-3/5 p-4 sm:p-6">
          <div className="flex flex-col h-full">
            {/* Product Info */}
            <div className="flex-grow">
              {/* Product Type & Brand */}
              <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-3 mb-2">
                <span className="text-xs text-gray-500 font-medium uppercase">
                  {product.type}
                </span>
                {product.brand && (
                  <span className="text-xs xs:text-sm text-gray-600 font-medium">
                    • {product.brand}
                  </span>
                )}
              </div>
              
              {/* Product Name */}
              <h2 className="text-lg xs:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {product.name}
              </h2>
              
              {/* Description */}
              <p className="text-sm xs:text-base text-gray-700 mb-3 sm:mb-4 line-clamp-3">
                {product.description}
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                {product.dosage && (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 xs:w-6 xs:h-6 bg-blue-50 rounded flex items-center justify-center border border-blue-200">
                      <Pill className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[10px] xs:text-xs text-gray-500">Size</p>
                      <p className="text-xs xs:text-sm font-medium">{product.dosage}</p>
                    </div>
                  </div>
                )}
                
                {product.storage && (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 xs:w-6 xs:h-6 bg-green-50 rounded flex items-center justify-center border border-green-200">
                      <Thermometer className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[10px] xs:text-xs text-gray-500">Storage</p>
                      <p className="text-xs xs:text-sm font-medium">{product.storage}</p>
                    </div>
                  </div>
                )}
                
                {product.quantity && (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 xs:w-6 xs:h-6 bg-purple-50 rounded flex items-center justify-center border border-purple-200">
                      <Shield className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-[10px] xs:text-xs text-gray-500">Package</p>
                      <p className="text-xs xs:text-sm font-medium">{product.quantity}</p>
                    </div>
                  </div>
                )}
                
                {product.rating && (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 xs:w-6 xs:h-6 bg-yellow-50 rounded flex items-center justify-center border border-yellow-200">
                      <Star className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-[10px] xs:text-xs text-gray-500">Rating</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs xs:text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Price & Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 sm:pt-4 border-t border-gray-200 gap-3 sm:gap-0">
              <div className="flex-1">
                <div className="flex flex-col xs:flex-row xs:items-baseline gap-1 xs:gap-3">
                  <span className="text-xl xs:text-2xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                  {product.discount && product.discount > 0 && (
                    <>
                      <span className="text-sm xs:text-lg text-gray-400 line-through">
                        ₹{product.discount}
                      </span>
                      <span className="text-[10px] xs:text-xs font-bold bg-red-100 text-red-800 px-2 py-0.5 rounded border border-red-300">
                        Save {Math.round(((product.discount - product.price) / product.discount) * 100)}%
                      </span>
                    </>
                  )}
                </div>
                
                {/* Stock & Delivery */}
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {product.stock && (
                    <span className={`text-[10px] xs:text-xs font-medium px-2 py-0.5 rounded border ${
                      product.stock === "In Stock" 
                        ? "bg-green-100 text-green-800 border-green-300"
                        : "bg-yellow-100 text-yellow-800 border-yellow-300"
                    }`}>
                      {product.stock}
                    </span>
                  )}
                  {product.delivery && (
                    <span className="text-[10px] xs:text-xs text-gray-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {product.delivery}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Blue Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-xs sm:text-sm transition-colors whitespace-nowrap border border-blue-800">
                  Add to Cart
                </button>
                <button 
                  onClick={handleViewDetails}
                  className="flex items-center gap-1 sm:gap-2 bg-blue-700 hover:bg-blue-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors border border-blue-800"
                >
                  Details
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;