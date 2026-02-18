import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How long does a treatment take?",
    answer: "Most IV drips take between 45 to 60 minutes to administer. Our nurses will stay with you the entire time to monitor the process and ensure your comfort."
  },
  {
    question: "Do you accept insurance?",
    answer: "We do not accept private insurance at this time. However, our services are often eligible for HSA (Health Savings Account) and FSA (Flexible Spending Account) reimbursement. We can provide you with a detailed receipt to submit to your provider."
  },
  {
    question: "Who administers the IVs?",
    answer: "All treatments are administered by licensed Registered Nurses (RNs) with extensive experience in IV therapy. Our medical team operates under the strict supervision of our board-certified Medical Director."
  },
  {
    question: "Is mobile IV therapy safe?",
    answer: "Yes, absolutely. We adhere to the highest medical standards and safety protocols. Our nurses screen every client for contraindications before treatment, and we use only hospital-grade, sterile equipment and ingredients."
  },
  {
    question: "How quickly can I get an appointment?",
    answer: "We offer same-day appointments in most locations! Our nurses can typically arrive at your home, office, or hotel within 1-2 hours of booking. Weekend and evening slots are also available."
  },
  {
    question: "Does the IV process hurt?",
    answer: "Most clients feel only a tiny pinch when the IV is inserted. Our nurses are experts at venipuncture and use techniques to minimize discomfort. Once the IV is in, the treatment is painless and relaxing."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-purple/10 text-primary-purple mb-6">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about our mobile IV services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`
                border rounded-xl transition-all duration-300 overflow-hidden
                ${openIndex === index ? 'border-primary-purple bg-primary-purple/5 shadow-md' : 'border-gray-200 bg-white hover:border-primary-purple/50'}
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className={`font-heading font-bold text-lg ${openIndex === index ? 'text-primary-purple' : 'text-primary-dark'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary-purple flex-shrink-0 ml-4" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-primary-purple/10">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="mailto:hello@mobileivtherapy.com" 
            className="text-primary-purple font-bold hover:underline"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
