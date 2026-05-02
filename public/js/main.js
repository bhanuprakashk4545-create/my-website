// public/js/main.js
// Shared global logic for all pages (auth, toast, cart count, logout)

// js/main.js - global helpers

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) {
    console.warn('Toast container missing');
    return;
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;

  // Type-specific colors
  switch (type) {
    case 'success':
      toast.style.background = '#10b981';
      break;
    case 'error':
      toast.style.background = '#ef4444';
      break;
    case 'warning':
      toast.style.background = '#f59e0b';
      break;
    default:
      toast.style.background = '#3b82f6';
  }

  toast.style.color = 'white';
  toast.style.padding = '14px 20px';
  toast.style.borderRadius = '8px';
  toast.style.marginBottom = '10px';
  toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
  toast.style.opacity = '0';
  toast.style.transform = 'translateX(120%)';
  toast.style.transition = 'all 0.4s ease';

  container.appendChild(toast);

  // Show
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(0)';
  }, 100);

  // Hide & remove
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(120%)';
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
    fetch('https://my-shop-one-rho.vercel.app/api/auth/me', {
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
// Hamburger menu toggle
const hamburger = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking a link (optional)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}
// Open Mini Cart
function openMiniCart() {
  document.getElementById('mini-cart').classList.add('open');
  document.getElementById('cart-overlay').classList.add('active');
  updateMiniCart();
}

// Close Mini Cart
function closeMiniCart() {
  document.getElementById('mini-cart').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('active');
}

// Update Mini Cart Content
function updateMiniCart() {
  const cart = getCart();
  const container = document.getElementById('mini-cart-items');
  const countEl = document.getElementById('mini-cart-count');
  const totalEl = document.getElementById('mini-cart-total');

  countEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  let total = 0;
  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:#64748b;">
        <h2 style="font-size:3rem; margin:0;">🛒</h2>
        <p>Your cart is empty</p>
      </div>`;
    totalEl.textContent = '₹0.00';
    return;
  }

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    container.innerHTML += `
      <div class="mini-cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div style="flex:1">
          <p style="margin:0 0 4px 0; font-weight:600;">${item.name}</p>
          <p style="margin:0; color:#28a745;">₹${item.price} × ${item.quantity}</p>
        </div>
        <div style="text-align:right">
         <button onclick="changeMiniQty(${index}, -1)" style="width:28px;height:28px">-</button>
          <button onclick="changeMiniQty(${index}, 1)" style="width:28px;height:28px">+</button>
          <button onclick="removeFromMiniCart(${index})"  margin-left:8px;" style="
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 7px 15px;
          background: linear-gradient(135deg, #f87171, #ef4444);
          color: white;
          font-size: 1.15rem;
          font-weight: 600;
          border: none;
          border-radius: 9999px;
          box-shadow: 0 4px 16px rgba(248,113,113,0.4);
          transition: all 0.3s ease;
          cursor: pointer;
        " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 25px rgba(248,113,113,0.6)'"
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 16px rgba(248,113,113,0.4)'">Remove</button>
        </div>
      </div>`;
  });

  totalEl.textContent = `₹${total.toFixed(2)}`;
}

// Quantity change in mini cart
window.changeMiniQty = function(index, change) {
  const cart = getCart();
  cart[index].quantity += change;
  if (cart[index].quantity < 1) cart[index].quantity = 1;
  localStorage.setItem('cart', JSON.stringify(cart));
  updateMiniCart();
  updateCartCount();
};

// Remove from mini cart
window.removeFromMiniCart = function(index) {
  let cart = getCart();
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateMiniCart();
  updateCartCount();
  showToast('Item removed', 'info');
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  const cartLink = document.querySelector('.cart-link');
  if (cartLink) cartLink.addEventListener('click', (e) => {
    e.preventDefault();
    openMiniCart();
  });

  document.getElementById('close-cart').addEventListener('click', closeMiniCart);
  document.getElementById('cart-overlay').addEventListener('click', closeMiniCart);

  document.getElementById('mini-checkout-btn').addEventListener('click', () => {
    closeMiniCart();
    window.location.href = 'checkout.html';
  });
  document.getElementById('mini-view-cart-btn').addEventListener('click', () => {
    closeMiniCart();
    window.location.href = 'cart.html';
  });

  document.getElementById('mini-continue-btn').addEventListener('click', closeMiniCart);
});
// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  
  // Save preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// Initialize Dark Mode
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleDarkMode);
  }

  // Load saved preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }
});
// Magnetic Button Effect
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.magnetic-btn');

  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

// Call this after page loads
document.addEventListener('DOMContentLoaded', initMagneticButtons);
// Make functions available globally if needed in inline scripts
window.showToast = showToast;
window.updateCartCount = updateCartCount;
window.updateAuthUI = updateAuthUI;
window.logout = logout;