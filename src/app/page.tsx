import Navbar from "@/components/Navbar";
import ThreeDScrollContainer from "@/components/ThreeDScrollContainer";
import { getDynamicProfile, getDynamicProjects, getTopStarredProjects, getDynamicSkills } from "@/lib/data";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const [profile, allProjects, topProjects, skills] = await Promise.all([
    getDynamicProfile(),
    getDynamicProjects(),
    getTopStarredProjects(6), // Top 6 starred repos for home
    getDynamicSkills(),
  ]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Navbar />
      <ThreeDScrollContainer
        profile={profile}
        skills={skills}
        projects={topProjects}
        totalProjectsCount={allProjects.length}
      />
    </main>
  );
}
