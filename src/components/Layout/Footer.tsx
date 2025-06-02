import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin, CreditCard, Shield, Truck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Features bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b border-gray-700 pb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-600 rounded-full">
              <Truck size={24} />
            </div>
            <div>
              <h3 className="font-medium text-lg">Free Shipping</h3>
              <p className="text-gray-400">On all orders over $50</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-600 rounded-full">
              <CreditCard size={24} />
            </div>
            <div>
              <h3 className="font-medium text-lg">Secure Payment</h3>
              <p className="text-gray-400">100% secure transactions</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-600 rounded-full">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="font-medium text-lg">Money-Back Guarantee</h3>
              <p className="text-gray-400">30-day return policy</p>
            </div>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">NAYLAK</h3>
            <p className="text-gray-400 mb-4">
              Discover premium quality products curated for the modern lifestyle. Elevate your everyday with Naylak.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Shop */}
          <div>
            <h3 className="text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop/mens-clothing" className="text-gray-400 hover:text-white transition-colors">
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link to="/shop/womens-clothing" className="text-gray-400 hover:text-white transition-colors">
                  Women's Clothing
                </Link>
              </li>
              <li>
                <Link to="/shop/jewelry" className="text-gray-400 hover:text-white transition-colors">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop/electronics" className="text-gray-400 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/shop/sale" className="text-gray-400 hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Help */}
          <div>
            <h3 className="text-lg font-medium mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/customer-service" className="text-gray-400 hover:text-white transition-colors">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-gray-400 hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-400 mt-0.5" />
                <span className="text-gray-400">
                  Nellore,Andhra Pradesh,India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gray-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                 91+7416867157
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gray-400" />
                <a href="mailto:info@naylak.com" className="text-gray-400 hover:text-white transition-colors">
                  kalyandakkili2@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Naylak. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors text-sm">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;