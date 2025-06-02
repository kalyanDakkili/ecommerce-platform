import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      navigate('/login');
      return;
    }
    
    addToCart(product, 1);
  };

  return (
    <motion.div 
      className="card h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="relative overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.new && (
              <span className="bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
                NEW
              </span>
            )}
            {discountPercentage > 0 && (
              <span className="bg-error-500 text-white text-xs font-medium px-2 py-1 rounded">
                {discountPercentage}% OFF
              </span>
            )}
          </div>
          
          {/* Action buttons */}
          <div className={`absolute right-3 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
          }`}>
            <button 
              onClick={(e) => {
                e.preventDefault();
                if (!user) navigate('/login');
              }}
              className="bg-white p-2 rounded-full shadow-md hover:bg-primary-600 hover:text-white transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={16} />
            </button>
            <button 
              className="bg-white p-2 rounded-full shadow-md hover:bg-primary-600 hover:text-white transition-colors"
              aria-label="Quick view"
            >
              <Eye size={16} />
            </button>
          </div>
          
          {/* Add to cart button */}
          <div className={`absolute bottom-0 left-0 right-0 bg-primary-600 text-white font-medium p-3 flex justify-center items-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button 
              onClick={handleAddToCart}
              className="flex items-center justify-center w-full gap-2"
            >
              <ShoppingCart size={16} />
              <span>{user ? 'Add to Cart' : 'Sign in to Buy'}</span>
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="text-sm text-gray-500 mb-1">{product.category}</div>
          <h3 className="font-medium mb-2 transition-colors hover:text-primary-600">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="font-medium text-lg">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Star rating */}
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) 
                      ? 'text-accent-500' 
                      : i < product.rating 
                        ? 'text-accent-500' 
                        : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviewCount})
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;