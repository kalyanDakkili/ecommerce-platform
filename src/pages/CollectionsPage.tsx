import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const collections = [
  {
    id: 1,
    name: 'Summer Collection',
    description: 'Light and breezy pieces for the warm season',
    imageUrl: 'https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg',
    itemCount: 24
  },
  {
    id: 2,
    name: 'Autumn Essentials',
    description: 'Cozy and stylish must-haves for fall',
    imageUrl: 'https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg',
    itemCount: 18
  },
  {
    id: 3,
    name: 'Minimalist Basics',
    description: 'Timeless pieces for a capsule wardrobe',
    imageUrl: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg',
    itemCount: 15
  },
  {
    id: 4,
    name: 'Active Wear',
    description: 'Performance clothing for your workout',
    imageUrl: 'https://images.pexels.com/photos/4662356/pexels-photo-4662356.jpeg',
    itemCount: 20
  }
];

const CollectionsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg)'
        }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collections</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our carefully curated collections for every style and occasion
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group relative overflow-hidden rounded-lg aspect-[16/9]"
            >
              <div className="absolute inset-0">
                <img
                  src={collection.imageUrl}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{collection.name}</h3>
                    <p className="text-gray-200 mb-4">{collection.description}</p>
                    <div className="flex items-center text-white/80">
                      <span>{collection.itemCount} items</span>
                      <span className="mx-2">•</span>
                      <span className="text-accent-500">Shop Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionsPage;