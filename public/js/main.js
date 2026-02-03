// public/js/main.js
// Shared global logic for all pages (auth, toast, cart count, logout)

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) {
        console.warn('Toast container missing');
        return;
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    // Show animation
    setTimeout(() => toast.classList.add('show'), 100);

    // Auto-remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function updateAuthUI() {
    const token = localStorage.getItem('token');
    const userStatus = document.getElementById('user-status');
    const loginLink = document.getElementById('login-link');
    const logoutBtn = document.getElementById('logout-btn');

    if (!userStatus) return;

    if (token) {
        // You can later fetch real name from /api/auth/me if you want
        userStatus.textContent = 'Logged in';
        if (loginLink) loginLink.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'inline-block';
    } else {
        userStatus.textContent = 'Guest';
        if (loginLink) loginLink.style.display = 'inline';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('token');
    showToast('Logged out successfully', 'success');
    updateAuthUI();
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1200);
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        cartCountEl.textContent = count;
    }
}

// Run shared logic on every page load
// Check if logged in on every page load
document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  const userStatus = document.getElementById('user-status');

  if (token && userStatus) {
    // Optional: fetch user info from backend
    fetch('http://localhost:3000/api/auth/me', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => {
      if (data.name) {
        userStatus.textContent = `Welcome, ${data.name}`;
      } else {
        userStatus.textContent = 'Logged In';
      }
    })
    .catch(() => {
      userStatus.textContent = 'Logged In';
    });

    // Show logout button
    document.getElementById('logout-btn').style.display = 'inline';
    document.getElementById('login-link').style.display = 'none';
  } else {
    userStatus.textContent = 'Guest';
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('login-link').style.display = 'inline';
  }

  // Logout handler
  document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.removeItem('token');
  localStorage.removeItem('savedAddress');
  localStorage.removeItem('cart'); // clear old cart
  updateCartCount(); // update navbar count to 0
  showToast('Logged out successfully');
  window.location.href = 'login.html';
});
});

// Animate product cards on scroll / load
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    observer.observe(card);
  });
});

// Make functions available globally if needed in inline scripts
window.showToast = showToast;
window.updateCartCount = updateCartCount;
window.updateAuthUI = updateAuthUI;
window.logout = logout;