'use client';

import SectionWrapper from '../ui/SectionWrapper';
import LogoCarousel from '../ui/LogoCarousel';
import { useSiteData } from '../../hooks/useSiteData';

export default function ClientsSection() {
  const { clients } = useSiteData();

  return (
    <SectionWrapper
      id="clients"
      title="Trusted By Leading Organizations"
      subtitle="We are proud to serve government institutions, international organizations, and leading businesses"
      className="bg-secondary-bg/50"
    >
      <LogoCarousel items={clients} showBadge={false} speed={35} />
    </SectionWrapper>
  );
}