'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = '25765001555';
  const chatUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Millennium Infosys! I would like to inquire about your products and services.')}`;
  const quoteUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Millennium Infosys! I would like to request a quote for your products/services.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 glass-strong p-6 w-80"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-text-secondary hover:text-slate-900"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-slate-900" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Millennium Infosys</h4>
                <p className="text-xs text-green-400">Online - Typically replies instantly</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-3 mb-4">
              <p className="text-text-secondary text-sm">Hello! How can we help you today? Choose an option below or type your message.</p>
            </div>
            <div className="space-y-2">
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full gradient-bg hover:shadow-lg hover:shadow-red-500/25 text-slate-900 px-4 py-3 rounded-xl text-sm font-medium transition-all"
              >
                <ShoppingCart className="w-4 h-4" />
                Request a Quote
              </a>
              <a
                href={chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-green-500 hover:bg-green-600 text-slate-900 px-4 py-3 rounded-xl text-sm font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with Us
              </a>
            </div>
            <p className="text-text-secondary text-xs mt-3 text-center">+257 6500 1555</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-slate-900 flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}