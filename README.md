# Henry Oile's Enhanced Portfolio Website

A modern, fully responsive portfolio website showcasing projects, skills, and professional background with cutting-edge web technologies.

## 🎨 Features

### ✨ Smooth Animations & Transitions
- **Fade-in animations** for sections when they come into view (0.8s ease-out)
- **Staggered animations** for project cards (0.05s-0.25s delays)
- **3D tilt effects** on project cards for interactive engagement
- **Smooth hover effects** on buttons, cards, and links
- **Button ripple effects** on interaction
- **Navigation underline animations** on hover
- **Hardware-accelerated transforms** for performance

### 📱 Fully Responsive Design
- **Mobile-first approach** optimized for all screen sizes
- **Breakpoints:**
  - Desktop: 1024px and above
  - Tablet: 768px - 1024px
  - Mobile: 480px - 768px
  - Small Mobile: Below 480px
- **Adaptive layouts** that reflow intelligently
- **Touch-optimized interactions** with adequate spacing
- **Flexible grid systems** that adapt to viewport width
- **Hamburger menu** for mobile navigation

### 🎯 Interactive Elements
- **Single-page navigation** with smooth scrolling
- **Auto-hiding navbar** when scrolling down, reappears when scrolling up
- **3D project card tilt** effects on mouse movement
- **Active link indicator** showing current section
- **Mobile menu** with smooth animations
- **Dark mode toggle** persisted to localStorage
- **Keyboard shortcuts** (Escape, Alt+Arrow navigation)

### 📄 Well-Structured Content

#### Home Section
- Clear, compelling headline
- Value proposition describing expertise
- Call-to-action buttons (View Projects, GitHub)
- Professional profile image with hover effects

#### About Section
- Personal story emphasizing collaboration and growth
- Background in programming and team experiences
- Leadership development through Aspire Leaders Program
- Passion for building valuable systems

#### Projects Section (5 Featured Projects)
1. **Airbnb Reservation System** - Team Project (Team, Git, Backend)
2. **Data Analysis with Pandas** - Data Science (Python, Data, Visualization)
3. **VibeWriting** - AI/Product (AI, Product, UX)
4. **The Prompt Hacker** - Education (AI, Education, Guides)
5. **3D Space Exploration Game** - Interactive (Physics, Simulation, JavaScript)

#### Skills Section (Organized by Category)
- **Programming:** Python, JavaScript, SQL, HTML/CSS
- **Data & Analytics:** Pandas, Matplotlib, Data Analysis, Visualization
- **Tools & Technologies:** Git & GitHub, VS Code, Terminal/CLI, Agile/Scrum

#### Contact Section
- Email link with icon
- GitHub profile link
- LinkedIn profile link
- Easy-to-use contact methods

### 🛠️ Technical Highlights

#### Semantic HTML5
- Proper use of semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ARIA labels and roles for accessibility
- Proper heading hierarchy
- Meta tags for SEO (description, keywords, author)

#### Modular CSS with Variables
- **CSS Custom Properties** for consistent theming
- **50+ CSS Variables** organized by:
  - Colors (primary, secondary, accent variations)
  - Spacing scale (xs to 3xl)
  - Typography scale (sm to 5xl)
  - Border radius values
  - Transition durations
  - Shadow system
- **Dark Mode:** Single class toggle switches entire theme
- **1026 lines** of well-organized, maintainable CSS

#### Vanilla JavaScript (No Dependencies)
- **9 modular classes** for different features
- **Object-Oriented Design** with clear separation of concerns
- **Event Delegation** for efficient handling
- **Intersection Observer API** for fade-in animations
- **RequestAnimationFrame** for performance-optimized scroll
- **localStorage** for persistent preferences
- **No external libraries** - pure JavaScript

#### Performance Optimized
- **Minimal bundle:** HTML (~10KB), CSS (~30KB), JS (~12KB)
- **Hardware-accelerated animations** using CSS transforms
- **Lazy loading support** for images
- **Pause animations** when page is hidden
- **Efficient scroll handling** with throttling
- **GPU-accelerated rendering**

#### Accessibility Features
- **WCAG 2.1 AA compliant** color contrast ratios
- **Keyboard navigation:** Full support (Tab, Enter, Escape, Alt+Arrow)
- **Focus styles:** Visible 2px outline on all interactive elements
- **ARIA labels:** All buttons have descriptive labels
- **Semantic HTML:** Proper landmark regions
- **Reduced motion support:** Respects prefers-reduced-motion
- **Touch-friendly:** Minimum 44x44px touch targets

#### SEO Friendly
- **Meta tags:** Description, keywords, author, theme-color
- **Semantic HTML:** Proper structure for search engines
- **Mobile-friendly:** Responsive viewport meta tag
- **Heading structure:** Proper H1 to H6 hierarchy
- **Clean URLs:** Hash-based navigation for SPA

## 📂 File Structure

```
MYPORTFOLIO/
├── index.html      # Semantic HTML5 with complete content (311 lines)
├── style.css       # Modular CSS with animations & responsive (1026 lines)
├── script.js       # 9 JavaScript classes for interactivity (400 lines)
├── assets/
│   └── profile.jpg # Professional profile image
└── README.md       # This file
```

## 🚀 Getting Started

### Prerequisites
- No build tools or dependencies required
- Works in any modern web browser
- Just open `index.html` in your browser

### Browser Support
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (14+)
- IE 11: Limited support (missing CSS variables, modern animations)

### Quick Start
1. Open `index.html` in a web browser
2. Test all features (dark mode, menu, scrolling)
3. Update your profile image at `assets/profile.jpg`
4. Update contact information in the HTML
5. Deploy to your hosting service

## ⚙️ Customization

### Change Colors
Edit CSS variables in `style.css` (lines 5-40):
```css
:root {
    --accent: #fd3d0d;        /* Change primary color */
    --bg: #f9fafb;            /* Change background */
    --text: #0f172a;          /* Change text color */
}
```

### Change Fonts
Edit line 26 in `style.css`:
```css
--font-sans: "Inter", system-ui, -apple-system, sans-serif;
```

### Add More Projects
Duplicate a project card in the projects section and modify:
- Title
- Badge
- Description
- Tags
- GitHub link

### Update Contact Information
Find and update:
- Email: Line 259
- GitHub URL: Line 261
- LinkedIn URL: Line 266

## 🎯 JavaScript Features

### DarkModeManager
Handles dark mode toggling and saves preference to localStorage. Click the moon icon to toggle.

### MobileMenuManager
Manages hamburger menu with auto-close on navigation, outside click, or Escape key.

### NavbarAutoHide
Smart navbar that hides when scrolling down and shows when scrolling up (50px threshold).

### FadeInObserver
Uses Intersection Observer API to trigger fade-in animations as sections come into view.

### TiltEffect
Creates 3D perspective tilt on project cards when mouse moves over them.

### SmoothNavigation
Enables smooth scrolling and highlights active nav link based on scroll position.

### PerformanceOptimizer
Handles lazy loading support and performance optimizations.

### KeyboardNavigation
Provides keyboard shortcuts: Escape to close menu, Alt+Up/Down to navigate sections.

### AnalyticsTracker
Placeholder for analytics integration (Google Analytics compatible).

## 📊 Performance Metrics

- **Page Load:** Optimized for fast loading
- **Lighthouse Score:** Designed for 90+ on all metrics
- **Bundle Size:** HTML + CSS + JS = ~52KB total
- **Minified:** ~22KB with compression

## 🎯 Best Practices Implemented

1. **Progressive Enhancement:** Works without JavaScript
2. **Mobile First:** Desktop features added on larger screens
3. **Performance:** Hardware-accelerated animations
4. **Accessibility:** WCAG 2.1 AA compliant
5. **Maintainability:** Well-commented, organized code
6. **SEO:** Semantic HTML and meta tags
7. **UX:** Smooth animations and intuitive interactions
8. **Security:** No external dependencies, safe from supply chain attacks

## 🌐 Deployment

This portfolio can be deployed to:
- **GitHub Pages** - Free hosting (github.com)
- **Netlify** - Easy drag-and-drop or git integration
- **Vercel** - Fast serverless deployment
- **Any web server** - Simple static files, no backend needed

No build process required - just upload the files!

## 📞 Contact & Links

Update these with your actual information:
- **Email:** henryoile627@gmail.com
- **GitHub:** https://github.com/Henryoile
- **LinkedIn:** https://www.linkedin.com/in/oile-henry-204a013a3

## 📄 License

© 2026 Henry Oile. All rights reserved.

---

**Version 2.0 - Enhanced Portfolio**  
Last Updated: January 2026
