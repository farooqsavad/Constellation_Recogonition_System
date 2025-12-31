/**
 * Enhanced Reveal Animations with Bidirectional Support
 * This script handles reveal animations for elements when they enter or exit the viewport
 * with support for reversing animations when scrolling up
 */

class RevealAnimations {
    constructor() {
        // Store all elements to be revealed
        this.revealElements = [];
        
        // Track scroll position for direction detection
        this.lastScrollTop = 0;
        this.scrollDirection = 'down';
        
        // Options for the Intersection Observer
        this.observerOptions = {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin
            threshold: [0.1, 0.5, 0.9] // Multiple thresholds for more precise control
        };
        
        // Initialize the observer for bidirectional animations
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), this.observerOptions);
        
        // Element position tracking for animation control
        this.elementPositions = new Map();
        
        // Initialize the animations
        this.init();
        
        // Add scroll event listener for direction detection and parallax effects
        this.setupScrollEffects();
    }
    
    /**
     * Initialize the animations
     */
    init() {
        // Apply reveal classes to all major sections
        this.applyRevealClassesToAllSections();
        
        // Get all elements with the reveal-element class
        this.revealElements = document.querySelectorAll('.reveal-element');
        
        // Add each element to the observer and track its position
        this.revealElements.forEach(element => {
            // Store initial position for later comparison
            this.elementPositions.set(element, {
                revealed: false,
                topPosition: element.getBoundingClientRect().top + window.scrollY
            });
            
            // Start observing the element
            this.observer.observe(element);
        });
        
        // Add hover effects to elements with hover-reveal class
        const hoverElements = document.querySelectorAll('.hover-reveal');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.classList.add('hovered');
            });
            
            element.addEventListener('mouseleave', () => {
                element.classList.remove('hovered');
            });
        });
        
        // Handle initial state (for elements already in viewport on page load)
        this.checkInitialVisibility();
    }
    
    /**
     * Apply reveal classes to all major sections in the document
     */
    applyRevealClassesToAllSections() {
        // Major sections
        const sectionSelectors = [
            '.hero-section', '.features-section', '.how-it-works-section', 
            '.popular-constellations-section', '.testimonials-section', '.cta-section',
            '.upload-section', '.results-section', '.library-controls', 
            '.constellation-grid', '.constellation-details', '.learning-categories',
            '.content-section', '.faq-section', '.team-section', '.contact-section',
            '.analysis-section', '.chart-container', '.data-section',
            '.page-header', '.login-card', '.signup-card'
        ];
        
        sectionSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (!element.classList.contains('reveal-element')) {
                    element.classList.add('reveal-element');
                }
            });
        });
    }
    
    /**
     * Handle intersection events with bidirectional support
     * @param {IntersectionObserverEntry[]} entries - The intersection entries
     */
    handleIntersection(entries) {
        entries.forEach(entry => {
            const element = entry.target;
            const position = this.elementPositions.get(element);
            
            if (!position) return;
            
            // Calculate visibility percentage
            const visibilityRatio = entry.intersectionRatio;
            
            // Determine if element should be revealed or hidden based on scroll direction and visibility
            if (this.scrollDirection === 'down' && entry.isIntersecting && visibilityRatio > 0.1) {
                // Scrolling down and element is entering viewport
                element.classList.add('revealed');
                position.revealed = true;
                
                // If this is a container, reveal its children with staggered delays
                this.revealChildrenWithStaggeredDelay(element);
            } 
            else if (this.scrollDirection === 'up' && !entry.isIntersecting && 
                    position.revealed && entry.boundingClientRect.top > 0) {
                // Scrolling up and element is leaving viewport from the bottom
                element.classList.remove('revealed');
                position.revealed = false;
                
                // Also hide children if this is a container
                this.hideChildren(element);
            }
        });
    }
    
    /**
     * Reveal children of a container with staggered delays
     * @param {Element} container - The container element
     */
    revealChildrenWithStaggeredDelay(container) {
        // Check if this is a container that should have staggered children
        const isContainer = container.classList.contains('features-grid') || 
                           container.classList.contains('constellation-grid') ||
                           container.classList.contains('learning-categories') ||
                           container.classList.contains('faq-list') ||
                           container.classList.contains('team-grid') ||
                           container.classList.contains('demo-grid');
        
        if (isContainer) {
            // Get direct children that should be animated
            const children = container.querySelectorAll(':scope > div');
            
            // Add staggered reveal to children
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('revealed');
                }, 100 * index); // 100ms delay between each child
            });
        }
    }
    
    /**
     * Hide children of a container when container is hidden
     * @param {Element} container - The container element
     */
    hideChildren(container) {
        // Check if this is a container that should have staggered children
        const isContainer = container.classList.contains('features-grid') || 
                           container.classList.contains('constellation-grid') ||
                           container.classList.contains('learning-categories') ||
                           container.classList.contains('faq-list') ||
                           container.classList.contains('team-grid') ||
                           container.classList.contains('demo-grid');
        
        if (isContainer) {
            // Get direct children and hide them
            const children = container.querySelectorAll(':scope > div');
            children.forEach(child => {
                child.classList.remove('revealed');
            });
        }
    }
    
    /**
     * Check if elements are already visible on page load
     */
    checkInitialVisibility() {
        this.revealElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // If the element is already in the viewport, reveal it immediately
            if (rect.top < windowHeight * 0.9) {
                element.classList.add('revealed');
                
                // Update tracking
                const position = this.elementPositions.get(element);
                if (position) {
                    position.revealed = true;
                }
                
                // Also reveal children with staggered delay
                this.revealChildrenWithStaggeredDelay(element);
            }
        });
    }
    
    /**
     * Setup scroll effects for direction detection, parallax and other scroll-based animations
     */
    setupScrollEffects() {
        window.addEventListener('scroll', () => {
            // Detect scroll direction
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            
            if (scrollTop > this.lastScrollTop) {
                this.scrollDirection = 'down';
            } else {
                this.scrollDirection = 'up';
            }
            
            // Update last scroll position
            this.lastScrollTop = scrollTop;
            
            // Apply enhanced parallax effect to stars background
            const starsContainer = document.getElementById('stars-container');
            if (starsContainer) {
                starsContainer.style.transform = `translateY(${scrollTop * 0.15}px)`;
            }
            
            // Apply subtle parallax to section headers
            const sectionHeaders = document.querySelectorAll('.section-header');
            sectionHeaders.forEach(header => {
                const rect = header.getBoundingClientRect();
                const centerY = rect.top + rect.height / 2;
                const viewportCenter = window.innerHeight / 2;
                const distance = centerY - viewportCenter;
                
                header.style.transform = `translateY(${distance * -0.08}px)`;
            });
            
            // Apply subtle rotation to constellation images on scroll
            const constellationImages = document.querySelectorAll('.constellation-image img, .category-image img');
            constellationImages.forEach(img => {
                const rect = img.getBoundingClientRect();
                const centerY = rect.top + rect.height / 2;
                const viewportCenter = window.innerHeight / 2;
                const distance = centerY - viewportCenter;
                
                img.style.transform = `rotate(${distance * 0.01}deg) scale(${1 + Math.abs(distance) * 0.0001})`;
            });
            
            // Check all elements for visibility based on scroll direction
            this.checkElementsVisibility();
        });
    }
    
    /**
     * Check all elements for visibility based on current scroll position and direction
     */
    checkElementsVisibility() {
        this.revealElements.forEach(element => {
            const position = this.elementPositions.get(element);
            if (!position) return;
            
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Element is in viewport
            const isVisible = rect.top < windowHeight * 0.9 && rect.bottom > 0;
            
            if (this.scrollDirection === 'down' && isVisible && !position.revealed) {
                // Scrolling down and element is entering viewport
                element.classList.add('revealed');
                position.revealed = true;
                
                // If this is a container, reveal its children with staggered delays
                this.revealChildrenWithStaggeredDelay(element);
            } 
            else if (this.scrollDirection === 'up' && !isVisible && position.revealed && rect.top > windowHeight) {
                // Scrolling up and element has left viewport
                element.classList.remove('revealed');
                position.revealed = false;
                
                // Also hide children if this is a container
                this.hideChildren(element);
            }
        });
    }
    
    /**
     * Add reveal classes to elements dynamically
     * @param {string} selector - CSS selector for elements to add reveal classes to
     * @param {string} revealClass - The reveal class to add (e.g., 'reveal-element')
     * @param {string} [animationStyle] - Optional animation style class
     * @param {number} [delayIndex] - Optional delay index for staggered animations
     */
    static addRevealClass(selector, revealClass, animationStyle = '', delayIndex = -1) {
        const elements = document.querySelectorAll(selector);
        
        elements.forEach((element, index) => {
            element.classList.add(revealClass);
            
            if (animationStyle) {
                element.classList.add(animationStyle);
            }
            
            if (delayIndex >= 0) {
                const delayClass = `reveal-delay-${(index + delayIndex) % 7 + 1}00`;
                element.classList.add(delayClass);
            }
        });
    }
}

// Initialize the reveal animations when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Apply reveal classes to common elements across all pages with varied animation styles
    RevealAnimations.addRevealClass('.section-header', 'reveal-element', 'reveal-fade-in');
    RevealAnimations.addRevealClass('.page-header', 'reveal-element', 'reveal-fade-in');
    
    // Cards with different animation styles
    RevealAnimations.addRevealClass('.feature-card:nth-child(odd)', 'reveal-element', 'reveal-slide-left', 0);
    RevealAnimations.addRevealClass('.feature-card:nth-child(even)', 'reveal-element', 'reveal-slide-right', 0);
    
    RevealAnimations.addRevealClass('.constellation-card:nth-child(3n+1)', 'reveal-element', 'reveal-slide-left', 0);
    RevealAnimations.addRevealClass('.constellation-card:nth-child(3n+2)', 'reveal-element', 'reveal-scale', 1);
    RevealAnimations.addRevealClass('.constellation-card:nth-child(3n+3)', 'reveal-element', 'reveal-slide-right', 2);
    
    RevealAnimations.addRevealClass('.category-card:nth-child(3n+1)', 'reveal-element', 'reveal-flip', 0);
    RevealAnimations.addRevealClass('.category-card:nth-child(3n+2)', 'reveal-element', 'reveal-rotate', 1);
    RevealAnimations.addRevealClass('.category-card:nth-child(3n+3)', 'reveal-element', 'reveal-scale', 2);
    
    RevealAnimations.addRevealClass('.testimonial-card', 'reveal-element', 'reveal-scale', 0);
    
    // Steps with staggered animations
    RevealAnimations.addRevealClass('.step', 'reveal-element', 'reveal-slide-left', 0);
    RevealAnimations.addRevealClass('.step-connector', 'reveal-element', 'reveal-fade-in', 1);
    
    // Content blocks with different animations
    RevealAnimations.addRevealClass('.content-block:nth-child(odd)', 'reveal-element', 'reveal-slide-left');
    RevealAnimations.addRevealClass('.content-block:nth-child(even)', 'reveal-element', 'reveal-slide-right');
    
    // FAQ items with staggered animations
    RevealAnimations.addRevealClass('.faq-item', 'reveal-element', 'reveal-slide-left', 0);
    
    // Hero section elements
    RevealAnimations.addRevealClass('.hero-content', 'reveal-element', 'reveal-slide-left');
    RevealAnimations.addRevealClass('.hero-image', 'reveal-element', 'reveal-slide-right');
    
    // Form elements
    RevealAnimations.addRevealClass('.form-group', 'reveal-element', 'reveal-fade-in', 0);
    RevealAnimations.addRevealClass('.login-card', 'reveal-element', 'reveal-scale');
    RevealAnimations.addRevealClass('.signup-card', 'reveal-element', 'reveal-scale');
    
    // Add hover reveal effects to interactive elements
    RevealAnimations.addRevealClass('.feature-card', 'hover-reveal');
    RevealAnimations.addRevealClass('.constellation-card', 'hover-reveal');
    RevealAnimations.addRevealClass('.category-card', 'hover-reveal');
    RevealAnimations.addRevealClass('.testimonial-card', 'hover-reveal');
    RevealAnimations.addRevealClass('.team-member', 'hover-reveal');
    RevealAnimations.addRevealClass('.btn', 'hover-reveal');
    
    // Apply to all paragraphs in content sections
    RevealAnimations.addRevealClass('.content-section p', 'reveal-element', 'reveal-fade-in', 0);
    RevealAnimations.addRevealClass('.content-section h3', 'reveal-element', 'reveal-slide-left');
    RevealAnimations.addRevealClass('.content-section h4', 'reveal-element', 'reveal-slide-left');
    
    // Apply to constellation details
    RevealAnimations.addRevealClass('.constellation-info', 'reveal-element', 'reveal-fade-in');
    RevealAnimations.addRevealClass('.constellation-image', 'reveal-element', 'reveal-scale');
    RevealAnimations.addRevealClass('.constellation-details', 'reveal-element', 'reveal-slide-right');
    
    // Apply to analysis charts and data
    RevealAnimations.addRevealClass('.chart-container', 'reveal-element', 'reveal-scale');
    RevealAnimations.addRevealClass('.data-table', 'reveal-element', 'reveal-slide-left');
    
    // Initialize the animations
    const revealAnimations = new RevealAnimations();
    
    // Re-check for new elements when content changes (e.g., after AJAX loads)
    const observer = new MutationObserver(() => {
        setTimeout(() => {
            revealAnimations.init();
        }, 100);
    });
    
    // Observe changes to the body element
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Add special effect for logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.classList.add('logo-hover');
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.classList.remove('logo-hover');
        });
    }
    
    // Setup bidirectional animation support
    setupBidirectionalAnimations();
});

/**
 * Setup bidirectional animations that respond to scroll direction
 */
function setupBidirectionalAnimations() {
    // Variables to track scroll position and direction
    let lastScrollTop = 0;
    let scrollDirection = 'down';
    let ticking = false;
    
    // Function to update animations based on scroll direction
    function updateAnimations() {
        // Update body attribute for CSS targeting
        document.body.setAttribute('data-scroll-direction', scrollDirection);
        
        // Get all reveal elements
        const revealElements = document.querySelectorAll('.reveal-element');
        
        // Process each element
        revealElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Check if element is in viewport
            const isInViewport = rect.top < windowHeight * 0.9 && rect.bottom > 0;
            
            if (scrollDirection === 'down' && isInViewport) {
                // Scrolling down and element is in viewport - reveal it
                if (!element.classList.contains('revealed')) {
                    element.classList.add('revealed');
                }
            } else if (scrollDirection === 'up' && !isInViewport && rect.top > windowHeight) {
                // Scrolling up and element has left viewport - hide it
                element.classList.remove('revealed');
            }
        });
        
        ticking = false;
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        // Get current scroll position
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // Determine scroll direction
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            if (scrollDirection !== 'down') {
                scrollDirection = 'down';
            }
        } else {
            // Scrolling up
            if (scrollDirection !== 'up') {
                scrollDirection = 'up';
            }
        }
        
        // Update last scroll position
        lastScrollTop = scrollTop;
        
        // Use requestAnimationFrame for better performance
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateAnimations();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Initial check
    updateAnimations();
}