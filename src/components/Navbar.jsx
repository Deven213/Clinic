import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Specialists', href: '#specialists' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'FAQ', href: '#faq' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Navbar height offset
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className="bg-dark text-white text-sm py-2 px-4 flex justify-between items-center sm:px-8">
                <span className="hidden sm:inline-block">Mon - Sat: 8:00 AM - 8:00 PM</span>
                <a href="tel:+18001234567" className="flex items-center gap-2 hover:text-dark-teal transition-colors mx-auto sm:mx-0 font-medium">
                    <PhoneCall size={16} /> Emergency: +1 (800) 123-4567
                </a>
            </div>

            <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center">
                    <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-2xl font-bold font-heading text-dark-teal flex items-center gap-2">
                        <span className="text-3xl">⚕</span> MediCare<span className="font-normal">Plus</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="font-medium text-dark hover:text-dark-teal transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dark-teal transition-all group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                        <a href="#appointment" onClick={(e) => scrollToSection(e, '#appointment')} className="bg-dark-teal hover:bg-dark text-white px-6 py-2.5 rounded-md font-medium transition-all shadow-sm hover:shadow-md">
                            Book Appointment
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-dark p-2" onClick={() => setIsMobileMenuOpen(true)}>
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-dark text-white flex flex-col"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-gray-700">
                            <span className="text-2xl font-heading text-dark-teal font-bold">MediCarePlus</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                                <X size={28} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 p-8 text-xl font-heading">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="hover:text-dark-teal transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="mt-auto p-8">
                            <a
                                href="#appointment"
                                onClick={(e) => scrollToSection(e, '#appointment')}
                                className="block text-center bg-dark-teal text-white py-4 rounded-md font-medium hover:bg-white hover:text-dark-teal transition-all mb-4"
                            >
                                Book Appointment
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
