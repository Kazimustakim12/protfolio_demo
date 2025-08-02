import { AboutSection } from '@/components/sections/AboutSection';
import { ClientSection } from '@/components/sections/ClientSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <HeroSection />
      <ClientSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
