document.addEventListener('DOMContentLoaded', function() {
    // Add analysis-page class to body
    document.body.classList.add('analysis-page');
    
    // Initialize stars background
    initStarsBackground();
    
    // Initialize mobile menu
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Initialize tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Get the tab content ID
            const tabId = this.getAttribute('data-tab') + '-tab';
            
            // Remove active class from all tabs and content
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Initialize constellation select
    const constellationSelect = document.getElementById('constellation-select');
    constellationSelect.addEventListener('change', function() {
        updateAnalysisData(this.value);
    });
    
    // Initialize time period select
    const timePeriodSelect = document.getElementById('time-period-select');
    timePeriodSelect.addEventListener('change', function() {
        updateAnalysisData(constellationSelect.value, this.value);
    });
    
    // Initialize comparison controls
    const comparisonTypeSelect = document.getElementById('comparison-type-select');
    const comparisonMetricSelect = document.getElementById('comparison-metric-select');
    
    comparisonTypeSelect.addEventListener('change', function() {
        updateComparisonChart(this.value, comparisonMetricSelect.value);
    });
    
    comparisonMetricSelect.addEventListener('change', function() {
        updateComparisonChart(comparisonTypeSelect.value, this.value);
    });
    
    // Initialize star map controls
    const toggleStarsBtn = document.getElementById('toggle-stars-btn');
    const toggleLinesBtn = document.getElementById('toggle-lines-btn');
    const toggleLabelsBtn = document.getElementById('toggle-labels-btn');
    const toggleHeatmapBtn = document.getElementById('toggle-heatmap-btn');
    
    toggleStarsBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        updateStarMap();
    });
    
    toggleLinesBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        updateStarMap();
    });
    
    toggleLabelsBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        updateStarMap();
    });
    
    toggleHeatmapBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        updateStarMap();
    });
    
    // Initialize comparison slider
    const sliderHandle = document.getElementById('slider-handle');
    const comparisonSlider = sliderHandle.parentElement;
    
    sliderHandle.addEventListener('mousedown', function(e) {
        e.preventDefault();
        
        document.addEventListener('mousemove', moveSlider);
        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', moveSlider);
        });
    });
    
    function moveSlider(e) {
        const rect = comparisonSlider.getBoundingClientRect();
        let position = ((e.clientX - rect.left) / rect.width) * 100;
        
        // Constrain position between 0 and 100
        position = Math.max(0, Math.min(100, position));
        
        comparisonSlider.style.setProperty('--position', `${position}%`);
    }
    
    // Initialize all charts
    initCharts();
    
    // Initialize star map
    initStarMap();
    
    // Initialize environmental heatmap
    initEnvironmentalHeatmap();
    
    /**
     * Initialize all charts
     */
    function initCharts() {
        // Detection Summary Section Charts
        initAccuracyChart();
        initFrequencyChart();
        
        // Performance Metrics Tab Charts
        initAccuracyTimeChart();
        initStarMatchChart();
        initProcessingTimeChart();
        initErrorTypesChart();
        initConditionsChart();
        
        // Star Mapping Tab Charts
        initPatternRecognitionChart();
        
        // Comparison Tab Charts
        initComparisonChart();
        initAlgorithmImprovementChart();
        
        // Environmental Factors Tab Charts
        initLightPollutionChart();
        initWeatherImpactChart();
        initTimeOfDayChart();
        initSeasonalChart();
        
        // Algorithm Performance Section Charts
        initProcessingSizeChart();
        initMemoryUsageChart();
        initDevicesChart();
    }
    
    /**
     * Update analysis data based on selected constellation and time period
     * @param {string} constellation - The selected constellation
     * @param {string} timePeriod - The selected time period
     */
    function updateAnalysisData(constellation, timePeriod) {
        // Update info box titles
        document.querySelectorAll('.info-box h4').forEach(el => {
            el.textContent = el.textContent.replace(/- .*$/, `- ${formatConstellationName(constellation)}`);
        });
        
        // Update star detection accuracy table
        updateStarTable(constellation);
        
        // Update charts
        updateAccuracyTimeChart(constellation, timePeriod);
        updateStarMatchChart(constellation, timePeriod);
        updateProcessingTimeChart(constellation, timePeriod);
        updateErrorTypesChart(constellation, timePeriod);
        updateConditionsChart(constellation, timePeriod);
        updatePatternRecognitionChart(constellation);
        updateComparisonChart(document.getElementById('comparison-type-select').value, 
                             document.getElementById('comparison-metric-select').value,
                             constellation, timePeriod);
        updateLightPollutionChart(constellation, timePeriod);
        updateWeatherImpactChart(constellation, timePeriod);
        updateTimeOfDayChart(constellation, timePeriod);
        updateSeasonalChart(constellation, timePeriod);
        
        // Update star map
        updateStarMap(constellation);
        
        // Update environmental heatmap
        updateEnvironmentalHeatmap(constellation);
    }
    
    /**
     * Format constellation name (convert camelCase to space-separated)
     * @param {string} name - The constellation name in camelCase
     * @returns {string} - The formatted constellation name
     */
    function formatConstellationName(name) {
        return name.replace(/([A-Z])/g, ' $1').trim();
    }
    
    /**
     * Initialize accuracy chart
     */
    function initAccuracyChart() {
        const ctx = document.getElementById('accuracy-chart').getContext('2d');
        
        const data = {
            labels: ['Orion', 'Ursa Major', 'Cassiopeia', 'Leo', 'Cygnus', 'Lyra', 'Scorpius', 'Pegasus'],
            datasets: [{
                label: 'Detection Accuracy (%)',
                data: [94, 89, 92, 85, 91, 88, 83, 79],
                backgroundColor: 'rgba(79, 172, 254, 0.7)',
                borderColor: 'rgba(79, 172, 254, 1)',
                borderWidth: 1
            }]
        };
        
        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Initialize frequency chart
     */
    function initFrequencyChart() {
        const ctx = document.getElementById('frequency-chart').getContext('2d');
        
        const data = {
            labels: ['Orion', 'Ursa Major', 'Cassiopeia', 'Leo', 'Cygnus', 'Lyra', 'Scorpius', 'Pegasus'],
            datasets: [{
                label: 'Detection Frequency',
                data: [42, 38, 25, 18, 15, 12, 10, 8],
                backgroundColor: 'rgba(0, 242, 254, 0.7)',
                borderColor: 'rgba(0, 242, 254, 1)',
                borderWidth: 1
            }]
        };
        
        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Initialize accuracy over time chart
     */
    function initAccuracyTimeChart() {
        const ctx = document.getElementById('accuracy-time-chart').getContext('2d');
        
        const data = {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
                label: 'Accuracy (%)',
                data: [92, 94, 91, 95, 93, 96, 94],
                backgroundColor: 'rgba(79, 172, 254, 0.2)',
                borderColor: 'rgba(79, 172, 254, 1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        };
        
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 80,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Update accuracy over time chart
     * @param {string} constellation - The selected constellation
     * @param {string} timePeriod - The selected time period
     */
    function updateAccuracyTimeChart(constellation, timePeriod) {
        // This would update the chart with new data based on the selected constellation and time period
        // For demo purposes, we're not implementing the actual data update
    }
    
    /**
     * Initialize star match chart
     */
    function initStarMatchChart() {
        const ctx = document.getElementById('star-match-chart').getContext('2d');
        
        const data = {
            labels: ['Betelgeuse', 'Rigel', 'Bellatrix', 'Mintaka', 'Alnilam', 'Alnitak', 'Saiph'],
            datasets: [{
                label: 'Match Rate (%)',
                data: [98, 97, 92, 89, 91, 88, 85],
                backgroundColor: 'rgba(0, 242, 254, 0.7)',
                borderColor: 'rgba(0, 242, 254, 1)',
                borderWidth: 1
            }]
        };
        
        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            maxRotation: 45,
                            minRotation: 45
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Update star match chart
     * @param {string} constellation - The selected constellation
     * @param {string} timePeriod - The selected time period
     */
    function updateStarMatchChart(constellation, timePeriod) {
        // This would update the chart with new data based on the selected constellation and time period
        // For demo purposes, we're not implementing the actual data update
    }
    
    /**
     * Initialize processing time chart
     */
    function initProcessingTimeChart() {
        const ctx = document.getElementById('processing-time-chart').getContext('2d');
        
        const data = {
            labels: ['0.5-0.6s', '0.6-0.7s', '0.7-0.8s', '0.8-0.9s', '0.9-1.0s', '1.0-1.1s'],
            datasets: [{
                label: 'Frequency',
                data: [5, 12, 25, 18, 8, 2],
                backgroundColor: 'rgba(79, 172, 254, 0.7)',
                borderColor: 'rgba(79, 172, 254, 1)',
                borderWidth: 1
            }]
        };
        
        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Update processing time chart
     * @param {string} constellation - The selected constellation
     * @param {string} timePeriod - The selected time period
     */
    function updateProcessingTimeChart(constellation, timePeriod) {
        // This would update the chart with new data based on the selected constellation and time period
        // For demo purposes, we're not implementing the actual data update
    }
    
    /**
     * Initialize error types chart
     */
    function initErrorTypesChart() {
        const ctx = document.getElementById('error-types-chart').getContext('2d');
        
        const data = {
            labels: ['False Positives', 'False Negatives', 'Position Errors', 'Pattern Mismatch', 'Other'],
            datasets: [{
                label: 'Error Distribution',
                data: [35, 25, 20, 15, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)'
                ],
                borderWidth: 1
            }]
        };
        
        const config = {
            type: 'pie',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            font: {
                                size: 11
                            }
                        }
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Update error types chart
     * @param {string} constellation - The selected constellation
     * @param {string} timePeriod - The selected time period
     */
    function updateErrorTypesChart(constellation, timePeriod) {
        // This would update the chart with new data based on the selected constellation and time period
        // For demo purposes, we're not implementing the actual data update
    }
    
    /**
     * Initialize conditions chart
     */
    function initConditionsChart() {
        const ctx = document.getElementById('conditions-chart').getContext('2d');
        
        const data = {
            labels: ['Clear Sky', 'Light Cloud', 'Heavy Cloud', 'Light Pollution', 'Moon Interference', 'Low Light'],
            datasets: [
                {
                    label: 'Accuracy (%)',
                    data: [95, 90, 75, 82, 88, 79],
                    backgroundColor: 'rgba(79, 172, 254, 0.7)',
                    borderColor: 'rgba(79, 172, 254, 1)',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: 'Processing Time (s)',
                    data: [0.7, 0.8, 1.1, 0.9, 0.8, 1.0],
                    backgroundColor: 'rgba(0, 242, 254, 0.7)',
                    borderColor: 'rgba(0, 242, 254, 1)',
                    borderWidth: 1,
                    yAxisID: 'y1'
                }
            ]
        };
        
        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        type: 'linear',
                        position: 'left',
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                        title: {
                            display: true,
                            text: 'Accuracy (%)',
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        position: 'right',
                        beginAtZero: true,
                        max: 2,
                        grid: {
                            drawOnChartArea: false
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                        title: {
                            display: true,
                            text: 'Processing Time (s)',
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Update conditions chart
     * @param {string} constellation - The selected constellation
     * @param {string} timePeriod - The selected time period
     */
    function updateConditionsChart(constellation, timePeriod) {
        // This would update the chart with new data based on the selected constellation and time period
        // For demo purposes, we're not implementing the actual data update
    }
    
    /**
     * Initialize pattern recognition chart
     */
    function initPatternRecognitionChart() {
        const ctx = document.getElementById('pattern-recognition-chart').getContext('2d');
        
        const data = {
            labels: ['Star Positions', 'Relative Distances', 'Brightness Pattern', 'Overall Shape', 'Orientation', 'Scale Invariance'],
            datasets: [{
                label: 'Performance Score',
                data: [90, 85, 78, 92, 88, 82],
                backgroundColor: 'rgba(79, 172, 254, 0.2)',
                borderColor: 'rgba(79, 172, 254, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(79, 172, 254, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(79, 172, 254, 1)',
                pointRadius: 4
            }]
        };
        
        const config = {
            type: 'radar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        pointLabels: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            font: {
                                size: 10
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Update pattern recognition chart
     * @param {string} constellation - The selected constellation
     */
    function updatePatternRecognitionChart(constellation) {
        // This would update the chart with new data based on the selected constellation
        // For demo purposes, we're not implementing the actual data update
    }
    
    /**
     * Initialize comparison chart
     */
    function initComparisonChart() {
        const ctx = document.getElementById('comparison-chart').getContext('2d');
        
        const data = {
            labels: ['v1.0', 'v1.1', 'v1.2', 'v2.0', 'v2.1', 'Current'],
            datasets: [{
                label: 'Accuracy (%)',
                data: [72, 78, 82, 85, 89, 94],
                backgroundColor: 'rgba(79, 172, 254, 0.7)',
                borderColor: 'rgba(79, 172, 254, 1)',
                borderWidth: 1
            }]
        };
        
        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Update comparison chart
     * @param {string} comparisonType - The comparison type
     * @param {string} metric - The comparison metric
     * @param {string} constellation - The selected constellation
     * @param {string} timePeriod - The selected time period
     */
    function updateComparisonChart(comparisonType, metric, constellation, timePeriod) {
        // This would update the chart with new data based on the selected parameters
        // For demo purposes, we're not implementing the actual data update
    }
    
    /**
     * Initialize algorithm improvement chart
     */
    function initAlgorithmImprovementChart() {
        const ctx = document.getElementById('algorithm-improvement-chart').getContext('2d');
        
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Accuracy (%)',
                data: [75, 76, 78, 80, 82, 83, 85, 87, 89, 91, 93, 94],
                backgroundColor: 'rgba(79, 172, 254, 0.2)',
                borderColor: 'rgba(79, 172, 254, 1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        };
        
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 70,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Initialize light pollution chart
     */
    function initLightPollutionChart() {
        const ctx = document.getElementById('light-pollution-chart').getContext('2d');
        
        const data = {
            labels: ['Bortle 1-2', 'Bortle 3-4', 'Bortle 5-6', 'Bortle 7-8', 'Bortle 9'],
            datasets: [{
                label: 'Accuracy (%)',
                data: [98, 95, 88, 75, 60],
                backgroundColor: 'rgba(79, 172, 254, 0.2)',
                borderColor: 'rgba(79, 172, 254, 1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        };
        
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 50,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Update light pollution chart
     * @param {string} constellation - The selected constellation
     * @param {string} timePeriod - The selected time period
     */
    function updateLightPollutionChart(constellation, timePeriod) {
        // This would update the chart with new data based on the selected constellation and time period
        // For demo purposes, we're not implementing the actual data update
    }
    
    /**
     * Initialize weather impact chart
     */
    function initWeatherImpactChart() {
        const ctx = document.getElementById('weather-impact-chart').getContext('2d');
        
        const data = {
            labels: ['Clear', 'Partly Cloudy', 'Mostly Cloudy', 'Overcast', 'Hazy', 'Foggy'],
            datasets: [{
                label: 'Accuracy (%)',
                data: [95, 90, 82, 68, 75, 60],
                backgroundColor: 'rgba(0, 242, 254, 0.7)',
                borderColor: 'rgba(0, 242, 254, 1)',
                borderWidth: 1
            }]
        };
        
        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 50,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Update weather impact chart
     * @param {string} constellation - The selected constellation
     * @param {string} timePeriod - The selected time period
     */
    function updateWeatherImpactChart(constellation, timePeriod) {
        // This would update the chart with new data based on the selected constellation and time period
        // For demo purposes, we're not implementing the actual data update
    }
    
    /**
     * Initialize time of day chart
     */
    function initTimeOfDayChart() {
        const ctx = document.getElementById('time-of-day-chart').getContext('2d');
        
        const data = {
            labels: ['6 PM', '8 PM', '10 PM', '12 AM', '2 AM', '4 AM', '6 AM'],
            datasets: [{
                label: 'Accuracy (%)',
                data: [75, 85, 92, 95, 94, 90, 80],
                backgroundColor: 'rgba(79, 172, 254, 0.2)',
                borderColor: 'rgba(79, 172, 254, 1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        };
        
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 70,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Update time of day chart
     * @param {string} constellation - The selected constellation
     * @param {string} timePeriod - The selected time period
     */
    function updateTimeOfDayChart(constellation, timePeriod) {
        // This would update the chart with new data based on the selected constellation and time period
        // For demo purposes, we're not implementing the actual data update
    }
    
    /**
     * Initialize seasonal chart
     */
    function initSeasonalChart() {
        const ctx = document.getElementById('seasonal-chart').getContext('2d');
        
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Accuracy (%)',
                data: [92, 90, 88, 85, 82, 80, 82, 85, 88, 90, 92, 93],
                backgroundColor: 'rgba(0, 242, 254, 0.2)',
                borderColor: 'rgba(0, 242, 254, 1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        };
        
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 75,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Update seasonal chart
     * @param {string} constellation - The selected constellation
     * @param {string} timePeriod - The selected time period
     */
    function updateSeasonalChart(constellation, timePeriod) {
        // This would update the chart with new data based on the selected constellation and time period
        // For demo purposes, we're not implementing the actual data update
    }
    
    /**
     * Initialize processing size chart
     */
    function initProcessingSizeChart() {
        const ctx = document.getElementById('processing-size-chart').getContext('2d');
        
        const data = {
            labels: ['480p', '720p', '1080p', '1440p', '4K'],
            datasets: [{
                label: 'Processing Time (s)',
                data: [0.4, 0.6, 0.8, 1.2, 1.8],
                backgroundColor: 'rgba(79, 172, 254, 0.7)',
                borderColor: 'rgba(79, 172, 254, 1)',
                borderWidth: 1
            }]
        };
        
        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Initialize memory usage chart
     */
    function initMemoryUsageChart() {
        const ctx = document.getElementById('memory-usage-chart').getContext('2d');
        
        const data = {
            labels: ['Image Loading', 'Preprocessing', 'Star Detection', 'Pattern Matching', 'Visualization'],
            datasets: [{
                label: 'Memory Usage (MB)',
                data: [45, 65, 85, 50, 35],
                backgroundColor: 'rgba(0, 242, 254, 0.7)',
                borderColor: 'rgba(0, 242, 254, 1)',
                borderWidth: 1
            }]
        };
        
        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Initialize devices chart
     */
    function initDevicesChart() {
        const ctx = document.getElementById('devices-chart').getContext('2d');
        
        const data = {
            labels: ['Desktop', 'Laptop', 'Tablet', 'High-end Mobile', 'Mid-range Mobile', 'Low-end Mobile'],
            datasets: [
                {
                    label: 'Accuracy (%)',
                    data: [94, 92, 88, 85, 80, 72],
                    backgroundColor: 'rgba(79, 172, 254, 0.7)',
                    borderColor: 'rgba(79, 172, 254, 1)',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: 'Processing Time (s)',
                    data: [0.6, 0.8, 1.2, 1.5, 2.0, 3.0],
                    backgroundColor: 'rgba(0, 242, 254, 0.7)',
                    borderColor: 'rgba(0, 242, 254, 1)',
                    borderWidth: 1,
                    yAxisID: 'y1'
                }
            ]
        };
        
        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        type: 'linear',
                        position: 'left',
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                        title: {
                            display: true,
                            text: 'Accuracy (%)',
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        position: 'right',
                        beginAtZero: true,
                        max: 4,
                        grid: {
                            drawOnChartArea: false
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                        title: {
                            display: true,
                            text: 'Processing Time (s)',
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
    
    /**
     * Initialize star map
     */
    function initStarMap() {
        // Create star map using D3.js
        const starMap = d3.select('#star-map');
        const width = starMap.node().getBoundingClientRect().width;
        const height = 400;
        
        // Create SVG
        const svg = starMap.append('svg')
            .attr('width', width)
            .attr('height', height);
        
        // Add background
        svg.append('rect')
            .attr('width', width)
            .attr('height', height)
            .attr('fill', '#0a1128');
        
        // Generate star data for Orion
        const stars = [
            { name: 'Betelgeuse', x: width * 0.3, y: height * 0.2, size: 8, brightness: 0.9 },
            { name: 'Rigel', x: width * 0.7, y: height * 0.8, size: 7, brightness: 0.95 },
            { name: 'Bellatrix', x: width * 0.2, y: height * 0.3, size: 5, brightness: 0.8 },
            { name: 'Mintaka', x: width * 0.4, y: height * 0.5, size: 4, brightness: 0.75 },
            { name: 'Alnilam', x: width * 0.5, y: height * 0.5, size: 5, brightness: 0.8 },
            { name: 'Alnitak', x: width * 0.6, y: height * 0.5, size: 4, brightness: 0.75 },
            { name: 'Saiph', x: width * 0.8, y: height * 0.7, size: 5, brightness: 0.8 }
        ];
        
        // Define constellation lines
        const lines = [
            { start: stars[0], end: stars[2] }, // Betelgeuse to Bellatrix
            { start: stars[2], end: stars[3] }, // Bellatrix to Mintaka
            { start: stars[3], end: stars[4] }, // Mintaka to Alnilam
            { start: stars[4], end: stars[5] }, // Alnilam to Alnitak
            { start: stars[5], end: stars[6] }, // Alnitak to Saiph
            { start: stars[6], end: stars[1] }, // Saiph to Rigel
            { start: stars[1], end: stars[3] }  // Rigel to Mintaka
        ];
        
        // Draw lines
        const linesGroup = svg.append('g').attr('class', 'lines');
        
        lines.forEach(line => {
            linesGroup.append('line')
                .attr('x1', line.start.x)
                .attr('y1', line.start.y)
                .attr('x2', line.end.x)
                .attr('y2', line.end.y)
                .attr('stroke', '#4facfe')
                .attr('stroke-width', 2)
                .attr('opacity', 0.7);
        });
        
        // Draw stars
        const starsGroup = svg.append('g').attr('class', 'stars');
        
        stars.forEach(star => {
            // Draw glow
            const gradient = svg.append('radialGradient')
                .attr('id', `glow-${star.name}`)
                .attr('cx', '50%')
                .attr('cy', '50%')
                .attr('r', '50%');
                
            gradient.append('stop')
                .attr('offset', '0%')
                .attr('stop-color', 'white')
                .attr('stop-opacity', star.brightness);
                
            gradient.append('stop')
                .attr('offset', '100%')
                .attr('stop-color', 'white')
                .attr('stop-opacity', 0);
            
            starsGroup.append('circle')
                .attr('cx', star.x)
                .attr('cy', star.y)
                .attr('r', star.size * 3)
                .attr('fill', `url(#glow-${star.name})`)
                .attr('opacity', 0.6);
            
            // Draw star
            starsGroup.append('circle')
                .attr('cx', star.x)
                .attr('cy', star.y)
                .attr('r', star.size)
                .attr('fill', 'white');
        });
        
        // Draw labels
        const labelsGroup = svg.append('g').attr('class', 'labels').style('display', 'none');
        
        stars.forEach(star => {
            labelsGroup.append('text')
                .attr('x', star.x)
                .attr('y', star.y - star.size - 10)
                .attr('text-anchor', 'middle')
                .attr('fill', '#b3c5ef')
                .attr('font-size', '12px')
                .attr('font-family', 'Montserrat, sans-serif')
                .text(star.name);
        });
        
        // Draw heatmap (initially hidden)
        const heatmapGroup = svg.append('g').attr('class', 'heatmap').style('display', 'none');
        
        // Add heatmap data (detection accuracy)
        const heatmapData = [
            { x: width * 0.3, y: height * 0.2, radius: 30, value: 0.98 }, // Betelgeuse
            { x: width * 0.7, y: height * 0.8, radius: 30, value: 0.97 }, // Rigel
            { x: width * 0.2, y: height * 0.3, radius: 30, value: 0.92 }, // Bellatrix
            { x: width * 0.4, y: height * 0.5, radius: 30, value: 0.89 }, // Mintaka
            { x: width * 0.5, y: height * 0.5, radius: 30, value: 0.91 }, // Alnilam
            { x: width * 0.6, y: height * 0.5, radius: 30, value: 0.88 }, // Alnitak
            { x: width * 0.8, y: height * 0.7, radius: 30, value: 0.85 }  // Saiph
        ];
        
        heatmapData.forEach(data => {
            const color = d3.interpolateRgb(
                d3.rgb(255, 0, 0, 0.3), // Red for lower values
                d3.rgb(0, 255, 0, 0.3)  // Green for higher values
            )(data.value);
            
            heatmapGroup.append('circle')
                .attr('cx', data.x)
                .attr('cy', data.y)
                .attr('r', data.radius)
                .attr('fill', color)
                .attr('opacity', 0.6);
        });
        
        // Store data for updates
        svg.stars = stars;
        svg.lines = lines;
        svg.constellationName = 'Orion';
    }
    
    /**
     * Update star map
     * @param {string} constellation - The selected constellation
     */
    function updateStarMap(constellation) {
        // This would update the star map with new data based on the selected constellation
        // For demo purposes, we're just toggling visibility of elements
        
        const showStars = document.getElementById('toggle-stars-btn').classList.contains('active');
        const showLines = document.getElementById('toggle-lines-btn').classList.contains('active');
        const showLabels = document.getElementById('toggle-labels-btn').classList.contains('active');
        const showHeatmap = document.getElementById('toggle-heatmap-btn').classList.contains('active');
        
        d3.select('#star-map .stars').style('display', showStars ? 'block' : 'none');
        d3.select('#star-map .lines').style('display', showLines ? 'block' : 'none');
        d3.select('#star-map .labels').style('display', showLabels ? 'block' : 'none');
        d3.select('#star-map .heatmap').style('display', showHeatmap ? 'block' : 'none');
    }
    
    /**
     * Initialize environmental heatmap
     */
    function initEnvironmentalHeatmap() {
        // Create heatmap using D3.js
        const heatmapContainer = d3.select('#environmental-heatmap');
        const width = heatmapContainer.node().getBoundingClientRect().width;
        const height = 400;
        
        // Create SVG
        const svg = heatmapContainer.append('svg')
            .attr('width', width)
            .attr('height', height);
        
        // Add background
        svg.append('rect')
            .attr('width', width)
            .attr('height', height)
            .attr('fill', '#0a1128');
        
        // Define data
        const factors = ['Light Pollution', 'Cloud Cover', 'Moon Phase', 'Humidity', 'Temperature', 'Altitude'];
        const times = ['6 PM', '8 PM', '10 PM', '12 AM', '2 AM', '4 AM'];
        
        const cellWidth = width / times.length;
        const cellHeight = height / (factors.length + 1); // +1 for labels
        
        // Generate random data
        const data = [];
        for (let i = 0; i < factors.length; i++) {
            for (let j = 0; j < times.length; j++) {
                data.push({
                    factor: factors[i],
                    time: times[j],
                    value: Math.random()
                });
            }
        }
        
        // Create color scale
        const colorScale = d3.scaleSequential()
            .domain([0, 1])
            .interpolator(d3.interpolateRgb('#0a4c95', '#00f2fe'));
        
        // Draw cells
        svg.selectAll('rect.cell')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'cell')
            .attr('x', d => times.indexOf(d.time) * cellWidth)
            .attr('y', d => factors.indexOf(d.factor) * cellHeight + cellHeight) // +cellHeight for labels
            .attr('width', cellWidth)
            .attr('height', cellHeight)
            .attr('fill', d => colorScale(d.value))
            .on('mouseover', function(event, d) {
                // Show tooltip
                const tooltip = d3.select('body')
                    .append('div')
                    .attr('class', 'tooltip')
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 25) + 'px')
                    .style('opacity', 0);
                
                tooltip.html(`
                    <h4>${d.factor}</h4>
                    <p>Time: ${d.time}</p>
                    <p>Impact: ${Math.round(d.value * 100)}%</p>
                `)
                .transition()
                .duration(200)
                .style('opacity', 1);
                
                // Store tooltip reference
                d3.select(this).datum().tooltip = tooltip;
            })
            .on('mouseout', function(event, d) {
                // Hide tooltip
                if (d.tooltip) {
                    d.tooltip.transition()
                        .duration(200)
                        .style('opacity', 0)
                        .remove();
                }
            });
        
        // Add factor labels
        svg.selectAll('text.factor-label')
            .data(factors)
            .enter()
            .append('text')
            .attr('class', 'factor-label')
            .attr('x', 5)
            .attr('y', (d, i) => i * cellHeight + cellHeight + cellHeight / 2)
            .attr('fill', '#b3c5ef')
            .attr('font-size', '12px')
            .attr('font-family', 'Montserrat, sans-serif')
            .attr('dominant-baseline', 'middle')
            .text(d => d);
        
        // Add time labels
        svg.selectAll('text.time-label')
            .data(times)
            .enter()
            .append('text')
            .attr('class', 'time-label')
            .attr('x', (d, i) => i * cellWidth + cellWidth / 2)
            .attr('y', cellHeight / 2)
            .attr('text-anchor', 'middle')
            .attr('fill', '#b3c5ef')
            .attr('font-size', '12px')
            .attr('font-family', 'Montserrat, sans-serif')
            .attr('dominant-baseline', 'middle')
            .text(d => d);
    }
    
    /**
     * Update environmental heatmap
     * @param {string} constellation - The selected constellation
     */
    function updateEnvironmentalHeatmap(constellation) {
        // This would update the heatmap with new data based on the selected constellation
        // For demo purposes, we're not implementing the actual data update
    }
    
    /**
     * Update star table
     * @param {string} constellation - The selected constellation
     */
    function updateStarTable(constellation) {
        // This would update the star detection accuracy table with new data based on the selected constellation
        // For demo purposes, we're not implementing the actual data update
    }
    
    /**
     * Create stars background
     */
    function initStarsBackground() {
        const starsContainer = document.getElementById('stars-container');
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
});