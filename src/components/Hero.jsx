import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AnimatedCounter = ({ target, label, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const updateCounter = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;

            if (progress < duration) {
                setCount(Math.floor((progress / duration) * target));
                requestAnimationFrame(updateCounter);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(updateCounter);
    }, [isInView, target, duration]);

    return (
        <div ref={ref} className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-dark-teal flex flex-col items-center justify-center text-center">
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-dark-teal mb-2">
                {count}{target > 1000 ? '+' : ''}
            </h3>
            <p className="text-gray-600 font-medium">{label}</p>
        </div>
    );
};

const Hero = () => {
    return (
        <section id="home" className="relative pt-20 pb-32 overflow-hidden bg-cream">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-dark-teal/10 to-transparent rounded-full -translate-y-1/4 translate-x-1/4 filter blur-3xl z-0" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-dark/5 to-transparent rounded-full translate-y-1/4 -translate-x-1/4 filter blur-3xl z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <span className="text-sm font-bold tracking-widest text-dark-teal uppercase mb-4 block">
                            Elevating Healthcare Standards
                        </span>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6">
                            A New Era of <span className="text-dark-teal italic pr-2">Medical Excellence</span>.
                        </h1>
                        <p className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed">
                            Experience world-class care in a premium setting. We blend advanced medical technology with compassionate healing to provide you with the best health outcomes.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#appointment" className="bg-dark-teal text-white px-8 py-4 rounded-lg font-medium hover:bg-dark transition-all shadow-md hover:shadow-xl flex items-center gap-2 group">
                                Schedule a Visit
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#services" className="bg-white text-dark border border-dark-teal px-8 py-4 rounded-lg font-medium hover:bg-dark-teal hover:text-white transition-all">
                                Our Services
                            </a>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="col-span-2 sm:col-span-1 transform translate-y-0 sm:translate-y-12">
                            <AnimatedCounter target={15000} label="Happy Patients" />
                        </div>
                        <div className="col-span-2 sm:col-span-1 flex flex-col gap-6">
                            <AnimatedCounter target={45} label="Specialist Doctors" duration={1500} />
                            <AnimatedCounter target={25} label="Years of Excellence" duration={2000} />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
