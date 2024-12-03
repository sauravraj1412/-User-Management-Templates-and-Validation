window.onload = function() {
    const registerForm = document.getElementById('registerForm');
    
    // Handle registration
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();  

            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;

            // Save user data to localStorage
            localStorage.setItem('userName', name);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);

            alert('Registration successful! Please log in.');
            window.location.href = 'index.html';  
        });
    }

    // Handle login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Get stored user data from localStorage
            const storedEmail = localStorage.getItem('userEmail');
            const storedPassword = localStorage.getItem('userPassword');

            if (email === storedEmail && password === storedPassword) {
                // Successful login
                window.location.href = 'profile.html';  
            } else {
                // Invalid login credentials
                alert('Email or password is incorrect.');
            }
        });
    }

    // Profile page logic
    if (document.getElementById('profileName')) {
        // Get stored user data from localStorage
        const name = localStorage.getItem('userName');
        const email = localStorage.getItem('userEmail');

        // Display user data
        document.getElementById('profileName').textContent = name;
        document.getElementById('profileEmail').textContent = email;

        // Handle logout
        document.getElementById('logoutBtn').addEventListener('click', function() {
            // Clear user data from localStorage
            localStorage.removeItem('userName');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userPassword');
            window.location.href = 'index.html';  
        });
    }
};

