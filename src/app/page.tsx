import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
