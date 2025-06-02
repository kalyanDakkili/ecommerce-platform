import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, Search, Menu, X, User, LogOut } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();
  const { user, signOut } = useAuth();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">NAYLAK</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Shop
            </Link>
            <Link to="/collections" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Collections
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              className="text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link to="/wishlist" className="text-gray-700 hover:text-primary-600 transition-colors">
              <Heart size={20} />
            </Link>
            
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <User size={20} />
                </button>
                
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
                    >
                      <div className="px-4 py-2 border-b">
                        <p className="text-sm font-medium">{user.email}</p>
                      </div>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Orders
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <LogOut size={16} className="mr-2" />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-gray-700 hover:text-primary-600 transition-colors md:block hidden"
              >
                <User size={20} />
              </Link>
            )}
            
            <Link to="/cart" className="text-gray-700 hover:text-primary-600 transition-colors relative">
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            
            <button 
              className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4"
            >
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for products..." 
                  className="input pr-10" 
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600 transition-colors">
                  <Search size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors py-2 border-b border-gray-100">
                  Home
                </Link>
                <Link to="/shop" className="text-gray-700 hover:text-primary-600 transition-colors py-2 border-b border-gray-100">
                  Shop
                </Link>
                <Link to="/collections" className="text-gray-700 hover:text-primary-600 transition-colors py-2 border-b border-gray-100">
                  Collections
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors py-2 border-b border-gray-100">
                  About
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition-colors py-2 border-b border-gray-100">
                  Contact
                </Link>
                {!user && (
                  <Link to="/login" className="text-gray-700 hover:text-primary-600 transition-colors py-2">
                    Sign In
                  </Link>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;