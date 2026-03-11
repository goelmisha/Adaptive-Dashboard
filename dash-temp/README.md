---

# 🚀 Adaptive Dashboard: Glassmorphism Edition

A high-performance, responsive financial dashboard built with **React**, **Vite**, and **Tailwind CSS v4**. This project showcases advanced UI/UX patterns including Glassmorphism, real-time data visualization, and seamless layout transitions.

## ✨ Core Features

### 🧊 Glassmorphism Aesthetic

The primary visual theme is built on a **Glassmorphism** effect, achieved through:

* 
**Low-opacity backgrounds**: `bg-white/5`.


* 
**Backdrop blurring**: `backdrop-blur-xl` for a frosted glass effect.


* 
**Subtle borders**: `border border-white/20` to define modular cards.


* 
**High-contrast text**: Pure white (#FFFFFF) text to ensure readability over translucent layers.



### ⚙️ Compact Mode & Layout Refactoring

The dashboard features a **Compact Mode Toggle** that refactors the layout without a page reload:

* 
**Sidebar**: Collapses from a full navigation width to an icons-only view.


* 
**Main Content**: Transitions from a two-column widget grid to a single-column stack.


* 
**Smooth Transitions**: Powered by **Framer Motion's** `LayoutGroup` and `layout` props to animate resizing and repositioning.



### 📊 Advanced Components

* 
**System Health Meter**: A custom **SVG-based** gauge in the sidebar.


* Uses `stroke-dasharray` and `stroke-dashoffset` for fill animations.


* Features a dynamic color key: **Green** (80-100), **Yellow** (50-79), and **Red** (0-49).




* 
**Real-Time Ticker Stream**: Modular cards displaying bold, high-contrast price data with green/red status indicators.


* 
**Asset Distribution**: A responsive SVG pie chart that adapts its scaling based on the layout mode.



## 🛠️ Tech Stack

* **Vite**: Ultra-fast build tool and dev server.
* **Tailwind CSS v4**: Zero-config styling and modern CSS features.
* **Framer Motion**: Advanced physics-based animations and layout transitions.
* **Lucide React**: Clean, accessible iconography.

## 🚦 Getting Started

1. Clone the repo.
2. Run `npm install`.
3. Start the dev server with `npm run dev`.

---

