"use client";

import { Button } from "@/components/ui/button";
import { Framer } from "lucide-react"; // Assuming Framer icon is from lucide-react
import Link from "next/link";
import { motion } from "framer-motion";

export function PageAttribution() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="py-8 bg-background text-center border-t border-border"
    >
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link href="#" passHref>
          <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get FREE Template
          </Button>
        </Link>
        <a
          href="https://framer.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Framer className="w-4 h-4" />
          <span>Made in Framer</span>
        </a>
      </div>
    </motion.footer>
  );
}
