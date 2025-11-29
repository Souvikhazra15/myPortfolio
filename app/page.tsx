import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

/**
 * Home - Main landing page
 * Assembles all portfolio sections in order:
 * 1. Hero - Introduction with spotlight effects
 * 2. Grid - Bento grid showcasing skills and expertise
 * 3. Recent Projects - Portfolio showcase
 * 4. Experience - Work history
 * 5. Footer - Contact and social links
 */
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
