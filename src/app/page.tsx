import { HeroSection } from '@/components/sections/HeroSection';
import { WorksSection } from '@/components/sections/WorksSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { HorizontalScroll } from '@/components/sections/HorizontalScroll';

export default function Home() {
  const sections = [
    { component: <HeroSection />, id: 'home' },
    { component: <WorksSection />, id: 'works' },
    { component: <ServicesSection />, id: 'services' },
    { component: <ContactSection />, id: 'contact' },
  ];

  return (
    <div className="flex flex-col flex-1 bg-background">
      <HorizontalScroll sections={sections} />
    </div>
  );
}
