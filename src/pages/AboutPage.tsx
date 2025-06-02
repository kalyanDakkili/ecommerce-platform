import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg)',
          backgroundPosition: 'center 30%'
        }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Crafting exceptional shopping experiences since 2020
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              At Naylak, we're dedicated to providing our customers with the finest selection of premium products 
              while delivering an exceptional shopping experience. Our commitment to quality, sustainability, 
              and customer satisfaction drives everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-bold mb-2">Customer First</h3>
              <p className="text-gray-600">
                We prioritize our customers' needs and satisfaction above all else
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-bold mb-2">Quality Focus</h3>
              <p className="text-gray-600">
                We curate only the highest quality products for our customers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally responsible practices
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve to meet changing customer needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Founded in 2025, Naylak emerged from a vision to revolutionize online shopping by combining 
                  premium quality products with exceptional customer service. What started as a small 
                  boutique has grown into a trusted destination for discerning shoppers worldwide.
                </p>
                <p className="text-gray-600">
                  Our journey has been marked by continuous innovation, sustainable practices, and an 
                  unwavering commitment to customer satisfaction. We've carefully built relationships with 
                  artisans and manufacturers who share our values of quality and sustainability.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to serve customers across the globe, offering a curated selection of 
                  products that meet our high standards for quality, style, and sustainability. Our team 
                  continues to grow, but our core values remain the same.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg" 
                  alt="Our store" 
                  className="rounded-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg" 
                  alt="Our products" 
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.pexels.com/photos/5632366/pexels-photo-5632366.jpeg" 
                  alt="Our team" 
                  className="rounded-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/5632378/pexels-photo-5632378.jpeg" 
                  alt="Our workspace" 
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who work tirelessly to bring you the best shopping experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
              },
              {
                name: "Michael Chen",
                role: "Chief Operations Officer",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              },
              {
                name: "Emily Rodriguez",
                role: "Creative Director",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
              },
              {
                name: "David Kim",
                role: "Head of Technology",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;