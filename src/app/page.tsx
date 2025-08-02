import { HeroSection } from '@/components/sections/HeroSection';
import { AboutMeSection } from '@/components/sections/AboutMeSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
