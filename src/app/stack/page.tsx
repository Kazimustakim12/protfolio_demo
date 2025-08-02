import { SkillsSection } from '@/components/sections/SkillsSection';

export default function StackPage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 p-8 md:p-12">
        <SkillsSection />
      </div>
    </div>
  );
}
