'use client';

import SectionWrapper from '../ui/SectionWrapper';
import LogoCarousel from '../ui/LogoCarousel';
import { useSiteData } from '../../hooks/useSiteData';

export default function PartnersSection() {
  const { partners } = useSiteData();

  return (
    <SectionWrapper
      id="partners"
      title="Official Channel Partners"
      subtitle="Authorized distributor and partner for world-leading technology brands"
      className="bg-secondary-bg/50"
    >
      <LogoCarousel items={partners} showBadge={true} speed={40} />
    </SectionWrapper>
  );
}