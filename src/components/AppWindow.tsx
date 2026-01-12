import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  LayoutGrid, 
  List, 
  Columns3,
  Share,
  Tag,
  MoreHorizontal,
  X
} from 'lucide-react';

interface AppWindowProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const AppWindow: React.FC<AppWindowProps> = ({ 
  title, 
  children, 
  isOpen,
  onClose,
  className = '' 
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`app-window ${className}`}
    >
      {/* Title bar with traffic lights */}
      <div className="window-titlebar">
        <div className="flex items-center gap-2">
          {/* Traffic light buttons */}
          <div className="flex items-center gap-2 group">
            <button 
              onClick={onClose}
              className="traffic-light traffic-light-close"
              aria-label="Close"
            >
              <X className="traffic-light-icon w-2 h-2" />
            </button>
            <button 
              className="traffic-light traffic-light-minimize"
              aria-label="Minimize"
            >
              <span className="traffic-light-icon text-[10px]">−</span>
            </button>
            <button 
              className="traffic-light traffic-light-maximize"
              aria-label="Maximize"
            >
              <span className="traffic-light-icon text-[10px]">+</span>
            </button>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex items-center gap-0.5 ml-3">
            <button className="p-1 rounded hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-4 h-4 text-white/40" />
            </button>
            <button className="p-1 rounded hover:bg-white/10 transition-colors">
              <ChevronRight className="w-4 h-4 text-white/40" />
            </button>
          </div>
        </div>
        
        {/* Window title */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-sm font-medium text-white/80">{title}</span>
        </div>
        
        {/* Right side actions */}
        <div className="flex items-center gap-1">
          <button className="p-1.5 rounded hover:bg-white/10 transition-colors">
            <Search className="w-4 h-4 text-white/50" />
          </button>
        </div>
      </div>
      
      {/* Toolbar */}
      <div className="window-toolbar">
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white/5 rounded-md p-0.5">
            <button className="p-1.5 rounded bg-white/10">
              <LayoutGrid className="w-3.5 h-3.5 text-white/70" />
            </button>
            <button className="p-1.5 rounded hover:bg-white/5">
              <List className="w-3.5 h-3.5 text-white/50" />
            </button>
            <button className="p-1.5 rounded hover:bg-white/5">
              <Columns3 className="w-3.5 h-3.5 text-white/50" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <button className="p-1.5 rounded hover:bg-white/10 transition-colors">
            <Share className="w-4 h-4 text-white/50" />
          </button>
          <button className="p-1.5 rounded hover:bg-white/10 transition-colors">
            <Tag className="w-4 h-4 text-white/50" />
          </button>
          <button className="p-1.5 rounded hover:bg-white/10 transition-colors">
            <MoreHorizontal className="w-4 h-4 text-white/50" />
          </button>
        </div>
      </div>
      
      {/* Content area */}
      <div 
        ref={contentRef}
        className="window-content custom-scrollbar"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default AppWindow;
