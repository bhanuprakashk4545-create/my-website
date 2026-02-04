// public/js/products.js – fixed version with single teaser text & no duplicate toast

const sampleProducts = [
  {
    _id: "1",
    name: "Wireless Earbuds Pro",
    price: 10,
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
  },
  {
    _id: "21",
    name: "Noise Cancelling Headphones",
    price: 5999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    category: "electronics",
    description: "Over-ear wireless headphones with industry-leading active noise cancellation, 40mm drivers for deep bass and clear mids, up to 30 hours battery life with ANC on, quick charge (10 min = 5 hours), foldable design, built-in mic for calls, touch controls, comfortable memory foam ear cushions. Perfect for travel, work, and immersive listening."
  },
  {
    _id: "22",
    name: "Mechanical Gaming Keyboard RGB",
    price: 3499,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    category: "electronics",
    description: "RGB backlit mechanical keyboard with red linear switches, full N-key rollover, durable aluminum frame, customizable per-key RGB lighting, media control knob, anti-ghosting, spill-resistant, detachable USB-C cable, dedicated macro keys. Ideal for gaming and typing enthusiasts."
  },
  {
    _id: "23",
    name: "4K Action Camera 4K/60fps",
    price: 8999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    category: "electronics",
    description: "Waterproof action camera with 4K/60fps video, 20MP photos, 170° super-wide angle, electronic image stabilization (EIS), dual-screen (front + rear), voice control, time-lapse, slow-motion, Wi-Fi & Bluetooth, multiple mounting accessories included. Perfect for vlogging, sports, travel."
  },
  {
    _id: "24",
    name: "Men's Casual Sneakers",
    price: 2499,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800",
    category: "clothing",
    description: "Breathable mesh casual sneakers with cushioned EVA midsole, durable rubber outsole, lace-up closure, padded collar & tongue, lightweight design, available in multiple colors. Comfortable for daily wear, walking, casual outings."
  },
  {
    _id: "25",
    name: "Women's Oversized Hoodie",
    price: 1799,
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800",
    category: "clothing",
    description: "Cozy oversized hoodie with fleece lining, drop shoulders, ribbed cuffs & hem, kangaroo pocket, drawstring hood, soft cotton-poly blend, relaxed fit. Perfect for lounging, casual streetwear, layering in cooler weather."
  },
  {
    _id: "26",
    name: "Crossbody Sling Bag",
    price: 1299,
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800",
    category: "accessories",
    description: "Compact sling bag with water-resistant nylon, adjustable strap, multiple compartments, front zip pocket, hidden anti-theft pocket, breathable back panel, lightweight design. Ideal for travel, daily commute, outdoor activities."
  },
  {
    _id: "27",
    name: "Smart LED Strip Lights 5m",
    price: 1499,
    image: "https://okos.in/cdn/shop/products/led-mainPic.jpg?v=1606648079",
    category: "home",
    description: "5m RGB LED strip with 16 million colors, app control via Wi-Fi, music sync, timer, dimmable, adhesive backing, cuttable every 10cm, compatible with Alexa & Google Home. Perfect for room ambiance, gaming setup, parties."
  },
  {
    _id: "28",
    name: "Adjustable Dumbbell Set 2-20kg",
    price: 7999,
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/dumbbell/g/t/z/20kg-2kg-x-4-3kg-x-4-dumbbell-combo-set-20-amanfit-original-imahdny8ce7emmjn.jpeg?q=90",
    category: "fitness",
    description: "Space-saving adjustable dumbbells (2–20kg each) with quick dial adjustment, ergonomic handle, durable steel plates, protective rubber coating, non-slip grip. Ideal for home workouts, strength training, full-body exercises."
  },
  {
    _id: "29",
    name: "Ceramic Non-Stick Cookware Set",
    price: 3499,
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/cookware-set/s/k/j/-original-imah8rf6bpuzvqrj.jpeg?q=90",
    category: "home",
    description: "10-piece ceramic non-stick cookware set with induction-compatible base, even heat distribution, stay-cool handles, tempered glass lids, PFOA-free coating, dishwasher-safe. Includes fry pans, saucepans, casserole, steamer. Perfect for healthy cooking."
  },
  {
    _id: "30",
    name: "Noise Cancelling Earbuds",
    price: 3499,
    image: "https://www.boat-lifestyle.com/cdn/shop/products/AD411ANC-FI-Black02_8844f4c6-a7dc-49f4-9b0c-c72edf5c03d8_1500x.png?v=1655187800",
    category: "electronics",
    description: "True wireless earbuds with hybrid ANC, 10mm drivers, IPX5 sweat resistance, up to 28 hours total battery with case, fast charging, touch controls, low-latency gaming mode, clear calls with ENC, ergonomic fit. Great for workouts, calls, travel."
  },
  {
    _id: "31",
    name: "Gaming Mouse RGB 16000 DPI",
    price: 1999,
    image: "https://m.media-amazon.com/images/I/41p6Z33hQhL._AC_UF1000,1000_QL80_.jpg",
    category: "electronics",
    description: "RGB gaming mouse with 16000 DPI optical sensor, 6 programmable buttons, lightweight design, honeycomb shell, ultra-flexible cable, 1000Hz polling rate, ergonomic shape, durable switches. Ideal for FPS, MOBA, and competitive gaming."
  },
  {
    _id: "32",
    name: "Men's Slim Fit Jeans",
    price: 1899,
    image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800",
    category: "clothing",
    description: "Slim fit stretch jeans with 98% cotton + 2% elastane, 5-pocket design, zip fly, distressed detailing, comfortable mid-rise, durable stitching, available in multiple washes. Perfect for casual and semi-formal looks."
  },
  {
    _id: "33",
    name: "Travel Neck Pillow Memory Foam",
    price: 899,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    category: "accessories",
    description: "Ergonomic U-shaped neck pillow with slow rebound memory foam, soft velour cover, adjustable buckle strap, breathable mesh panel, portable & compact, supports head & neck. Ideal for flights, trains, car rides."
  },
  {
    _id: "34",
    name: "Robot Vacuum Cleaner",
    price: 14999,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800",
    category: "home",
    description: "Smart robot vacuum with 2000Pa suction, LiDAR navigation, app control, zone cleaning, no-go zones, auto recharge, mopping function, HEPA filter, quiet operation, works with Alexa & Google Home. Keeps floors clean effortlessly."
  },
  {
    _id: "35",
    name: "Resistance Bands Set 5 Levels",
    price: 999,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800",
    category: "fitness",
    description: "5-piece resistance bands set (extra light to extra heavy), non-slip handles, door anchor, carrying bag, latex-free options available, perfect for home workouts, physical therapy, strength training, glute activation."
  },
  {
    _id: "36",
    name: "Digital Kitchen Scale 10kg",
    price: 799,
    image: "https://m.media-amazon.com/images/I/51eT5HTNMRL._AC_UF1000,1000_QL80_.jpg",
    category: "home",
    description: "High-precision digital kitchen scale (0.1g–10kg), tare function, unit conversion (g/oz/lb/ml), LCD display, stainless steel platform, auto-off, overload protection, sleek design. Perfect for baking, cooking, portion control."
  },
  {
    _id: "37",
    name: "Portable Mini Projector",
    price: 9999,
    image: "https://m.media-amazon.com/images/I/51GTqntMW8L.jpg",
    category: "electronics",
    description: "1080p mini projector with 200 ANSI lumens, built-in speaker, Wi-Fi & Bluetooth, HDMI/USB ports, keystone correction, up to 200-inch screen, compact & portable, supports Netflix/YouTube via mirroring. Great for home theater, gaming."
  },
  {
    _id: "38",
    name: "Women's Sports Leggings High Waist",
    price: 1299,
    image: "https://www.berrylush.com/cdn/shop/products/1_39c90e26-9549-4c88-af86-d0f9a94c24f9.jpg?v=1750071838",
    category: "clothing",
    description: "High-waist compression leggings with squat-proof fabric, moisture-wicking, 4-way stretch, side pockets, seamless design, flattering ruched back, available in multiple colors. Perfect for gym, yoga, running, casual wear."
  },
  {
    _id: "39",
    name: "Insulated Lunch Box 3 Compartments",
    price: 899,
    image: "https://m.media-amazon.com/images/I/71s5Xn6BUVL._AC_UF894,1000_QL80_.jpg",
    category: "home",
    description: "3-compartment insulated lunch box with leak-proof design, removable divider, stainless steel inner layer, keeps food hot/cold 6+ hours, microwave & dishwasher safe (container only), includes spoon & fork, carry bag. Ideal for office, school, travel."
  },
  {
    _id: "40",
    name: "True Wireless Earbuds Bass Boost",
    price: 1999,
    image: "https://m.media-amazon.com/images/I/41ajZ0GWisL._AC_UF1000,1000_QL80_.jpg",
    category: "electronics",
    description: "TWS earbuds with powerful bass, 13mm drivers, IPX5 water resistance, up to 32 hours total battery with case, fast charging, touch controls, ENC for clear calls, gaming low-latency mode, ergonomic fit. Great for music, calls, workouts."
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
    card.style.transitionDelay = `${index * 0.1}s`;
    card.style.cursor = 'pointer'; // hand cursor on whole card

    card.innerHTML = `
      <img src="${p.image || '/images/placeholder.jpg'}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p style="color:#007bff; font-size:0.9rem; padding:0 1rem 0.5rem; line-height:1.4; margin:0; font-style:italic;">
        more details ...
      </p>
      <p style="font-weight:bold; color:#28a745; padding:0 1rem;">₹${Number(p.price).toFixed(2)}</p>
      <button class="add-to-cart outline-btn" data-id="${p._id}" data-name="${p.name.replace(/"/g, '&quot;')}" data-price="${p.price}" data-image="${p.image}">
  <i class="fas fa-cart-plus"></i> Add to Cart
</button>
    `;

    // Click anywhere on the card (image, name, teaser text) → open detail page
    card.addEventListener('click', (e) => {
      // Don't open detail if clicking Add to Cart button
      if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
        return;
      }
      window.location.href = `product.html?id=${p._id}`;
    });

    // Add to Cart button works normally
    card.querySelector('.add-to-cart').addEventListener('click', (e) => {
  e.stopPropagation();
  const { id, name, price, image } = e.target.dataset;
  addToCart(id, name, Number(price), image);
  // REMOVE any showToast line here — it's now in cart.js
});

    container.appendChild(card);

    // Trigger fade-in animation
    setTimeout(() => card.classList.add('visible'), 100);
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