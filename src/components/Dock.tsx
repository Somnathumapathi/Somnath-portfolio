import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  AppWindow, 
  MessageCircle, 
  Mail, 
  Calendar,
  Image,
  Music,
  Settings,
  FolderOpen,
  FileText,
  User,
  Code,
  Terminal,
  Chrome,
  Github,
  Linkedin
} from 'lucide-react';

interface DockItem {
  icon: React.ElementType;
  label: string;
  color: string;
  onClick?: () => void;
}

interface DockProps {
  onOpenWindow: (windowId: string) => void;
}

const Dock: React.FC<DockProps> = ({ onOpenWindow }) => {
  const mainApps: DockItem[] = [
    { icon: Compass, label: 'Finder', color: 'from-blue-400 to-blue-600', onClick: () => onOpenWindow('about') },
    { icon: AppWindow, label: 'Launchpad', color: 'from-gray-600 to-gray-800' },
    { icon: MessageCircle, label: 'Messages', color: 'from-green-400 to-green-600' },
    { icon: Mail, label: 'Mail', color: 'from-blue-500 to-blue-700', onClick: () => onOpenWindow('contact') },
    { icon: Calendar, label: 'Calendar', color: 'from-red-400 to-red-600' },
    { icon: Image, label: 'Photos', color: 'from-purple-400 via-pink-500 to-orange-400' },
    { icon: Music, label: 'Music', color: 'from-red-500 to-pink-600' },
  ];

  const portfolioApps: DockItem[] = [
    { icon: User, label: 'About Me', color: 'from-cyan-400 to-blue-500', onClick: () => onOpenWindow('about') },
    { icon: FolderOpen, label: 'Projects', color: 'from-blue-400 to-indigo-500', onClick: () => onOpenWindow('projects') },
    { icon: Code, label: 'Skills', color: 'from-orange-400 to-red-500', onClick: () => onOpenWindow('skills') },
    { icon: FileText, label: 'Experience', color: 'from-yellow-400 to-orange-500', onClick: () => onOpenWindow('experience') },
    { icon: Terminal, label: 'Terminal', color: 'from-gray-700 to-gray-900' },
  ];

  const externalApps: DockItem[] = [
    { icon: Chrome, label: 'Chrome', color: 'from-red-500 via-yellow-500 to-green-500' },
    { icon: Github, label: 'GitHub', color: 'from-gray-700 to-gray-900' },
    { icon: Linkedin, label: 'LinkedIn', color: 'from-blue-500 to-blue-700' },
    { icon: Settings, label: 'Settings', color: 'from-gray-400 to-gray-600' },
  ];

  const DockIcon: React.FC<{ item: DockItem; index: number }> = ({ item, index }) => (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index + 0.3, duration: 0.3 }}
      whileHover={{ y: -12, scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      onClick={item.onClick}
      className="dock-icon-btn group relative"
      aria-label={item.label}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
        <item.icon className="w-6 h-6 text-white" />
      </div>
      <span className="dock-tooltip">
        {item.label}
      </span>
    </motion.button>
  );

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-2 left-1/2 -translate-x-1/2 z-[100]"
    >
      <div className="dock-container px-2 py-1.5 flex items-end gap-1">
        {mainApps.map((item, index) => (
          <DockIcon key={item.label} item={item} index={index} />
        ))}
        
        <div className="dock-divider" />
        
        {portfolioApps.map((item, index) => (
          <DockIcon key={item.label} item={item} index={index + mainApps.length} />
        ))}
        
        <div className="dock-divider" />
        
        {externalApps.map((item, index) => (
          <DockIcon key={item.label} item={item} index={index + mainApps.length + portfolioApps.length} />
        ))}
      </div>
    </motion.div>
  );
};

export default Dock;
