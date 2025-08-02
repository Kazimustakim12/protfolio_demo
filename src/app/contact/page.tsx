import { ContactSection } from '@/components/sections/ContactSection';

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 p-8 md:p-12">
        <ContactSection />
      </div>
    </div>
  );
}
