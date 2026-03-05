import React from 'react';
import { MapPin, Clock, CalendarCheck } from 'lucide-react';

const WorkingHours = () => {
    return (
        <section className="py-0 relative">
            <div className="absolute top-0 w-full h-1/2 bg-cream z-0"></div>
            <div className="absolute bottom-0 w-full h-1/2 bg-dark z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

                    {/* Working Hours Info */}
                    <div className="p-10 lg:p-16 lg:w-1/2 bg-dark-teal text-white">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Working Hours & Location</h2>

                        <ul className="space-y-6 text-lg mb-10">
                            <li className="flex justify-between items-center border-b border-white/20 pb-4">
                                <span className="flex items-center gap-2"><CalendarCheck size={20} className="text-cream" /> Monday - Friday</span>
                                <span className="font-semibold">8:00 AM - 8:00 PM</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-white/20 pb-4">
                                <span className="flex items-center gap-2"><CalendarCheck size={20} className="text-cream" /> Saturday</span>
                                <span className="font-semibold">9:00 AM - 5:00 PM</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-white/20 pb-4">
                                <span className="flex items-center gap-2"><CalendarCheck size={20} className="text-cream" /> Sunday</span>
                                <span className="font-bold text-red-300">Emergency Only</span>
                            </li>
                        </ul>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                <MapPin size={24} className="text-cream" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-1">Clinic Address</h4>
                                <p className="text-cream/80 text-lg">123 Premium Medical Blvd,<br />New York, NY 10001</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Image Placeholder */}
                    <div className="lg:w-1/2 relative min-h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                            alt="Map view"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-dark/20"></div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white py-3 px-6 rounded-xl shadow-lg flex items-center gap-3 animate-bounce">
                            <MapPin className="text-dark-teal" size={28} />
                            <span className="font-bold text-dark text-lg whitespace-nowrap">We are here</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WorkingHours;
