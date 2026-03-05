import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import Testimonials from './components/Testimonials';
import WorkingHours from './components/WorkingHours';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
    return (
        <div className="min-h-screen bg-cream selection:bg-dark-teal selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Doctors />
                <Appointment />
                <Testimonials />
                <WorkingHours />
                <FAQ />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;
