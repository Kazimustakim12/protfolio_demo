"use client";

import { ServiceCard } from "./ServiceCard";
import { serviceItems } from "@/lib/data"; // Assuming serviceItems will be added to data.ts

export function ServiceCardsSection() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Optional: Add a title here if needed, e.g., <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
