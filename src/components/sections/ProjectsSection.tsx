'use client';

import { motion } from 'framer-motion';
import { MapPin, Quote } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { useSiteData } from '../../hooks/useSiteData';

export default function ProjectsSection() {
  const { projects } = useSiteData();

  return (
    <SectionWrapper
      id="projects"
      title="Corporate Projects"
      subtitle="Showcasing our successful technology implementations across Burundi"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="glass overflow-hidden card-hover group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative h-48 bg-gradient-to-br from-red-600/20 to-red-300/20 overflow-hidden">
              {project.images[0] ? (
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-5xl font-bold text-white/5">{project.client.charAt(0)}</div>
                </div>
              )}
              <div className="absolute top-3 left-3">
                <span className="gradient-bg text-white text-xs font-bold px-3 py-1 rounded-full">{project.category}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-text-secondary text-sm mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{project.client}</span>
                <span className="mx-1">|</span>
                <span>{project.completedDate}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-3">{project.description}</p>
              {project.testimonial && (
                <div className="bg-white/5 rounded-xl p-4 border-l-2 border-red-500">
                  <Quote className="w-4 h-4 text-red-400 mb-2" />
                  <p className="text-text-secondary text-sm italic">{project.testimonial}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="/projects" className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl text-white font-medium hover:bg-white/10 transition-colors">
          View All Projects
        </a>
      </div>
    </SectionWrapper>
  );
}