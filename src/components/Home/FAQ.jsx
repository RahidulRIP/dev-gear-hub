"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "What is the expected shipping time?",
    answer:
      "We deliver within 2-3 business days across the country. International shipping may take 7-10 days depending on your location.",
  },
  {
    question: "Do you offer any warranty on tech gear?",
    answer:
      "Yes! All our electronic products come with a 1-year replacement warranty for any manufacturing defects.",
  },
  {
    question: "Can I return a product if I don't like it?",
    answer:
      "We have a 7-day 'no questions asked' return policy, provided the product is in its original packaging and condition.",
  },
  {
    question: "Is the payment system secure?",
    answer:
      "Absolutely. We use industry-standard SSL encryption and secure payment gateways like Stripe and PayPal to ensure your data is safe.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Got questions? We have got answers. If you do not find what you are
            looking for, reach out to us.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index
                  ? "border-blue-500 shadow-md"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left outline-none"
              >
                <span
                  className={`font-bold transition-colors ${
                    openIndex === index ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 p-5 pt-0 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Support Call-to-Action */}
        <div className="mt-12 text-center p-8 bg-blue-50 rounded-3xl">
          <p className="text-gray-700 mb-4">Still have more questions?</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}

// export default function FAQ() {
//   return (
//     <section className="py-20 bg-gray-50 text-gray-800">
//       <div className="container mx-auto px-6 max-w-2xl">
//         <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
//         <div className="space-y-4 text-left">
//           <details className="p-4 bg-white rounded shadow-sm">
//             <summary className="font-bold">Shipping time?</summary> 2-3 days.
//           </details>
//           <details className="p-4 bg-white rounded shadow-sm">
//             <summary className="font-bold">Warranty?</summary> 1 year
//             replacement.
//           </details>
//         </div>
//       </div>
//     </section>
//   );
// }
