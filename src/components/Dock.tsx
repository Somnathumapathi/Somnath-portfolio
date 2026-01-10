import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, FolderOpen, Mail, Github, Linkedin } from 'lucide-react';

interface DockItem {
  icon: React.ElementType;
  label: string;
  href: string;
  external?: boolean;
}

const dockItems: DockItem[] = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: User, label: 'About', href: '#about' },
  { icon: Briefcase, label: 'Experience', href: '#experience' },
  { icon: FolderOpen, label: 'Projects', href: '#projects' },
  { icon: Code, label: 'Skills', href: '#skills' },
  { icon: Mail, label: 'Contact', href: '#contact' },
];

const externalLinks: DockItem[] = [
  { icon: Github, label: 'GitHub', href: 'https://github.com', external: true },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', external: true },
];

const Dock: React.FC = () => {
  const handleClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank');
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass-dock px-4 py-2 flex items-center gap-2">
        {dockItems.map((item, index) => (
          <motion.button
            key={item.label}
            onClick={() => handleClick(item.href, item.external)}
            whileHover={{ scale: 1.2, y: -8 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index + 0.6, duration: 0.3 }}
            className="dock-item group relative"
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6 text-foreground/80 group-hover:text-primary transition-colors" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-foreground text-background text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </motion.button>
        ))}
        
        <div className="w-px h-8 bg-border/50 mx-2" />
        
        {externalLinks.map((item, index) => (
          <motion.button
            key={item.label}
            onClick={() => handleClick(item.href, item.external)}
            whileHover={{ scale: 1.2, y: -8 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + dockItems.length) + 0.6, duration: 0.3 }}
            className="dock-item group relative"
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6 text-foreground/80 group-hover:text-primary transition-colors" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-foreground text-background text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Dock;
