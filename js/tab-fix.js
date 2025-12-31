/**
 * Tab Functionality Fix
 * This script ensures that the tabs in the detailed analysis section work properly
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tabs
    initTabs();
    
    /**
     * Initialize tab functionality
     */
    function initTabs() {
        const tabs = document.querySelectorAll('.tab');
        
        if (!tabs || tabs.length === 0) {
            console.error('No tabs found on the page');
            return;
        }
        
        console.log(`Found ${tabs.length} tabs to initialize`);
        
        tabs.forEach(tab => {
            // Remove any existing event listeners (to avoid duplicates)
            tab.removeEventListener('click', handleTabClick);
            
            // Add click event listener
            tab.addEventListener('click', handleTabClick);
        });
    }
    
    /**
     * Handle tab click event
     * @param {Event} event - The click event
     */
    function handleTabClick(event) {
        const tab = event.currentTarget;
        const tabId = tab.getAttribute('data-tab');
        
        if (!tabId) {
            console.error('Tab is missing data-tab attribute', tab);
            return;
        }
        
        const tabContentId = `${tabId}-tab`;
        const tabContent = document.getElementById(tabContentId);
        
        if (!tabContent) {
            console.error(`Tab content with ID "${tabContentId}" not found`);
            return;
        }
        
        console.log(`Switching to tab: ${tabId}`);
        
        // Remove active class from all tabs and content
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        tabContent.classList.add('active');
    }
});