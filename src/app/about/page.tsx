import { NewAboutMeSection } from '@/components/sections/NewAboutMeSection';

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 p-8 md:p-12">
        <NewAboutMeSection />
      </div>
    </div>
  );
}
