"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Hyperspeed from "../bits/Backgrounds/Hyperspeed/Hyperspeed";
import LightRays from "../bits/Backgrounds/LightRays/LightRays";
import CurvedLoop from "../bits/TextAnimations/CurvedLoop/CurvedLoop";
import { MagicCard } from "../magicui/magic-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Lanyard from "../bits/Components/Lanyard/Lanyard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const waveAnimation = {
  rotate: [0, 14, -8, 14, -4, 10, 0, 0],
  transition: {
    duration: 2.5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 1,
  },
};

export function HeroSection() {
  return (
    <>
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-transparent">
        {/* <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div> */}
        <div className="container mx-auto px-4 mt-16 md:mt-0 md:px-6 lg:px-8 z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.div
                variants={itemVariants}
                className="md:text-left md:self-start"
              >
                <p className="font-serif ml-4 text-4xl font-semibold text-muted-foreground">
                  MUSTAKIM KAZI
                </p>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-serif tracking-tighter text-foreground">
                  CREATIVE
                </h1>
              </motion.div>
              <div>
                <motion.div variants={itemVariants} custom={2}>
                  <MagicCard
                    gradientSize={200}
                    gradientColor={"dark" === "dark" ? "#262626" : "#D9D9D955"}
                    className="p-0 rounded-xl"
                  >
                    <div className="relative w-48  md:w-64  mx-auto border border-foreground/10 rounded-xl bg-foreground/10">
                      <Image
                        // src="/images/center-img-my.png"
                        src="/images/gbli_avtar.png"
                        alt="Mustakim Kazi"
                        width={400}
                        height={600}
                        className="rounded-3xl object-cover scale-110  bottom-4 relative"
                        data-ai-hint="man portrait professional"
                      />
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="absolute -bottom-6 -right-6 md:-bottom-8 md:-left-8"
                      >
                        <div className="bg-green-400/80 backdrop-blur-sm text-black font-semibold rounded-full w-24 h-24 flex items-center justify-center text-4xl shadow-lg">
                          <motion.div
                            animate={waveAnimation}
                            style={{ originX: "70%", originY: "70%" }}
                          >
                            👋
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </MagicCard>
                </motion.div>
              </div>
              <motion.div
                variants={itemVariants}
                className="md:text-right md:self-end"
              >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-serif tracking-tighter text-foreground">
                  DEVELOPER
                </h1>
                <p className="font-sans text-muted-foreground max-w-sm mt-4 ml-auto">
                  I'm a developer focused on building beautiful and functional
                  web experiences.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="h-full w-full block absolute opacity-45 top-0 z-[2]">
          {/* <Hyperspeed /> */}
          {/* <LightRays
            raysOrigin="top-center"
            raysColor="#fa6742"
            raysSpeed={2.5}
            lightSpread={1.8}
            rayLength={8.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          /> */}
          {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
        </div>
      </section>
    </>
  );
}
