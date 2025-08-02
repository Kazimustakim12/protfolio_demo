import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <HeroSection />
      {/* Other sections like Works, Services, Contact can be added here */}
    </div>
  );
}
