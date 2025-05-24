import { HeroSection } from '@/components/sections/HeroSection';
import { AboutMeSection } from '@/components/sections/AboutMeSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
