import { Activity, Zap, Shield, Database } from 'lucide-react';

export const HACKATHON_THEME = {
  // 1. Visual Identity [cite: 4, 11]
  name: "EcoTrack AI",
  colors: {
    primaryGradient: "from-emerald-900 to-black",
    accent: "text-emerald-400",
    chartFill: "#10b981",
  },
  
  // 2. Real-Time Ticker Labels [cite: 14, 16]
  tickers: [
    { label: "Carbon Offset", value: "42.5 tCO2", change: "+12.4", isPositive: true },
    { label: "Renewable Mix", value: "84.2%", change: "-2.1", isPositive: false }
  ],

  // 3. System Health Meter Label [cite: 28, 32]
  healthLabel: "Grid Stability",
  
  // 4. Sidebar Navigation [cite: 7, 47]
  navItems: [
    { label: "Environmental Overview", icon: Activity },
    { label: "Energy Portfolio", icon: Zap },
    { label: "Compliance Logs", icon: Shield },
    { label: "Sensor Data", icon: Database }
  ]
};