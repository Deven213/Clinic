import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Phone, Mail } from 'lucide-react';

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        department: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const departments = [
        { value: 'cardio', label: 'Cardiology - Dr. Sarah Jenkins' },
        { value: 'pediatrics', label: 'Pediatrics - Dr. Michael Chen' },
        { value: 'neuro', label: 'Neurology - Dr. Elena Rodriguez' },
        { value: 'surgery', label: 'General Surgery - Dr. James Wilson' },
        { value: 'general', label: 'General Medicine/Checkup' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setShowModal(true);
            setFormData({ name: '', phone: '', date: '', time: '', department: '' });
        }, 1500);
    };

    return (
        <section id="appointment" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="max-w-xl">
                        <span className="text-sm font-bold tracking-widest text-dark-teal uppercase mb-4 block">Book a Visit</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">Request an Appointment Today</h2>
                        <p className="text-gray-600 mb-10 text-lg">
                            Ready to experience premium healthcare? Fill out the form, and our reception team will contact you shortly to confirm your schedule and provide any necessary pre-visit instructions.
                        </p>

                        <div className="flex flex-col gap-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-dark-teal shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-dark mb-1">Call Us Directly</h4>
                                    <p className="text-gray-600">Available 24/7 for emergencies</p>
                                    <a href="tel:+18001234567" className="text-dark-teal font-medium hover:underline text-lg mt-1 block">
                                        +1 (800) 123-4567
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-dark-teal shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-dark mb-1">Email Us</h4>
                                    <p className="text-gray-600">For general inquiries and records</p>
                                    <a href="mailto:appointments@medicareplus.com" className="text-dark-teal font-medium hover:underline text-lg mt-1 block">
                                        appointments@medicareplus.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-cream p-8 md:p-10 rounded-3xl shadow-lg relative border border-white/50 backdrop-blur-sm">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-dark mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dark-teal/50 focus:border-dark-teal bg-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-dark mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dark-teal/50 focus:border-dark-teal bg-white"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-dark mb-2">Preferred Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dark-teal/50 focus:border-dark-teal bg-white text-gray-700"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-dark mb-2">Preferred Time</label>
                                    <select
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dark-teal/50 focus:border-dark-teal bg-white text-gray-700"
                                    >
                                        <option value="" disabled>Select a block</option>
                                        <option value="morning">Morning (8AM - 12PM)</option>
                                        <option value="afternoon">Afternoon (12PM - 4PM)</option>
                                        <option value="evening">Evening (4PM - 8PM)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-dark mb-2">Select Department / Specialist</label>
                                <select
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dark-teal/50 focus:border-dark-teal bg-white text-gray-700"
                                >
                                    <option value="" disabled>Choose an option</option>
                                    {departments.map((dep) => (
                                        <option key={dep.value} value={dep.value}>{dep.label}</option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-dark-teal text-white py-4 rounded-lg font-bold text-lg hover:bg-dark transition-all shadow-md mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>Processing <span className="animate-spin text-xl leading-none">⏳</span></>
                                ) : (
                                    <>Confirm Appointment <CheckCircle2 size={20} /></>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
                            onClick={() => setShowModal(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white p-10 rounded-3xl max-w-sm w-full relative z-10 text-center shadow-2xl"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                                <CheckCircle2 size={40} />
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-dark mb-4">Request Sent!</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Thank you for choosing MediCare Plus. Our reception team will contact you shortly to confirm your schedule.
                            </p>
                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-dark-teal text-white py-3 rounded-lg font-medium hover:bg-dark transition-colors"
                            >
                                Done
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Appointment;
