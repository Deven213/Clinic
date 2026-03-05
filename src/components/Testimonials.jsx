import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        text: "The care I received at MediCare Plus was exceptional. The facility feels like a luxury hotel rather than a clinic, and Dr. Jenkins was incredibly attentive to my heart condition.",
        name: "Emma Thompson",
        label: "Cardiology Patient",
    },
    {
        text: "I've never felt so comfortable at a medical center. They handled my son's pediatric needs with such grace and patience. The modern tech they use made the process seamless. Highly recommend!",
        name: "Mark & Oliver Davis",
        label: "Pediatric Patients",
    },
    {
        text: "Outstanding service from the moment you walk in. The receptionists are welcoming, the waiting area is serene, and the doctors are truly top-tier experts in their respective fields.",
        name: "Sophia Martinez",
        label: "General Medicine",
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="reviews" className="py-24 bg-dark-teal relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full filter blur-3xl" />

            <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 text-center">

                <Quote className="text-cream/20 w-24 h-24 mx-auto mb-8" />

                <div className="relative h-[250px] md:h-[200px]">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <div className="flex gap-1 text-yellow-500 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-yellow-500" />)}
                            </div>
                            <p className="text-xl md:text-2xl lg:text-3xl font-heading text-white leading-relaxed mb-8 italic">
                                "{testimonials[currentIndex].text}"
                            </p>
                            <div>
                                <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                                <p className="text-cream/80 text-sm">{testimonials[currentIndex].label}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center items-center gap-6 mt-12">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-dark-teal transition-all"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="flex gap-2">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-dark-teal transition-all"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
