/**
 * Detection History Manager
 * Handles storing and retrieving constellation detection history
 */

class DetectionHistoryManager {
    constructor() {
        this.storageKey = 'stellar_detection_history';
        this.maxEntries = 50; // Maximum number of history entries to store
    }

    /**
     * Initialize the detection history
     */
    initialize() {
        // Create empty history if it doesn't exist
        if (!localStorage.getItem(this.storageKey)) {
            localStorage.setItem(this.storageKey, JSON.stringify([]));
        }
    }

    /**
     * Add a new detection to the history
     * @param {Object} detection - The detection result object
     */
    addDetection(detection) {
        // Get current history
        const history = this.getHistory();
        
        // Create a new history entry
        const entry = {
            timestamp: new Date().toISOString(),
            constellation: detection.constellation,
            confidenceScore: detection.confidenceScore,
            starsMatched: detection.matchedStars,
            totalStars: detection.totalStars,
            processingTime: detection.processingTime || this.generateRandomProcessingTime(),
            isUploaded: detection.isUploaded || false
        };
        
        // Add to the beginning of the array
        history.unshift(entry);
        
        // Limit the number of entries
        if (history.length > this.maxEntries) {
            history.pop();
        }
        
        // Save back to localStorage
        localStorage.setItem(this.storageKey, JSON.stringify(history));
        
        // Update analysis data
        this.updateAnalysisData();
        
        return entry;
    }

    /**
     * Get the detection history
     * @returns {Array} - The detection history array
     */
    getHistory() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey)) || [];
        } catch (error) {
            console.error('Error parsing detection history:', error);
            return [];
        }
    }

    /**
     * Get detection history for a specific constellation
     * @param {string} constellation - The constellation name
     * @returns {Array} - Filtered detection history
     */
    getHistoryForConstellation(constellation) {
        const history = this.getHistory();
        return history.filter(entry => entry.constellation === constellation);
    }

    /**
     * Get detection statistics
     * @returns {Object} - Detection statistics
     */
    getStatistics() {
        const history = this.getHistory();
        
        if (history.length === 0) {
            return {
                totalDetections: 0,
                averageConfidence: 0,
                averageStarMatchRate: 0,
                averageProcessingTime: 0,
                constellationCounts: {},
                mostDetectedConstellation: null
            };
        }
        
        // Calculate statistics
        let totalConfidence = 0;
        let totalStarMatchRate = 0;
        let totalProcessingTime = 0;
        const constellationCounts = {};
        
        history.forEach(entry => {
            totalConfidence += entry.confidenceScore;
            totalStarMatchRate += (entry.starsMatched / entry.totalStars) * 100;
            totalProcessingTime += entry.processingTime;
            
            // Count constellation occurrences
            constellationCounts[entry.constellation] = (constellationCounts[entry.constellation] || 0) + 1;
        });
        
        // Find most detected constellation
        let mostDetectedConstellation = null;
        let maxCount = 0;
        
        for (const constellation in constellationCounts) {
            if (constellationCounts[constellation] > maxCount) {
                maxCount = constellationCounts[constellation];
                mostDetectedConstellation = constellation;
            }
        }
        
        return {
            totalDetections: history.length,
            averageConfidence: totalConfidence / history.length,
            averageStarMatchRate: totalStarMatchRate / history.length,
            averageProcessingTime: totalProcessingTime / history.length,
            constellationCounts,
            mostDetectedConstellation
        };
    }

    /**
     * Get constellation-specific performance metrics
     * @param {string} constellation - The constellation name
     * @returns {Object} - Performance metrics for the specified constellation
     */
    getConstellationPerformance(constellation) {
        const history = this.getHistoryForConstellation(constellation);
        
        if (history.length === 0) {
            return {
                detectionCount: 0,
                averageConfidence: 0,
                averageStarMatchRate: 0,
                averageProcessingTime: 0,
                trend: 'neutral'
            };
        }
        
        // Calculate statistics
        let totalConfidence = 0;
        let totalStarMatchRate = 0;
        let totalProcessingTime = 0;
        
        history.forEach(entry => {
            totalConfidence += entry.confidenceScore;
            totalStarMatchRate += (entry.starsMatched / entry.totalStars) * 100;
            totalProcessingTime += entry.processingTime;
        });
        
        // Calculate trend (improving, declining, or neutral)
        let trend = 'neutral';
        if (history.length >= 3) {
            const recentAvg = (history[0].confidenceScore + history[1].confidenceScore) / 2;
            const olderAvg = (history[history.length - 1].confidenceScore + history[history.length - 2].confidenceScore) / 2;
            
            if (recentAvg > olderAvg + 5) {
                trend = 'improving';
            } else if (recentAvg < olderAvg - 5) {
                trend = 'declining';
            }
        }
        
        return {
            detectionCount: history.length,
            averageConfidence: totalConfidence / history.length,
            averageStarMatchRate: totalStarMatchRate / history.length,
            averageProcessingTime: totalProcessingTime / history.length,
            trend
        };
    }

    /**
     * Update analysis data in the UI
     */
    updateAnalysisData() {
        // This will be called when the analysis page is loaded
        if (typeof updateAnalysisUI === 'function') {
            updateAnalysisUI();
        }
    }

    /**
     * Generate a random processing time for demo purposes
     * @returns {number} - Random processing time between 0.5 and 1.2 seconds
     */
    generateRandomProcessingTime() {
        return Math.round((Math.random() * 0.7 + 0.5) * 100) / 100;
    }

    /**
     * Clear all detection history
     */
    clearHistory() {
        localStorage.removeItem(this.storageKey);
        this.initialize();
    }
}

// Create a global instance
const detectionHistory = new DetectionHistoryManager();
detectionHistory.initialize();