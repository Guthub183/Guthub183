"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Home, User, FolderGit2, Mail, Briefcase, FileText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const navItems = [
  { name: "Home", href: "/", icon: Home, external: false },
  { name: "About", href: "/about", icon: User, external: false },
  { name: "Projects", href: "/projects", icon: FolderGit2, external: false },
  { name: "Experience", href: "/experience", icon: Briefcase, external: false },
  { name: "Contact", href: "/contact", icon: Mail, external: false },
  { name: "Resume", href: "/resume.html", icon: FileText, external: true },
];

const navToSectionIndex: Record<string, number> = {
  "/": 0,
  "/about": 1,
  "/experience": 3,
  "/projects": 4,
  "/contact": 5,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const pathname = usePathname();

  // Handle transparent background toggle on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track current section for active highlights
      if (pathname === "/") {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight > 0) {
          const scrollPct = window.scrollY / scrollHeight;
          const index = Math.round(scrollPct * 5); // 5 matches index 0..5
          setActiveSection(index);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (pathname === "/") {
      const sectionIndex = navToSectionIndex[href];
      if (sectionIndex !== undefined) {
        e.preventDefault();
        if (typeof window !== "undefined") {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const targetScrollY = (sectionIndex / 5) * scrollHeight;
          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
          });
        }
        setIsOpen(false);
      }
    }
  };

  const checkIsActive = (itemHref: string) => {
    if (pathname === "/") {
      const targetIdx = navToSectionIndex[itemHref];
      if (targetIdx === undefined) return false;
      if (targetIdx === 1) {
        // "About" is active during both About (1) and Skills (2) sections
        return activeSection === 1 || activeSection === 2;
      }
      return activeSection === targetIdx;
    }
    return pathname === itemHref || (itemHref !== "/" && pathname.startsWith(itemHref));
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.05]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" onClick={(e) => handleNavClick(e, "/")}>
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">K. Satya </span>
                <span className="text-orange-500">Pranav</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = checkIsActive(item.href);

              const LinkWrapper = item.external
                ? ({ children }: { children: React.ReactNode }) => (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">{children}</a>
                  )
                : ({ children }: { children: React.ReactNode }) => (
                    <Link href={item.href} onClick={(e) => handleNavClick(e, item.href)}>{children}</Link>
                  );

              return (
                <LinkWrapper key={item.name}>
                  <motion.div
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 relative",
                      isActive
                        ? "text-white"
                        : "text-white/40 hover:text-white"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white/[0.08] rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </LinkWrapper>
              );
            })}
          </div>

          {/* GitHub Link */}
          <div className="hidden md:flex items-center">
            <motion.a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 text-white/30 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-white/60"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/[0.05]"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, index) => {
                const isActive = checkIsActive(item.href);
                const Icon = item.icon;
                const linkProps = item.external
                  ? { href: item.href, target: "_blank" as const, rel: "noopener noreferrer" }
                  : { href: item.href, onClick: (e: React.MouseEvent) => handleNavClick(e, item.href) };

                const MobileLink = item.external ? "a" : Link;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <MobileLink
                      {...linkProps as any}
                      className={cn(
                        "flex items-center gap-3 py-3 px-4 rounded-xl transition-all font-mono text-sm",
                        isActive
                          ? "bg-white/[0.08] text-white"
                          : "text-white/40 hover:text-white hover:bg-white/[0.03]"
                      )}
                      onClick={(e) => {
                        if (!item.external) {
                          handleNavClick(e, item.href);
                        }
                        setIsOpen(false);
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </MobileLink>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 mt-4 border-t border-white/[0.05]"
              >
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-3 px-4 text-white/40 hover:text-white transition-colors font-mono text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
