import { ParticleGrid } from '@/components/ParticleGrid';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { FeaturedProject } from '@/components/FeaturedProject';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { ToolsStack } from '@/components/ToolsStack';
import { Achievements } from '@/components/Achievements';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-animated relative overflow-hidden">
      {/* Animated background */}
      <ParticleGrid />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <FeaturedProject />
        <div id="stack">
          <ToolsStack />
        </div>
        <ProjectsGrid />
        <div id="achievements">
          <Achievements />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
