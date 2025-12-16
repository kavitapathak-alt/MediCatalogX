"use client";

import Image from "next/image";
import { Pill, Heart, Eye, Star, Shield, Thermometer } from "lucide-react";
import { useState } from "react";

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
  };
  type?: "grid" | "list";
  onViewDetails?: (id: number) => void;
}

const MedicineCard = ({ product, type = "grid", onViewDetails }: MedicineCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Default fallback image
  const defaultImage = "/images/medicines/default-medicine.jpg";

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
  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(product.id);
    }
  };

  if (type === "grid") {
    return (
      <div 
        className="medicine-card bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col h-full group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleViewDetails}
      >
        {/* PURE IMAGE SECTION - NO TEXT OVERLAY */}
        <div className="relative h-[28rem] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex-shrink-0">
          {/* CLEAN IMAGE - NO BADGES, NO TEXT */}
          <div className="relative w-full h-full">
            <Image
              src={getImageUrl(product.image)}
              alt={product.name}
              fill
              className={`object-cover transition-transform duration-700 ease-out ${
                isHovered 
                  ? "scale-110" 
                  : "scale-100"
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              onError={handleImageError}
              priority
              quality={100}
            />
            
            {/* Simple Fallback */}
            {imgError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <Pill className="w-12 h-12 text-blue-400" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SEPARATE CONTENT SECTION - BELOW IMAGE */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Minimal Badge - Top of Content */}
          <div className="flex gap-2 mb-3">
            {product.isNew && (
              <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                NEW
              </span>
            )}
            {product.prescription && (
              <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">
                RX
              </span>
            )}
            {product.isHot && (
              <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">
                HOT
              </span>
            )}
          </div>

          {/* Brand */}
          {product.brand && (
            <div className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">
              {product.brand}
            </div>
          )}

          {/* Name */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          {/* Type */}
          <div className="mb-3">
            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full font-medium">
              {product.type}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm mb-4 line-clamp-2 flex-grow">
            {product.description}
          </p>

          {/* Price Row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-blue-600">
                ₹{product.price.toLocaleString()}
              </span>
              {product.discount && product.discount > 0 && (
                <span className="text-lg text-gray-400 line-through font-medium">
                  ₹{product.discount.toLocaleString()}
                </span>
              )}
            </div>
            
            {product.rating && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium text-gray-700">
                  {product.rating.toFixed(1)}
                </span>
              </div>
            )}
          </div>

          {/* Info Row */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4">
              {product.dosage && (
                <div className="text-sm text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full">
                  {product.dosage}
                </div>
              )}
              {product.quantity && (
                <div className="text-xs text-gray-500">
                  {product.quantity}
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Thermometer className="w-3 h-3 text-blue-600" />
              <span>{product.storage}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // List View - Clean Image + Separate Content
  return (
    <div 
      className="medicine-card-list bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 group cursor-pointer"
      onClick={handleViewDetails}
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* IMAGE SECTION - PURE & CLEAN */}
        <div className="lg:w-2/5 relative h-[26rem] lg:h-auto bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={getImageUrl(product.image)}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 40vw"
              onError={handleImageError}
              priority
              quality={100}
            />
            
            {imgError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <Pill className="w-10 h-10 text-blue-400" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CONTENT SECTION - SEPARATE */}
        <div className="lg:w-3/5 p-8">
          <div className="flex flex-col h-full">
            {/* Badges */}
            <div className="flex gap-3 mb-4">
              {product.isNew && (
                <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">
                  NEW ARRIVAL
                </span>
              )}
              {product.prescription && (
                <span className="bg-red-100 text-red-800 text-sm font-bold px-3 py-1 rounded-full">
                  PRESCRIPTION REQUIRED
                </span>
              )}
            </div>

            {/* Main Content */}
            <div className="flex-grow">
              {/* Brand */}
              {product.brand && (
                <div className="text-sm text-gray-500 mb-2 font-medium uppercase">
                  {product.brand}
                </div>
              )}
              
              {/* Name */}
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {product.name}
              </h2>
              
              {/* Type & Storage */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-gray-600 bg-gray-100 px-4 py-1.5 rounded-full font-medium">
                  {product.type}
                </span>
                <span className="text-sm text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full font-medium flex items-center gap-2">
                  <Thermometer className="w-4 h-4" />
                  {product.storage}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-gray-700 mb-6">
                {product.description}
              </p>
              
              {/* Additional Info */}
              <div className="space-y-3">
                {product.dosage && (
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700 font-medium">Dosage:</span>
                    <span className="text-gray-800 bg-gray-50 px-3 py-1.5 rounded-full">
                      {product.dosage}
                    </span>
                  </div>
                )}
                
                {product.quantity && (
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700 font-medium">Package:</span>
                    <span className="text-gray-800">{product.quantity}</span>
                  </div>
                )}
                
                {product.rating && (
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700 font-medium">Rating:</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating!)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-gray-700 font-medium ml-1">
                        {product.rating.toFixed(1)}/5.0
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Price & Action */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-bold text-blue-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.discount && product.discount > 0 && (
                    <span className="text-xl text-gray-400 line-through font-medium">
                      ₹{product.discount.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Genuine</span>
                </div>
                <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
                  View Details →
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