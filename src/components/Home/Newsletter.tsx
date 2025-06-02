import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would submit to an API
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Join our community and be the first to know about new products, exclusive offers, and style inspiration.
          </p>
          
          {subscribed ? (
            <div className="bg-success-500 text-white p-4 rounded-lg animate-fade-in">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm mt-1">You'll receive our next newsletter in your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="input flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="btn btn-primary whitespace-nowrap"
              >
                <span>Subscribe</span>
                <Send size={16} className="ml-2" />
              </button>
            </form>
          )}
          
          <p className="text-gray-500 text-sm mt-4">
            By subscribing, you agree to our <a href="#" className="underline">Privacy Policy</a> and consent to receive marketing emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;