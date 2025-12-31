/**
 * Auto Reveal Script with Bidirectional Support
 * This script automatically applies reveal classes to all major elements in the DOM
 * to ensure consistent animations across all modules with support for reversing animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for the page to fully render
    setTimeout(() => {
        // Get all major container elements
        const containers = [
            // Main sections
            'section', 'main', 'header', 'footer',
            
            // Content containers
            '.container > div', '.page-header', '.section-header',
            
            // Cards and grid items
            '.card', '.grid-item', '.feature-card', '.constellation-card',
            '.category-card', '.testimonial-card', '.team-member',
            
            // Form elements
            'form', '.form-group', '.login-card', '.signup-card',
            
            // Content blocks
            '.content-block', '.faq-item', '.constellation-highlight',
            
            // Interactive elements
            '.btn-large', '.upload-area', '.results-container',
            
            // Tables and data displays
            'table', '.chart-container', '.data-section'
        ];
        
        // Combine all selectors
        const selector = containers.join(', ');
        
        // Get all elements matching the selectors
        const elements = document.querySelectorAll(selector);
        
        // Apply reveal classes to elements that don't already have them
        elements.forEach((element, index) => {
            // Skip elements that already have reveal classes
            if (element.classList.contains('reveal-element')) {
                return;
            }
            
            // Add reveal-element class
            element.classList.add('reveal-element');
            
            // Add data attribute to track original position for bidirectional animations
            element.setAttribute('data-reveal-index', index);
            
            // Add different animation styles based on element type
            if (element.tagName === 'SECTION' || element.tagName === 'MAIN') {
                element.classList.add('reveal-fade-in');
            } else if (element.classList.contains('card') || 
                      element.classList.contains('feature-card') ||
                      element.classList.contains('constellation-card') ||
                      element.classList.contains('category-card')) {
                // Alternate between different animations for cards
                const animIndex = index % 4;
                if (animIndex === 0) element.classList.add('reveal-slide-left');
                else if (animIndex === 1) element.classList.add('reveal-slide-right');
                else if (animIndex === 2) element.classList.add('reveal-scale');
                else element.classList.add('reveal-rotate');
                
                // Add hover effect
                element.classList.add('hover-reveal');
            } else if (element.classList.contains('btn-large')) {
                element.classList.add('reveal-scale');
                element.classList.add('hover-reveal');
            } else if (element.tagName === 'FORM' || 
                      element.classList.contains('login-card') ||
                      element.classList.contains('signup-card')) {
                element.classList.add('reveal-scale');
            } else if (element.classList.contains('content-block') ||
                      element.classList.contains('faq-item')) {
                element.classList.add('reveal-slide-left');
            } else if (element.classList.contains('chart-container') ||
                      element.classList.contains('data-section')) {
                element.classList.add('reveal-scale');
            } else {
                // Default animation
                element.classList.add('reveal-fade-in');
            }
            
            // Add staggered delay based on position in the document
            const delayClass = `reveal-delay-${(index % 7) + 1}00`;
            element.classList.add(delayClass);
        });
        
        // Also apply to headings and paragraphs inside content sections
        const contentElements = document.querySelectorAll('.content-section h2, .content-section h3, .content-section h4, .content-section p, .content-section ul, .content-section ol');
        
        contentElements.forEach((element, index) => {
            if (!element.classList.contains('reveal-element')) {
                element.classList.add('reveal-element', 'reveal-fade-in');
                
                // Add data attribute to track original position
                element.setAttribute('data-reveal-index', `content-${index}`);
                
                // Add staggered delay
                const delayClass = `reveal-delay-${(index % 5) + 1}00`;
                element.classList.add(delayClass);
            }
        });
        
        // Add scroll event listener for bidirectional animations
        setupScrollDirectionDetection();
        
        // Force a check for elements that should be revealed
        const event = new Event('scroll');
        window.dispatchEvent(event);
        
    }, 100); // Short delay to ensure DOM is ready
});

/**
 * Setup scroll direction detection for bidirectional animations
 */
function setupScrollDirectionDetection() {
    // Variables to track scroll position and direction
    let lastScrollTop = 0;
    let scrollDirection = 'down';
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        // Get current scroll position
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // Determine scroll direction
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            if (scrollDirection !== 'down') {
                scrollDirection = 'down';
                document.body.setAttribute('data-scroll-direction', 'down');
            }
        } else {
            // Scrolling up
            if (scrollDirection !== 'up') {
                scrollDirection = 'up';
                document.body.setAttribute('data-scroll-direction', 'up');
            }
        }
        
        // Update last scroll position
        lastScrollTop = scrollTop;
    });
}