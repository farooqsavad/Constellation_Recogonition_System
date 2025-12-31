/**
 * Chart Fix Script
 * This script ensures that Chart.js is properly loaded and configured
 * before initializing any charts on the analysis page.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded. Loading it now...');
        
        // Create a script element to load Chart.js
        const chartScript = document.createElement('script');
        chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        chartScript.onload = initializeChartsWhenReady;
        document.head.appendChild(chartScript);
    } else {
        // Chart.js is already loaded, initialize charts
        initializeChartsWhenReady();
    }
    
    /**
     * Initialize charts when Chart.js is ready
     */
    function initializeChartsWhenReady() {
        console.log('Chart.js is ready, initializing charts...');
        
        // Set default Chart.js options for all charts
        Chart.defaults.color = '#b3c5ef';
        Chart.defaults.font.family = "'Montserrat', sans-serif";
        Chart.defaults.scale.grid.color = 'rgba(255, 255, 255, 0.05)';
        Chart.defaults.scale.ticks.color = '#b3c5ef';
        
        // Define a common gradient for all charts
        const createGradient = (ctx, startColor, endColor) => {
            const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
            gradient.addColorStop(0, startColor);
            gradient.addColorStop(1, endColor);
            return gradient;
        };
        
        // Initialize all chart canvases
        const chartCanvases = document.querySelectorAll('canvas[id$="-chart"]');
        
        chartCanvases.forEach(canvas => {
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            const chartId = canvas.id;
            
            // Check if a chart already exists for this canvas
            const existingChart = Chart.getChart(chartId);
            if (existingChart) {
                existingChart.destroy();
            }
            
            // Create a placeholder chart based on the canvas ID
            createPlaceholderChart(ctx, chartId);
        });
        
        console.log(`Initialized ${chartCanvases.length} charts`);
    }
    
    /**
     * Create a placeholder chart based on the canvas ID
     * @param {CanvasRenderingContext2D} ctx - The canvas context
     * @param {string} chartId - The chart ID/canvas ID
     */
    function createPlaceholderChart(ctx, chartId) {
        const gradient = createGradient(ctx, 'rgba(79, 172, 254, 0.8)', 'rgba(0, 242, 254, 0.2)');
        
        let chartType = 'bar';
        let chartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Data',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: gradient,
                borderColor: '#4facfe',
                borderWidth: 2
            }]
        };
        
        let chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#b3c5ef',
                        font: {
                            family: "'Montserrat', sans-serif",
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 28, 63, 0.9)',
                    titleColor: '#4facfe',
                    bodyColor: '#ffffff',
                    borderColor: '#4facfe',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: false
                }
            }
        };
        
        // Customize chart based on ID
        if (chartId.includes('accuracy')) {
            chartType = 'bar';
            chartData.labels = ['Orion', 'Ursa Major', 'Cassiopeia', 'Leo', 'Cygnus', 'Lyra'];
            chartData.datasets[0].label = 'Detection Accuracy (%)';
            chartData.datasets[0].data = [94, 89, 92, 85, 91, 83];
        } else if (chartId.includes('frequency')) {
            chartType = 'pie';
            chartData.labels = ['Orion', 'Ursa Major', 'Cassiopeia', 'Leo', 'Cygnus', 'Others'];
            chartData.datasets[0].label = 'Detection Frequency';
            chartData.datasets[0].data = [35, 25, 15, 10, 8, 7];
            chartData.datasets[0].backgroundColor = [
                'rgba(79, 172, 254, 0.8)',
                'rgba(0, 242, 254, 0.8)',
                'rgba(0, 200, 200, 0.8)',
                'rgba(0, 150, 200, 0.8)',
                'rgba(0, 100, 200, 0.8)',
                'rgba(0, 50, 200, 0.8)'
            ];
        } else if (chartId.includes('time')) {
            chartType = 'line';
            chartData.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            chartData.datasets[0].label = 'Processing Time (s)';
            chartData.datasets[0].data = [1.2, 1.1, 0.9, 0.8, 0.7, 0.6];
            chartData.datasets[0].fill = true;
        } else if (chartId.includes('star-match')) {
            chartType = 'line';
            chartData.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            chartData.datasets[0].label = 'Star Match Rate (%)';
            chartData.datasets[0].data = [85, 87, 90, 92, 94, 95];
            chartData.datasets[0].fill = true;
        } else if (chartId.includes('error')) {
            chartType = 'doughnut';
            chartData.labels = ['Star Misidentification', 'Pattern Mismatch', 'Low Confidence', 'Other'];
            chartData.datasets[0].label = 'Error Types';
            chartData.datasets[0].data = [45, 25, 20, 10];
            chartData.datasets[0].backgroundColor = [
                'rgba(79, 172, 254, 0.8)',
                'rgba(0, 242, 254, 0.8)',
                'rgba(0, 200, 200, 0.8)',
                'rgba(0, 150, 200, 0.8)'
            ];
        } else if (chartId.includes('pattern')) {
            chartType = 'radar';
            chartData.labels = ['Star Positions', 'Relative Distances', 'Brightness', 'Pattern Shape', 'Star Count'];
            chartData.datasets[0].label = 'Pattern Recognition';
            chartData.datasets[0].data = [90, 85, 88, 92, 95];
            chartData.datasets[0].fill = true;
        } else if (chartId.includes('algorithm')) {
            chartType = 'line';
            chartData.labels = ['v1.0', 'v1.1', 'v1.2', 'v2.0', 'v2.1', 'v3.0'];
            chartData.datasets[0].label = 'Algorithm Accuracy (%)';
            chartData.datasets[0].data = [75, 78, 82, 85, 88, 92];
            chartData.datasets[0].fill = true;
        } else if (chartId.includes('comparison')) {
            chartType = 'bar';
            chartData.labels = ['Algorithm A', 'Algorithm B', 'Algorithm C', 'Current'];
            chartData.datasets[0].label = 'Accuracy (%)';
            chartData.datasets[0].data = [78, 82, 85, 92];
        } else if (chartId.includes('conditions')) {
            chartType = 'bar';
            chartData = {
                labels: ['Clear Sky', 'Light Cloud', 'Heavy Cloud', 'Light Pollution', 'Moon Present'],
                datasets: [
                    {
                        label: 'Accuracy (%)',
                        data: [95, 88, 75, 82, 85],
                        backgroundColor: gradient,
                        borderColor: '#4facfe',
                        borderWidth: 2
                    },
                    {
                        label: 'Processing Time (s)',
                        data: [0.6, 0.7, 0.9, 0.8, 0.7],
                        backgroundColor: createGradient(ctx, 'rgba(0, 242, 254, 0.8)', 'rgba(0, 242, 254, 0.2)'),
                        borderColor: '#00f2fe',
                        borderWidth: 2
                    }
                ]
            };
        }
        
        // Create the chart
        new Chart(ctx, {
            type: chartType,
            data: chartData,
            options: chartOptions
        });
    }
    
    /**
     * Create a gradient for chart backgrounds
     * @param {CanvasRenderingContext2D} ctx - The canvas context
     * @param {string} startColor - The gradient start color
     * @param {string} endColor - The gradient end color
     * @returns {CanvasGradient} - The created gradient
     */
    function createGradient(ctx, startColor, endColor) {
        const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
        gradient.addColorStop(0, startColor);
        gradient.addColorStop(1, endColor);
        return gradient;
    }
});