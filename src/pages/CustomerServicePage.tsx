import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Clock, FileText } from 'lucide-react';

const CustomerServicePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container-custom py-12"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Customer Service</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-medium">Phone Support</h3>
                  <p className="text-gray-600">91+7416867157</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-medium">Email Support</h3>
                  <p className="text-gray-600">kalyandakkili2@gmail.com</p>
                  <p className="text-sm text-gray-500">24/7 Response within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-medium">Live Chat</h3>
                  <p className="text-gray-600">Available on website</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <div className="space-y-4">
              <a href="/faqs" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                <FileText className="w-5 h-5" />
                <span>Frequently Asked Questions</span>
              </a>
              <a href="/shipping" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                <Clock className="w-5 h-5" />
                <span>Shipping Information</span>
              </a>
              <a href="/returns" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                <FileText className="w-5 h-5" />
                <span>Returns & Exchanges</span>
              </a>
              <a href="/size-guide" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                <FileText className="w-5 h-5" />
                <span>Size Guide</span>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is your return policy?",
                  a: "We offer a 30-day return policy for all unused items in their original packaging. Visit our Returns page for more details."
                },
                {
                  q: "How long does shipping take?",
                  a: "Standard shipping typically takes 3-5 business days. Express shipping is available for 1-2 business day delivery."
                },
                {
                  q: "Do you ship internationally?",
                  a: "Yes, we ship to most countries worldwide. International shipping times and rates vary by location."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Customer Support Hours</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomerServicePage;