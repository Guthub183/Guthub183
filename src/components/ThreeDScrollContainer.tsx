"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { GlowOrbs, GridBackground, ParticleBackground } from "@/components/ui/particles";

interface ProfileData {
  name: string;
  avatar: string;
  tagline: string;
  status: string;
  location: string;
  email: string;
  bio: string;
  rotatingWords: string[];
  education: {
    institution: string;
    shortName: string;
    degree: string;
    year: string;
    period: string;
  };
  venture: {
    name: string;
    shortName: string;
    role: string;
    description: string;
  };
  stats: {
    repos: number;
    stars: number;
    followers: number;
    contributions: string | number;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    discord: string;
    pypi: string;
    npmjs: string;
    orcid: string;
    huggingface: string;
  };
  satyaLabs: {
    linkedin: string;
    instagram: string;
    github: string;
    youtube: string;
    huggingface: string;
    website: string;
  };
  achievements: { name: string; count: number; icon: string }[];
  organizations: string[];
}

interface SkillsData {
  languages: { name: string; icon: string; count?: number }[];
  frameworks: { name: string; icon: string }[];
  tools: { name: string; icon: string }[];
  platforms: { name: string; icon: string }[];
}

interface Project {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  homepage?: string;
  topics: string[];
  category: string;
  featured: boolean;
  isForked: boolean;
  icon: string;
}

interface ThreeDScrollContainerProps {
  profile: ProfileData;
  skills: SkillsData;
  projects: Project[];
  totalProjectsCount: number;
}

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function ThreeDScrollContainer({
  profile,
  skills,
  projects,
  totalProjectsCount,
}: ThreeDScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Check mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track window scroll
  const { scrollYProgress } = useScroll();

  // Create a spring-smoothed scroll progress for animations
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Track active section index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.round(latest * (SECTIONS.length - 1));
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Navigate to a section
  const handleNavClick = useCallback((index: number) => {
    if (typeof window === "undefined") return;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScrollY = (index / (SECTIONS.length - 1)) * scrollHeight;
    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  }, []);

  // Fallback to normal layout on mobile for best compatibility
  if (isMobile) {
    return (
      <div className="relative bg-[#0a0a0a]">
        <GridBackground />
        <ParticleBackground count={30} />
        <Hero profile={profile} />
        <div className="py-4">
          <About profile={profile} />
        </div>
        <div className="py-4">
          <Skills skills={skills} />
        </div>
        <div className="py-4">
          <Experience />
        </div>
        <div className="py-4">
          <FeaturedProjects projects={projects} totalCount={totalProjectsCount} />
        </div>
        <div className="py-4">
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative min-h-[600vh] bg-[#0a0a0a]">
      {/* 3D Fixed Viewport */}
      <div className="fixed inset-0 w-screen h-screen overflow-hidden z-0">
        <GridBackground />
        <GlowOrbs />
        <ParticleBackground count={60} />

        {/* 3D perspective scene wrapper */}
        <div
          className="w-full h-full flex items-center justify-center relative"
          style={{
            perspective: "1200px",
            perspectiveOrigin: "50% 50%",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Section 0: Hero */}
          <SectionWrapper index={0} smoothProgress={smoothScrollProgress} activeIndex={activeIndex}>
            <div className="w-full h-full max-h-screen overflow-y-auto no-scrollbar pt-10">
              <Hero profile={profile} />
            </div>
          </SectionWrapper>

          {/* Section 1: About */}
          <SectionWrapper index={1} smoothProgress={smoothScrollProgress} activeIndex={activeIndex}>
            <div className="w-full h-full max-h-screen overflow-y-auto no-scrollbar pt-20 pb-20">
              <About profile={profile} />
            </div>
          </SectionWrapper>

          {/* Section 2: Skills */}
          <SectionWrapper index={2} smoothProgress={smoothScrollProgress} activeIndex={activeIndex}>
            <div className="w-full h-full max-h-screen overflow-y-auto no-scrollbar pt-20 pb-20">
              <Skills skills={skills} />
            </div>
          </SectionWrapper>

          {/* Section 3: Experience */}
          <SectionWrapper index={3} smoothProgress={smoothScrollProgress} activeIndex={activeIndex}>
            <div className="w-full h-full max-h-screen overflow-y-auto no-scrollbar pt-20 pb-20">
              <Experience />
            </div>
          </SectionWrapper>

          {/* Section 4: Projects */}
          <SectionWrapper index={4} smoothProgress={smoothScrollProgress} activeIndex={activeIndex}>
            <div className="w-full h-full max-h-screen overflow-y-auto no-scrollbar pt-20 pb-20">
              <FeaturedProjects projects={projects} totalCount={totalProjectsCount} />
            </div>
          </SectionWrapper>

          {/* Section 5: Contact */}
          <SectionWrapper index={5} smoothProgress={smoothScrollProgress} activeIndex={activeIndex}>
            <div className="w-full h-full max-h-screen overflow-y-auto no-scrollbar pt-20 pb-20 flex flex-col justify-between">
              <Contact />
              <Footer />
            </div>
          </SectionWrapper>
        </div>
      </div>

      {/* Floating 3D Navigation Sidebar */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-end gap-6 z-50">
        {SECTIONS.map((section, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={section.id}
              onClick={() => handleNavClick(idx)}
              className="group flex items-center gap-4 text-right outline-none"
            >
              {/* Tooltip Label */}
              <span
                className={`text-xs font-mono tracking-widest uppercase transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  isActive ? "text-orange-500 scale-105" : "text-white/40"
                }`}
              >
                {section.label}
              </span>

              {/* Indicator Dot */}
              <div className="relative w-4 h-4 flex items-center justify-center">
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "bg-orange-500 w-3 h-3" : "bg-white/20 group-hover:bg-white/50"
                  }`}
                />
                {isActive && (
                  <div className="absolute inset-0 rounded-full border border-orange-500/50 animate-ping" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Header indicating scroll percentage */}
      <div className="fixed left-8 top-8 z-50 mix-blend-difference hidden sm:block">
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
          Scroll Phase:{" "}
          <span className="text-orange-500 font-bold">
            {Math.round(activeIndex * 20)}%
          </span>
        </span>
      </div>

      {/* Bottom Progress Bar */}
      <div className="fixed bottom-0 left-0 h-[2px] bg-orange-500/50 z-50 transition-all duration-100" style={{ width: `${scrollYProgress.get() * 100}%` }} />
    </div>
  );
}

interface SectionWrapperProps {
  children: React.ReactNode;
  index: number;
  smoothProgress: MotionValue<number>;
  activeIndex: number;
}

function SectionWrapper({ children, index, smoothProgress, activeIndex }: SectionWrapperProps) {
  const totalSections = SECTIONS.length;
  // Compute focus scroll point for this section
  const focusPoint = index / (totalSections - 1);

  // We want to transform the Z translation, opacity, and scale
  // Based on the difference between smoothProgress and focusPoint
  const z = useTransform(
    smoothProgress,
    [focusPoint - 0.2, focusPoint, focusPoint + 0.2],
    [-1500, 0, 1500]
  );

  const opacity = useTransform(
    smoothProgress,
    [
      focusPoint - 0.18, // Faded out in background
      focusPoint - 0.05, // Fading in
      focusPoint,        // In full focus
      focusPoint + 0.05, // Starting to fade out as it flies forward
      focusPoint + 0.12  // Completely faded out / invisible
    ],
    [0, 1, 1, 0.4, 0]
  );

  const scale = useTransform(
    smoothProgress,
    [focusPoint - 0.2, focusPoint, focusPoint + 0.2],
    [0.75, 1, 2.0]
  );

  const rotateX = useTransform(
    smoothProgress,
    [focusPoint - 0.2, focusPoint, focusPoint + 0.2],
    [10, 0, -10]
  );

  const isCurrent = activeIndex === index;

  return (
    <motion.div
      style={{
        z,
        opacity,
        scale,
        rotateX,
        transformStyle: "preserve-3d",
        pointerEvents: isCurrent ? "auto" : "none",
        zIndex: 10 - index,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="absolute inset-0 w-full h-full flex items-center justify-center"
    >
      <div className="w-full h-full max-w-7xl mx-auto px-4 flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}
