import MenuBar from "@/components/MenuBar";
import DesktopWindow from "@/components/DesktopWindow";
import DesktopIcons from "@/components/DesktopIcons";
import Dock from "@/components/Dock";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen animated-gradient-bg overflow-hidden">
      {/* macOS Menu Bar */}
      <MenuBar />
      
      {/* Desktop Icons */}
      <DesktopIcons />
      
      {/* Main Window */}
      <DesktopWindow title="Somnath's Portfolio">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </DesktopWindow>
      
      {/* macOS Dock */}
      <Dock />
    </div>
  );
};

export default Index;
