import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, FolderOpen, Code, Mail, Github, Linkedin, Download } from 'lucide-react';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import resumePdf from '@/assets/Somnath_resume.pdf';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const MobileLayout: React.FC = () => {
  const navItems: NavItem[] = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 glass-panel border-b border-border/50"
      >
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-foreground">Somnath Kadam</h1>
          <div className="flex items-center gap-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <Github className="w-5 h-5 text-muted-foreground" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </a>
            <a
              href={resumePdf}
              download
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <Download className="w-5 h-5 text-muted-foreground" />
            </a>
          </div>
        </div>
        
        {/* Navigation Pills */}
        <div className="px-4 pb-3 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/50 hover:bg-accent text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="px-4 py-6 space-y-8">
        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel p-5 rounded-2xl"
        >
          <AboutSection />
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-5 rounded-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Experience</h2>
          </div>
          <ExperienceSection />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-panel p-5 rounded-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <FolderOpen className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Projects</h2>
          </div>
          <ProjectsSection />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-panel p-5 rounded-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Skills</h2>
          </div>
          <SkillsSection />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-panel p-5 rounded-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          </div>
          <ContactSection />
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="px-4 py-6 text-center text-muted-foreground text-sm">
        <p>© 2024 Somnath Kadam. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MobileLayout;
