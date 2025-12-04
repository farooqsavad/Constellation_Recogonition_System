/**
 * Stellar - Constellation Detection
 * Main JavaScript file
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initStarsBackground();
    initMobileMenu();
    initScrollAnimations();
    
    // Add event listeners for specific pages
    if (document.querySelector('.detection-page')) {
        initDetectionPage();
    }
    
    if (document.querySelector('.library-page')) {
        initLibraryPage();
    }
});

/**
 * Create animated stars background
 */
function initStarsBackground() {
    const starsContainer = document.querySelector('.stars-background');
    if (!starsContainer) return;
    
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random animation duration and delay
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        
        // Random opacity
        const opacity = Math.random() * 0.7 + 0.3;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--opacity', opacity);
        
        starsContainer.appendChild(star);
    }
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (!mobileMenuToggle || !mainNav) return;
    
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.classList.toggle('active');
    });
}

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (!animatedElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Initialize detection page functionality
 */
function initDetectionPage() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const uploadIcon = document.getElementById('upload-icon');
    const uploadText = document.querySelector('.upload-text');
    const resultsSection = document.getElementById('results-section');
    const backButton = document.getElementById('back-button');
    const sampleImages = document.querySelectorAll('.sample-image');
    
    if (!uploadArea || !fileInput) return;
    
    // Handle file upload via drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        
        if (e.dataTransfer.files.length) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    });
    
    // Handle file upload via click
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });
    
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length) {
            handleFileUpload(fileInput.files[0]);
        }
    });
    
    // Handle sample images
    if (sampleImages.length) {
        sampleImages.forEach(sample => {
            sample.addEventListener('click', () => {
                const imageSrc = sample.getAttribute('data-src');
                if (imageSrc) {
                    handleSampleImageSelection(imageSrc);
                }
            });
        });
    }
    
    // Handle back button
    if (backButton) {
        backButton.addEventListener('click', () => {
            resultsSection.style.display = 'none';
            uploadArea.parentElement.style.display = 'block';
            
            // Reset upload area
            uploadIcon.style.display = 'block';
            uploadText.style.display = 'block';
            uploadArea.style.backgroundImage = 'none';
        });
    }
    
    /**
     * Handle file upload
     * @param {File} file - The uploaded file
     */
    function handleFileUpload(file) {
        if (!file.type.match('image.*')) {
            alert('Please upload an image file');
            return;
        }
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Display uploaded image in upload area
            uploadIcon.style.display = 'none';
            uploadText.style.display = 'none';
            uploadArea.style.backgroundImage = `url(${e.target.result})`;
            uploadArea.style.backgroundSize = 'cover';
            uploadArea.style.backgroundPosition = 'center';
            
            // Simulate processing (in a real app, this would call the backend)
            setTimeout(() => {
                showResults(e.target.result);
            }, 1500);
        };
        
        reader.readAsDataURL(file);
    }
    
    /**
     * Handle sample image selection
     * @param {string} imageSrc - The source of the selected sample image
     */
    function handleSampleImageSelection(imageSrc) {
        // Display selected sample image in upload area
        uploadIcon.style.display = 'none';
        uploadText.style.display = 'none';
        uploadArea.style.backgroundImage = `url(${imageSrc})`;
        uploadArea.style.backgroundSize = 'cover';
        uploadArea.style.backgroundPosition = 'center';
        
        // Simulate processing (in a real app, this would call the backend)
        setTimeout(() => {
            showResults(imageSrc);
        }, 1500);
    }
    
    /**
     * Show detection results
     * @param {string} imageSrc - The source of the processed image
     */
    function showResults(imageSrc) {
        // Hide upload section and show results section
        uploadArea.parentElement.style.display = 'none';
        resultsSection.style.display = 'block';
        
        // Set original image
        document.getElementById('original-image-display').src = imageSrc;
        
        // Simulate detection result (in a real app, this would come from the backend)
        const constellations = [
            'Orion', 'UrsaMajor', 'Leo', 'Pegasus'
        ];
        
        const randomConstellation = constellations[Math.floor(Math.random() * constellations.length)];
        const confidenceScore = Math.floor(Math.random() * 30) + 70; // Random score between 70-99
        
        // Update result details
        document.getElementById('constellation-name').textContent = formatConstellationName(randomConstellation);
        document.getElementById('constellation-template').src = `Templates/${randomConstellation}.png`;
        document.getElementById('confidence-score').textContent = `${confidenceScore}%`;
        document.getElementById('confidence-bar').style.width = `${confidenceScore}%`;
        
        // Simulate stars matched
        const totalStars = Math.floor(Math.random() * 5) + 5; // Random between 5-9
        const matchedStars = Math.floor(totalStars * (confidenceScore / 100));
        document.getElementById('stars-matched').textContent = `${matchedStars}/${totalStars}`;
    }
}

/**
 * Initialize library page functionality
 */
function initLibraryPage() {
    const constellationCards = document.querySelectorAll('.constellation-card');
    const constellationDetails = document.getElementById('constellation-details');
    const backToGridButton = document.querySelector('.back-to-grid');
    const constellationFilter = document.getElementById('constellation-filter');
    const constellationSort = document.getElementById('constellation-sort');
    
    if (!constellationCards.length) return;
    
    // Handle constellation card clicks
    constellationCards.forEach(card => {
        card.addEventListener('click', () => {
            const constellationName = card.getAttribute('data-name');
            if (constellationName) {
                showConstellationDetails(constellationName);
            }
        });
    });
    
    // Handle back button
    if (backToGridButton) {
        backToGridButton.addEventListener('click', () => {
            constellationDetails.style.display = 'none';
            document.getElementById('constellation-grid').style.display = 'grid';
        });
    }
    
    // Handle filter change
    if (constellationFilter) {
        constellationFilter.addEventListener('change', filterConstellations);
    }
    
    // Handle sort change
    if (constellationSort) {
        constellationSort.addEventListener('change', sortConstellations);
    }
    
    /**
     * Show constellation details
     * @param {string} constellationName - The name of the selected constellation
     */
    function showConstellationDetails(constellationName) {
        // Hide grid and show details
        document.getElementById('constellation-grid').style.display = 'none';
        constellationDetails.style.display = 'block';
        
        // Update details content (in a real app, this would fetch data from the backend)
        document.getElementById('detail-constellation-name').textContent = formatConstellationName(constellationName);
        document.getElementById('detail-image').src = `Templates/${constellationName}.png`;
        
        // Simulate constellation details (in a real app, this would come from the backend)
        const classifications = ['Northern Hemisphere', 'Southern Hemisphere', 'Zodiac'];
        const randomClassification = classifications[Math.floor(Math.random() * classifications.length)];
        
        document.getElementById('detail-classification').textContent = randomClassification;
        
        // More details would be populated here in a real app
    }
    
    /**
     * Filter constellations based on selected filter
     */
    function filterConstellations() {
        const filterValue = constellationFilter.value;
        
        constellationCards.forEach(card => {
            const classification = card.getAttribute('data-classification');
            
            if (filterValue === 'all' || classification === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    /**
     * Sort constellations based on selected sort option
     */
    function sortConstellations() {
        const sortValue = constellationSort.value;
        const grid = document.getElementById('constellation-grid');
        const cardsArray = Array.from(constellationCards);
        
        cardsArray.sort((a, b) => {
            if (sortValue === 'name') {
                return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
            } else if (sortValue === 'size') {
                return parseInt(b.getAttribute('data-size')) - parseInt(a.getAttribute('data-size'));
            } else if (sortValue === 'brightness') {
                return parseInt(b.getAttribute('data-brightness')) - parseInt(a.getAttribute('data-brightness'));
            } else if (sortValue === 'popularity') {
                return parseInt(b.getAttribute('data-popularity')) - parseInt(a.getAttribute('data-popularity'));
            }
            return 0;
        });
        
        // Remove all cards and re-append in sorted order
        cardsArray.forEach(card => {
            grid.appendChild(card);
        });
    }
}

/**
 * Format constellation name (convert camelCase to space-separated)
 * @param {string} name - The constellation name in camelCase
 * @returns {string} - The formatted constellation name
 */
function formatConstellationName(name) {
    return name.replace(/([A-Z])/g, ' $1').trim();
}