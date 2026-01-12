import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Apple, Wifi, Battery, Search, Volume2 } from 'lucide-react';

const MenuBar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  const menuItems = [
    { label: 'Finder', items: ['About This Mac', 'System Settings...', 'App Store...'] },
    { label: 'File', items: ['New Window', 'New Tab', 'Open...', 'Close Window'] },
    { label: 'Edit', items: ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'] },
    { label: 'View', items: ['as Icons', 'as List', 'as Columns', 'as Gallery'] },
    { label: 'Go', items: ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'] },
    { label: 'Window', items: ['Minimize', 'Zoom', 'Tile Window to Left', 'Tile Window to Right'] },
    { label: 'Help', items: ['Portfolio Help', 'Contact Developer'] },
  ];

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[100] h-7 flex items-center justify-between px-4 menu-bar"
    >
      {/* Left side - Apple logo and menus */}
      <div className="flex items-center gap-4">
        <button className="p-1 hover:bg-white/10 rounded transition-colors">
          <Apple className="w-4 h-4 text-foreground/90" />
        </button>
        
        {menuItems.map((menu) => (
          <div 
            key={menu.label}
            className="relative"
            onMouseEnter={() => setActiveMenu(menu.label)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="px-2 py-0.5 text-sm font-medium text-foreground/90 hover:bg-white/10 rounded transition-colors">
              {menu.label}
            </button>
            
            {activeMenu === menu.label && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-1 min-w-48 glass-panel rounded-lg py-1 shadow-xl"
              >
                {menu.items.map((item, idx) => (
                  <button
                    key={idx}
                    className="w-full px-4 py-1.5 text-left text-sm text-foreground/90 hover:bg-primary/20 transition-colors"
                    onClick={() => {
                      if (menu.label === 'Go') {
                        const sectionId = item.toLowerCase().replace(/\s/g, '');
                        const element = document.getElementById(sectionId);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }
                      setActiveMenu(null);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
      
      {/* Right side - Status icons */}
      <div className="flex items-center gap-3">
        <Volume2 className="w-4 h-4 text-foreground/80" />
        <Wifi className="w-4 h-4 text-foreground/80" />
        <div className="flex items-center gap-1">
          <Battery className="w-5 h-5 text-foreground/80" />
          <span className="text-xs text-foreground/80">100%</span>
        </div>
        <Search className="w-4 h-4 text-foreground/80" />
        <div className="text-sm text-foreground/90 font-medium">
          {currentDate} {currentTime}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuBar;
