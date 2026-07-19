"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, GitFork, Sparkles, Terminal, Zap, Globe, GraduationCap, Rocket, Youtube, Github, Linkedin, Twitter, ExternalLink, MapPin } from "lucide-react";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { GlassCard } from "@/components/ui/glass-card";
import Image from "next/image";

interface ProfileData {
  name: string;
  avatar: string;
  bio: string;
  email: string;
  location: string;
  tagline: string;
  status: string;
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

export default function About({ profile }: { profile: ProfileData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="pt-24 pb-20 bg-[#0a0a0a] relative overflow-hidden" ref={ref}>
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-white/30 font-mono text-sm">01</span>
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-white/30 font-mono text-sm uppercase tracking-widest">About</span>
            <div className="h-[1px] w-12 bg-white/20" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Building the future,
            <br />
            <span className="text-white/30">one commit at a time.</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          {/* Profile Image Card - Professional Developer Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-1 md:col-span-2 md:row-span-2"
          >
            <div className="relative h-full group">
              {/* Main Card Container */}
              <div className="relative h-full rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm overflow-hidden flex flex-col">

                {/* Top Bar - Terminal Style */}
                <div className="px-4 py-3 border-b border-white/[0.06] bg-black/40 backdrop-blur-md flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-white/30">developer.profile</span>
                  </div>
                </div>

                {/* Image Container - Fixed aspect ratio */}
                <div className="relative mx-4 mt-4 rounded-xl overflow-hidden flex-shrink-0" style={{ aspectRatio: "1/1" }}>
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-green-400">Available</span>
                  </div>

                  {/* Decorative corner brackets on image */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-orange-500/50 rounded-tl" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-orange-500/50 rounded-tr" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-orange-500/50 rounded-bl" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-orange-500/50 rounded-br" />
                </div>

                {/* Info Section - Below image */}
                <div className="p-4 flex-1 flex flex-col">
                  {/* Name with code style */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-orange-500/60 font-mono text-xs">const</span>
                      <span className="text-purple-400/80 font-mono text-xs">developer</span>
                      <span className="text-white/40 font-mono text-xs">=</span>
                      <span className="text-white/40 font-mono text-xs">{"{"}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight pl-4 border-l-2 border-orange-500">
                      {profile.name}
                    </h3>
                  </div>

                  {/* Role & Details */}
                  <div className="space-y-1.5 pl-4 text-sm flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white/30 font-mono text-[11px]">username:</span>
                      <span className="text-purple-400 font-mono text-xs">&quot;{profile.socials.github.split('/').pop()}&quot;</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/30 font-mono text-[11px]">role:</span>
                      <span className="text-orange-400 font-mono text-xs">&quot;{profile.tagline.split(' | ')[0] || 'Developer'}&quot;</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/30 font-mono text-[11px]">edu:</span>
                      <span className="text-white/50 font-mono text-xs">&quot;{profile.education.shortName}&quot;</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/30 font-mono text-[11px]">loc:</span>
                      <span className="text-white/40 font-mono text-xs">&quot;{profile.location}&quot;</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pl-4 mt-2">
                    <span className="text-white/40 font-mono text-xs">{"}"}</span>
                  </div>

                  {/* Social links footer */}
                  <div className="mt-3 pt-3 border-t border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-orange-400 transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-orange-400 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-orange-400 transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                      </div>
                      <span className="text-[10px] font-mono text-orange-500/50">// open to work</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
            </div>
          </motion.div>

          {/* Main Bio Card - Spans 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="col-span-1 md:col-span-4"
          >
            <GlassCard>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Who I am</h3>
                    <p className="text-sm text-white/40">The short version</p>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed mb-6">
                  I&apos;m a BCA student at <span className="text-white/80">{profile.education.institution}</span> from India,
                  with a deep passion for software development, databases, and artificial intelligence. I focus on building Python automation scripts, machine learning models, and database systems.
                </p>
                <p className="text-white/60 leading-relaxed">
                  My journey started with curiosity about building intelligent workflows, leading me to explore deep learning, natural language processing, and database architectures.
                  I enjoy working with Python, SQL, and MongoDB, and developing AI-driven projects.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* What I Do Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 md:col-span-2"
          >
            <GlassCard>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-5 h-5 text-white/60" />
                  <h3 className="text-lg font-semibold text-white">Focus Areas</h3>
                </div>
                <div className="space-y-3">
                  {["AI & ML", "Python Dev", "Database Design", "Automation"].map((area, index) => (
                    <div
                      key={area}
                      className="flex items-center gap-3 text-white/50 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1 md:col-span-6"
          >
            <GlassCard>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-5 h-5 text-white/60" />
                  <h3 className="text-lg font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-white/80 font-medium">{profile.education.institution}</p>
                  <p className="text-white/50 text-sm">{profile.education.degree}</p>
                  <p className="text-white/30 text-xs font-mono">{profile.education.period}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Organizations Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <GlassCard>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-5 h-5 text-white/60" />
                  <h3 className="text-lg font-semibold text-white">Organizations</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.organizations.map((org) => (
                    <span
                      key={org}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/50 text-xs font-mono"
                    >
                      {org}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Developer Profiles Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="col-span-1 md:col-span-4"
          >
            <GlassCard>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <ExternalLink className="w-5 h-5 text-white/60" />
                  <h3 className="text-lg font-semibold text-white">Developer Profiles</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Achievements Card - Full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="col-span-1 md:col-span-6"
          >
            <GlassCard>
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-semibold text-white">GitHub Achievements</h3>
                  <span className="text-xs text-white/30 font-mono">
                    {profile.achievements.length} unlocked
                  </span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-4">
                  {profile.achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="group text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all">
                        <DynamicIcon
                          name={achievement.icon}
                          className="w-5 h-5 text-white/40 group-hover:text-white transition-colors"
                        />
                      </div>
                      <div className="text-[10px] text-white/30 group-hover:text-white/60 transition-colors truncate">
                        {achievement.name}
                      </div>
                      {achievement.count > 1 && (
                        <div className="text-[10px] text-white/20 font-mono">x{achievement.count}</div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
