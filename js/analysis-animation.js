/**
 * Analysis Animation Module
 * Enhances the loading indicator with animated analysis steps
 */

// Function to enhance loading indicators with analysis steps
function enhanceLoadingIndicator(loadingIndicator) {
    if (!loadingIndicator) return;
    
    // Replace the inner HTML with our enhanced version
    loadingIndicator.innerHTML = `
        <i class="fas fa-star"></i>
        <div class="loading-message">Analyzing constellation...</div>
        <div class="analysis-steps">
            <div class="analysis-step" id="step-1">
                <span class="step-dot"></span>
                <span class="step-text">Extracting star patterns</span>
            </div>
            <div class="analysis-step" id="step-2">
                <span class="step-dot"></span>
                <span class="step-text">Calculating stellar coordinates</span>
            </div>
            <div class="analysis-step" id="step-3">
                <span class="step-dot"></span>
                <span class="step-text">Matching constellation patterns</span>
            </div>
            <div class="analysis-step" id="step-4">
                <span class="step-dot"></span>
                <span class="step-text">Retrieving astronomical data</span>
            </div>
        </div>
        <div class="loading-stars">
            <div class="loading-star"></div>
            <div class="loading-star"></div>
            <div class="loading-star"></div>
            <div class="loading-star"></div>
            <div class="loading-star"></div>
        </div>
    `;
    
    // Start the animation sequence
    animateAnalysisSteps(loadingIndicator);
}

// Function to animate analysis steps sequentially
function animateAnalysisSteps(container) {
    const steps = container.querySelectorAll('.analysis-step');
    if (!steps || steps.length === 0) return;
    
    // Activate first step immediately
    steps[0].classList.add('active');
    
    // Activate remaining steps with delays
    for (let i = 1; i < steps.length; i++) {
        setTimeout(() => {
            steps[i].classList.add('active');
        }, 1500 * i);
    }
}

// Override the default loading indicator creation when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Store the original createElement method
    const originalCreateElement = document.createElement;
    
    // Override createElement to intercept loading indicator creation
    document.createElement = function(tag) {
        const element = originalCreateElement.call(document, tag);
        
        // If we're creating a div (potential loading indicator)
        if (tag.toLowerCase() === 'div') {
            // Set a timeout to check if this becomes a loading indicator
            setTimeout(() => {
                if (element.className === 'loading-indicator') {
                    enhanceLoadingIndicator(element);
                }
            }, 0);
        }
        
        return element;
    };
    
    // Also enhance any existing loading indicators
    const existingIndicators = document.querySelectorAll('.loading-indicator');
    existingIndicators.forEach(enhanceLoadingIndicator);
});