// public/js/products.js – with simple product card animations

// Sample data (unchanged)
// js/products.js

const sampleProducts = [
  {
    _id: "1",
    name: "Wireless Earbuds Pro",
    price: 2499,
    image: "https://thumbs.dreamstime.com/b/rostov-don-russia-december-apple-airpods-pro-white-background-wireless-headphones-charging-case-box-close-up-171491430.jpg",
    category: "electronics",
    description: "Premium true wireless earbuds featuring active noise cancellation (ANC), transparency mode, powerful 11mm dynamic drivers for deep bass, IPX4 sweat and water resistance, up to 30 hours total playback with the charging case (6 hours per charge), fast charging (10 minutes = 2 hours), intuitive touch controls, low-latency gaming mode, crystal-clear calls with dual microphones, and ergonomic in-ear fit. Ideal for music lovers, commuters, and fitness enthusiasts."
  },
  {
    _id: "2",
    name: "Smart Watch Series 8",
    price: 12499,
    image: "https://specials-images.forbesimg.com/imageserve/6787d9f00c13a4abf6a298cb/image-of-Garmin-Venu-3-Fitness-Tracker-in-black-on-white-background/960x0.jpg?cropX1=0&cropX2=1080&cropY1=0&cropY2=720",
    category: "electronics",
    description: "Advanced smartwatch with always-on AMOLED display, comprehensive health monitoring including blood oxygen (SpO2), ECG, continuous heart rate, advanced sleep tracking with stages, body temperature sensor, fall & crash detection, built-in GPS for accurate route tracking, 50m water resistance, up to 18 hours battery life (extendable in smart mode), music storage & playback, contactless payments, smartphone notifications, and customizable watch faces. Perfect fitness and lifestyle companion."
  },
  {
    _id: "3",
    name: "4K Smart TV 55 inch",
    price: 44999,
    image: "https://res.cloudinary.com/dnpkvlbae/image/fetch/c_auto,f_auto,q_auto:best,h_560/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/c78a6ab4-ed1e-11ef-8ba4-7282e31ca33e.jpg",
    category: "electronics",
    description: "55-inch 4K Ultra HD Smart LED TV with vibrant colors via Dolby Vision & HDR10+, smooth motion handling with MEMC technology, Google TV / Android OS for seamless app access (Netflix, YouTube, Prime Video), built-in Google Assistant & Chromecast, voice remote control, 60Hz refresh rate with low-latency Game Mode, 20W Dolby Audio speakers, multiple HDMI 2.1 ports (supports ALLM & eARC), slim modern bezel-less design, and excellent viewing angles. Transform your living room entertainment."
  },
  {
    _id: "4",
    name: "Men's Running Shoes",
    price: 3499,
    image: "https://st2.depositphotos.com/32517670/48012/i/1600/depositphotos_480123362-stock-photo-pair-new-unbranded-blue-running.jpg",
    category: "clothing",
    description: "Lightweight performance running shoes with breathable engineered mesh upper for maximum ventilation, responsive EVA foam midsole for superior cushioning and energy return, durable rubber outsole with multi-directional traction pattern, padded tongue and collar for comfort, reflective accents for visibility during night runs, reinforced toe cap, and excellent arch support. Designed for daily jogging, training, and long-distance runs."
  },
  {
    _id: "5",
    name: "Casual Cotton T-Shirt",
    price: 799,
    image: "https://thumbs.dreamstime.com/b/clean-white-t-shirt-folded-neatly-fabric-background-providing-blank-canvas-showcasing-designs-promoting-fashion-337536019.jpg",
    category: "clothing",
    description: "Classic everyday t-shirt made from premium 180 GSM 100% combed ring-spun cotton for ultra-soft feel and durability. Features regular fit, bio-washed fabric to prevent shrinking, crew neck, taped neck & shoulders, double-needle stitched hems for longevity, pre-shrunk material, and vibrant color retention even after multiple washes. Perfect base layer or standalone casual wear in a variety of solid colors."
  },
  {
    _id: "6",
    name: "Leather Wallet",
    price: 1499,
    image: "https://www.billykirk.com/cdn/shop/files/7.png?v=1724889436",
    category: "accessories",
    description: "Handcrafted genuine full-grain leather bifold wallet with rich patina over time. Includes 8 card slots, 2 clear ID windows, spacious bill compartment, optional coin pocket with secure snap, hand-stitched saddle edges for durability, slim & pocket-friendly profile, and built-in RFID-blocking lining to protect against digital theft. Timeless design combining functionality and premium craftsmanship."
  },
  {
    _id: "7",
    name: "Bluetooth Speaker",
    price: 3299,
    image: "https://cdn.shopify.com/s/files/1/1593/5675/files/image15_d1139d34-2e6b-4f18-b84f-32e3b49f1864_1024x1024.png?v=1764149169",
    category: "electronics",
    description: "Portable cylindrical Bluetooth 5.3 speaker delivering powerful 360° immersive sound with 20W output, deep bass via dual passive radiators, up to 24 hours continuous playtime on a single charge, IPX7 waterproof and dustproof rating (fully submersible), built-in speakerphone microphone for clear calls, stereo pairing capability for enhanced soundstage, AUX input option, colorful LED mood lighting, and rugged floating design perfect for outdoor adventures, parties, or travel."
  },
  {
    _id: "8",
    name: "Yoga Mat 6mm",
    price: 999,
    image: "https://i5.walmartimages.com/seo/BalanceFrom-All-Purpose-1-Inch-Extra-Thick-High-Density-Anti-Tear-Exercise-Yoga-Mat-with-Carrying-Strap-Purple_af555660-bedf-4b88-babd-5d8aafbdad97_2.6a3db669ab5d2f00f32d93d66a33acc3.jpeg",
    category: "fitness",
    description: "Extra-thick 6mm high-density TPE yoga mat providing superior joint cushioning and support during poses. Features non-slip textured surfaces on both sides for excellent grip (even when sweaty), moisture-resistant and easy-to-clean material, eco-friendly & non-toxic composition, printed alignment lines to help with pose accuracy, includes convenient carrying strap, lightweight yet durable construction, and available in calming colors. Ideal for yoga, Pilates, stretching, and floor exercises."
  },
  {
    _id: "9",
    name: "Stainless Steel Water Bottle",
    price: 699,
    image: "https://assets.replocdn.com/projects/73b5f043-f3bb-4c01-bb20-bbe2b1b71c19/db9576e7-b11f-48c7-a45c-2c98eb4654ea",
    category: "home",
    description: "Premium 1L double-wall vacuum insulated stainless steel bottle that keeps beverages ice-cold for up to 24 hours and piping hot for 12 hours. Features leak-proof screw-top lid with integrated carry loop, BPA-free food-grade 18/8 stainless steel construction, powder-coated matte finish for grip and scratch resistance, wide mouth for easy filling & cleaning, fits most car cup holders, and condensation-free exterior. Perfect for gym, office, travel, or daily hydration."
  },
  {
    _id: "10",
    name: "Coffee Maker",
    price: 5999,
    image: "https://cdn.shopify.com/s/files/1/0078/9502/3675/files/01_2026_SCA_Coffee_Makers_6819.jpg?v=1768920790",
    category: "home",
    description: "Programmable 10-cup drip coffee maker with thermal carafe option, featuring 24-hour brew timer, pause-and-serve function, adjustable brew strength selector, auto shut-off for safety, removable & dishwasher-safe filter basket, water level indicator window, non-stick warming plate (keeps coffee hot for hours), and sleek modern black stainless design. Delivers consistent, flavorful coffee every time — SCA Golden Cup certified performance."
  },
  {
    _id: "11",
    name: "Wireless Mouse",
    price: 1299,
    image: "https://www.ergodirect.com/images/GoldTouch_/19264/large/Goldtouch-KOV-N300BWL-Wireless-Large-Newtral-3-Ergonomic-Mouse_lg_1722937669.jpg",
    category: "electronics",
    description: "Ergonomic wireless mouse designed for comfort during long hours of use. Features adjustable DPI up to 16000 for precision, quiet clickable buttons, contoured shape to reduce wrist strain, 2.4GHz USB receiver or Bluetooth connectivity, long battery life (up to 18 months on AA batteries), programmable buttons, scroll wheel with tilt function, and plug-and-play compatibility with Windows/Mac. Ideal for office work, design, and productivity."
  },
  {
    _id: "12",
    name: "Backpack 30L",
    price: 2199,
    image: "https://jetsetgear.com/cdn/shop/products/30L_bl3_1080x.jpg?v=1658764921",
    category: "accessories",
    description: "Versatile 30L travel & daily backpack with water-resistant polyester fabric, padded laptop sleeve (fits up to 15.6\" devices), multiple organized compartments including quick-access front pocket, side water bottle pockets, breathable mesh back panel and adjustable shoulder straps for comfort, durable YKK zippers, hidden anti-theft pocket, luggage trolley sleeve, and stylish minimalist design. Great for commuting, short trips, school, or gym use."
  },
  {
    _id: "13",
    name: "Sunglasses Polarized",
    price: 1899,
    image: "https://thumbs.dreamstime.com/b/stylish-metal-frame-aviator-sunglasses-accessory-view-close-up-eye-protection-fashionable-men-s-eyewear-product-shot-isolated-413802381.jpg",
    category: "accessories",
    description: "Classic aviator-style polarized sunglasses with UV400 protection to block 100% harmful UVA/UVB rays, reducing glare and improving clarity & contrast. Features lightweight metal frame, adjustable nose pads, durable scratch-resistant lenses, spring hinges for comfort, and timeless teardrop shape. Perfect for driving, outdoor activities, beach days, or everyday fashion statement."
  },
  {
    _id: "14",
    name: "Electric Kettle 1.7L",
    price: 1499,
    image: "https://m.media-amazon.com/images/I/51fWcgZhsQL._AC_UF894,1000_QL80_.jpg",
    category: "home",
    description: "Fast-boil 1.7L stainless steel electric kettle with 360° swivel base, concealed heating element for easy cleaning, auto shut-off & boil-dry protection, LED power indicator, ergonomic handle with soft-grip, wide spout for precise pouring, cord storage, and sleek cordless design. Boils water in under 5 minutes — ideal for tea, coffee, instant noodles, or hot beverages."
  },
  {
    _id: "15",
    name: "Desk Lamp LED",
    price: 899,
    image: "https://cdn11.bigcommerce.com/s-492apnl0xy/images/stencil/1280x1280/attribute_rule_images/4675_source_1519943134.jpg",
    category: "home",
    description: "Adjustable LED desk lamp with clamp mount or stable base, featuring touch controls for 3 color temperatures (warm, natural, cool), 5 brightness levels, flexible gooseneck arm for precise positioning, eye-caring uniform light without flicker or glare, long lifespan LEDs (up to 50,000 hours), USB charging port on base, memory function to save last setting, and modern matte black finish. Perfect for studying, working, or reading."
  },
  {
    _id: "16",
    name: "Protein Shaker Bottle",
    price: 499,
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5022b81d-fe65-49ef-9d5d-afb390f589ff.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    category: "fitness",
    description: "600ml leak-proof protein shaker with secure screw-on lid, built-in wire whisk ball for smooth mixing without clumps, wide mouth for easy adding & cleaning, measurement markings on side, ergonomic grip, flip-top spout with lock, BPA-free & food-safe plastic, dishwasher-safe, and motivational unique designs. Essential for gym-goers, athletes, and anyone making protein shakes or meal replacements."
  },
  {
    _id: "17",
    name: "Portable Power Bank 20000mAh",
    price: 2499,
    image: "https://m.media-amazon.com/images/I/51YhU57NVVL._AC_UF894,1000_QL80_.jpg",
    category: "electronics",
    description: "High-capacity 20000mAh portable charger with fast charging support (PD & QC compatible), dual USB-A + USB-C ports for simultaneous charging of multiple devices, LED battery level indicators, slim & lightweight aluminum alloy body, built-in safeguards against overcharge/overheat/short-circuit, micro-USB & USB-C input options, and enough power for 4–6 full smartphone charges. Must-have for travel, emergencies, or heavy phone users."
  },
  {
    _id: "18",
    name: "Wall Clock Modern",
    price: 1299,
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/2d5ca709-e127-4e8a-a2be-bd9ffdd94b60.__CR691,0,1600,1200_PT0_SX800_V1___.jpg",
    category: "home",
    description: "Large minimalist wall clock (35–40 cm diameter) with silent non-ticking quartz movement, bold Roman numerals on matte black shiplop-style wooden face, slim metal hands, glass cover for dust protection, easy wall mounting hook, and farmhouse/modern aesthetic that complements living rooms, offices, kitchens, or bedrooms. Accurate timekeeping without annoying ticking sounds."
  },
  {
    _id: "19",
    name: "Men's Hoodie",
    price: 1999,
    image: "https://m.media-amazon.com/images/I/51ZPbTJxHHL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg",
    category: "clothing",
    description: "Cozy regular-fit fleece hoodie with kangaroo pocket, adjustable drawstring hood, ribbed cuffs & hem to retain shape, brushed interior for softness, durable double-stitched seams, and subtle logo embroidery. Made from cotton-poly blend for warmth without bulk. Ideal for casual wear, layering, gym sessions, or lounging."
  },
  {
    _id: "20",
    name: "Wireless Keyboard & Mouse Combo",
    price: 2799,
    image: "https://m.media-amazon.com/images/I/61xztIXySgL._AC_UF894,1000_QL80_.jpg",
    category: "electronics",
    description: "Compact wireless keyboard and mouse set with quiet scissor-switch keys, full-size layout with multimedia hotkeys, ergonomic mouse with 1600 DPI adjustable sensor, 2.4GHz USB nano receiver (one for both devices), up to 12 months battery life (AA batteries), auto sleep mode for power saving, spill-resistant keyboard design, and plug-and-play compatibility. Space-saving & reliable for home office, travel, or desktop use."
  }
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
        card.style.transitionDelay = `${index * 0.08}s`;

        // Improved card layout
        card.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${p.image || '/images/placeholder.jpg'}" 
                     alt="${p.name}" 
                     style="width:100%; height:220px; object-fit:contain; padding:1rem; background:#f9f9f9;"
                     onclick="window.location.href='product.html?id=${p._id}'">
            </div>
            <div class="product-info" style="padding:1rem;">
                <h3 style="font-size:1.2rem; margin:0 0 0.6rem; height:2.8em; overflow:hidden;">${p.name}</h3>
                <p class="short-desc" style="font-size:0.95rem; color:#555; line-height:1.5; margin-bottom:1rem; height:4.5em; overflow:hidden;">
                    ${p.description ? p.description.substring(0, 100) + (p.description.length > 100 ? '...' : '') : 'No description available.'}
                </p>
                <p style="font-size:1.3rem; font-weight:bold; color:#28a745; margin:0.8rem 0;">
                    ₹${Number(p.price).toFixed(0)}
                </p>
                <button class="add-to-cart" 
                        data-id="${p._id}" 
                        data-name="${p.name.replace(/"/g, '&quot;')}" 
                        data-price="${p.price}" 
                        data-image="${p.image || ''}">
                    Add to Cart
                </button>
            </div>
        `;

        container.appendChild(card);

        // Animation
        setTimeout(() => card.classList.add('visible'), 50);
    });

    // Re-attach add-to-cart listeners
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
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