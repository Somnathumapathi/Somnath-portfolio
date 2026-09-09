import React from 'react';
import { motion } from 'framer-motion';
import {
  AppIconProps,
  ContactsIcon,
  FinderIcon,
  FolderIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  NotesIcon,
  PhotosIcon,
  SettingsIcon,
  TerminalIcon,
} from './AppIcons';

interface DockItem {
  icon: React.FC<AppIconProps>;
  label: string;
  onClick?: () => void;
}

interface DockProps {
  onOpenWindow: (windowId: string) => void;
}

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
    <item.icon className="w-10 h-10 drop-shadow-[0_3px_6px_rgba(0,0,0,0.45)]" />
    <span className="dock-tooltip">{item.label}</span>
  </motion.button>
);

const Dock: React.FC<DockProps> = ({ onOpenWindow }) => {
  const openExternal = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const mainApps: DockItem[] = [
    { icon: FinderIcon, label: 'Finder', onClick: () => onOpenWindow('about') },
    { icon: MailIcon, label: 'Mail', onClick: () => onOpenWindow('contact') },
    { icon: PhotosIcon, label: 'Photos' },
  ];

  const portfolioApps: DockItem[] = [
    { icon: ContactsIcon, label: 'About Me', onClick: () => onOpenWindow('about') },
    { icon: FolderIcon, label: 'Projects', onClick: () => onOpenWindow('projects') },
    { icon: TerminalIcon, label: 'Skills', onClick: () => onOpenWindow('skills') },
    { icon: NotesIcon, label: 'Experience', onClick: () => onOpenWindow('experience') },
  ];

  const externalApps: DockItem[] = [
    {
      icon: GithubIcon,
      label: 'GitHub',
      onClick: () => openExternal('https://github.com/Somnathumapathi/'),
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      onClick: () => openExternal('https://www.linkedin.com/in/somnath-umapathi-9a485a205/'),
    },
    { icon: SettingsIcon, label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-[9999]" data-tour="dock">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      >
        <div className="dock-container px-1.5 py-1 flex items-end gap-0.5">
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
    </div>
  );
};

export default Dock;
