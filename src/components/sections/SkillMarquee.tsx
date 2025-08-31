"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import LogoLoop from "../bits/Animations/LogoLoop/LogoLoop";
import { useTheme } from "next-themes";

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

const techLogos = [
  {
    node: <Icon icon="skill-icons:react-dark" width="48" height="48" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <Icon icon="skill-icons:nextjs-dark" width="48" height="48" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <Icon icon="skill-icons:typescript" width="48" height="48" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <Icon icon="skill-icons:tailwindcss-dark" width="48" height="48" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <Icon icon="skill-icons:supabase-dark" width="48" height="48" />,
    title: "Supabase",
    href: "https://supabase.com/",
  },
  {
    node: <Icon icon="skill-icons:apollo" width="48" height="48" />,
    title: "Appollo Graphql",
    href: "https://www.apollographql.com/",
  },
  {
    node: <Icon icon="skill-icons:astro" width="48" height="48" />,
    title: "Astro Js",
    href: "https://www.apollographql.com/",
  },
  {
    node: <Icon icon="skill-icons:bitbucket-dark" width="48" height="48" />,
    title: "Bitbucket",
    href: "https://bitbucket.org/product/",
  },
  {
    node: <Icon icon="skill-icons:css" width="48" height="48" />,
    title: "CSS",
    href: "",
  },
  {
    node: <Icon icon="skill-icons:docker" width="48" height="48" />,
    title: "Docker",
    href: "https://www.docker.com/",
  },
  {
    node: <Icon icon="skill-icons:expressjs-dark" width="48" height="48" />,
    title: "Express",
    href: "https://expressjs.com/",
  },
  {
    node: <Icon icon="skill-icons:figma-dark" width="48" height="48" />,
    title: "Figma",
    href: "https://www.figma.com/",
  },
  {
    node: <Icon icon="skill-icons:github-dark" width="48" height="48" />,
    title: "Github",
    href: "https://github.com/",
  },
  {
    node: <Icon icon="skill-icons:graphql-dark" width="48" height="48" />,
    title: "Graphql",
    href: "https://graphql.org/",
  },
  {
    node: <Icon icon="skill-icons:javascript" width="48" height="48" />,
    title: "Javascript",
    href: "",
  },

  {
    node: <Icon icon="skill-icons:mongodb" width="48" height="48" />,
    title: "MongoDB",
    href: "",
  },
  {
    node: <Icon icon="skill-icons:nodejs-dark" width="48" height="48" />,
    title: "Nodejs",
    href: "https://nodejs.org/en",
  },
  {
    node: <Icon icon="skill-icons:redux" width="48" height="48" />,
    title: "Redux",
    href: "https://nodejs.org/en",
  },
  {
    node: <Icon icon="skill-icons:webflow" width="48" height="48" />,
    title: "Webflow",
    href: "https://webflow.com/",
  },
  {
    node: <Icon icon="skill-icons:wordpress" width="48" height="48" />,
    title: "Wordpress",
    href: "https://wordpress.com/",
  },
];

const SkillMarquee = () => {
  const { theme } = useTheme();
  console.log(theme, "theme");
  return (
    <>
      <motion.section
        id="about"
        className="h-full flex flex-col justify-center items-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* <h1
          className="text-5xl md:text-[68px] relative leading-tight font-serif md:mt-[118px] mt-[53px] text-center hover:border-accent border-accent border-2 border-dashed"
          draggable="false"
        >
          Build React Apps 10 aster with AI
          <div className="border-accent bg-white border h-1.5 w-1.5 absolute -top-1 -left-1"></div>
          <div className="border-accent bg-white border h-1.5 w-1.5 absolute -top-1 -right-1"></div>
          <div className="border-accent bg-white border h-1.5 w-1.5 absolute -bottom-1 -left-1"></div>
          <div className="border-accent bg-white border h-1.5 w-1.5 absolute -bottom-1 -right-1"></div>
        </h1> */}

        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          // fadeOut
          // fadeOutColor="#131d34"
          ariaLabel="Technology partners"
          className="block"
        />
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="right"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technology partners"
          className="block"
        />
      </motion.section>
    </>
  );
};

export default SkillMarquee;
