'use client';

import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import PartnersSection from '../components/sections/PartnersSection';
import ClientsSection from '../components/sections/ClientsSection';
import ProductsSection from '../components/sections/ProductsSection';
import WhyChooseSection from '../components/sections/WhyChooseSection';
import TeamSection from '../components/sections/TeamSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <ClientsSection />
      <ProductsSection />
      <WhyChooseSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}