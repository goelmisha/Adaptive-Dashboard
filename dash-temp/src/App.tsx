import { useState, useEffect } from 'react';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Theme & Modular Components [cite: 1, 7, 13]
import { HACKATHON_THEME as theme } from './themeConfig'; 
import { SystemHealthMeter } from './components/HealthMeter';
import { PortfolioOverview } from './components/PortfolioOverview';
import { RecentActivity } from './components/RecentActivity';

export default function Dashboard() {
  const [isCompact, setIsCompact] = useState(false);
  const [health, setHealth] = useState(92);

  // [cite: 32, 35] Real-time data simulation for the Health Meter
  useEffect(() => {
    const interval = setInterval(() => {
      setHealth(Math.floor(Math.random() * (100 - 40 + 1)) + 40);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutGroup>
      {/* [cite: 4, 42] Primary background: dark gradient for Glassmorphism */}
      <div className={`flex h-screen w-full overflow-hidden bg-slate-950 bg-gradient-to-br ${theme.colors.primaryGradient}`}>
        
        {/* [cite: 7, 47] Sidebar: adjustable width and label visibility */}
        <motion.aside 
          layout 
          className={`glass-card m-2 flex flex-col transition-all duration-300 overflow-hidden ${
            isCompact ? 'w-20 items-center' : 'w-64'
          }`}
        >
          {/* Dynamic Logo based on themeConfig */}
          <div className="p-6 font-bold text-xl tracking-tighter text-white uppercase">
            {isCompact ? theme.name.substring(0,2) : theme.name}
          </div>

          <nav className="flex-1 p-4 space-y-4 w-full">
            {theme.navItems.map((item, idx) => (
              <NavItem key={idx} icon={<item.icon size={20} />} label={item.label} isCompact={isCompact} />
            ))}
          </nav>

          {/* [cite: 28, 33] Advanced Component: System Health Meter */}
          <div className={`mt-auto mb-6 transition-transform ${isCompact ? 'scale-75' : 'scale-100'}`}>
            <SystemHealthMeter value={health} />
          </div>
        </motion.aside>

        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* [cite: 6] Header with Compact Mode Toggle */}
          <header className="h-16 flex items-center justify-between px-8 border-b border-white/10 backdrop-blur-md bg-white/5">
            <h2 className="text-white font-medium">{theme.name} Overview</h2>
            <button 
              onClick={() => setIsCompact(!isCompact)}
              /* [cite: 43] Non-translucent focus ring for accessibility */
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 focus:ring-2 focus:ring-emerald-500 outline-none text-white text-sm"
            >
              {isCompact ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              {!isCompact && "Toggle Compact Mode"}
            </button>
          </header>

          {/* [cite: 8, 47] Main Content: Layout shifts based on CompactMode state */}
          <motion.main 
            layout 
            className={`p-6 grid gap-6 overflow-y-auto ${isCompact ? 'grid-cols-1' : 'grid-cols-2'}`}
          >
            {/* [cite: 14, 18] Dynamic Tickers from themeConfig */}
            {theme.tickers.map((ticker, index) => (
              <motion.div key={index} layout className="glass-card p-6 flex flex-col justify-between min-h-[160px]">
                <h3 className="text-white/60 text-sm font-medium">{ticker.label}</h3>
                <div className="text-4xl font-bold text-white tracking-tighter">{ticker.value}</div>
                <div className={`${ticker.isPositive ? 'text-green-400' : 'text-red-400'} font-semibold`}>
                  {ticker.isPositive ? '▲' : '▼'} {ticker.change}% (24h)
                </div>
              </motion.div>
            ))}

            {/* [cite: 19, 23] Responsive Widgets */}
            <motion.div layout className="col-span-full">
              <PortfolioOverview />
            </motion.div>
            <motion.div layout className="col-span-full">
              <RecentActivity />
            </motion.div>
          </motion.main>
        </div>
      </div>
    </LayoutGroup>
  );
}

function NavItem({ icon, label, isCompact }: any) {
  return (
    <div className={`flex items-center gap-4 cursor-pointer p-3 rounded-xl transition-all text-white/50 hover:text-white hover:bg-white/5 ${isCompact ? 'justify-center' : ''}`}>
      <div className="shrink-0">{icon}</div>
      <AnimatePresence>
        {!isCompact && (
          <motion.span 
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
            className="font-medium whitespace-nowrap text-white"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}