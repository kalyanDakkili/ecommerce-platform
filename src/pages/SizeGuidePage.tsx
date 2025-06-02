import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Shirt, Mouse as Trousers, Shovel as Shoe } from 'lucide-react';

const SizeGuidePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container-custom py-12"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Size Guide</h1>
          <p className="text-gray-600">
            Find your perfect fit with our comprehensive size guides for all product categories.
          </p>
        </div>

        <div className="space-y-12">
          {/* How to Measure */}
          <section>
            <h2 className="text-2xl font-bold mb-6">How to Measure</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Ruler className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-600 mb-4">
                    For accurate measurements, use a soft measuring tape and measure directly against your body wearing light clothing.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Chest/Bust</h3>
                      <p className="text-gray-600">Measure around the fullest part of your chest/bust, keeping the tape horizontal.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Waist</h3>
                      <p className="text-gray-600">Measure around your natural waistline, keeping the tape comfortably loose.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Hips</h3>
                      <p className="text-gray-600">Measure around the fullest part of your hips, keeping the tape horizontal.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tops Size Guide */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Shirt className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold">Tops Size Guide</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Size</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Chest (in)</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Waist (in)</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Length (in)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { size: "XS", chest: "32-34", waist: "26-28", length: "25" },
                    { size: "S", chest: "35-37", waist: "29-31", length: "26" },
                    { size: "M", chest: "38-40", waist: "32-34", length: "27" },
                    { size: "L", chest: "41-43", waist: "35-37", length: "28" },
                    { size: "XL", chest: "44-46", waist: "38-40", length: "29" },
                    { size: "XXL", chest: "47-49", waist: "41-43", length: "30" }
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 font-medium">{row.size}</td>
                      <td className="px-6 py-4">{row.chest}</td>
                      <td className="px-6 py-4">{row.waist}</td>
                      <td className="px-6 py-4">{row.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Bottoms Size Guide */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Trousers className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold">Bottoms Size Guide</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Size</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Waist (in)</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Hips (in)</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Inseam (in)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { size: "XS", waist: "26-28", hips: "34-36", inseam: "30" },
                    { size: "S", waist: "29-31", hips: "37-39", inseam: "30" },
                    { size: "M", waist: "32-34", hips: "40-42", inseam: "31" },
                    { size: "L", waist: "35-37", hips: "43-45", inseam: "31" },
                    { size: "XL", waist: "38-40", hips: "46-48", inseam: "32" },
                    { size: "XXL", waist: "41-43", hips: "49-51", inseam: "32" }
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 font-medium">{row.size}</td>
                      <td className="px-6 py-4">{row.waist}</td>
                      <td className="px-6 py-4">{row.hips}</td>
                      <td className="px-6 py-4">{row.inseam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Shoe Size Guide */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Shoe className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold">Shoe Size Guide</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">US</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">UK</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">EU</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">CM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { us: "6", uk: "5", eu: "38", cm: "23.5" },
                    { us: "7", uk: "6", eu: "39", cm: "24.1" },
                    { us: "8", uk: "7", eu: "40", cm: "24.8" },
                    { us: "9", uk: "8", eu: "41", cm: "25.4" },
                    { us: "10", uk: "9", eu: "42", cm: "26" },
                    { us: "11", uk: "10", eu: "43", cm: "26.7" }
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 font-medium">{row.us}</td>
                      <td className="px-6 py-4">{row.uk}</td>
                      <td className="px-6 py-4">{row.eu}</td>
                      <td className="px-6 py-4">{row.cm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Size Guide Notes */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Important Notes</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-3 text-gray-600">
                <li>• All measurements are approximate and may vary slightly between styles</li>
                <li>• If you're between sizes, we recommend choosing the larger size</li>
                <li>• For the best fit, take your measurements over undergarments</li>
                <li>• If you need additional assistance, please contact our customer service team</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                If you need assistance with sizing or have any questions, our customer service team is here to help:
              </p>
              <ul className="list-none space-y-2">
                <li>Email: kalyandakkili2@gmail.com</li>
                <li>Phone: 91+7416867157</li>
                <li>Hours: Monday-Friday, 9 AM - 6 PM EST</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default SizeGuidePage;