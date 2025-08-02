import { ProjectsSection } from '@/components/sections/ProjectsSection';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 p-8 md:p-12">
        <ProjectsSection />
      </div>
    </div>
  );
}
