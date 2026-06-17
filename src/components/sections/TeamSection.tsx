'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Link2 } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { useSiteData } from '../../hooks/useSiteData';

export default function TeamSection() {
  const { team } = useSiteData();

  return (
    <SectionWrapper
      id="team"
      title="Our Expert Team"
      subtitle="Meet the professionals behind Millennium Infosys's success"
      className="bg-secondary-bg/50"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            className="glass overflow-hidden card-hover group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative h-56 bg-gradient-to-br from-red-600/20 to-red-300/20 overflow-hidden">
              {member.photo ? (
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center text-3xl font-bold text-slate-900">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-bg to-transparent h-20" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
              <p className="text-red-400 text-sm font-medium">{member.position}</p>
              <p className="text-text-secondary text-xs mt-1">{member.department} | {member.experience}</p>
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-slate-200">
                <a href={`mailto:${member.email}`} className="text-text-secondary hover:text-red-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                {member.phone && (
                  <a href={`tel:${member.phone}`} className="text-text-secondary hover:text-red-400 transition-colors">
                    <Phone className="w-4 h-4" />
                  </a>
                )}
                {member.socialLinks.map((link, i) => (
                  <a key={i} href={link.url} className="text-text-secondary hover:text-red-400 transition-colors">
                    <Link2 className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}