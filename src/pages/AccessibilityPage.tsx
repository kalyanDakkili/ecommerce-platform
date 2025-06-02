import React from 'react';
import { motion } from 'framer-motion';

const AccessibilityPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container-custom py-12"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Accessibility Statement</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="mb-4">
              Luxe is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Measures to Support Accessibility</h2>
            <p className="mb-4">
              We take the following measures to ensure accessibility of our website:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Include accessibility as part of our mission statement</li>
              <li>Provide continual accessibility training for our staff</li>
              <li>Assign clear accessibility targets and responsibilities</li>
              <li>Employ formal accessibility quality assurance methods</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Conformance Status</h2>
            <p className="mb-4">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
            </p>
            <p className="mb-4">
              Our website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
            <p className="mb-4">
              Accessibility of our website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>HTML</li>
              <li>WAI-ARIA</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitations and Alternatives</h2>
            <p className="mb-4">
              Despite our best efforts to ensure accessibility of our website, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.
            </p>
            <p className="mb-4">
              Known limitations for the website:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Comments from users may not be accessible as they can contain user-generated content</li>
              <li>Some older PDF documents are not fully accessible</li>
              <li>Some video content may not have captions available</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Feedback</h2>
            <p className="mb-4">
              We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:
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

export default AccessibilityPage;