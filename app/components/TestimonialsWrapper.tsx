'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from 'lucide-react';

const colors = {
  primary: {
    yellow: '#FFD700',
    dark: '#FFC107',
    darkYellow: '#FFC107',
    lightYellow: '#FFEB3B',
    blue: '#2b38d1',
    darkBlue: '#1E3A8A',
    pink: '#FF6B8B',
    red: '#FF4757',
  },
  
  background: {
    white: '#FFFFFF',
    lightGray: '#F8F9FA',
    darkGray: '#6C757D',
  },
  
  text: {
    dark: '#212529',
    light: '#6C757D',
    white: '#FFFFFF',
    black: '#000000',
  },
  
  hero: {
    turquoise: '#20B2AA',
    lightTurquoise: '#40E0D0',
    gradientStart: '#20B2AA',
    gradientEnd: '#40E0D0',
  },
  
  sidebar: {
    orange: '#FF6B35',
    blue: '#4A90E2',
    lightBlue: '#87CEEB',
  },
  
  interactive: {
    hover: '#FFB000',
    active: '#E6AC00',
    focus: '#FFD700',
  },
  
  border: {
    light: '#E9ECEF',
    medium: '#DEE2E6',
    dark: '#6C757D',
  },
  
  status: {
    success: '#28A745',
    warning: '#FFC107',
    error: '#DC3545',
    info: '#17A2B8',
  },
  
  offers: {
    blackFriday: '#000000',
    discount: '#FF4757',
    new: '#2ED573',
    hot: '#FFA502',
  },
  orange: {
    primary: '#FF6B35',
    secondary: '#FFA502',
    light: '#FFE4CC',
    gradient: 'linear-gradient(135deg, #FF6B35, #FFA502)'
  },
  
  yellow: {
    primary: '#FFD700',
    secondary: '#FFEB3B',
    dark: '#FFC107', 
    light: '#FFEB3B',
    rating: '#FFD700'
  },
  
  red: {
    primary: '#FF4757',
    secondary: '#FF6B8B',
    accent: '#FF4757'
  },
  
  neutral: {
    white: '#FFFFFF',
    dark: '#1F2937',
    gray: '#6B7280',
    lightGray: '#F3F4F6'
  },
  
  backgrounds: {
    main: 'linear-gradient(135deg, #E0F7FA, #FFFFFF, #FFF9C4)',
    sidebar: 'linear-gradient(135deg, #FF6B35, #FFA502)',
    card: 'linear-gradient(135deg, #FFFFFF, #FEFCE8)'
  }
};

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  company?: string;
  description?: string;
  rating: number;
  image?: string;
  location?: string;
  theme?: 'turquoise' | 'yellow' | 'blue' | 'pink';
}

// Static testimonials data
const staticTestimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "TechVision Solutions",
    description: "Working with this team has been an absolute game-changer for our business. Their attention to detail and commitment to excellence is unmatched. Highly recommended!",
    rating: 5,
    theme: 'turquoise'
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Founder & CEO",
    company: "StartupHub India",
    description: "The level of professionalism and expertise they bring to the table is outstanding. Our project was delivered on time and exceeded all expectations. Simply brilliant!",
    rating: 5,
    theme: 'yellow'
  },
  {
    id: 3,
    name: "Anjali Patel",
    role: "Product Manager",
    company: "Digital Innovations",
    description: "I've worked with many agencies, but this team stands out for their creativity and dedication. They truly understand client needs and deliver exceptional results every time.",
    rating: 4.5,
    theme: 'blue'
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Operations Head",
    company: "Enterprise Solutions Ltd",
    description: "Their strategic approach and innovative solutions have helped us achieve remarkable growth. The team is responsive, skilled, and always goes the extra mile.",
    rating: 5,
    theme: 'pink'
  },
  {
    id: 5,
    name: "Neha Gupta",
    role: "Creative Director",
    company: "Design Studio Pro",
    description: "Exceptional quality and service! They transformed our vision into reality with precision and creativity. The entire process was smooth and collaborative.",
    rating: 5,
    theme: 'turquoise'
  },
  {
    id: 6,
    name: "Arjun Mehta",
    role: "Business Developer",
    company: "Growth Partners Inc",
    description: "Outstanding experience from start to finish. Their expertise and professionalism made all the difference. We're already planning our next project with them!",
    rating: 4.5,
    theme: 'yellow'
  }
];

const StarRating: React.FC<{ rating: number; color: string; size?: string }> = ({ rating, color, size = "w-5 h-5" }) => {
  const getStarFill = (starIndex: number): string => {
    const starValue = starIndex + 1;
    
    if (rating >= starValue) {
      return color;
    } else if (rating >= starValue - 0.5) {
      return `url(#half-star-gradient-${starIndex})`;
    } else {
      return '#e0e0e0';
    }
  };

  return (
    <div className="flex gap-1 mb-3">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          {[...Array(5)].map((_, index) => (
            <linearGradient key={index} id={`half-star-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor={color} />
              <stop offset="50%" stopColor="#e0e0e0" />
            </linearGradient>
          ))}
        </defs>
      </svg>
      
      {[...Array(5)].map((_, index) => (
        <motion.svg
          key={index}
          className={size}
          fill={getStarFill(index)}
          viewBox="0 0 20 20"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.2, rotate: 15 }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{ 
  testimonial: TestimonialData; 
  index: number;
}> = ({ testimonial, index }) => {
  const themeColors = {
    turquoise: {
      bg: `linear-gradient(135deg, ${colors.background.white} 0%, #E0F7FA 50%, #B2EBF2 100%)`,
      border: colors.hero.turquoise,
      text: colors.hero.turquoise,
      shadow: `0 15px 35px rgba(32, 178, 170, 0.15)`,
      accent: `linear-gradient(135deg, ${colors.hero.turquoise}, ${colors.hero.lightTurquoise})`
    },
    yellow: {
      bg: `linear-gradient(135deg, ${colors.background.white} 0%, #FFF9C4 50%, #FFF59D 100%)`,
      border: colors.primary.yellow,
      text: colors.primary.darkYellow,
      shadow: `0 15px 35px rgba(255, 215, 0, 0.15)`,
      accent: `linear-gradient(135deg, ${colors.primary.yellow}, ${colors.primary.lightYellow})`
    },
    blue: {
      bg: `linear-gradient(135deg, ${colors.background.white} 0%, #E3F2FD 50%, #BBDEFB 100%)`,
      border: colors.primary.blue,
      text: colors.primary.darkBlue,
      shadow: `0 15px 35px rgba(43, 56, 209, 0.15)`,
      accent: `linear-gradient(135deg, ${colors.primary.blue}, ${colors.primary.darkBlue})`
    },
    pink: {
      bg: `linear-gradient(135deg, ${colors.background.white} 0%, #FCE4EC 50%, #F8BBD0 100%)`,
      border: colors.primary.pink,
      text: colors.primary.red,
      shadow: `0 15px 35px rgba(255, 107, 139, 0.15)`,
      accent: `linear-gradient(135deg, ${colors.primary.pink}, ${colors.primary.red})`
    }
  };

  const currentTheme = themeColors[testimonial.theme || 'turquoise'];
  const testimonialText = testimonial.description || 'No review provided.';
  const role = testimonial.role || 'Customer';

  return (
    <motion.div 
      className="relative h-full"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
    >
      <motion.div 
        className="relative p-6 lg:p-8 rounded-3xl transition-all duration-500 group cursor-pointer h-full flex flex-col"
        style={{ 
          background: currentTheme.bg,
          boxShadow: currentTheme.shadow,
          border: `2px solid ${currentTheme.border}30`
        }}
        whileHover={{ 
          y: -8,
          boxShadow: `0 25px 50px rgba(32, 178, 170, 0.25)`,
          scale: 1.02,
          borderColor: currentTheme.border
        }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      >
        <motion.div 
          className="absolute -top-4 -left-4 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl"
          style={{ background: currentTheme.accent }}
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        >
          <Quote className="w-7 h-7 text-white" />
        </motion.div>

        <div className="flex items-start gap-4 mb-5">
          <div className="relative flex-shrink-0">
            <motion.div 
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl overflow-hidden shadow-xl relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <div 
                className="absolute inset-0 rounded-2xl p-1"
                style={{ background: currentTheme.accent }}
              >
                <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                  <img 
                    src={testimonial.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=FFFFFF&color=000`} 
                    alt={`${testimonial.name} profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-3 border-white flex items-center justify-center shadow-lg"
              style={{ backgroundColor: currentTheme.border }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3 text-white" />
            </motion.div>
          </div>
          
          <div className="flex-1 min-w-0">
            <motion.h3 
              className="text-lg lg:text-xl font-bold mb-1 break-words"
              style={{ color: currentTheme.text }}
              whileHover={{ scale: 1.03, x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {testimonial.name || 'Anonymous'}
            </motion.h3>
            <p className="font-semibold text-sm lg:text-base mb-1 break-words" style={{ color: colors.text.dark }}>
              {role}
            </p>
            {testimonial.company && (
              <p className="font-medium text-xs lg:text-sm break-words" style={{ color: colors.neutral.gray }}>
                {testimonial.company}
              </p>
            )}
            
            <div className="mt-2 flex items-center gap-2">
              <StarRating rating={testimonial.rating} color={currentTheme.border} size="w-4 h-4 lg:w-5 lg:h-5" />
            </div>
          </div>
        </div>

        <motion.div 
          className="relative p-5 rounded-2xl flex-1"
          style={{ backgroundColor: `${currentTheme.border}10` }}
          whileHover={{ backgroundColor: `${currentTheme.border}15` }}
        >
          <p className="text-sm lg:text-base leading-relaxed font-medium break-words" style={{ color: colors.text.dark }}>
            "{testimonialText}"
          </p>
          
          <motion.div 
            className="absolute bottom-0 right-4 w-20 h-1 rounded-full mt-4"
            style={{ background: currentTheme.accent }}
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div 
          className="absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-40" 
          style={{ backgroundColor: currentTheme.border }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full opacity-30" 
          style={{ backgroundColor: currentTheme.border }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const filteredTestimonials = staticTestimonials;

  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(filteredTestimonials.length / testimonialsPerSlide);

  useEffect(() => {
    if (!isAutoPlaying || totalSlides === 0) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    if (totalSlides > 0) {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setIsAutoPlaying(false);
    }
  };

  const prevSlide = () => {
    if (totalSlides > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setIsAutoPlaying(false);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section className="min-h-screen py-12 lg:py-16 px-4 sm:px-6" style={{ background: colors.backgrounds.main }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 mx-auto" style={{ color: colors.hero.turquoise }} />
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight"
              style={{ color: colors.neutral.dark }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            >
              Client{" "}
              <span
                className="relative inline-block"
                style={{
                  background: `linear-gradient(135deg, ${colors.hero.turquoise}, ${colors.hero.lightTurquoise})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Testimonials
                <motion.div
                  className="absolute -bottom-2 left-0 h-2 rounded-full"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.hero.turquoise}, ${colors.hero.lightTurquoise})`,
                    width: '100%'
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 1 }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 font-medium"
              style={{ color: colors.neutral.gray }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Discover what our valued clients have to say about their experience working with us
            </motion.p>
          </motion.div>
        </div>
        <div className="relative mb-10 py-2">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredTestimonials
                .slice(currentSlide * testimonialsPerSlide, currentSlide * testimonialsPerSlide + testimonialsPerSlide)
                .map((testimonial: TestimonialData, idx: number) => (
                  <TestimonialCard 
                    key={testimonial.id} 
                    testimonial={testimonial} 
                    index={idx}
                  />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-6">
          <motion.button 
            onClick={prevSlide}
            className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg"
            style={{ 
              border: `2px solid ${colors.hero.turquoise}`,
              color: colors.hero.turquoise 
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: `0 10px 25px rgba(32, 178, 170, 0.3)`,
              rotate: -5
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={28} />
          </motion.button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: currentSlide === index ? '32px' : '12px',
                  height: '12px',
                  background: currentSlide === index 
                    ? `linear-gradient(135deg, ${colors.hero.turquoise}, ${colors.hero.lightTurquoise})`
                    : colors.border.medium
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
          
          <motion.button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg text-white"
            style={{ 
              background: `linear-gradient(135deg, ${colors.hero.turquoise}, ${colors.hero.lightTurquoise})`
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: `0 10px 25px rgba(32, 178, 170, 0.4)`,
              rotate: 5
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={28} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;