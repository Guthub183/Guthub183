"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Youtube, Globe } from "lucide-react";
import Link from "next/link";
import { staticProfile } from "@/lib/data";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Name & Bio */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-3">
              <h3 className="text-2xl font-bold tracking-tight">
                <span className="text-white">K. Satya </span>
                <span className="text-orange-500">Pranav</span>
              </h3>
            </Link>
            <p className="text-white/30 text-sm max-w-xs mb-4">
              BCA Student @ {staticProfile.education.shortName}
            </p>
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <a href={staticProfile.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/30 hover:text-white hover:border-white/20 transition-all" title="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href={staticProfile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/30 hover:text-white hover:border-white/20 transition-all" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/50 text-xs font-mono uppercase tracking-widest mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/30 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Satya Labs */}
          <div>
            <h4 className="text-white/50 text-xs font-mono uppercase tracking-widest mb-4">{staticProfile.venture.shortName}</h4>
            <div className="flex flex-col gap-2">
              <a href={staticProfile.satyaLabs.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-sm">
                <Globe className="w-4 h-4" />
                <span>Website</span>
              </a>
              <a href={staticProfile.satyaLabs.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-sm">
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </a>
              <a href={staticProfile.satyaLabs.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span>Instagram</span>
              </a>
              <a href={staticProfile.satyaLabs.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-sm">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a href={staticProfile.satyaLabs.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-sm">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top - Floating */}
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-white/[0.05] border border-white/[0.1] rounded-full text-white/30 hover:text-white hover:border-white/30 transition-all z-50 backdrop-blur-sm"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-white/20 font-mono text-xs">
            &copy; {new Date().getFullYear()} <span className="text-white/30">K. Satya</span> <span className="text-orange-500/50">Pranav</span>
          </p>

          <p className="text-white/20 text-xs flex items-center gap-2">
            <span>Built with</span>
            <span className="text-white/40">Next.js</span>
            <span className="text-white/10">•</span>
            <span className="text-white/40">Tailwind</span>
            <span className="text-white/10">•</span>
            <span className="text-white/40">Framer Motion</span>
          </p>

          <a
            href={staticProfile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/20 hover:text-white/60 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="font-mono text-xs">Source</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
