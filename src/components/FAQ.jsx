import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'Do you accept all regular insurances?',
        answer: 'We accept most major insurance providers including BlueCross, Aetna, Cigna, and UnitedHealthcare. Please contact our reception with your specific policy details for verification and authorization.'
    },
    {
        question: 'How early should I arrive for my appointment?',
        answer: 'We recommend arriving 15 minutes prior to your scheduled time for new patients to complete any necessary digital intake paperwork. Returning patients can arrive 5-10 minutes early.'
    },
    {
        question: 'Can I request a specific specialist?',
        answer: 'Absolutely. You can request a specific specialist when booking your appointment either via our online form or over the phone. We will accommodate your preference based on their availability schedule.'
    },
    {
        question: 'Do you offer telemedicine or virtual visits?',
        answer: 'Yes, we offer secure, private virtual consultations for certain non-emergency conditions, follow-up appointments, and mental health services. Select the "Virtual Visit" option when speaking with our reception.'
    },
    {
        question: 'Are walk-ins welcome?',
        answer: 'While we highly recommend booking an appointment to ensure minimal wait times, our General Medicine department does accept walk-in patients during standard operating hours.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-24 bg-cream relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-8">

                <div className="text-center mb-16">
                    <span className="text-sm font-bold tracking-widest text-dark-teal uppercase mb-4 block">Common Questions</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark">Frequently Asked Questions</h2>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={false}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                                className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                            >
                                <h3 className={`font-semibold text-lg pr-8 transition-colors ${idx === openIndex ? 'text-dark-teal' : 'text-dark'}`}>
                                    {faq.question}
                                </h3>
                                <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${idx === openIndex ? 'bg-dark-teal text-white' : 'bg-cream text-dark-teal'}`}>
                                    {idx === openIndex ? <Minus size={18} /> : <Plus size={18} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {idx === openIndex && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
