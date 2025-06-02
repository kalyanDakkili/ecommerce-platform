import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Promotion: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-accent-500 text-black px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Summer Sale <br />
              Up to 50% Off
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Don't miss out on our biggest sale of the season. Refresh your wardrobe with our premium collection at unbeatable prices. Sale ends soon!
            </p>
            <Link to="/shop/sale" className="btn btn-accent">
              Shop the Sale
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg" 
                alt="Summer Sale" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;