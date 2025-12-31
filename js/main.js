<<<<<<< HEAD
console.log('js/main.js loaded');

=======
>>>>>>> a9775c7ec2fdaa3f1fe649755e261170760b8fcc
/**
 * Stellar - Constellation Detection
 * Main JavaScript file
 */

document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
    console.log('DOM fully loaded');
    
=======
>>>>>>> a9775c7ec2fdaa3f1fe649755e261170760b8fcc
    // Initialize components
    initStarsBackground();
    initMobileMenu();
    initScrollAnimations();
    
    // Add event listeners for specific pages
    if (document.querySelector('.detection-page')) {
<<<<<<< HEAD
        console.log('Detection page detected, initializing...');
        
        // Ensure all images are loaded before initializing
        window.addEventListener('load', function() {
            console.log('Window fully loaded, initializing detection page...');
            initDetectionPage();
        });
        
        // Also try to initialize after a short delay as a fallback
        setTimeout(() => {
            console.log('Timeout reached, initializing detection page if not already initialized...');
            if (!window.detectionPageInitialized) {
                initDetectionPage();
            }
        }, 500);
    }
    
    if (document.querySelector('.library-page')) {
        console.log('Library page detected, initializing...');
=======
        initDetectionPage();
    }
    
    if (document.querySelector('.library-page')) {
>>>>>>> a9775c7ec2fdaa3f1fe649755e261170760b8fcc
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
<<<<<<< HEAD
    console.log('initDetectionPage called');
    
    // Prevent multiple initializations
    if (window.detectionPageInitialized) {
        console.log('Detection page already initialized, skipping...');
        return;
    }
    
=======
>>>>>>> a9775c7ec2fdaa3f1fe649755e261170760b8fcc
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const uploadIcon = document.getElementById('upload-icon');
    const uploadText = document.querySelector('.upload-text');
    const resultsSection = document.getElementById('results-section');
    const backButton = document.getElementById('back-button');
    const sampleImages = document.querySelectorAll('.sample-image');
    
<<<<<<< HEAD
    // Check if required elements exist
    if (!uploadArea) {
        console.error('upload-area element not found');
        return;
    }
    
    if (!fileInput) {
        console.error('file-input element not found');
        return;
    }
    
    if (!uploadIcon) {
        console.error('upload-icon element not found');
        return;
    }
    
    if (!uploadText) {
        console.error('upload-text element not found');
        return;
    }
    
    if (!resultsSection) {
        console.error('results-section element not found');
        return;
    }
    
    console.log('All required elements found');
    
    // Mark as initialized
    window.detectionPageInitialized = true;
    
    // Set tabindex=-1 on sample images to prevent focus and scroll jump
    sampleImages.forEach(sample => {
        sample.setAttribute('tabindex', '-1');
    });
=======
    if (!uploadArea || !fileInput) return;
>>>>>>> a9775c7ec2fdaa3f1fe649755e261170760b8fcc
    
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
    
<<<<<<< HEAD
    // Add specific handler for the browse text
    const browseText = document.querySelector('.browse-text');
    if (browseText) {
        browseText.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent the uploadArea click from firing
            console.log('Browse text clicked');
            fileInput.click();
        });
    } else {
        console.error('browse-text element not found');
    }
    
    fileInput.addEventListener('change', () => {
        console.log('File input changed:', fileInput.files.length ? fileInput.files[0].name : 'No file selected');
=======
    fileInput.addEventListener('change', () => {
>>>>>>> a9775c7ec2fdaa3f1fe649755e261170760b8fcc
        if (fileInput.files.length) {
            handleFileUpload(fileInput.files[0]);
        }
    });
    
<<<<<<< HEAD
    // Handle sample images - completely rewritten for reliability
    if (sampleImages && sampleImages.length) {
        console.log('Found sample images:', sampleImages.length);
        
        // Direct approach - add click handlers without using named functions
        for (let i = 0; i < sampleImages.length; i++) {
            const sample = sampleImages[i];
            
            // Clear any existing click handlers by cloning and replacing the element
            const newSample = sample.cloneNode(true);
            sample.parentNode.replaceChild(newSample, sample);
            
            // Add click handler to the sample div
            newSample.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log(`Sample image ${i} clicked directly`);
                
                const imageSrc = this.getAttribute('data-src');
                if (imageSrc) {
                    console.log('Processing sample image:', imageSrc);
                    handleSampleImageSelection(imageSrc);
                } else {
                    console.error('No data-src attribute found on sample image');
                }
                
                return false; // Prevent default and stop propagation
            };
            
            // Also add click handler to the img inside
            const img = newSample.querySelector('img');
            if (img) {
                img.onclick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log(`Sample image img ${i} clicked directly`);
                    
                    const imageSrc = newSample.getAttribute('data-src');
                    if (imageSrc) {
                        console.log('Processing sample image from img click:', imageSrc);
                        handleSampleImageSelection(imageSrc);
                    } else {
                        console.error('No data-src attribute found on parent of img');
                    }
                    
                    return false; // Prevent default and stop propagation
                };
            }
            
            // Also add click handler to the overlay
            const overlay = newSample.querySelector('.sample-image-overlay');
            if (overlay) {
                overlay.onclick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log(`Sample image overlay ${i} clicked directly`);
                    
                    const imageSrc = newSample.getAttribute('data-src');
                    if (imageSrc) {
                        console.log('Processing sample image from overlay click:', imageSrc);
                        handleSampleImageSelection(imageSrc);
                    } else {
                        console.error('No data-src attribute found on parent of overlay');
                    }
                    
                    return false; // Prevent default and stop propagation
                };
            }
        }
    } else {
        console.warn('No sample images found on the page');
    }

    // Fade in additional sample images on scroll
    const sampleImagesGrid = document.querySelector('.sample-images-grid');
    let hasExpanded = false;

    function checkScroll() {
        const rect = sampleImagesGrid.getBoundingClientRect();
        if (!hasExpanded && rect.top < window.innerHeight) {
            sampleImagesGrid.classList.add('expanded', 'fade-in');
            hasExpanded = true;
            window.removeEventListener('scroll', checkScroll);
        }
    }

    window.addEventListener('scroll', checkScroll);
=======
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
>>>>>>> a9775c7ec2fdaa3f1fe649755e261170760b8fcc
    
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
<<<<<<< HEAD
        console.log('handleSampleImageSelection called with:', imageSrc);
        
        // Re-fetch elements to ensure we have the latest references
        const uploadIcon = document.getElementById('upload-icon');
        const uploadText = document.querySelector('.upload-text');
        const uploadArea = document.getElementById('upload-area');
        const resultsSection = document.getElementById('results-section');
        
        // Check if elements exist
        if (!uploadIcon) {
            console.error('uploadIcon element not found');
            return;
        }
        if (!uploadText) {
            console.error('uploadText element not found');
            return;
        }
        if (!uploadArea) {
            console.error('uploadArea element not found');
            return;
        }
        if (!resultsSection) {
            console.error('resultsSection element not found');
            return;
        }
        
=======
>>>>>>> a9775c7ec2fdaa3f1fe649755e261170760b8fcc
        // Display selected sample image in upload area
        uploadIcon.style.display = 'none';
        uploadText.style.display = 'none';
        uploadArea.style.backgroundImage = `url(${imageSrc})`;
        uploadArea.style.backgroundSize = 'cover';
        uploadArea.style.backgroundPosition = 'center';
        
<<<<<<< HEAD
        console.log('Set background image, now simulating processing...');
        
        // Show a loading indicator
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'loading-indicator';
        loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        loadingIndicator.style.position = 'absolute';
        loadingIndicator.style.top = '50%';
        loadingIndicator.style.left = '50%';
        loadingIndicator.style.transform = 'translate(-50%, -50%)';
        loadingIndicator.style.color = 'white';
        loadingIndicator.style.fontSize = '1.5rem';
        loadingIndicator.style.textAlign = 'center';
        loadingIndicator.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        loadingIndicator.style.padding = '15px 30px';
        loadingIndicator.style.borderRadius = '5px';
        uploadArea.appendChild(loadingIndicator);
        
        // Simulate processing (in a real app, this would call the backend)
        setTimeout(() => {
            console.log('Processing complete, showing results...');
            try {
                // Remove loading indicator
                if (loadingIndicator.parentNode) {
                    loadingIndicator.parentNode.removeChild(loadingIndicator);
                }
                
                // Show results
                showResults(imageSrc);
                
                // Delay scroll to ensure layout update
                setTimeout(() => {
                    const pageHeader = document.querySelector('.page-header');
                    if (pageHeader) {
                        pageHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                        console.warn('pageHeader element not found for scrolling');
                    }
                }, 100);
            } catch (error) {
                console.error('Error in showResults:', error);
                alert('An error occurred while processing the image. Please try again.');
            }
=======
        // Simulate processing (in a real app, this would call the backend)
        setTimeout(() => {
            showResults(imageSrc);
>>>>>>> a9775c7ec2fdaa3f1fe649755e261170760b8fcc
        }, 1500);
    }
    
    /**
     * Show detection results
     * @param {string} imageSrc - The source of the processed image
     */
    function showResults(imageSrc) {
<<<<<<< HEAD
        console.log('showResults called with:', imageSrc);
        
        // Re-fetch elements to ensure we have the latest references
        const uploadArea = document.getElementById('upload-area');
        const resultsSection = document.getElementById('results-section');
        
        // Check if elements exist
        if (!uploadArea) {
            console.error('uploadArea element not found');
            alert('Error: Could not find upload area element');
            return;
        }
        if (!uploadArea.parentElement) {
            console.error('uploadArea.parentElement not found');
            alert('Error: Could not find upload area parent element');
            return;
        }
        if (!resultsSection) {
            console.error('resultsSection element not found');
            alert('Error: Could not find results section element');
            return;
        }
        
        try {
            // Hide upload section and show results section
            uploadArea.parentElement.style.display = 'none';
            resultsSection.style.display = 'block';
            
            // Set original image
            const originalImageDisplay = document.getElementById('original-image-display');
            if (!originalImageDisplay) {
                throw new Error('original-image-display element not found');
            }
            originalImageDisplay.src = imageSrc;
            
            // Simulate detection result (in a real app, this would come from the backend)
            const constellations = [
                'Orion', 'UrsaMajor', 'Leo', 'Pegasus'
            ];
            
            const randomConstellation = constellations[Math.floor(Math.random() * constellations.length)];
            const confidenceScore = Math.floor(Math.random() * 30) + 70; // Random score between 70-99
            
            console.log('Selected constellation:', randomConstellation);
            
            // Update result details
            const constellationNameElement = document.getElementById('constellation-name');
            if (!constellationNameElement) {
                throw new Error('constellation-name element not found');
            }
            constellationNameElement.textContent = formatConstellationName(randomConstellation);
            
            const constellationTemplateElement = document.getElementById('constellation-template');
            if (!constellationTemplateElement) {
                throw new Error('constellation-template element not found');
            }
            
            // Set up image load error handling
            constellationTemplateElement.onerror = function() {
                console.error(`Failed to load image: Constellation_Templates/${randomConstellation}.png`);
                this.src = 'images/placeholder.png'; // Fallback image
            };
            
            constellationTemplateElement.src = `Constellation_Templates/${randomConstellation}.png`;
            
            const confidenceScoreElement = document.getElementById('confidence-score');
            if (!confidenceScoreElement) {
                throw new Error('confidence-score element not found');
            }
            confidenceScoreElement.textContent = `${confidenceScore}%`;
            
            const confidenceBarElement = document.getElementById('confidence-bar');
            if (!confidenceBarElement) {
                throw new Error('confidence-bar element not found');
            }
            confidenceBarElement.style.width = `${confidenceScore}%`;
            
            // Simulate stars matched
            const totalStars = Math.floor(Math.random() * 5) + 5; // Random between 5-9
            const matchedStars = Math.floor(totalStars * (confidenceScore / 100));
            
            const starsMatchedElement = document.getElementById('stars-matched');
            if (!starsMatchedElement) {
                throw new Error('stars-matched element not found');
            }
            starsMatchedElement.textContent = `${matchedStars}/${totalStars}`;
            
            console.log('Results displayed, initializing visualization...');
            
            // Initialize visualization
            initVisualization(randomConstellation);
            
            console.log('Detection results shown successfully');
            
        } catch (error) {
            console.error('Error in showResults:', error);
            alert('An error occurred while displaying results: ' + error.message);
            
            // Try to recover by showing the upload section again
            if (uploadArea && uploadArea.parentElement) {
                uploadArea.parentElement.style.display = 'block';
            }
            if (resultsSection) {
                resultsSection.style.display = 'none';
            }
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
    
    // Set up visualization control buttons
    const toggleStarsBtn = document.getElementById('toggle-stars');
    const toggleLinesBtn = document.getElementById('toggle-lines');
    const toggleLabelsBtn = document.getElementById('toggle-labels');
    
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
    
    // Initial draw
    updateVisualization();
}

/**
 * Update visualization based on control buttons
 */
function updateVisualization() {
    console.log('updateVisualization called');
    
    const canvas = document.getElementById('visualization-canvas');
    if (!canvas) {
        console.error('visualization-canvas element not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set background
    ctx.fillStyle = '#0a1128';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Get control button states
    const toggleStarsBtn = document.getElementById('toggle-stars');
    const toggleLinesBtn = document.getElementById('toggle-lines');
    const toggleLabelsBtn = document.getElementById('toggle-labels');
    
    if (!toggleStarsBtn) {
        console.error('toggle-stars element not found');
        return;
    }
    if (!toggleLinesBtn) {
        console.error('toggle-lines element not found');
        return;
    }
    if (!toggleLabelsBtn) {
        console.error('toggle-labels element not found');
        return;
    }
    
    const showStars = toggleStarsBtn.classList.contains('active');
    const showLines = toggleLinesBtn.classList.contains('active');
    const showLabels = toggleLabelsBtn.classList.contains('active');
    
    console.log('Visualization settings:', { showStars, showLines, showLabels });
    
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
=======
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
>>>>>>> a9775c7ec2fdaa3f1fe649755e261170760b8fcc
    }
}

/**
<<<<<<< HEAD
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
=======
>>>>>>> a9775c7ec2fdaa3f1fe649755e261170760b8fcc
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
<<<<<<< HEAD
        document.getElementById('detail-image').src = `Constellation_Templates/${constellationName}.png`;
=======
        document.getElementById('detail-image').src = `Templates/${constellationName}.png`;
>>>>>>> a9775c7ec2fdaa3f1fe649755e261170760b8fcc
        
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