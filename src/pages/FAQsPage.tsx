import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const FAQsPage: React.FC = () => {
  const faqs = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          q: "How long does shipping take?",
          a: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business day delivery. International shipping typically takes 7-14 business days."
        },
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship to most countries worldwide. Shipping rates and delivery times vary by location. Import duties and taxes may apply."
        },
        {
          q: "Can I modify my order after it's placed?",
          a: "Orders can be modified within 1 hour of placement. Please contact customer service immediately for assistance."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy for unused items in original packaging. Returns are free for orders over $50."
        },
        {
          q: "How do I start a return?",
          a: "Log into your account, find your order, and click 'Start Return'. Follow the prompts to generate a return shipping label."
        },
        {
          q: "How long do refunds take?",
          a: "Refunds are processed within 3-5 business days of receiving your return. The refund will be issued to your original payment method."
        }
      ]
    },
    {
      category: "Product Information",
      questions: [
        {
          q: "How do I find my size?",
          a: "Check our size guide for detailed measurements. Each product page includes specific sizing information."
        },
        {
          q: "Are your products authentic?",
          a: "Yes, all our products are 100% authentic and sourced directly from authorized manufacturers."
        },
        {
          q: "Do you offer gift wrapping?",
          a: "Yes, gift wrapping is available at checkout for a small fee. You can also include a personalized message."
        }
      ]
    },
    {
      category: "Account & Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, PayPal, and Apple Pay. All transactions are secure and encrypted."
        },
        {
          q: "How do I track my order?",
          a: "Once your order ships, you'll receive a tracking number via email. You can also track orders in your account."
        },
        {
          q: "Is my payment information secure?",
          a: "Yes, we use industry-standard encryption and security measures to protect your payment information."
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container-custom py-12"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">
            Find answers to common questions about our products, services, and policies.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex gap-4">
                      <HelpCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">{faq.q}</h3>
                        <p className="text-gray-600">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please contact our customer support team.
          </p>
          <div className="space-y-2">
            <p>Email: kalyandakkili2@gmail.com</p>
            <p>Phone: 91+7416867157</p>
            <p>Hours: Monday-Friday, 9 AM - 6 PM EST</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQsPage;