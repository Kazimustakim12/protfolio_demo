import CurvedLoop from "@/components/bits/TextAnimations/CurvedLoop/CurvedLoop";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import MaraqueeText from "@/components/sections/MaraqueeText";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import SkillMarquee from "@/components/sections/SkillMarquee";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <HeroSection />
      <MaraqueeText />
      <AboutSection />
      <SkillMarquee />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FaqSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
