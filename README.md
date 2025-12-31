# Khara Pechtes - Portfolio Website

A premium, executive-grade portfolio website for a Remote Senior Digital Project Manager with 12+ years of experience.

## 🎯 Overview

This is a clean, minimalist, single-page portfolio built with React + Vite, featuring professional animations and a calm, trustworthy design aesthetic inspired by Apple, Notion, and Linear.

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## ✨ Features

- **Single-page design** with smooth scroll navigation
- **Sticky navigation** with active section highlighting
- **Professional animations** - fade-in, slide-up, staggered reveals
- **Scroll-triggered animations** using Framer Motion
- **Fully responsive** - desktop-first, tablet, and mobile optimized
- **SEO optimized** with proper meta tags and semantic HTML
- **Performance focused** - fast load times and smooth interactions

## 📐 Design Philosophy

- **Minimalist, PMO-level design**
- **Neutral color palette** - whites, grays, charcoal with muted blue accent
- **Large spacing** and strong typography hierarchy
- **Calm, intentional animations** - no bouncing or excessive motion
- **Executive feel** - trustworthy, modern, and professional

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd khara
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
khara/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Sticky nav with smooth scroll
│   │   ├── Hero.jsx            # Hero section with staggered animations
│   │   ├── Competencies.jsx    # Skills in two-column layout
│   │   ├── Experience.jsx      # Timeline-style experience cards
│   │   ├── Impact.jsx          # Metrics with animated counters
│   │   ├── Education.jsx       # Credentials with scale animations
│   │   └── Footer.jsx          # Contact section
│   ├── utils/
│   │   └── motion.js           # Centralized animation variants
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles and Tailwind
├── index.html                  # HTML template with SEO
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  accent: {
    DEFAULT: '#5B7C99', // Muted blue
    light: '#7A9AB8',
    dark: '#4A6380',
  }
}
```

### Animations

All animation variants are centralized in `src/utils/motion.js` for easy customization.

### Content

Update the content in each component file to match your information.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

This site can be deployed to:

- **Vercel** (recommended for Vite projects)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📄 License

© 2025 Khara Pechtes. All rights reserved.

## 🤝 Contact

- **Email**: kpechtes@gmail.com
- **Phone**: 310.467.9570
- **Location**: Los Angeles, CA
