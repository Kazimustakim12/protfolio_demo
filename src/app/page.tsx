import { HeroGreetingSection } from '@/components/sections/HeroGreetingSection';
import { ServiceCardsSection } from '@/components/sections/ServiceCardsSection';
import { NewAboutMeSection } from '@/components/sections/NewAboutMeSection';
import { PageAttribution } from '@/components/layout/PageAttribution';
// ProjectsSection, SkillsSection (Stack), ContactSection can be added here or linked via sidebar later

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <div className="ml-64 flex-1 p-8 md:p-12 space-y-12 md:space-y-16"> {/* Adjust ml-64 to match sidebar width */}
        <HeroGreetingSection />
        <ServiceCardsSection />
        <NewAboutMeSection />
        {/* Placeholder for other sections like Projects, Stack, Contact */}
        {/* <ProjectsSection /> */}
        {/* <SkillsSection /> */}
        {/* <ContactSection /> */}
      </div>
      <div className="ml-64"> {/* Adjust ml-64 to match sidebar width */}
        <PageAttribution />
      </div>
    </div>
  );
}
