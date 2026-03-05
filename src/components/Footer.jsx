import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-dark text-gray-300 pt-24 pb-10 border-t-4 border-dark-teal">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="lg:col-span-1">
                        <a href="#home" className="text-2xl font-bold font-heading text-white flex items-center gap-2 mb-6">
                            <span className="text-3xl text-dark-teal">⚕</span> MediCare<span className="font-normal">Plus</span>
                        </a>
                        <p className="mb-6 leading-relaxed">
                            Elevating healthcare standards with premium medical services, expert specialists, and compassionate, patient-centered care.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-dark-teal transition-colors text-white">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-dark-teal transition-colors text-white">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-dark-teal transition-colors text-white">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-dark-teal transition-colors text-white">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-xl font-heading font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#home" className="hover:text-dark-teal transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-dark-teal transition-colors">Our Services</a></li>
                            <li><a href="#specialists" className="hover:text-dark-teal transition-colors">Top Specialists</a></li>
                            <li><a href="#reviews" className="hover:text-dark-teal transition-colors">Patient Stories</a></li>
                            <li><a href="#faq" className="hover:text-dark-teal transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-white text-xl font-heading font-bold mb-6">Departments</h4>
                        <ul className="space-y-4">
                            <li><a href="#services" className="hover:text-dark-teal transition-colors">Cardiology</a></li>
                            <li><a href="#services" className="hover:text-dark-teal transition-colors">Pediatrics</a></li>
                            <li><a href="#services" className="hover:text-dark-teal transition-colors">Neurology</a></li>
                            <li><a href="#services" className="hover:text-dark-teal transition-colors">Dental Care</a></li>
                            <li><a href="#services" className="hover:text-dark-teal transition-colors">General Medicine</a></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="text-white text-xl font-heading font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-dark-teal shrink-0 mt-1" size={20} />
                                <span>123 Premium Medical Blvd,<br />New York, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-dark-teal shrink-0" size={20} />
                                <span>+1 (800) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-dark-teal shrink-0" size={20} />
                                <span>info@medicareplus.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} MediCare Plus. All rights reserved.</p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-dark-teal transition-colors text-white ml-auto md:ml-0"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
