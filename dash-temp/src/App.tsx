


import { useState, useEffect } from 'react';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Wallet, 
  History, 
  Settings, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

// Import your modular components
import { SystemHealthMeter } from './components/HealthMeter';
import { PortfolioOverview } from './components/PortfolioOverview';
import { RecentActivity } from './components/RecentActivity';

export default function Dashboard() {
  // [cite: 46] State to toggle between Standard and Compact modes
  const [isCompact, setIsCompact] = useState(false);
  
  // [cite: 32, 35] Simulated data streams for Real-Time Tickers and Health Meter
  const [health, setHealth] = useState(92);
  const [btcPrice, setBtcPrice] = useState(64231.00);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate API Latency (0-100) [cite: 32]
      setHealth(Math.floor(Math.random() * (100 - 40 + 1)) + 40);
      // Simulate BTC price volatility [cite: 16]
      setBtcPrice(prev => prev + (Math.random() * 20 - 10));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutGroup>
      <div className="flex h-screen w-full overflow-hidden bg-slate-950">
        {/* [cite: 3, 7] Sidebar: adjustable width via Compact Mode */}
        <motion.aside 
          layout 
          className={`glass-card m-2 flex flex-col transition-all duration-300 overflow-hidden ${
            isCompact ? 'w-20 items-center' : 'w-64'
          }`}
        >
          {/* Logo Area */}
          <div className="p-6 font-bold text-xl tracking-tighter text-white">
            {isCompact ? 'FD' : 'FIN-DASH'}
          </div>

          {/* [cite: 7, 47] Sidebar Navigation */}
          <nav className="flex-1 p-4 space-y-4 w-full">
            <NavItem icon={<LayoutDashboard size={20} />} label="Overview" isCompact={isCompact} active />
            <NavItem icon={<Wallet size={20} />} label="Portfolio" isCompact={isCompact} />
            <NavItem icon={<History size={20} />} label="Transactions" isCompact={isCompact} />
            <NavItem icon={<Settings size={20} />} label="Settings" isCompact={isCompact} />
          </nav>

          {/* [cite: 28, 29] Advanced Component: System Health Meter */}
          <div className={`mt-auto mb-6 transition-transform ${isCompact ? 'scale-75' : 'scale-100'}`}>
            <SystemHealthMeter value={health} />
          </div>
        </motion.aside>

        {/* Right Side Content Container */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* [cite: 6] Header: Fixed navigation bar */}
          <header className="h-16 flex items-center justify-between px-8 border-b border-white/10 backdrop-blur-md bg-white/5">
            <h2 className="text-white font-medium">Market Overview</h2>
            <button 
              onClick={() => setIsCompact(!isCompact)}
              /* [cite: 43] Clear, non-translucent focus ring for accessibility */
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white text-sm"
            >
              {isCompact ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              {!isCompact && "Toggle Compact Mode"}
            </button>
          </header>

          {/* [cite: 8, 47] Main Content Area: Responsive Grid */}
          <motion.main 
            layout 
            className={`p-6 grid gap-6 overflow-y-auto ${isCompact ? 'grid-cols-1' : 'grid-cols-2'}`}
          >
            {/* [cite: 14, 18] Real-Time Tickers: Bold, High-Contrast Pricing */}
            <motion.div layout className="glass-card p-6 min-h-[160px] flex flex-col justify-between">
              <h3 className="text-white/60 text-sm font-medium">BTC/USD [cite: 16]</h3>
              <div className="text-4xl font-bold text-white tracking-tighter">
                ${btcPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} [cite: 18]
              </div>
              <div className="text-green-400 font-semibold flex items-center gap-1">
                <span className="text-xs">▲</span> +2.45% (24h) [cite: 18]
              </div>
            </motion.div>

            <motion.div layout className="glass-card p-6 min-h-[160px] flex flex-col justify-between">
              <h3 className="text-white/60 text-sm font-medium">TSLA [cite: 16]</h3>
              <div className="text-4xl font-bold text-white tracking-tighter">$175.22 [cite: 18]</div>
              <div className="text-red-400 font-semibold flex items-center gap-1">
                <span className="text-xs">▼</span> -1.12% (24h) [cite: 18]
              </div>
            </motion.div>

            {/* [cite: 19, 22] Portfolio Overview Widget */}
            <motion.div layout className="col-span-full">
              <PortfolioOverview />
            </motion.div>

            {/* [cite: 23, 26] Recent Activity Table Widget */}
            <motion.div layout className="col-span-full">
              <RecentActivity />
            </motion.div>
          </motion.main>
        </div>
      </div>
    </LayoutGroup>
  );
}

/**
 * Helper component for Sidebar items to manage "icons-only" centering
 */
function NavItem({ icon, label, isCompact, active = false }: any) {
  return (
    <div className={`flex items-center gap-4 cursor-pointer p-3 rounded-xl transition-all group ${
      active ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white hover:bg-white/5'
    } ${isCompact ? 'justify-center' : ''}`}>
      <div className="shrink-0">{icon}</div>
      <AnimatePresence mode="wait">
        {!isCompact && (
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="font-medium whitespace-nowrap"
          >
            {label} 
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}