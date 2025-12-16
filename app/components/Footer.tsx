import { Heart, Phone, Mail, MapPin, Pill, Facebook, Twitter, Instagram, Linkedin, Shield, Award, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  const categories = [
    { name: "Cancer Medicines", href: "/cancer" },
    { name: "General Medicines", href: "/medicines" },
    { name: "Pregnancy Care", href: "/pregnancy" },
    { name: "Medical Tubes", href: "/tubes" },
    { name: "Injections", href: "/injections" },
    { name: "Healthcare", href: "/healthcare" },
  ];

  const features = [
    { icon: Shield, text: "100% Genuine" },
    { icon: Award, text: "Licensed" },
    { icon: Clock, text: "24/7 Support" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Top Features Banner - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-xl bg-blue-800/50 border border-blue-700 hover:border-blue-600 transition-all group"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
                <feature.icon className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Main Content - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <Pill className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                MedStore
              </span>
            </div>
            
            <p className="text-blue-300 text-sm mb-4 leading-relaxed">
              Your trusted healthcare partner since 2010.
            </p>
            
            {/* Emergency Contact */}
            <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 border border-yellow-500/30 mb-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <div>
                  <div className="text-[10px] text-blue-300">24/7 Emergency</div>
                  <div className="text-sm font-bold">1800-123-4567</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2 rounded-lg bg-blue-800 hover:bg-blue-700 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-blue-100">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-2 text-blue-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-blue-100">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    href={category.href} 
                    className="flex items-center gap-2 text-blue-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-blue-100">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-yellow-400 mt-0.5" />
                <div className="text-sm">
                  <div className="text-blue-300">Helpline</div>
                  <div className="font-bold">1800-123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-yellow-400 mt-0.5" />
                <div className="text-sm">
                  <div className="text-blue-300">Email</div>
                  <div className="font-bold">support@medstore.com</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5" />
                <div className="text-sm">
                  <div className="text-blue-300">Address</div>
                  <div className="font-bold">Mumbai, India</div>
                </div>
              </div>

              {/* License Badge */}
              <div className="p-2 rounded-lg bg-yellow-600/20 border border-yellow-500/30">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-yellow-400" />
                  <div className="text-xs">
                    <div className="font-bold text-yellow-300">Licensed</div>
                    <div className="text-blue-300">MH/2024/12345</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Compact */}
        <div className="border-t border-blue-700 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
            <p className="text-blue-300">
              © 2024 <span className="font-bold text-yellow-400">MedStore</span>. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2">
              <span className="text-blue-300">Made with</span>
              <Heart className="w-3 h-3 text-red-500 animate-pulse" />
              <span className="text-blue-300">in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;