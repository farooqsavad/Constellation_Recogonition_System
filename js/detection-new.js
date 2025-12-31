/**
 * Stellar - Constellation Detection
 * New implementation of the detection page functionality
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing detection page');
    
    // Initialize stars background
    initStarsBackground();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize detection functionality
    initDetection();
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
 * Initialize detection page functionality
 */
function initDetection() {
    // Get DOM elements
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const browseText = document.getElementById('browse-text');
    const uploadIcon = document.getElementById('upload-icon');
    const uploadText = document.querySelector('.upload-text');
    const resultsSection = document.getElementById('results-section');
    const backButton = document.getElementById('back-button');
    const sampleImages = document.querySelectorAll('.sample-image');
    const toggleStarsBtn = document.getElementById('toggle-stars');
    const toggleLinesBtn = document.getElementById('toggle-lines');
    const toggleLabelsBtn = document.getElementById('toggle-labels');
    
    // Validate required elements
    if (!uploadArea) {
        console.error('Error: upload-area element not found');
        return;
    }
    
    if (!fileInput) {
        console.error('Error: file-input element not found');
        return;
    }
    
    if (!browseText) {
        console.error('Error: browse-text element not found');
        return;
    }
    
    if (!resultsSection) {
        console.error('Error: results-section element not found');
        return;
    }
    
    console.log('All required elements found, setting up event listeners');
    
    // File upload via drag and drop
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', function() {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        
        if (e.dataTransfer.files.length) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    });
    
    // File upload via click on upload area
    uploadArea.addEventListener('click', function() {
        fileInput.click();
    });
    
    // File upload via click on browse text
    browseText.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        fileInput.click();
    });
    
    // Handle file selection
    fileInput.addEventListener('change', function() {
        if (fileInput.files.length) {
            handleFileUpload(fileInput.files[0]);
        }
    });
    
    // Handle sample image selection
    sampleImages.forEach(function(sample) {
        sample.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-src');
            if (imageSrc) {
                processSampleImage(imageSrc);
            }
        });
    });
    
    // Handle back button
    if (backButton) {
        backButton.addEventListener('click', function() {
            resultsSection.style.display = 'none';
            uploadArea.parentElement.parentElement.style.display = 'block';
            
            // Reset upload area
            uploadIcon.style.display = 'block';
            uploadText.style.display = 'block';
            uploadArea.style.backgroundImage = 'none';
        });
    }
    
    // Handle visualization controls
    if (toggleStarsBtn) {
        toggleStarsBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            updateVisualization();
        });
    }
    
    if (toggleLinesBtn) {
        toggleLinesBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            updateVisualization();
        });
    }
    
    if (toggleLabelsBtn) {
        toggleLabelsBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            updateVisualization();
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
            processUploadedImage(e.target.result);
        };
        
        reader.readAsDataURL(file);
    }
    
    /**
     * Process uploaded image
     * @param {string} imageSrc - Data URL of the uploaded image
     */
    function processUploadedImage(imageSrc) {
        // Display uploaded image in upload area
        uploadIcon.style.display = 'none';
        uploadText.style.display = 'none';
        uploadArea.style.backgroundImage = `url(${imageSrc})`;
        uploadArea.style.backgroundSize = 'cover';
        uploadArea.style.backgroundPosition = 'center';
        
        // Show loading indicator
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'loading-indicator';
        loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        uploadArea.appendChild(loadingIndicator);
        
        // Simulate processing (in a real app, this would call the backend)
        setTimeout(function() {
            // Remove loading indicator
            uploadArea.removeChild(loadingIndicator);
            
            // Show results
            showResults(imageSrc);
        }, 1500);
    }
    
    /**
     * Process sample image
     * @param {string} imageSrc - Path to the sample image
     */
    function processSampleImage(imageSrc) {
        console.log('Processing sample image:', imageSrc);
        
        // Display selected sample image in upload area
        uploadIcon.style.display = 'none';
        uploadText.style.display = 'none';
        uploadArea.style.backgroundImage = `url(${imageSrc})`;
        uploadArea.style.backgroundSize = 'cover';
        uploadArea.style.backgroundPosition = 'center';
        
        // Show loading indicator
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'loading-indicator';
        loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        uploadArea.appendChild(loadingIndicator);
        
        // Simulate processing (in a real app, this would call the backend)
        setTimeout(function() {
            // Remove loading indicator
            if (loadingIndicator.parentNode) {
                loadingIndicator.parentNode.removeChild(loadingIndicator);
            }
            
            // Show results
            showResults(imageSrc);
        }, 1500);
    }
    
    /**
     * Show detection results
     * @param {string} imageSrc - The source of the processed image
     */
    function showResults(imageSrc) {
        // Hide upload section and show results section
        uploadArea.parentElement.parentElement.style.display = 'none';
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
        document.getElementById('constellation-template').src = `Constellation_Templates/${randomConstellation}.png`;
        document.getElementById('confidence-score').textContent = `${confidenceScore}%`;
        document.getElementById('confidence-bar').style.width = `${confidenceScore}%`;
        
        // Simulate stars matched
        const totalStars = Math.floor(Math.random() * 5) + 5; // Random between 5-9
        const matchedStars = Math.floor(totalStars * (confidenceScore / 100));
        document.getElementById('stars-matched').textContent = `${matchedStars}/${totalStars}`;
        
        // Initialize visualization
        initVisualization(randomConstellation);
        
        // Scroll to top of results
        window.scrollTo(0, 0);
    }
}

/**
 * Initialize visualization canvas
 * @param {string} constellationName - The name of the detected constellation
 */
function initVisualization(constellationName) {
    const canvas = document.getElementById('visualization-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set background
    ctx.fillStyle = '#0a1128';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Generate stars and lines for the constellation
    const stars = generateStarCoordinates(constellationName);
    const lines = generateConstellationLines(stars);
    
    // Store stars and lines for later use
    canvas.stars = stars;
    canvas.lines = lines;
    canvas.constellationName = constellationName;
    
    // Initial draw
    updateVisualization();
}

/**
 * Update visualization based on control buttons
 */
function updateVisualization() {
    const canvas = document.getElementById('visualization-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set background
    ctx.fillStyle = '#0a1128';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const showStars = document.getElementById('toggle-stars').classList.contains('active');
    const showLines = document.getElementById('toggle-lines').classList.contains('active');
    const showLabels = document.getElementById('toggle-labels').classList.contains('active');
    
    // Draw lines first (if enabled)
    if (showLines && canvas.lines) {
        ctx.strokeStyle = '#4facfe';
        ctx.lineWidth = 2;
        
        canvas.lines.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y);
            ctx.lineTo(line.end.x, line.end.y);
            ctx.stroke();
        });
    }
    
    // Draw stars (if enabled)
    if (showStars && canvas.stars) {
        canvas.stars.forEach(star => {
            // Draw glow
            const gradient = ctx.createRadialGradient(
                star.x, star.y, 0,
                star.x, star.y, star.size * 2
            );
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw star
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    
    // Draw labels (if enabled)
    if (showLabels && canvas.stars) {
        ctx.fillStyle = '#b3c5ef';
        ctx.font = '12px Montserrat';
        ctx.textAlign = 'center';
        
        // Main constellation label
        ctx.fillStyle = '#4facfe';
        ctx.font = '16px Montserrat';
        ctx.fillText(formatConstellationName(canvas.constellationName), canvas.width / 2, 30);
        
        // Star labels
        ctx.fillStyle = '#b3c5ef';
        ctx.font = '12px Montserrat';
        canvas.stars.forEach((star, index) => {
            ctx.fillText(`Star ${index + 1}`, star.x, star.y - star.size - 10);
        });
    }
}

/**
 * Generate star coordinates for constellations
 * @param {string} constellationName
 * @returns {Array} stars with x, y, size
 */
function generateStarCoordinates(constellationName) {
    const centerX = 300;
    const centerY = 200;
    const stars = [];
    
    switch (constellationName) {
        case 'Orion':
            // Example coordinates for Orion stars
            stars.push({ x: centerX - 100, y: centerY - 120, size: 5 }); // Betelgeuse
            stars.push({ x: centerX + 100, y: centerY + 120, size: 5 }); // Rigel
            stars.push({ x: centerX + 80, y: centerY - 100, size: 4 });  // Bellatrix
            stars.push({ x: centerX - 80, y: centerY + 100, size: 4 });  // Saiph
            stars.push({ x: centerX - 20, y: centerY, size: 3 });        // Belt star 1
            stars.push({ x: centerX, y: centerY + 10, size: 3 });        // Belt star 2
            stars.push({ x: centerX + 20, y: centerY - 10, size: 3 });   // Belt star 3
            stars.push({ x: centerX - 40, y: centerY - 40, size: 2 });   // Additional star
            stars.push({ x: centerX + 40, y: centerY + 40, size: 2 });   // Additional star
            break;
        case 'UrsaMajor':
            // Example coordinates for Ursa Major (Big Dipper)
            stars.push({ x: centerX - 90, y: centerY - 40, size: 5 });
            stars.push({ x: centerX - 50, y: centerY - 80, size: 4 });
            stars.push({ x: centerX, y: centerY - 100, size: 4 });
            stars.push({ x: centerX + 50, y: centerY - 80, size: 4 });
            stars.push({ x: centerX + 90, y: centerY - 40, size: 5 });
            stars.push({ x: centerX + 130, y: centerY, size: 4 });
            stars.push({ x: centerX + 170, y: centerY + 40, size: 3 });
            break;
        case 'Leo':
            // Example coordinates for Leo
            stars.push({ x: centerX - 80, y: centerY - 60, size: 5 });
            stars.push({ x: centerX - 40, y: centerY - 100, size: 4 });
            stars.push({ x: centerX, y: centerY - 80, size: 4 });
            stars.push({ x: centerX + 40, y: centerY - 40, size: 4 });
            stars.push({ x: centerX + 80, y: centerY, size: 5 });
            stars.push({ x: centerX + 120, y: centerY + 40, size: 3 });
            break;
        case 'Pegasus':
            // Example coordinates for Pegasus
            stars.push({ x: centerX - 100, y: centerY - 100, size: 5 });
            stars.push({ x: centerX - 50, y: centerY - 50, size: 4 });
            stars.push({ x: centerX, y: centerY, size: 4 });
            stars.push({ x: centerX + 50, y: centerY - 50, size: 4 });
            stars.push({ x: centerX + 100, y: centerY - 100, size: 5 });
            stars.push({ x: centerX + 150, y: centerY - 50, size: 3 });
            break;
        default:
            // Default random stars
            for (let i = 0; i < 7; i++) {
                stars.push({
                    x: centerX + Math.random() * 200 - 100,
                    y: centerY + Math.random() * 200 - 100,
                    size: 3 + Math.random() * 2
                });
            }
            break;
    }
    
    return stars;
}

/**
 * Generate lines connecting stars for constellations
 * @param {Array} stars
 * @returns {Array} lines with start and end points
 */
function generateConstellationLines(stars) {
    const lines = [];
    
    // Connect stars in sequence
    for (let i = 0; i < stars.length - 1; i++) {
        lines.push({
            start: { x: stars[i].x, y: stars[i].y },
            end: { x: stars[i + 1].x, y: stars[i + 1].y }
        });
    }
    
    // Additional connections for specific constellations
    if (stars.length > 3) {
        lines.push({
            start: { x: stars[0].x, y: stars[0].y },
            end: { x: stars[stars.length - 1].x, y: stars[stars.length - 1].y }
        });
    }
    
    return lines;
}

/**
 * Format constellation name (convert camelCase to space-separated)
 * @param {string} name - The constellation name in camelCase
 * @returns {string} - The formatted constellation name
 */
function formatConstellationName(name) {
    return name.replace(/([A-Z])/g, ' $1').trim();
}