import { motion } from 'framer-motion';

export const SystemHealthMeter = ({ value }: { value: number }) => {
  // [cite: 34] Circumference logic for SVG circle (r=40)
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (value / 100) * circumference;
  
  // [cite: 37] Color Key logic
  const getColor = (v: number) => {
    if (v >= 80) return '#4ade80'; // Green
    if (v >= 50) return '#facc15'; // Yellow
    return '#f87171'; // Red
  };

  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <svg width="100" height="100" className="-rotate-90">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/10" />
        <motion.circle 
          cx="50" cy="50" r="40" stroke={getColor(value)} strokeWidth="6" fill="transparent"
          strokeDasharray={circumference}
          /* [cite: 35, 36] Animate stroke-dashoffset */
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      {/* [cite: 41] High-luminance white text for readability */}
      <span className="text-white text-[10px] font-mono tracking-tighter">LATENCY: {value}ms</span>
    </div>
  );
};