// ============================================
// ENHANCED PORTFOLIO WEBSITE FUNCTIONALITY
// ============================================

/**
 * Dark Mode Toggle
 * Persists user preference in localStorage
 */
class DarkModeManager {
    constructor() {
        this.toggle = document.getElementById('theme-toggle');
        this.icon = document.querySelector('.theme-icon');
        this.init();
    }

    init() {
        // Check saved preference or system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.body.classList.add('dark');
        }

        this.updateIcon();
        this.toggle.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this.updateIcon();
    }

    updateIcon() {
        const isDark = document.body.classList.contains('dark');
        this.icon.textContent = isDark ? '☀️' : '🌙';
    }
}

/**
 * Mobile Menu Manager
 * Handles hamburger menu interactions
 */
class MobileMenuManager {
    constructor() {
        this.menuToggle = document.getElementById('menu-toggle');
        this.navLinks = document.getElementById('navLinks');
        this.links = this.navLinks.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.menuToggle.addEventListener('click', () => this.toggleMenu());

        // Close menu when a link is clicked
        this.links.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        const isOpen = this.navLinks.classList.contains('open');
        this.menuToggle.setAttribute('aria-expanded', !isOpen);
        this.navLinks.classList.toggle('open');
    }

    closeMenu() {
        this.navLinks.classList.remove('open');
        this.menuToggle.setAttribute('aria-expanded', false);
    }
}

/**
 * Navbar Auto-Hide on Scroll
 * Hides navbar when scrolling down, shows when scrolling up
 */
class NavbarAutoHide {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.lastScrollY = 0;
        this.scrollThreshold = 50;
        this.init();
    }

    init() {
        // Add scroll event with throttling
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    handleScroll() {
        const currentScrollY = window.scrollY;

        // Only hide after scrolling down more than threshold
        if (currentScrollY > this.scrollThreshold) {
            if (currentScrollY > this.lastScrollY) {
                // Scrolling down - hide navbar
                this.navbar.classList.add('hidden');
            } else {
                // Scrolling up - show navbar
                this.navbar.classList.remove('hidden');
            }
        } else {
            // Near top - always show
            this.navbar.classList.remove('hidden');
        }

        this.lastScrollY = currentScrollY;
    }
}

/**
 * Intersection Observer for Fade-in Animations
 * Triggers fade-in when elements become visible
 */
class FadeInObserver {
    constructor() {
        this.init();
    }

    init() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Already has animation from CSS, just ensuring it plays
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, options);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }
}

/**
 * 3D Tilt Effect for Project Cards
 * Creates interactive tilt on mouse movement
 */
class TiltEffect {
    constructor() {
        this.cards = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', () => this.startTilt(card));
            card.addEventListener('mousemove', (e) => this.updateTilt(card, e));
            card.addEventListener('mouseleave', () => this.resetTilt(card));
        });
    }

    startTilt(card) {
        card.style.transition = 'none';
    }

    updateTilt(card, event) {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rotateX = (event.clientY - centerY) / 10;
        const rotateY = (centerX - event.clientX) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    }

    resetTilt(card) {
        card.style.transition = 'all 0.3s ease-out';
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
}

/**
 * Smooth Navigation with Active Link Indicator
 * Highlights current section in navigation
 */
class SmoothNavigation {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        // Smooth scroll for nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });

        // Update active link on scroll
        window.addEventListener('scroll', () => this.updateActiveLink());
    }

    updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
}

/**
 * Performance Optimization
 * Lazy load images and defer non-critical assets
 */
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Lazy load images if supported
        if ('IntersectionObserver' in window) {
            this.lazyLoadImages();
        }
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

/**
 * Keyboard Navigation Enhancement
 * Improves accessibility with arrow key navigation
 */
class KeyboardNavigation {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close mobile menu on Escape
                const menuManager = window.mobileMenuManager;
                if (menuManager) {
                    menuManager.closeMenu();
                }
            }

            // Navigate sections with arrow keys (Alt + Arrow)
            if (e.altKey) {
                const sections = document.querySelectorAll('section[id]');
                const currentIdx = Array.from(sections).findIndex(
                    s => s.offsetTop <= window.scrollY
                );

                if (e.key === 'ArrowDown' && currentIdx < sections.length - 1) {
                    e.preventDefault();
                    sections[currentIdx + 1].scrollIntoView({ behavior: 'smooth' });
                } else if (e.key === 'ArrowUp' && currentIdx > 0) {
                    e.preventDefault();
                    sections[currentIdx - 1].scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
}

/**
 * Analytics Tracking (Optional)
 * Track page interactions for analytics
 */
class AnalyticsTracker {
    constructor() {
        this.init();
    }

    init() {
        // Track external link clicks
        document.querySelectorAll('a[target="_blank"]').forEach(link => {
            link.addEventListener('click', (e) => {
                this.trackEvent('external_click', {
                    url: link.href,
                    text: link.textContent
                });
            });
        });

        // Track CTA button clicks
        document.querySelectorAll('.btn-primary').forEach(btn => {
            btn.addEventListener('click', () => {
                this.trackEvent('cta_click', {
                    text: btn.textContent
                });
            });
        });
    }

    trackEvent(eventName, data = {}) {
        // Placeholder for analytics integration
        // Replace with your analytics service (Google Analytics, Mixpanel, etc.)
        if (window.gtag) {
            gtag('event', eventName, data);
        }
    }
}

/**
 * Initialize all functionality on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    window.darkModeManager = new DarkModeManager();
    window.mobileMenuManager = new MobileMenuManager();
    // new NavbarAutoHide();  // Disabled: navbar no longer auto-hides
    new FadeInObserver();
    new TiltEffect();
    new SmoothNavigation();
    new PerformanceOptimizer();
    new KeyboardNavigation();
    new AnalyticsTracker();

    // Add dynamic styling for active nav links
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: var(--accent);
        }
        
        .nav-link.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
});

/**
 * Handle visibility change for performance
 */
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden - pause animations
        document.body.style.animationPlayState = 'paused';
    } else {
        // Page is visible - resume animations
        document.body.style.animationPlayState = 'running';
    }
});