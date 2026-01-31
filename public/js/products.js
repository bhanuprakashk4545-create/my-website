// public/js/products.js – with simple product card animations

// Sample data (unchanged)
const sampleProducts = [
  { _id: "1", name: "Wireless Earbuds Pro", price: 2499, image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434", category: "electronics", description: "Noise-cancelling true wireless earbuds with 30h battery", stock: 45 },
  { _id: "2", name: "Smart Watch Series 8", price: 12499, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12", category: "electronics", description: "Fitness tracking, heart rate, blood oxygen monitor", stock: 18 },
  { _id: "3", name: "4K Smart TV 55 inch", price: 44999, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f69d5b", category: "electronics", description: "OLED display, Dolby Vision, Google TV", stock: 12 },
  { _id: "4", name: "Men's Running Shoes", price: 3499, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", category: "clothing", description: "Breathable mesh, lightweight cushioning", stock: 65 },
  { _id: "5", name: "Casual Cotton T-Shirt", price: 799, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab", category: "clothing", description: "100% combed cotton, regular fit", stock: 120 },
  { _id: "6", name: "Leather Wallet", price: 1499, image: "https://images.unsplash.com/photo-1627123424574-724758324b84", category: "accessories", description: "Genuine leather, 8 card slots, RFID protection", stock: 38 },
  { _id: "7", name: "Bluetooth Speaker", price: 3299, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1", category: "electronics", description: "Waterproof, 360° sound, 24h playtime", stock: 22 },
  { _id: "8", name: "Yoga Mat 6mm", price: 999, image: "https://images.unsplash.com/photo-1592432678016-e910b881f144", category: "fitness", description: "Non-slip, eco-friendly TPE material", stock: 55 },
  { _id: "9", name: "Stainless Steel Water Bottle", price: 699, image: "https://images.unsplash.com/photo-1602488289408-9d9b5d3b7e5d", category: "home", description: "Double-wall insulated, 1L capacity", stock: 80 },
  { _id: "10", name: "Coffee Maker", price: 5999, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085", category: "home", description: "Drip coffee machine with timer", stock: 15 },
  { _id: "11", name: "Wireless Mouse", price: 1299, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39d7", category: "electronics", description: "Ergonomic design, 16000 DPI", stock: 42 },
  { _id: "12", name: "Backpack 30L", price: 2199, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62", category: "accessories", description: "Water-resistant, laptop compartment", stock: 28 },
  { _id: "13", name: "Sunglasses Polarized", price: 1899, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f", category: "accessories", description:" UV400",stock: 50 },
  { _id: "14", name: "Electric Kettle 1.7L", price: 1499, image: "https://images.unsplash.com/photo-1597921257828-6d4a6c2d9c8f", category: "home", description: "Stainless steel, auto shut-off", stock: 33 },
  { _id: "15", name: "Desk Lamp LED", price: 899, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c", category: "home", description: "Touch control, 3 color modes", stock: 67 },
  { _id: "16", name: "Protein Shaker Bottle", price: 499, image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61", category: "fitness", description: "600ml, leak-proof, mixer ball included", stock: 95 },
  { _id: "17", name: "Portable Power Bank 20000mAh", price: 2499, image: "https://images.unsplash.com/photo-1606293459212-8cf8e3f8e8d0", category: "electronics", description: "Fast charging, dual USB output", stock: 19 },
  { _id: "18", name: "Wall Clock Modern", price: 1299, image: "https://images.unsplash.com/photo-1565602812202-5a22c28c4c4a", category: "home", description: "Silent mechanism, minimalist design", stock: 40 },
  { _id: "19", name: "Men's Hoodie", price: 1999, image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8", category: "clothing", description: "Fleece-lined, kangaroo pocket", stock: 58 },
  { _id: "20", name: "Wireless Keyboard & Mouse Combo", price: 2799, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3", category: "electronics", description: "Compact, long battery life", stock: 25 }
];

let allProducts = [];
let currentSort = 'default';

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function loadProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = '<div class="loading">Loading products...</div>';

    setTimeout(() => {
        allProducts = [...sampleProducts];
        updateProductDisplay();
    }, 800);
}

function sortProducts(products) {
    let sorted = [...products];

    switch (currentSort) {
        case 'price-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            break;
    }

    return sorted;
}

function renderProducts(productsToShow) {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = '';

    if (productsToShow.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:4rem; color:#666;">No products found.</p>';
        return;
    }

    productsToShow.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.transitionDelay = `${index * 0.1}s`; // stagger animation delay

        card.innerHTML = `
  <img src="${p.image || '/images/placeholder.jpg'}" alt="${p.name}"
       style="cursor:pointer;"
       onclick="window.location.href='product.html?id=${p._id}'">
  <h3>${p.name}</h3>
  <p class="short-desc" style="font-size:0.9rem; color:#666; padding:0 1rem 0.5rem; line-height:1.4;">${p.description.substring(0, 60)}...</p>
  <p style="font-weight:bold; color:#28a745; padding:0 1rem;">₹${Number(p.price).toFixed(2)}</p>
  <button class="add-to-cart" data-id="${p._id}" data-name="${p.name.replace(/"/g, '&quot;')}" data-price="${p.price}" data-image="${p.image || ''}">
    Add to Cart
  </button>
`;

        card.querySelector('.add-to-cart').addEventListener('click', e => {
            e.stopPropagation();
        });

        container.appendChild(card);

        // Trigger animation after tiny delay
        setTimeout(() => card.classList.add('visible'), 100);
    });

    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', e => {
            const { id, name, price, image } = e.target.dataset;
            addToCart(id, name, Number(price), image);
            showToast(`Added ${name} to cart!`);
        });
    });
}

function updateProductDisplay() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase().trim() || '';
    const activeBtn = document.querySelector('.filter-btn.active');
    const category = activeBtn ? activeBtn.dataset.category : 'all';

    let filtered = allProducts;

    if (category !== 'all') {
        filtered = filtered.filter(p => 
            (p.category || '').toLowerCase() === category.toLowerCase()
        );
    }

    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            (p.description || '').toLowerCase().includes(searchTerm)
        );
    }

    const sorted = sortProducts(filtered);
    renderProducts(sorted);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('products-container')) return;

    loadProducts();

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', updateProductDisplay);
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateProductDisplay();
        });
    });

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', e => {
            currentSort = e.target.value;
            updateProductDisplay();
        });
    }
});