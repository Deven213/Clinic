import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Baby, Sparkles, Brain, FlaskConical, Stethoscope, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: <Activity size={32} />,
        title: 'Cardiology',
        description: 'Advanced heart care with state-of-the-art diagnostics, prevention strategies, and personalized treatment plans.'
    },
    {
        icon: <Baby size={32} />,
        title: 'Pediatrics',
        description: 'Gentle and expert care for your little ones, from routine check-ups to comprehensive illness management.'
    },
    {
        icon: <Sparkles size={32} />,
        title: 'Dental Care',
        description: 'Complete oral health services including cosmetic, restorative, and pediatric dentistry in a relaxing environment.'
    },
    {
        icon: <Brain size={32} />,
        title: 'Neurology',
        description: 'Expert diagnosis and innovative treatments for conditions affecting the brain and nervous system.'
    },
    {
        icon: <FlaskConical size={32} />,
        title: 'Laboratory',
        description: 'Quick and precise diagnostic testing using cutting-edge laboratory equipment and strict quality controls.'
    },
    {
        icon: <Stethoscope size={32} />,
        title: 'General Medicine',
        description: 'Comprehensive primary care focused on your overall well-being and proactive health maintenance.'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-sm font-bold tracking-widest text-dark-teal uppercase mb-4 block">What We Offer</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Comprehensive Specialized Care</h2>
                    <p className="text-gray-600 text-lg">
                        We provide a wide range of premium medical services under one roof, utilizing advanced technologies and leading medical expertise.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-cream p-8 rounded-2xl border border-transparent hover:border-dark-teal/20 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Highlight bar inside card */}
                            <div className="absolute top-0 left-0 w-0 h-1 bg-dark-teal transition-all duration-300 group-hover:w-full"></div>

                            <div className="w-16 h-16 bg-white shrink-0 rounded-2xl shadow-sm flex items-center justify-center text-dark-teal mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold font-heading mb-4 text-dark">{service.title}</h3>
                            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                                {service.description}
                            </p>

                            <a href="#appointment" className="inline-flex items-center text-dark-teal font-medium hover:text-dark transition-colors mt-auto w-fit group/btn">
                                Book Now
                                <ArrowRight size={18} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Services;
