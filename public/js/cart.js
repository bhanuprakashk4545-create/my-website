// public/js/cart.js
// Complete cart logic for vanilla JS e-commerce

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Global function to save cart and update UI
function saveCartAndUpdateUI() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart icon count in header (called from main.js too)
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        cartCountEl.textContent = count;
    }
}

// Add product to cart
function addToCart(id, name, price, image) {
  let cart = getCart() || [];

  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    // Item already exists → increase quantity
    existingItem.quantity += 1;
    showToast(`Increased quantity of ${name} to ${existingItem.quantity}`, 'success');
  } else {
    // New item → add with quantity 1
    cart.push({ id, name, price, image, quantity: 1 });
    showToast(`Added ${name} to cart!`, 'success');
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCartAndUpdateUI();
    renderCart(); // only call if on cart page
    showToast('Item removed from cart', 'success');
}

// Change item quantity
function changeQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity = Math.max(1, (item.quantity || 1) + delta);
        saveCartAndUpdateUI();
        renderCart(); // refresh display
    }
}

// Render cart items (used on cart.html)
function renderCart() {
    const container = document.getElementById('cart-items');
    const summaryTotal = document.getElementById('cart-total');
    const emptyMsg = document.getElementById('empty-message');
    const summarySection = document.getElementById('cart-summary');

    if (!container) return; // not on cart page

    container.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        if (emptyMsg) emptyMsg.style.display = 'block';
        if (summarySection) summarySection.style.display = 'none';
        return;
    }

    if (emptyMsg) emptyMsg.style.display = 'none';
    if (summarySection) summarySection.style.display = 'block';

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <div style="display:flex; align-items:center; gap:1rem;">
                <img src="${item.image}" alt="${item.name}"
                     style="width:80px; height:80px; object-fit:contain; border-radius:4px;">
                <div>
                    <h4>${item.name}</h4>
                    <small>ID: ${item.id}</small>
                </div>
            </div>
            <span>₹${item.price.toFixed(2)}</span>
            <div style="display:flex; align-items:center; gap:0.5rem;">
                <button class="quantity-btn" onclick="changeQuantity('${item.id}', -1)">–</button>
                <input type="number" value="${item.quantity}" readonly style="width:50px; text-align:center;">
                <button class="quantity-btn" onclick="changeQuantity('${item.id}', 1)">+</button>
            </div>
            <div style="text-align:right;">
                <strong>₹${itemTotal.toFixed(2)}</strong><br>
                <button onclick="removeFromCart('${item.id}')"
                        style="background:#dc3545; color:white; border:none; padding:0.4rem 0.8rem; border-radius:4px; margin-top:0.5rem; cursor:pointer;">
                    Remove
                </button>
            </div>
        `;
        container.appendChild(row);
    });

    if (summaryTotal) {
        summaryTotal.textContent = `₹${total.toFixed(2)}`;
    }
}

// Proceed to checkout handler
function handleCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
        showToast('Please login to proceed to checkout', 'error');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return;
    }

    window.location.href = 'checkout.html';
}

// Initialize on page load (only if elements exist)
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount(); // always update count

    // If on cart page → render items
    if (document.getElementById('cart-items')) {
        renderCart();

        // Attach checkout button listener
        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', handleCheckout);
        }
    }
});

// Make functions available globally so inline onclick can use them
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQuantity = changeQuantity;
window.handleCheckout = handleCheckout;
// Make sure total is updated before redirect
function handleCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
        showToast('Please login to proceed to checkout', 'error');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return;
    }

    // Force save latest cart state
    saveCartAndUpdateUI();
    
    window.location.href = 'checkout.html';
}
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').textContent = count;
}