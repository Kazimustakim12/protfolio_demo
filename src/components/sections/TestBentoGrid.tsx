import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Rocket,
  BarChart3,
  Sparkles,
  Users,
  Heart,
  FolderKanban,
} from "lucide-react";
import SkillMarquee from "./SkillMarquee";
import { MagicCard } from "../magicui/magic-card";

export default function BentoAbout() {
  return (
    <div className="min-h-screen  text-foreground flex items-center justify-center p-6">
      <div className="w-full max-w-7xl">
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary">
            About
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Short, punchy cards that tell your story at a glance. Replace the
            text with your details.
          </p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)]">
          {/* Card: Intro */}
          <BentoCard
            className="lg:col-span-2"
            icon={<User />}
            title="Who I Am"
            subtitle="Designer • Developer"
          >
            <p>
              Hi, I'm Mustakim — a creative developer and Framer developer
              passionate about crafting meaningful and impactful digital
              experiences.
            </p>
          </BentoCard>

          {/* Card: Mission */}
          <BentoCard
            icon={<Rocket />}
            title="Mission"
            subtitle="Build simple, powerful tools"
          >
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Reduce friction with thoughtful UX</li>
              <li>Ship fast, iterate faster</li>
              <li>Keep it accessible & inclusive</li>
            </ul>
          </BentoCard>

          {/* Card: Impact / Stats */}
          <BentoCard
            className="lg:row-span-2"
            icon={<BarChart3 />}
            title="Impact"
            subtitle="Proof in numbers"
          >
            <dl className="grid grid-cols-2 gap-4 mt-2">
              <Stat label="Users" value={<CountUp end={10000} />} />
              <Stat label="Projects" value={<CountUp end={120} />} />
              <Stat label="Countries" value={<CountUp end={15} />} />
              <Stat label="Uptime" value="99.9%" />
            </dl>
          </BentoCard>

          {/* Card: Skills Marquee */}
          <BentoCard
            className="lg:col-span-2"
            icon={<Sparkles />}
            title="Skills"
            subtitle="What I work with"
          >
            <SkillMarquee />
          </BentoCard>

          {/* Card: Clients Marquee */}
          <BentoCard
            icon={<Users />}
            title="Clients"
            subtitle="People who trust my work"
          >
            <MarqueeClients />
          </BentoCard>

          {/* Card: Values Marquee */}
          <BentoCard
            className="lg:col-span-2"
            icon={<Heart />}
            title="Values"
            subtitle="How I work"
          >
            <MarqueeValues />
          </BentoCard>

          <BentoCard
            icon={<Users />}
            title="Testimonials"
            className="lg:col-span-2"
            subtitle="What clients say"
          >
            <p className="text-sm text-muted-foreground">
              “Amazing work! Highly recommend for web development and UI/UX.” –
              Client A
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              “Delivered the project on time with excellent quality.” – Client B
            </p>
          </BentoCard>

          {/* Card: Projects Showcase */}
          <BentoCard
            className="lg:col-span-4"
            icon={<FolderKanban />}
            title="Projects"
            subtitle="Some of my favorite works"
          >
            <ProjectsShowcase />
          </BentoCard>
        </div>
      </div>
    </div>
  );
}

// ============ Components ============

function BentoCard({
  title,
  subtitle,
  icon,
  className = "",
  children,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={
        "relative overflow-hidden rounded-2xl border border-border bg-card " +
        "backdrop-blur supports-[backdrop-filter]:bg-card hover:bg-muted/40 " +
        "shadow transition-colors " +
        className
      }
    >
      <MagicCard
        gradientSize={100}
        gradientColor={"dark" === "dark" ? "#262626" : "#D9D9D955"}
        className="p-4 h-full rounded-xl"
      >
        <div className="flex items-start gap-3">
          {icon && (
            <div className="p-2 rounded-xl border border-border bg-muted text-accent">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-lg font-medium leading-tight text-primary">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="mt-4 text-foreground text-sm leading-relaxed">
          {children}
        </div>
      </MagicCard>
    </motion.article>
  );
}

function Stat({ label, value }: { label: string; value: any }) {
  return (
    <div className="rounded-xl border border-border bg-muted p-3 text-center">
      <div className="text-2xl font-semibold tracking-tight text-accent">
        {value}
      </div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = end / 100;
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(interval);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(interval);
  }, [end]);

  return <span>{count}+</span>;
}

// Marquee Skills
function MarqueeSkills() {
  const skills = [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "TailwindCSS",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Stripe",
    "Figma",
  ];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 rounded-full border border-border bg-muted text-sm text-foreground"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Marquee Clients
function MarqueeClients() {
  const clients = ["Google", "Meta", "Amazon", "Netflix", "Spotify"];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...clients, ...clients].map((client, i) => (
          <span
            key={i}
            className="text-sm font-medium px-4 py-2 border border-border bg-muted rounded-full text-accent"
          >
            {client}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Marquee Values
function MarqueeValues() {
  const values = [
    { label: "Minimal", desc: "Clarity over clutter" },
    { label: "Honest", desc: "Transparent collaboration" },
    { label: "Human", desc: "Accessible & inclusive" },
    { label: "Sustainable", desc: "Future-friendly decisions" },
  ];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
      >
        {[...values, ...values].map((val, i) => (
          <div
            key={i}
            className="min-w-[200px] rounded-xl border border-border bg-muted p-4"
          >
            <div className="font-medium text-primary">{val.label}</div>
            <div className="text-muted-foreground text-xs mt-1">{val.desc}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Projects Showcase
function ProjectsShowcase() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A sleek personal portfolio built with Next.js & TailwindCSS.",
    },
    {
      title: "E-commerce App",
      desc: "Full-stack store with Stripe payments and admin dashboard.",
    },
    {
      title: "SaaS Dashboard",
      desc: "Analytics dashboard with charts, auth, and team features.",
    },
    {
      title: "Mobile App UI Kit",
      desc: "Cross-platform UI kit designed in Figma & React Native.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {projects.map((proj, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="rounded-xl border border-border bg-card p-4 hover:bg-muted/40 transition-colors"
        >
          <h4 className="font-medium text-primary">{proj.title}</h4>
          <p className="text-sm text-muted-foreground mt-1">{proj.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
