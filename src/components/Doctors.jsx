import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Star } from 'lucide-react';

const doctors = [
    {
        name: 'Dr. Sarah Jenkins',
        specialty: 'Head of Cardiology',
        experience: '15 Years Exp.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
        rating: 5.0
    },
    {
        name: 'Dr. Michael Chen',
        specialty: 'Lead Pediatrician',
        experience: '12 Years Exp.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
        rating: 4.9
    },
    {
        name: 'Dr. Elena Rodriguez',
        specialty: 'Neurology Specialist',
        experience: '18 Years Exp.',
        image: 'https://images.unsplash.com/photo-1594824436951-7f12bc41553a?q=80&w=800&auto=format&fit=crop',
        rating: 4.8
    },
    {
        name: 'Dr. James Wilson',
        specialty: 'Chief Surgeon',
        experience: '20 Years Exp.',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
        rating: 5.0
    }
];

const Doctors = () => {
    return (
        <section id="specialists" className="py-24 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-sm font-bold tracking-widest text-dark-teal uppercase mb-4 block">Our Specialists</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark">Meet Our World-Class Team</h2>
                    </div>
                    <a href="#appointment" className="text-dark-teal font-medium border-b-2 border-dark-teal hover:text-dark hover:border-dark transition-colors pb-1">
                        View All Specialists
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="relative overflow-hidden aspect-[4/5] bg-gray-200">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Social/Share Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="w-full flex justify-between items-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="font-medium">{doc.experience}</span>
                                        <button className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white hover:text-dark-teal transition-colors">
                                            <Share2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold font-heading text-dark">{doc.name}</h3>
                                    <div className="flex items-center gap-1 text-sm font-medium bg-cream px-2 py-1 rounded text-dark">
                                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                        {doc.rating}
                                    </div>
                                </div>
                                <p className="text-dark-teal font-medium mb-6 text-sm">{doc.specialty}</p>

                                <a href="#appointment" className="block w-full text-center py-3 rounded-lg border border-gray-200 font-medium hover:bg-dark-teal hover:text-white hover:border-dark-teal transition-colors">
                                    Book Appointment
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Doctors;
