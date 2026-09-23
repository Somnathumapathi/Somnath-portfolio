import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
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

// macOS dock magnification: every icon grows with how close the cursor is,
// so neighbours swell too instead of one icon popping on hover.
const BASE_SIZE = 40;
const MAX_SIZE = 56;
const FALLOFF = 130;

const DockIcon: React.FC<{
  item: DockItem;
  index: number;
  mouseX: MotionValue<number>;
}> = ({ item, index, mouseX }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const distance = useTransform(mouseX, (x) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return Number.MAX_SAFE_INTEGER;
    return x - bounds.x - bounds.width / 2;
  });

  const targetSize = useTransform(
    distance,
    [-FALLOFF, 0, FALLOFF],
    [BASE_SIZE, MAX_SIZE, BASE_SIZE],
    { clamp: true }
  );
  const size = useSpring(targetSize, { mass: 0.1, stiffness: 190, damping: 14 });

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      // Only the entrance is staggered - a delay here would also hold up the
      // magnification, so gestures override it with their own transition.
      transition={{ delay: 0.05 * index + 0.3, duration: 0.3 }}
      whileTap={{ scale: 0.92, transition: { duration: 0.08, delay: 0 } }}
      onClick={item.onClick}
      className="dock-icon-btn group relative"
      aria-label={item.label}
    >
      {/* Fixed height keeps the bar from growing; icons overflow upward. */}
      <motion.div style={{ width: size }} className="relative h-10">
        <motion.div
          style={{ width: size, height: size }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        >
          <item.icon className="w-full h-full drop-shadow-[0_3px_6px_rgba(0,0,0,0.45)]" />
        </motion.div>
      </motion.div>
      <span className="dock-tooltip">{item.label}</span>
    </motion.button>
  );
};

const Dock: React.FC<DockProps> = ({ onOpenWindow }) => {
  // Infinity parks every icon at its base size while the cursor is away.
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);

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
        <div
          className="dock-container px-1.5 py-1 flex items-end gap-0.5"
          onMouseMove={(e) => mouseX.set(e.clientX)}
          onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        >
          {mainApps.map((item, index) => (
            <DockIcon key={item.label} item={item} index={index} mouseX={mouseX} />
          ))}
          
          <div className="dock-divider" />
          
          {portfolioApps.map((item, index) => (
            <DockIcon
              key={item.label}
              item={item}
              index={index + mainApps.length}
              mouseX={mouseX}
            />
          ))}
          
          <div className="dock-divider" />
          
          {externalApps.map((item, index) => (
            <DockIcon
              key={item.label}
              item={item}
              index={index + mainApps.length + portfolioApps.length}
              mouseX={mouseX}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dock;
