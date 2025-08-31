"use client";

import { motion } from "framer-motion";
import { aboutStats, socialLinks } from "@/lib/data";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import Link from "next/link";
import { Button } from "../ui/button";
import LogoLoop from "../bits/Animations/LogoLoop/LogoLoop";
import { Icon } from "@iconify/react";
import MagicBento from "../bits/Components/MagicBento/MagicBento";
import BentoAbout from "./TestBentoGrid";
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="section-container py-24 sm:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-muted-foreground">
            Hi, I'm Mustakim — a creative developer and Framer developer
            passionate about crafting meaningful and impactful digital
            experiences.
          </p>

          <div className="grid grid-cols-3 gap-8">
            {aboutStats.map((stat, index) => (
              <div key={index} className="text-center">
                <AnimatedCounter value={stat.value} text={stat.text} />
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Call Today :
              </h4>
              <p className="text-muted-foreground hover:text-accent transition-colors">
                <a href="tel:+15551234567">+356 99390593</a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Email :</h4>
              <p className="text-muted-foreground hover:text-accent transition-colors">
                <a href="mailto:kazimustakim.mt.12@gmail.com">
                  kazimustakim.mt.12@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <Button asChild variant="default" size="lg" className="rounded-full">
            <Link href="/my-story">My Story</Link>
          </Button>
        </div>

        <motion.div
          className="relative w-full h-[500px] rounded-2xl overflow-hidden"
          initial={{ rotate: 5, scale: 0.9 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://placehold.co/600x800.png"
            alt="Mustakim Kazi Portrait"
            fill
            className="object-cover"
            data-ai-hint="man portrait professional"
          />
        </motion.div>
      </div>
      {/* <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={false}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      /> */}
      <BentoAbout />
    </motion.section>
  );
}
