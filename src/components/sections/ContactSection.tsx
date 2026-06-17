'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import GradientButton from '../ui/GradientButton';
import { useSiteData } from '../../hooks/useSiteData';

export default function ContactSection() {
  const { settings } = useSiteData();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', company: '', message: '', service: '' });
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Contact us for quotes, inquiries, or technical support"
      className="bg-secondary-bg/50"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          className="glass-strong p-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
          {submitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-slate-900" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h4>
              <p className="text-text-secondary">We will get back to you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-text-secondary focus:outline-none focus:border-red-500/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-text-secondary focus:outline-none focus:border-red-500/50 transition-colors"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-text-secondary focus:outline-none focus:border-red-500/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-text-secondary focus:outline-none focus:border-red-500/50 transition-colors"
                />
              </div>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-text-secondary focus:outline-none focus:border-red-500/50 transition-colors"
              >
                <option value="">Select Service</option>
                <option value="it-equipment">IT Equipment Supply</option>
                <option value="networking">Networking Solutions</option>
                <option value="cctv">CCTV & Surveillance</option>
                <option value="office-automation">Office Automation</option>
                <option value="software">Software Solutions</option>
                <option value="maintenance">Maintenance & Support</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Your Message *"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-text-secondary focus:outline-none focus:border-red-500/50 transition-colors resize-none"
              />
              <GradientButton label="Send Message" type="submit" />
            </form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                <p className="text-text-secondary">{settings.phone}</p>
              </div>
            </div>
          </div>

          <div className="glass p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                <p className="text-text-secondary">{settings.email}</p>
              </div>
            </div>
          </div>

          <div className="glass p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                <p className="text-text-secondary">{settings.address}</p>
              </div>
            </div>
          </div>

          <div className="glass p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">WhatsApp</h4>
                <p className="text-text-secondary">+257 6500 1555</p>
                <a
                  href="https://wa.me/25765001555?text=Hello%20Millennium%20Infosys!%20I%20would%20like%20to%20request%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 text-sm font-medium hover:underline"
                >
                  Get a Quote on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="glass overflow-hidden h-56">
            <div className="w-full h-full bg-gradient-to-br from-red-600/10 to-red-300/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <p className="text-text-secondary text-sm">Google Maps Integration</p>
                <p className="text-text-secondary text-xs">{settings.address}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}