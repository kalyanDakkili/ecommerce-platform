import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Home/Hero';
import FeaturedCategories from '../components/Home/FeaturedCategories';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Promotion from '../components/Home/Promotion';
import Newsletter from '../components/Home/Newsletter';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <Promotion />
      <Newsletter />
    </motion.div>
  );
};

export default HomePage;