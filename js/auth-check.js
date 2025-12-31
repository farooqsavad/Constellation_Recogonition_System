/**
 * Authentication Check Script
 * This script checks if a user is logged in before allowing access to protected pages
 * If not logged in, it redirects to the welcome/login page
 */

(function() {
    // Run immediately when script is loaded
    checkAuthentication();
    
    /**
     * Check if user is authenticated
     * Redirects to welcome/login page if not
     */
    function checkAuthentication() {
        // Check session storage first (for current session)
        let isLoggedIn = sessionStorage.getItem('stellarLoggedIn') === 'true';
        
        // If not in session storage, check local storage (for remembered logins)
        if (!isLoggedIn) {
            isLoggedIn = localStorage.getItem('stellarLoggedIn') === 'true';
            
            // If found in local storage but not session storage, update session storage
            if (isLoggedIn) {
                sessionStorage.setItem('stellarLoggedIn', 'true');
                const userEmail = localStorage.getItem('stellarUserEmail');
                if (userEmail) {
                    sessionStorage.setItem('stellarUserEmail', userEmail);
                }
            }
        }
        
        // If not logged in, redirect to welcome/login page
        if (!isLoggedIn) {
            // Store the current page URL to redirect back after login
            const currentPage = window.location.pathname.split('/').pop();
            sessionStorage.setItem('stellarLastPage', currentPage);
            
            // Redirect to welcome/login page
            window.location.href = 'stellar-welcome-to-login.html';
        } else {
            // User is logged in, update last visited page
            const currentPage = window.location.pathname.split('/').pop();
            sessionStorage.setItem('stellarLastPage', currentPage);
            
            // Add logout button to the page if it doesn't exist
            addLogoutButton();
        }
    }
    
    /**
     * Add logout button to the page
     */
    function addLogoutButton() {
        // Check if logout button already exists
        if (document.getElementById('stellar-logout-btn')) {
            return;
        }
        
        // Create logout button
        const logoutBtn = document.createElement('a');
        logoutBtn.id = 'stellar-logout-btn';
        logoutBtn.href = '#';
        logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
        logoutBtn.className = 'stellar-logout-btn';
        
        // Style the button
        logoutBtn.style.position = 'fixed';
        logoutBtn.style.top = '20px';
        logoutBtn.style.right = '20px';
        logoutBtn.style.zIndex = '1000';
        logoutBtn.style.backgroundColor = 'rgba(15, 28, 63, 0.8)';
        logoutBtn.style.color = '#4facfe';
        logoutBtn.style.padding = '8px 15px';
        logoutBtn.style.borderRadius = '20px';
        logoutBtn.style.textDecoration = 'none';
        logoutBtn.style.fontSize = '0.9rem';
        logoutBtn.style.fontWeight = '500';
        logoutBtn.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        logoutBtn.style.transition = 'all 0.3s ease';
        logoutBtn.style.display = 'flex';
        logoutBtn.style.alignItems = 'center';
        logoutBtn.style.gap = '8px';
        
        // Add hover effect
        logoutBtn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(30, 49, 105, 0.9)';
            this.style.color = '#00f2fe';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
        });
        
        logoutBtn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'rgba(15, 28, 63, 0.8)';
            this.style.color = '#4facfe';
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        });
        
        // Add click event to handle logout
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Clear authentication data
            sessionStorage.removeItem('stellarLoggedIn');
            sessionStorage.removeItem('stellarUserEmail');
            localStorage.removeItem('stellarLoggedIn');
            localStorage.removeItem('stellarUserEmail');
            
            // Redirect to welcome/login page
            window.location.href = 'stellar-welcome-to-login.html?showLogin=true';
        });
        
        // Add to the document
        document.body.appendChild(logoutBtn);
        
        // Add user info display
        const userEmail = sessionStorage.getItem('stellarUserEmail');
        if (userEmail) {
            const userInfo = document.createElement('div');
            userInfo.id = 'stellar-user-info';
            userInfo.className = 'stellar-user-info';
            userInfo.innerHTML = `<i class="fas fa-user-circle"></i> ${userEmail}`;
            
            // Style the user info
            userInfo.style.position = 'fixed';
            userInfo.style.top = '20px';
            userInfo.style.right = '120px';
            userInfo.style.zIndex = '1000';
            userInfo.style.backgroundColor = 'rgba(15, 28, 63, 0.8)';
            userInfo.style.color = '#b3c5ef';
            userInfo.style.padding = '8px 15px';
            userInfo.style.borderRadius = '20px';
            userInfo.style.fontSize = '0.9rem';
            userInfo.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
            userInfo.style.display = 'flex';
            userInfo.style.alignItems = 'center';
            userInfo.style.gap = '8px';
            
            document.body.appendChild(userInfo);
        }
    }
})();