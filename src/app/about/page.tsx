import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { PageTransition } from "@/components/ui/page-transition";
import { getDynamicProfile, getDynamicSkills } from "@/lib/data";

export const revalidate = 3600; // Revalidate every hour

export const metadata = {
  title: "About | K. Satya Pranav",
  description: "Learn more about K. Satya Pranav - AI/ML enthusiast, Python Developer, and Software Engineer.",
};

export default async function AboutPage() {
  const [profile, skills] = await Promise.all([
    getDynamicProfile(),
    getDynamicSkills(),
  ]);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <PageTransition>
        <About profile={profile} />
        <Skills skills={skills} />
      </PageTransition>
      <Footer />
    </main>
  );
}
