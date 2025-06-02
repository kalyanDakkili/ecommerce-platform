import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Share2, Star, Check, Truck, ShoppingBag, Shield, ArrowLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import ProductCard from '../components/Products/ProductCard';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const product = getProductById(parseInt(id || '0'));
  const relatedProducts = product ? getRelatedProducts(product) : [];
  
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.colors ? product.colors[0] : undefined
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes ? product.sizes[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">Sorry, the product you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    );
  }

  const handleAuthenticatedAction = (action: () => void) => {
    if (!user) {
      navigate('/login');
      return;
    }
    action();
  };
  
  const handleAddToCart = () => {
    handleAuthenticatedAction(() => {
      addToCart(product, quantity, selectedColor, selectedSize);
    });
  };

  const handleBuyNow = () => {
    handleAuthenticatedAction(() => {
      addToCart(product, quantity, selectedColor, selectedSize);
      navigate('/checkout');
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary-600 transition-colors">Shop</Link>
          <span>/</span>
          <Link to={`/shop/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-primary-600 transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>
        
        {/* Back button for mobile */}
        <div className="lg:hidden mb-4">
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            <span>Back</span>
          </button>
        </div>
        
        {/* Product details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product image */}
          <div className="sticky top-24">
            <div className="rounded-lg overflow-hidden bg-gray-100">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Product info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                  <span className="ml-1 font-medium">{product.rating.toFixed(1)}</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-500">{product.reviewCount} reviews</span>
                </div>
                
                {product.inStock ? (
                  <span className="inline-flex items-center text-success-500">
                    <Check size={16} className="mr-1" />
                    <span>In Stock</span>
                  </span>
                ) : (
                  <span className="text-error-500">Out of Stock</span>
                )}
              </div>
              
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="ml-3 text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="ml-3 bg-error-500 text-white text-xs font-medium px-2 py-1 rounded">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-6">{product.shortDescription}</p>
            </div>
            
            {/* Color selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-3">Color: <span className="text-gray-500">{selectedColor}</span></h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color 
                          ? 'border-primary-600 ring-2 ring-primary-200' 
                          : 'border-gray-300'
                      }`}
                      style={{ 
                        backgroundColor: color.toLowerCase(),
                        border: color.toLowerCase() === 'white' ? '1px solid #e5e7eb' : undefined
                      }}
                      aria-label={color}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Size selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <div className="flex justify-between mb-3">
                  <h3 className="font-medium">Size: <span className="text-gray-500">{selectedSize}</span></h3>
                  <button className="text-sm text-primary-600 hover:underline">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-12 h-10 px-3 rounded-md border transition-all ${
                        selectedSize === size 
                          ? 'border-primary-600 bg-primary-50 text-primary-600' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100 transition-colors"
                  disabled={quantity <= 1}
                >
                  <span className="text-xl">-</span>
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 h-10 border-y border-gray-300 text-center focus:outline-none"
                />
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100 transition-colors"
                >
                  <span className="text-xl">+</span>
                </button>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className="btn btn-primary flex-1 py-3"
                disabled={!product.inStock}
              >
                <ShoppingBag size={18} className="mr-2" />
                {user ? 'Add to Cart' : 'Sign in to Buy'}
              </button>
              <button 
                onClick={handleBuyNow}
                className="btn btn-accent flex-1 py-3"
                disabled={!product.inStock}
              >
                {user ? 'Buy Now' : 'Sign in to Buy'}
              </button>
              <button 
                onClick={() => handleAuthenticatedAction(() => {})}
                className="btn btn-secondary p-3"
              >
                <Heart size={18} />
              </button>
              <button className="btn btn-secondary p-3">
                <Share2 size={18} />
              </button>
            </div>
            
            {/* Product benefits */}
            <div className="border border-gray-200 rounded-lg p-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <Truck className="text-primary-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-medium text-sm">Free Shipping</h4>
                    <p className="text-gray-500 text-xs">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShoppingBag className="text-primary-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-medium text-sm">Easy Returns</h4>
                    <p className="text-gray-500 text-xs">30-day return policy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="text-primary-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-medium text-sm">Secure Payment</h4>
                    <p className="text-gray-500 text-xs">Encrypted transactions</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product description */}
            <div className="mb-8">
              <h3 className="font-medium text-lg mb-4">Product Description</h3>
              <p className="text-gray-600 whitespace-pre-line">{product.description}</p>
            </div>
          </div>
        </div>
        
        {/* Related products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;