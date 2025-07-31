'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({ phoneNumber, message = 'Olá! Vim do site da PluginCo e gostaria de mais informações.' }: WhatsAppButtonProps) {

  // Remove any non-numeric characters from the phone number
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  // Create the WhatsApp URL with the phone number and optional message
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute bottom-20 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap">
        Fale conosco pelo WhatsApp
        <div className="absolute bottom-0 right-6 w-3 h-3 bg-white transform rotate-45 translate-y-1/2"></div>
      </div>
      <Button 
        onClick={() => window.open(whatsappUrl, '_blank')}
        className="rounded-full w-16 h-16 bg-white hover:bg-gray-100 shadow-lg flex items-center justify-center p-0 transition-all duration-300 hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#25D366" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </Button>
    </div>
  );
}