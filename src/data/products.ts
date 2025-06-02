import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 1,
    name: "Men's Clothing",
    slug: "mens-clothing",
    imageUrl: "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
    description: "Shop the latest trends in men's fashion",
    productCount: 15
  },
  {
    id: 2,
    name: "Women's Clothing",
    slug: "womens-clothing",
    imageUrl: "https://images.pexels.com/photos/5702286/pexels-photo-5702286.jpeg",
    description: "Discover stylish women's apparel for every occasion",
    productCount: 20
  },
  {
    id: 3,
    name: "Jewelry",
    slug: "jewelry",
    imageUrl: "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg",
    description: "Elegant jewelry pieces to complement any outfit",
    productCount: 12
  },
  {
    id: 4,
    name: "Electronics",
    slug: "electronics",
    imageUrl: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg",
    description: "The latest gadgets and electronic devices",
    productCount: 18
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    description: "This premium cotton t-shirt offers exceptional comfort and durability. Made from 100% organic cotton, it features a modern fit with reinforced seams for longevity. The breathable fabric ensures all-day comfort, while the classic design makes it versatile for any casual occasion. Available in various colors and sizes, this t-shirt is a wardrobe essential that combines quality craftsmanship with timeless style.",
    shortDescription: "Soft, breathable 100% organic cotton t-shirt with a modern fit.",
    imageUrl: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg",
    category: "Men's Clothing",
    tags: ["t-shirt", "cotton", "men", "casual"],
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    featured: true,
    colors: ["Black", "White", "Navy", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 59.99,
    originalPrice: 79.99,
    description: "Our slim fit jeans combine modern style with all-day comfort. Crafted from premium denim with a touch of stretch, these jeans maintain their shape while providing flexibility for everyday movement. The slim silhouette offers a contemporary look without being too tight, making them versatile for both casual and semi-formal occasions. Featuring reinforced stitching and quality hardware, these jeans are designed to last through regular wear and washing.",
    shortDescription: "Premium denim jeans with a modern slim fit and comfortable stretch.",
    imageUrl: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    category: "Men's Clothing",
    tags: ["jeans", "denim", "men", "slim fit"],
    rating: 4.3,
    reviewCount: 95,
    inStock: true,
    colors: ["Blue", "Black", "Gray"],
    sizes: ["30", "32", "34", "36", "38"]
  },
  {
    id: 3,
    name: "Wireless Bluetooth Headphones",
    price: 129.99,
    originalPrice: 149.99,
    description: "Experience superior sound quality with our wireless Bluetooth headphones. Featuring advanced noise cancellation technology, these headphones deliver immersive audio while blocking out ambient noise. The comfortable over-ear design with memory foam ear cushions allows for extended listening sessions without discomfort. With a battery life of up to 30 hours, built-in microphone for calls, and quick charge capability, these headphones are perfect for music lovers and professionals alike.",
    shortDescription: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    imageUrl: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    category: "Electronics",
    tags: ["headphones", "wireless", "bluetooth", "audio"],
    rating: 4.7,
    reviewCount: 213,
    inStock: true,
    featured: true,
    colors: ["Black", "Silver", "Blue"]
  },
  {
    id: 4,
    name: "Elegant Silver Necklace",
    price: 89.99,
    originalPrice: 119.99,
    description: "Add a touch of elegance to any outfit with this stunning silver necklace. Crafted from high-quality 925 sterling silver, this piece features a delicate pendant design that catches the light beautifully. The adjustable 18-inch chain allows for versatile styling, while the secure clasp ensures it stays in place throughout the day. Perfect for special occasions or everyday wear, this necklace makes a thoughtful gift or a sophisticated addition to your personal jewelry collection.",
    shortDescription: "Sterling silver necklace with delicate pendant and adjustable chain.",
    imageUrl: "https://images.pexels.com/photos/10964391/pexels-photo-10964391.jpeg",
    category: "Jewelry",
    tags: ["necklace", "silver", "jewelry", "accessories"],
    rating: 4.8,
    reviewCount: 76,
    inStock: true,
    new: true
  },
  {
    id: 5,
    name: "Summer Floral Dress",
    price: 49.99,
    originalPrice: 69.99,
    description: "Embrace the summer season with this vibrant floral dress. Made from lightweight, breathable fabric, this dress features a flattering A-line silhouette and a comfortable elasticated waist. The cheerful floral pattern adds a pop of color to your wardrobe, while the versatile design makes it suitable for beach outings, casual gatherings, or dressed up with accessories for more formal occasions. The mid-length cut provides modest coverage while keeping you cool on warm days.",
    shortDescription: "Lightweight summer dress with vibrant floral pattern and flattering fit.",
    imageUrl: "https://images.pexels.com/photos/6068960/pexels-photo-6068960.jpeg",
    category: "Women's Clothing",
    tags: ["dress", "floral", "summer", "women"],
    rating: 4.4,
    reviewCount: 103,
    inStock: true,
    featured: true,
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    description: "Track your health and fitness goals with our advanced smart fitness watch. This versatile device monitors heart rate, sleep patterns, steps, and calories burned throughout the day. The water-resistant design allows for use during swimming and other water activities, while the built-in GPS accurately tracks your running or cycling routes. With smart notifications, customizable watch faces, and a battery life of up to 7 days, this fitness watch seamlessly integrates into your active lifestyle.",
    shortDescription: "Advanced fitness tracker with heart rate monitoring, GPS, and smart notifications.",
    imageUrl: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    category: "Electronics",
    tags: ["smartwatch", "fitness", "tech", "wearable"],
    rating: 4.6,
    reviewCount: 158,
    inStock: true,
    new: true,
    colors: ["Black", "Silver", "Rose Gold"]
  },
  {
    id: 7,
    name: "Leather Crossbody Bag",
    price: 79.99,
    originalPrice: 99.99,
    description: "Combining style and functionality, our leather crossbody bag is perfect for everyday use. Crafted from genuine leather, this bag develops a beautiful patina over time while maintaining its durability. The spacious main compartment easily accommodates essentials, while multiple inner pockets help keep items organized. The adjustable strap allows for comfortable wear, and the secure zipper closure keeps belongings safe. This timeless accessory complements any outfit, from casual to business attire.",
    shortDescription: "Genuine leather crossbody bag with multiple compartments and adjustable strap.",
    imageUrl: "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg",
    category: "Women's Clothing",
    tags: ["bag", "leather", "accessories", "crossbody"],
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    colors: ["Brown", "Black", "Tan"]
  },
  {
    id: 8,
    name: "Men's Classic Dress Shirt",
    price: 45.99,
    originalPrice: 59.99,
    description: "Elevate your formal wardrobe with our classic men's dress shirt. Tailored from premium cotton with a subtle sheen, this shirt offers a polished look for business or special occasions. The regular fit provides comfort throughout the day, while the reinforced buttons and double-stitched seams ensure longevity. The versatile design pairs well with suits for professional settings or with chinos for smart-casual events. Available in various colors, this shirt is an essential component of any gentleman's wardrobe.",
    shortDescription: "Premium cotton dress shirt with a classic fit and polished appearance.",
    imageUrl: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg",
    category: "Men's Clothing",
    tags: ["shirt", "formal", "business", "men"],
    rating: 4.2,
    reviewCount: 67,
    inStock: true,
    colors: ["White", "Light Blue", "Light Pink", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

export const getFeaturedProducts = (limit: number = 4): Product[] => {
  return products
    .filter(p => p.featured)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

export const getNewProducts = (limit: number = 4): Product[] => {
  return products
    .filter(p => p.new)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};