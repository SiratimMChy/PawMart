import React, { useState } from 'react';
import { Plus, Minus, Sparkles, Zap, MessageCircle } from 'lucide-react';

export default function ModernFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I adopt a pet from PawMart?",
      answer: "Browse our Pets & Supplies page, find a pet you'd like to adopt, click 'See Details' to view full information, then click 'Adopt Now' to submit your adoption request. The pet owner will contact you directly to arrange a meet-up.",
      color: "bg-linear-to-r from-blue-600 to-cyan-600"
    },
    {
      question: "Is there an adoption fee?",
      answer: "Adoption fees vary by listing. Some pets are available for free adoption (marked as ₹0), while others may have a small fee to cover vaccination, spaying/neutering, or other care costs. The price is clearly displayed on each listing.",
      color: "bg-linear-to-r from-blue-600 to-cyan-600"
    },
    {
      question: "How can I list my pet for adoption?",
      answer: "Create an account or log in, then navigate to 'Add Listing' in the navbar. Fill out the form with your pet's details, upload a photo, and submit. Your listing will appear on the platform immediately for potential adopters to view.",
      color: "bg-linear-to-r from-blue-500 to-cyan-500"
    },
    {
      question: "Can I sell pet supplies on PawMart?",
      answer: "Yes! PawMart supports listings for pet food, accessories, toys, and care products. Simply select the appropriate category when creating your listing and set your price. Buyers can order directly through the platform.",
      color: "bg-linear-to-r from-blue-600 to-cyan-600"
    },
    {
      question: "How do payments work?",
      answer: "PawMart connects buyers and sellers directly. Payment arrangements are made between both parties during the meet-up or delivery. We recommend discussing payment methods (cash, digital payment) before finalizing the transaction.",
      color: "bg-linear-to-r from-blue-600 to-cyan-600"
    },
    {
      question: "Can I update or delete my listings?",
      answer: "Absolutely! Visit 'My Listings' to view all your active posts. You can edit details by clicking the 'Update' button or remove listings using the 'Delete' button. Changes take effect immediately.",
      color: "bg-linear-to-r from-blue-600 to-cyan-600"
    },
    {
      question: "How do I contact a seller or pet owner?",
      answer: "Each listing displays the owner's email address in the details page. You can reach out directly via email to ask questions, schedule a visit, or arrange pickup/delivery.",
      color: "bg-linear-to-r from-blue-600 to-cyan-600"
    },
    {
      question: "What areas does PawMart serve?",
      answer: "PawMart operates nationwide across Bangladesh. Each listing shows the location, allowing you to find pets and supplies near you. We encourage local meetups for safe and convenient transactions.",
      color: "bg-linear-to-r from-blue-600 to-cyan-600"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-16 bg-base-200 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Quick Answers
          </div>

          <h2 className="text-4xl  font-black text-base-content mb-6">
            Frequently Asked <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Questions</span>
          </h2>

          <p className="text-base-content/70 max-w-4xl mx-auto text-xl">
            Everything you need to know about PawMart. Can't find your answer? Reach out to our support team.
          </p>
        </div>

        {/* FAQ Cards with Unique Design */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-base-100 rounded-2xl shadow-lg border-2 overflow-hidden transition-all duration-500 ${openIndex === index
                  ? 'border-primary shadow-2xl scale-[1.02]'
                  : 'border-base-content/10 hover:border-primary/30 hover:shadow-xl'
                }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6 transition-colors duration-300"
              >
                {/* Question Number & Text */}
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${faq.color} flex items-center justify-center shrink-0 font-black text-white text-lg shadow-lg transition-transform duration-500 ${openIndex === index ? 'scale-110 rotate-6' : ''
                    }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm md:text-xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-primary' : 'text-base-content'
                      }`}>
                      {faq.question}
                    </h3>
                  </div>
                </div>

                {/* Toggle Icon */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${openIndex === index
                    ? 'bg-primary rotate-180'
                    : 'bg-base-200 group-hover:bg-primary/10'
                  }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-base-content" />
                  )}
                </div>
              </button>

              {/* Answer with Gradient Border */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className={`relative bg-linear-to-br ${faq.color} p-0.5 rounded-xl`}>
                    <div className="bg-base-100 rounded-xl p-6">
                      <p className="text-base-content/80 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}