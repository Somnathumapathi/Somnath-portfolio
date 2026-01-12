import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import wallpaper from '@/assets/wallpaper.jpg';
import MenuBar from '@/components/MenuBar';
import Dock from '@/components/Dock';
import AppWindow from '@/components/AppWindow';
import {
  CalendarWidget,
  WeatherWidget,
  WorldClockWidget,
  ProfileWidget,
  SkillsWidget,
  ExperienceWidget,
} from '@/components/widgets/DesktopWidgets';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

type WindowId = 'about' | 'experience' | 'projects' | 'skills' | 'contact' | null;

const Index = () => {
  const [activeWindow, setActiveWindow] = useState<WindowId>(null);

  const openWindow = (id: string) => {
    setActiveWindow(id as WindowId);
  };

  const closeWindow = () => {
    setActiveWindow(null);
  };

  const windowTitles: Record<string, string> = {
    about: 'About Me - Finder',
    experience: 'Experience - Finder',
    projects: 'Projects - Finder',
    skills: 'Skills - Finder',
    contact: 'Contact - Mail',
  };

  return (
    <div 
      className="min-h-screen w-full overflow-hidden relative"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* macOS Menu Bar */}
      <MenuBar />
      
      {/* Desktop Widgets */}
      <div className="fixed top-10 left-4 z-20 flex flex-col gap-3 pt-4">
        <div className="flex gap-3">
          <CalendarWidget />
          <WeatherWidget />
        </div>
        <WorldClockWidget />
        <ProfileWidget onClick={() => openWindow('about')} />
        <SkillsWidget />
        <ExperienceWidget />
      </div>

      {/* App Windows */}
      <AnimatePresence>
        {activeWindow && (
          <AppWindow
            title={windowTitles[activeWindow] || 'Finder'}
            isOpen={!!activeWindow}
            onClose={closeWindow}
          >
            {activeWindow === 'about' && <AboutSection />}
            {activeWindow === 'experience' && <ExperienceSection />}
            {activeWindow === 'projects' && <ProjectsSection />}
            {activeWindow === 'skills' && <SkillsSection />}
            {activeWindow === 'contact' && <ContactSection />}
          </AppWindow>
        )}
      </AnimatePresence>

      {/* macOS Dock */}
      <Dock onOpenWindow={openWindow} />
    </div>
  );
};

export default Index;
