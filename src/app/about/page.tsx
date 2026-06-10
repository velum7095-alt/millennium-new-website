'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '../../components/ui/SectionWrapper';
import GlassCard from '../../components/ui/GlassCard';
import AnimatedCounter from '../../components/ui/AnimatedCounter';
import { useSiteData } from '../../hooks/useSiteData';
import { Target, Eye, Heart, Award, Users, Calendar } from 'lucide-react';

export default function AboutPage() {
  const { aboutData, stats } = useSiteData();

  const timeline = [
    { year: '2010', event: 'Company founded in Bujumbura, Burundi' },
    { year: '2013', event: 'Became HP Authorized Partner' },
    { year: '2015', event: 'Expanded to networking and surveillance solutions' },
    { year: '2018', event: 'Reached 500+ business clients milestone' },
    { year: '2020', event: 'Partnered with Cisco, Hikvision, and Microsoft' },
    { year: '2022', event: 'Launched managed IT services division' },
    { year: '2024', event: 'Celebrated 14 years with 100+ corporate projects' },
    { year: '2026', event: '16+ years of excellence, serving 1000+ clients' },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary-bg to-secondary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="gradient-text">About Us</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">{aboutData.history}</p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <SectionWrapper title="Our Foundation" subtitle="The principles that drive everything we do">
        <div className="grid md:grid-cols-3 gap-6">
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
                  <span className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />{value}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <section className="section-padding bg-secondary-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Timeline */}
      <SectionWrapper title="Our Journey" subtitle="Key milestones in our 16+ year history">
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              className="flex gap-6 mb-8 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-16 text-right">
                <span className="text-lg font-bold gradient-text">{item.year}</span>
              </div>
              <div className="relative flex-shrink-0">
                <div className="w-4 h-4 rounded-full gradient-bg mt-1" />
                {index < timeline.length - 1 && (
                  <div className="absolute top-5 left-1.5 w-0.5 h-16 bg-white/10" />
                )}
              </div>
              <div className="glass p-4 flex-1 card-hover">
                <p className="text-text-secondary">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}