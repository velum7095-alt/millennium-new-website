'use client';

import { motion } from 'framer-motion';
import { Award, Handshake, TrendingDown, Headphones, ShieldCheck, Truck, Building2, Wrench } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { useSiteData } from '../../hooks/useSiteData';

const iconMap: Record<string, React.ElementType> = {
  Award, Handshake, TrendingDown, Headphones, ShieldCheck, Truck, Building2, Wrench,
};

export default function WhyChooseSection() {
  const { whyChoose } = useSiteData();

  return (
    <SectionWrapper
      id="why-choose"
      title="Why Choose Millennium Infosys"
      subtitle="What sets us apart as Burundi's leading technology solutions provider"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChoose.map((item, index) => {
          const IconComponent = iconMap[item.icon] || Award;
          return (
            <motion.div
              key={item.id}
              className="glass p-6 card-hover group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-red-500/25 transition-shadow">
                <IconComponent className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}