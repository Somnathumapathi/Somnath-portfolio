import React, { useState, useRef } from 'react';
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
  MoreHorizontal
} from 'lucide-react';

interface DesktopWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const DesktopWindow: React.FC<DesktopWindowProps> = ({ 
  title = "Portfolio", 
  children, 
  className = '' 
}) => {
  const [isMaximized, setIsMaximized] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (direction: 'back' | 'forward') => {
    // Scroll navigation within the window
    if (contentRef.current) {
      const scrollAmount = direction === 'back' ? -400 : 400;
      contentRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className={`desktop-window ${isMaximized ? 'maximized' : ''} ${className}`}
    >
      {/* Title bar with traffic lights */}
      <div className="window-titlebar">
        <div className="flex items-center gap-2">
          {/* Traffic light buttons */}
          <div className="flex items-center gap-2 group">
            <button 
              className="traffic-light traffic-light-close"
              aria-label="Close"
            >
              <span className="traffic-light-icon">×</span>
            </button>
            <button 
              className="traffic-light traffic-light-minimize"
              aria-label="Minimize"
            >
              <span className="traffic-light-icon">−</span>
            </button>
            <button 
              className="traffic-light traffic-light-maximize"
              aria-label="Maximize"
              onClick={() => setIsMaximized(!isMaximized)}
            >
              <span className="traffic-light-icon">+</span>
            </button>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex items-center gap-1 ml-4">
            <button 
              onClick={() => handleNavigation('back')}
              className="p-1 rounded hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground/60" />
            </button>
            <button 
              onClick={() => handleNavigation('forward')}
              className="p-1 rounded hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground/60" />
            </button>
          </div>
        </div>
        
        {/* Window title */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="text-sm font-medium text-foreground/80">{title}</span>
        </div>
        
        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded hover:bg-white/10 transition-colors">
            <Search className="w-4 h-4 text-foreground/60" />
          </button>
        </div>
      </div>
      
      {/* Toolbar */}
      <div className="window-toolbar">
        <div className="flex items-center gap-2">
          {/* View options */}
          <div className="flex items-center bg-white/10 rounded-lg p-0.5">
            <button className="p-1.5 rounded-md bg-white/20 transition-colors">
              <LayoutGrid className="w-4 h-4 text-foreground/80" />
            </button>
            <button className="p-1.5 rounded-md hover:bg-white/10 transition-colors">
              <List className="w-4 h-4 text-foreground/60" />
            </button>
            <button className="p-1.5 rounded-md hover:bg-white/10 transition-colors">
              <Columns3 className="w-4 h-4 text-foreground/60" />
            </button>
          </div>
          
          {/* Group dropdown */}
          <button className="px-3 py-1.5 text-sm text-foreground/70 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-1">
            <span>Group</span>
            <ChevronRight className="w-3 h-3 rotate-90" />
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Action buttons */}
          <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <Share className="w-4 h-4 text-foreground/60" />
          </button>
          <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <Tag className="w-4 h-4 text-foreground/60" />
          </button>
          <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <MoreHorizontal className="w-4 h-4 text-foreground/60" />
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

export default DesktopWindow;
