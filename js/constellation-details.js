document.addEventListener('DOMContentLoaded', function() {
    // Convert constellation highlights to collapsible sections
    convertToCollapsibleSections();
    
    // Initialize tabs for each constellation
    initializeConstellationTabs();
});

function convertToCollapsibleSections() {
    // Get all constellation highlights
    const constellationHighlights = document.querySelectorAll('.constellation-highlight');
    
    constellationHighlights.forEach((highlight, index) => {
        // Get the heading and content
        const heading = highlight.querySelector('h4');
        const content = highlight.querySelector('.constellation-info');
        
        if (!heading || !content) return;
        
        // Create a new card structure
        const card = document.createElement('div');
        card.className = 'constellation-card';
        card.id = `constellation-card-${index}`;
        
        // Create header
        const header = document.createElement('div');
        header.className = 'constellation-header';
        header.innerHTML = `
            <h4>${heading.textContent}</h4>
            <div class="toggle-icon"><i class="fas fa-chevron-down"></i></div>
        `;
        
        // Create content container
        const contentContainer = document.createElement('div');
        contentContainer.className = 'constellation-content';
        
        // Create tabs
        const tabsContainer = document.createElement('div');
        tabsContainer.className = 'constellation-tabs';
        
        const constellationName = heading.textContent.split('(')[0].trim().toLowerCase().replace(/\s+/g, '-');
        
        tabsContainer.innerHTML = `
            <div class="constellation-tab active" data-tab="${constellationName}-overview">Overview</div>
            <div class="constellation-tab" data-tab="${constellationName}-stars">Stars</div>
            <div class="constellation-tab" data-tab="${constellationName}-mythology">Mythology</div>
            <div class="constellation-tab" data-tab="${constellationName}-history">History</div>
        `;
        
        // Create tab content
        const tabContentContainer = document.createElement('div');
        
        // Overview tab (contains image and basic info)
        const overviewTab = document.createElement('div');
        overviewTab.className = 'tab-content overview active';
        overviewTab.id = `${constellationName}-overview`;
        
        const image = content.querySelector('.constellation-image').cloneNode(true);
        image.className = 'constellation-image-container';
        
        const details = content.querySelector('.constellation-details');
        const visibility = details.querySelector('p:first-child').cloneNode(true);
        
        const overviewContent = document.createElement('div');
        overviewContent.className = 'overview-content';
        overviewContent.appendChild(visibility);
        
        // Add a general description based on the constellation
        const description = document.createElement('p');
        description.textContent = getConstellationDescription(constellationName);
        overviewContent.appendChild(description);
        
        overviewTab.appendChild(image);
        overviewTab.appendChild(overviewContent);
        
        // Stars tab
        const starsTab = document.createElement('div');
        starsTab.className = 'tab-content';
        starsTab.id = `${constellationName}-stars`;
        
        const starsHeading = document.createElement('h4');
        starsHeading.textContent = 'Notable Stars and Objects';
        starsTab.appendChild(starsHeading);
        
        const starsList = details.querySelector('ul').cloneNode(true);
        starsTab.appendChild(starsList);
        
        // Mythology tab
        const mythologyTab = document.createElement('div');
        mythologyTab.className = 'tab-content';
        mythologyTab.id = `${constellationName}-mythology`;
        
        const mythologyHeading = document.createElement('h4');
        mythologyHeading.textContent = 'Mythology and Cultural Significance';
        mythologyTab.appendChild(mythologyHeading);
        
        const mythologyParagraphs = Array.from(details.querySelectorAll('p')).filter(p => 
            p.textContent.includes('mythology') || 
            p.textContent.includes('Mythology') || 
            p.innerHTML.includes('<strong>Mythology:</strong>')
        );
        
        mythologyParagraphs.forEach(p => {
            const newP = p.cloneNode(true);
            // Remove the "Mythology:" prefix if it exists
            newP.innerHTML = newP.innerHTML.replace('<strong>Mythology:</strong>', '');
            mythologyTab.appendChild(newP);
        });
        
        // History tab
        const historyTab = document.createElement('div');
        historyTab.className = 'tab-content';
        historyTab.id = `${constellationName}-history`;
        
        const historyHeading = document.createElement('h4');
        historyHeading.textContent = 'Historical Significance';
        historyTab.appendChild(historyHeading);
        
        const historyParagraphs = Array.from(details.querySelectorAll('p')).filter(p => 
            p.textContent.includes('history') || 
            p.textContent.includes('History') || 
            p.textContent.includes('historical') || 
            p.innerHTML.includes('<strong>Historical Significance:</strong>')
        );
        
        historyParagraphs.forEach(p => {
            const newP = p.cloneNode(true);
            // Remove the "Historical Significance:" prefix if it exists
            newP.innerHTML = newP.innerHTML.replace('<strong>Historical Significance:</strong>', '');
            historyTab.appendChild(newP);
        });
        
        // Add all tabs to the content container
        tabContentContainer.appendChild(overviewTab);
        tabContentContainer.appendChild(starsTab);
        tabContentContainer.appendChild(mythologyTab);
        tabContentContainer.appendChild(historyTab);
        
        // Assemble the card
        contentContainer.appendChild(tabsContainer);
        contentContainer.appendChild(tabContentContainer);
        
        card.appendChild(header);
        card.appendChild(contentContainer);
        
        // Replace the original highlight with the new card
        highlight.parentNode.replaceChild(card, highlight);
        
        // Add event listener to toggle content
        header.addEventListener('click', function() {
            card.classList.toggle('active');
        });
    });
    
    // Add CSS for the new components
    addCollapsibleStyles();
}

function initializeConstellationTabs() {
    const tabs = document.querySelectorAll('.constellation-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the click from toggling the card
            
            // Get the tab content ID
            const tabId = this.getAttribute('data-tab');
            
            // Get all tabs and content in this constellation card
            const card = this.closest('.constellation-card');
            const allTabs = card.querySelectorAll('.constellation-tab');
            const allContent = card.querySelectorAll('.tab-content');
            
            // Remove active class from all tabs and content
            allTabs.forEach(t => t.classList.remove('active'));
            allContent.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

function addCollapsibleStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .constellation-card {
            background-color: var(--medium-blue);
            border-radius: var(--border-radius-md);
            overflow: hidden;
            margin-bottom: 25px;
            box-shadow: var(--shadow-light);
            transition: var(--transition-fast);
        }
        
        .constellation-header {
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            border-bottom: 1px solid rgba(79, 172, 254, 0.2);
        }
        
        .constellation-header h4 {
            margin: 0;
            font-size: 1.3rem;
            color: var(--primary-color);
        }
        
        .constellation-header .toggle-icon {
            color: var(--primary-color);
            transition: transform 0.3s ease;
        }
        
        .constellation-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease;
        }
        
        .constellation-card.active .constellation-content {
            max-height: 2000px;
        }
        
        .constellation-card.active .toggle-icon {
            transform: rotate(180deg);
        }
        
        .constellation-tabs {
            display: flex;
            border-bottom: 1px solid rgba(79, 172, 254, 0.2);
            background-color: rgba(22, 37, 82, 0.5);
        }
        
        .constellation-tab {
            padding: 12px 20px;
            cursor: pointer;
            color: var(--text-light);
            font-weight: 500;
            transition: var(--transition-fast);
        }
        
        .constellation-tab.active {
            color: var(--primary-color);
            border-bottom: 2px solid var(--primary-color);
        }
        
        .tab-content {
            display: none;
            padding: 20px;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .constellation-image-container {
            text-align: center;
            margin-bottom: 20px;
        }
        
        .constellation-image-container img {
            max-width: 300px;
            height: auto;
        }
        
        @media (min-width: 768px) {
            .tab-content.overview {
                display: grid;
                grid-template-columns: 1fr 2fr;
                gap: 20px;
            }
            
            .constellation-image-container {
                margin-bottom: 0;
            }
        }
    `;
    
    document.head.appendChild(styleElement);
}

function getConstellationDescription(constellationName) {
    const descriptions = {
        'orion': 'Orion is one of the most recognizable constellations in the night sky, visible from almost anywhere on Earth. Its distinctive pattern includes bright stars forming the figure of a hunter with a belt and sword.',
        'ursa-major': 'Ursa Major is one of the most prominent constellations in the northern sky. It contains the famous asterism known as the Big Dipper (or the Plough in the UK), which is one of the most recognizable patterns in the night sky.',
        'cassiopeia': 'Cassiopeia is one of the most easily recognizable constellations in the northern sky, with its distinctive W or M shape (depending on its orientation). It\'s named after the vain queen in Greek mythology who boasted about her beauty.',
        'cygnus': 'Cygnus is a prominent constellation in the northern sky, lying along the plane of the Milky Way. Its name means "swan" in Latin, and it is often depicted as a swan flying down the Milky Way.',
        'lyra': 'Lyra is a small but prominent constellation in the northern sky, named after the lyre, a stringed musical instrument from antiquity. Despite its small size, Lyra contains Vega, one of the brightest stars in the night sky.'
    };
    
    return descriptions[constellationName] || 'A fascinating constellation with a rich history and notable celestial objects.';
}