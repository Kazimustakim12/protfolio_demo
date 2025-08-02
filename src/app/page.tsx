import { HeroGreetingSection } from '@/components/sections/HeroGreetingSection';
import { ServiceCardsSection } from '@/components/sections/ServiceCardsSection';
import { PageAttribution } from '@/components/layout/PageAttribution';

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 p-8 md:p-12 space-y-12 md:space-y-16">
        <HeroGreetingSection />
        <ServiceCardsSection />
      </div>
      <PageAttribution />
    </div>
  );
}
