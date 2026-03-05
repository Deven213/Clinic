import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/18001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-green-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 hover:bg-green-600 transition-all duration-300"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />

            {/* Pulse effect rings */}
            <span className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-75"></span>
        </a>
    );
};

export default WhatsAppButton;
