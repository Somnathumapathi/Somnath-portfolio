import React from 'react';
import { motion } from 'framer-motion';
import { FileText, FolderOpen, Image, User } from 'lucide-react';

interface DesktopIcon {
  icon: React.ElementType;
  label: string;
  href: string;
}

const desktopIcons: DesktopIcon[] = [
  { icon: User, label: 'About Me', href: '#about' },
  { icon: FolderOpen, label: 'Projects', href: '#projects' },
  { icon: FileText, label: 'Resume.pdf', href: '#experience' },
  { icon: Image, label: 'Screenshots', href: '#projects' },
];

const DesktopIcons: React.FC = () => {
  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-12 right-4 z-20 flex flex-col gap-4">
      {desktopIcons.map((item, index) => (
        <motion.button
          key={item.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          onClick={() => handleClick(item.href)}
          className="desktop-icon group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors shadow-lg">
            <item.icon className="w-7 h-7 text-foreground/80" />
          </div>
          <span className="text-xs text-foreground/90 font-medium mt-1 text-center max-w-16 leading-tight drop-shadow-md">
            {item.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default DesktopIcons;
