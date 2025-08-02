import { HeroSection } from '@/components/sections/HeroSection';
import { WorksSection } from '@/components/sections/WorksSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Separator } from '@/components/ui/separator';
import { StatsSection } from '@/components/sections/StatsSection';
import { ServiceHighlightsSection } from '@/components/sections/ServiceHighlightsSection';

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <HeroSection />
      <StatsSection />
      <ServiceHighlightsSection />
      <Separator className="my-24" />
      <WorksSection />
      <Separator className="my-24" />
      <ServicesSection />
      <Separator className="my-24" />
      <ContactSection />
    </div>
  );
}
