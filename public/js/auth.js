// public/js/auth.js
// Complete authentication logic for login and register pages

// Show toast (assuming showToast is global from main.js)
function showToast(message, type = 'success') {
    // Fallback if main.js not loaded yet
    if (typeof showToast === 'function') {
        showToast(message, type);
    } else {
        alert(message); // fallback
    }
}

// Handle registration form
function handleRegister(e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const password = document.getElementById('password')?.value;

    if (!name || !email || !password) {
        showToast('Please fill all fields', 'error');
        return;
    }

    if (password.length < 6) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }

    fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })))
    .then(({ ok, body }) => {
        if (ok) {
            showToast('Registration successful! Redirecting to login...', 'success');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        } else {
            showToast(body.message || 'Registration failed. Try again.', 'error');
        }
    })
    .catch(err => {
        console.error('Register error:', err);
        showToast('Network error. Please check your connection.', 'error');
    });
}

// Handle login form
function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('email')?.value.trim();
    const password = document.getElementById('password')?.value;

    if (!email || !password) {
        showToast('Please enter email and password', 'error');
        return;
    }

    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })))
    .then(({ ok, body }) => {
        if (ok) {
            localStorage.setItem('token', body.token);
            showToast('Login successful! Redirecting...', 'success');
            setTimeout(() => {
                window.location.href = 'index.html'; // or 'products.html' / 'cart.html'
            }, 1200);
        } else {
            showToast(body.message || 'Invalid email or password', 'error');
        }
    })
    .catch(err => {
        console.error('Login error:', err);
        showToast('Network error. Please try again.', 'error');
    });
}

// Attach form listeners when page loads
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});