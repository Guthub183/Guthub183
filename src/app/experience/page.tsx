import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata = {
  title: "Experience | K. Satya Pranav",
  description: "K. Satya Pranav's journey through education, contributions, and professional growth.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <PageTransition>
        <Experience />
      </PageTransition>
      <Footer />
    </main>
  );
}
