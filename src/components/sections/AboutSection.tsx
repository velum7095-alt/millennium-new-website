'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useSiteData } from '../../hooks/useSiteData';

export default function AboutSection() {
  const { aboutData, stats } = useSiteData();

  return (
    <SectionWrapper
      id="about"
      title="About Millennium Infosys"
      subtitle="Your trusted technology partner since 2010, delivering excellence across Burundi"
    >
      {/* History */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-text-secondary text-lg leading-relaxed max-w-4xl mx-auto text-center">
          {aboutData.history}
        </p>
      </motion.div>

      {/* Mission, Vision, Values */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <GlassCard>
          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
          <p className="text-text-secondary leading-relaxed">{aboutData.mission}</p>
        </GlassCard>

        <GlassCard>
          <div className="w-12 h-12 gradient-bg-accent rounded-xl flex items-center justify-center mb-4">
            <Eye className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
          <p className="text-text-secondary leading-relaxed">{aboutData.vision}</p>
        </GlassCard>

        <GlassCard>
          <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-accent-gold" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Core Values</h3>
          <ul className="space-y-2">
            {aboutData.coreValues.map((value, idx) => (
              <li key={idx} className="text-text-secondary text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                {value}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="glass text-center p-6 card-hover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-text-secondary text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}