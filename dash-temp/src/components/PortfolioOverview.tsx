export const PortfolioOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      <div className="glass-card p-6 flex flex-col justify-center">
        <h3 className="text-white/60 text-sm mb-2">Total Net Worth [cite: 20]</h3>
        <div className="text-4xl font-bold text-white tracking-tight">$128,430.50 [cite: 21]</div>
        <div className="text-green-400 text-sm mt-1">+$1,240.00 (24h)</div>
      </div>

      <div className="glass-card p-6 col-span-2 flex items-center justify-between">
        <div className="space-y-4">
          <h3 className="text-white/60 text-sm font-medium">Asset Distribution [cite: 21]</h3>
          <ul className="space-y-2 text-sm text-white">
            <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500"/> Crypto: 60%</li>
            <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-500"/> Stocks: 30%</li>
            <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-500"/> Cash: 10%</li>
          </ul>
        </div>
        
        {/* Improved Responsive SVG Pie Chart [cite: 21, 31] */}
        <div className="relative h-32 w-32">
          <svg viewBox="0 0 32 32" className="w-full h-full -rotate-90">
            {/* Background / Crypto (60%) */}
            <circle r="16" cx="16" cy="16" fill="#3b82f6" />
            
            {/* Stocks (30%) - Stroke Dash 30.1 (30% of ~100 circumference) [cite: 34] */}
            <circle 
              r="8" cx="16" cy="16" fill="transparent" 
              stroke="#10b981" strokeWidth="16" 
              strokeDasharray="15.1 50.2" 
              className="rotate-[216deg] origin-center" 
            />
            
            {/* Cash (10%) - Stroke Dash 10.1 [cite: 34] */}
            <circle 
              r="8" cx="16" cy="16" fill="transparent" 
              stroke="#f59e0b" strokeWidth="16" 
              strokeDasharray="5.1 50.2" 
              className="rotate-[324deg] origin-center" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};