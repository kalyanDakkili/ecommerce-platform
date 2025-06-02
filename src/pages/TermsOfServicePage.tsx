import React from 'react';
import { motion } from 'framer-motion';

const TermsOfServicePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container-custom py-12"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Last updated: March 15, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Naylak's website for personal, non-commercial transitory viewing only.
            </p>
            <p className="mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on Naylak's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              The materials on Naylak's website are provided on an 'as is' basis. Naylak makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p className="mb-4">
              In no event shall Naylak or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Naylak's website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
            <p className="mb-4">
              The materials appearing on Naylak's website could include technical, typographical, or photographic errors. Naylak does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Links</h2>
            <p className="mb-4">
              Naylak has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Naylak of the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
            <p className="mb-4">
              Naylak may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none space-y-2">
              <li>Email: kalyandakkili2@gmail.com</li>
              <li>Phone: 91+7416867157</li>
              <li>Address: Nellore, Andhra Pradesh, India</li>
            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfServicePage;