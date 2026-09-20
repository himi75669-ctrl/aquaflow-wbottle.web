/* ==========================================================================
   AQUAFLOW - Modern E-Commerce Application Logic
   Vanilla JavaScript with Hash Routing, Catalog Filters, Cart Management,
   Interactive Product Detail, Checkout, and LocalStorage State.
   ========================================================================== */

// --- PRODUCT DATASET ---
const PRODUCTS = [
  {
    id: '1',
    name: 'AQUAFLOW Classic',
    category: 'Steel',
    price: 799,
    originalPrice: 999,
    rating: 4.8,
    reviewsCount: 142,
    badge: 'Popular',
    tagline: 'Lightweight everyday single-wall stainless steel bottle.',
    description: 'The AQUAFLOW Classic is our signature single-wall 18/8 stainless steel bottle. Ultra-lightweight yet remarkably durable, it is designed for eco-conscious individuals who want a clean, refreshing sip without carrying extra weight.',
    colors: [
      { name: 'Arctic Blue', hex: '#0ea5e9' },
      { name: 'Midnight Black', hex: '#0f172a' },
      { name: 'Pure White', hex: '#f8fafc' },
      { name: 'Mint Green', hex: '#10b981' }
    ],
    capacities: ['500ml', '750ml', '1000ml'],
    mainImage: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      'Material': '18/8 Pro-Grade Stainless Steel',
      'Cap Type': 'Leak-proof Screw Cap with Ergonomic Handle',
      'Weight': '220 grams',
      'Dimensions': '24.5cm x 7.2cm'
    }
  },
  {
    id: '2',
    name: 'AQUAFLOW Insulated',
    category: 'Insulated',
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviewsCount: 284,
    badge: 'Best Seller',
    tagline: 'Double-wall thermal vacuum insulated bottle.',
    description: 'Engineered with VacuumLock™ double-wall insulation technology, the AQUAFLOW Insulated keeps beverages icy cold for 24 hours or steaming hot for 12 hours. Zero condensation exterior ensures your hands and bag stay dry.',
    colors: [
      { name: 'Ocean Cyan', hex: '#06b6d4' },
      { name: 'Slate Gray', hex: '#334155' },
      { name: 'Sunset Pink', hex: '#f43f5e' },
      { name: 'Cobalt Blue', hex: '#1d4ed8' }
    ],
    capacities: ['750ml', '1000ml'],
    mainImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      'Material': 'Food-Grade 18/8 Stainless Steel (Double Wall)',
      'Insulation': '24 Hours Cold / 12 Hours Hot',
      'Finish': 'Powder Coated Sweat-Free Grip',
      'Weight': '350 grams'
    }
  },
  {
    id: '3',
    name: 'AQUAFLOW Sport',
    category: 'Sport',
    price: 999,
    originalPrice: 1199,
    rating: 4.7,
    reviewsCount: 98,
    badge: 'Active',
    tagline: 'Fast-flow straw lid bottle for quick hydration.',
    description: 'Designed specifically for high-intensity training, gym workouts, and outdoor runs. Features an ergonomic one-click flip straw cap for instant hydration on the move without tilting the bottle.',
    colors: [
      { name: 'Neon Lime', hex: '#84cc16' },
      { name: 'Stealth Black', hex: '#0f172a' },
      { name: 'Electric Blue', hex: '#0ea5e9' }
    ],
    capacities: ['500ml', '750ml'],
    mainImage: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      'Material': 'BPA-Free Shatterproof Tritan Polymer',
      'Lid': 'One-Touch Pop Straw Cap',
      'Weight': '180 grams',
      'Carabiner': 'Included Clip Handle'
    }
  },
  {
    id: '4',
    name: 'AQUAFLOW Steel Pro',
    category: 'Steel',
    price: 1599,
    originalPrice: 1899,
    rating: 5.0,
    reviewsCount: 312,
    badge: 'Pro Heavy Duty',
    tagline: 'Rugged pro-grade thermal steel bottle for harsh outdoors.',
    description: 'The ultimate hydration companion for rugged expeditions and harsh conditions. Features a heavy-duty stainless steel build, dual-opening wide mouth cap, and reinforced rubber impact base.',
    colors: [
      { name: 'Matte Black', hex: '#0f172a' },
      { name: 'Steel Silver', hex: '#94a3b8' },
      { name: 'Forest Green', hex: '#15803d' }
    ],
    capacities: ['1000ml'],
    mainImage: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      'Material': 'Extra Thick 18/8 Double Wall Steel',
      'Insulation': '30 Hours Ice Cold / 18 Hours Hot',
      'Base': 'Anti-slip Silicone Boot Included',
      'Weight': '420 grams'
    }
  },
  {
    id: '5',
    name: 'AQUAFLOW Kids',
    category: 'Kids',
    price: 699,
    originalPrice: 899,
    rating: 4.9,
    reviewsCount: 76,
    badge: 'Kids Edition',
    tagline: 'Leak-proof, non-toxic, colorful bottle for school & play.',
    description: 'Fun, vibrant, and indestructible bottle sized perfectly for children. 100% spill-proof straw lid prevents accidental school bag leaks. Comes with customizable eco-stickers.',
    colors: [
      { name: 'Sunshine Yellow', hex: '#eab308' },
      { name: 'Candy Pink', hex: '#ec4899' },
      { name: 'Sky Cyan', hex: '#06b6d4' }
    ],
    capacities: ['500ml'],
    mainImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      'Material': 'Food-Safe BPA/Phthalate-Free Polymer',
      'Lid': 'Spill-Lock Silicone Straw',
      'Weight': '150 grams',
      'Stickers': 'Set of 10 Waterproof Stickers Included'
    }
  },
  {
    id: '6',
    name: 'AQUAFLOW Travel',
    category: 'Travel',
    price: 1199,
    originalPrice: 1399,
    rating: 4.8,
    reviewsCount: 165,
    badge: 'Tumbler',
    tagline: 'Insulated travel tumbler with coffee & tea flip spout.',
    description: 'Designed for daily office commutes, coffee lovers, and road trips. Slim tapered base fits comfortably into 99% of vehicle cup holders.',
    colors: [
      { name: 'Rose Gold', hex: '#fb7185' },
      { name: 'Slate Gray', hex: '#334155' },
      { name: 'Cream White', hex: '#fef3c7' }
    ],
    capacities: ['500ml', '750ml'],
    mainImage: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      'Material': 'Double Wall Insulated 18/8 Steel',
      'Lid': 'Dual Sip & Straw Travel Lid',
      'Weight': '310 grams',
      'Cup Holder Fit': 'Universal 7cm Tapered Base'
    }
  }
];

// --- APP STATE ---
let cart = JSON.parse(localStorage.getItem('aquaflow_cart')) || [];
let activeDiscount = JSON.parse(localStorage.getItem('aquaflow_discount')) || { code: '', percent: 0 };
let currentSelectedProduct = PRODUCTS[1]; // default AQUAFLOW Insulated
let selectedVariantColor = currentSelectedProduct.colors[0].name;
let selectedCapacity = currentSelectedProduct.capacities[0];
let detailQty = 1;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initHeaderAndDrawer();
  initCartState();
  renderFeaturedProducts();
  initShopFilters();
  initSearchModal();
  initQuickViewModal();
  initCheckoutForm();
});

// --- ROUTER & VIEW SWITCHER ---
function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute(); // initial load
}

function handleRoute() {
  const hash = window.location.hash || '#home';
  const views = document.querySelectorAll('.page-view');
  views.forEach(v => v.classList.remove('active-view'));

  let viewId = 'view-home';
  let navName = 'home';

  if (hash.startsWith('#shop')) {
    viewId = 'view-shop';
    navName = 'shop';
    renderShopCatalog();
  } else if (hash.startsWith('#product')) {
    viewId = 'view-product';
    navName = 'shop';
    const params = new URLSearchParams(hash.split('?')[1]);
    const prodId = params.get('id') || '2';
    const found = PRODUCTS.find(p => p.id === prodId);
    if (found) {
      currentSelectedProduct = found;
      selectedVariantColor = found.colors[0].name;
      selectedCapacity = found.capacities[0];
      detailQty = 1;
    }
    renderProductDetailView();
  } else if (hash.startsWith('#about')) {
    viewId = 'view-about';
    navName = 'about';
  } else if (hash.startsWith('#contact')) {
    viewId = 'view-contact';
    navName = 'contact';
  } else if (hash.startsWith('#cart')) {
    viewId = 'view-cart';
    navName = 'cart';
    renderCartPage();
  } else if (hash.startsWith('#checkout')) {
    viewId = 'view-checkout';
    navName = 'cart';
    renderCheckoutPage();
  } else if (hash.startsWith('#confirmation')) {
    viewId = 'view-confirmation';
    navName = 'cart';
  }

  const activeView = document.getElementById(viewId);
  if (activeView) activeView.classList.add('active-view');

  // Update navbar links active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-nav') === navName);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update sticky mobile bar visibility
  toggleStickyMobileBar(hash.startsWith('#product'));
}

function toggleStickyMobileBar(isProductPage) {
  const bar = document.getElementById('sticky-mobile-bar');
  if (!bar) return;
  if (isProductPage && currentSelectedProduct) {
    document.getElementById('sticky-prod-name').textContent = currentSelectedProduct.name;
    document.getElementById('sticky-prod-price').textContent = `₹${currentSelectedProduct.price}`;
    bar.classList.add('visible');
  } else {
    bar.classList.remove('visible');
  }
}

// --- HEADER & DRAWER INTERACTION ---
function initHeaderAndDrawer() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('mobile-drawer-close');
  const overlay = document.getElementById('overlay');

  const cartBtn = document.getElementById('cart-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartClose = document.getElementById('cart-drawer-close');

  function openDrawer(drawer) {
    drawer.classList.add('open');
    overlay.classList.add('active');
  }

  function closeAllDrawers() {
    mobileDrawer.classList.remove('open');
    cartDrawer.classList.remove('open');
    overlay.classList.remove('active');
    document.getElementById('quick-view-modal').classList.remove('active');
    document.getElementById('search-modal').classList.remove('active');
  }

  if (mobileToggle) mobileToggle.addEventListener('click', () => openDrawer(mobileDrawer));
  if (drawerClose) drawerClose.addEventListener('click', closeAllDrawers);
  if (cartBtn) cartBtn.addEventListener('click', () => {
    renderCartDrawer();
    openDrawer(cartDrawer);
  });
  if (cartClose) cartClose.addEventListener('click', closeAllDrawers);
  if (overlay) overlay.addEventListener('click', closeAllDrawers);

  // Close mobile drawer on link click
  document.querySelectorAll('.mobile-nav-link').forEach(l => {
    l.addEventListener('click', closeAllDrawers);
  });
}

// --- TOAST NOTIFICATION ---
window.showToast = function(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✓' : 'ℹ'}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
};

// --- CART STATE MANAGEMENT ---
function initCartState() {
  updateCartBadge();
}

function saveCart() {
  localStorage.setItem('aquaflow_cart', JSON.stringify(cart));
  localStorage.setItem('aquaflow_discount', JSON.stringify(activeDiscount));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) badge.textContent = totalCount;

  const drawerCount = document.getElementById('cart-drawer-count');
  if (drawerCount) drawerCount.textContent = totalCount;
}

window.addToCart = function(productId, color, capacity, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const selectedColor = color || product.colors[0].name;
  const selectedCap = capacity || product.capacities[0];

  const existingIndex = cart.findIndex(
    item => item.id === productId && item.color === selectedColor && item.capacity === selectedCap
  );

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.mainImage,
      color: selectedColor,
      capacity: selectedCap,
      qty: qty
    });
  }

  saveCart();
  window.showToast(`Added ${qty}x ${product.name} (${selectedColor}, ${selectedCap}) to cart!`, 'success');
  renderCartDrawer();
  
  // Open drawer automatically on add
  const cartDrawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('overlay');
  if (cartDrawer && overlay) {
    cartDrawer.classList.add('open');
    overlay.classList.add('active');
  }
};

window.updateCartQty = function(index, delta) {
  if (cart[index]) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    renderCartDrawer();
    renderCartPage();
    renderCheckoutPage();
  }
};

window.removeCartItem = function(index) {
  if (cart[index]) {
    const item = cart[index];
    cart.splice(index, 1);
    saveCart();
    window.showToast(`Removed ${item.name} from cart.`, 'info');
    renderCartDrawer();
    renderCartPage();
    renderCheckoutPage();
  }
};

function getCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discount = 0;
  if (activeDiscount.percent > 0) {
    discount = Math.round(subtotal * (activeDiscount.percent / 100));
  }
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping
  const total = Math.max(0, subtotal - discount + shipping);
  return { subtotal, discount, shipping, total };
}

// --- RENDER CART DRAWER ---
function renderCartDrawer() {
  const container = document.getElementById('cart-drawer-items');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:var(--slate-500);">
        <div style="font-size:3rem; margin-bottom:1rem;">🛍️</div>
        <h4>Your cart is empty</h4>
        <p style="font-size:0.9rem; margin-top:0.4rem;">Discover our premium bottles & elevate your hydration.</p>
        <a href="#shop" class="btn btn-outline btn-sm" style="margin-top:1.5rem;" onclick="document.getElementById('cart-drawer-close').click()">Shop Catalog</a>
      </div>
    `;
  } else {
    container.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="cart-item-details">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-meta">${item.color} | ${item.capacity}</div>
          <div class="cart-item-bottom">
            <strong style="color:var(--dark);">₹${item.price}</strong>
            <div class="qty-picker">
              <button class="qty-btn" onclick="updateCartQty(${idx}, -1)">-</button>
              <span style="padding:0 0.6rem; font-size:0.85rem; font-weight:700;">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty(${idx}, 1)">+</button>
            </div>
            <button onclick="removeCartItem(${idx})" style="color:var(--slate-400); font-size:1.1rem;" title="Remove">&times;</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  const totals = getCartTotals();
  document.getElementById('drawer-subtotal').textContent = `₹${totals.subtotal.toLocaleString()}`;
  document.getElementById('drawer-total').textContent = `₹${totals.total.toLocaleString()}`;
}

// --- RENDER CART PAGE ---
function renderCartPage() {
  const container = document.getElementById('cart-page-content');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:5rem 1rem; background-color:var(--bg-light); border-radius:var(--radius-xl);">
        <div style="font-size:4rem; margin-bottom:1rem;">🛒</div>
        <h2>Your Shopping Cart is Empty</h2>
        <p style="color:var(--slate-500); max-width:400px; margin:0.8rem auto 2rem;">Looks like you haven't added any AQUAFLOW bottles to your cart yet.</p>
        <a href="#shop" class="btn btn-primary btn-lg">Explore Shop Collection &rarr;</a>
      </div>
    `;
    return;
  }

  const totals = getCartTotals();

  container.innerHTML = `
    <div style="display:grid; grid-template-columns:1fr 380px; gap:2.5rem;">
      <div>
        <div class="form-card" style="padding:0;">
          <div style="padding:1.2rem 1.5rem; border-bottom:1px solid var(--slate-100); font-weight:700;">Cart Items (${cart.length})</div>
          <div style="padding:1.5rem; display:flex; flex-direction:column; gap:1.5rem;">
            ${cart.map((item, idx) => `
              <div class="cart-item">
                <div class="cart-item-img" style="width:100px; height:100px;">
                  <img src="${item.image}" alt="${item.name}" />
                </div>
                <div class="cart-item-details">
                  <div style="display:flex; justify-content:space-between;">
                    <h4 style="font-size:1.1rem;">${item.name}</h4>
                    <strong>₹${(item.price * item.qty).toLocaleString()}</strong>
                  </div>
                  <div class="cart-item-meta" style="font-size:0.88rem;">Variant: ${item.color} | Capacity: ${item.capacity}</div>
                  <div style="margin-top:1rem; display:flex; align-items:center; justify-content:space-between;">
                    <div class="qty-picker">
                      <button class="qty-btn" onclick="updateCartQty(${idx}, -1)">-</button>
                      <input type="text" class="qty-input" value="${item.qty}" readonly />
                      <button class="qty-btn" onclick="updateCartQty(${idx}, 1)">+</button>
                    </div>
                    <button onclick="removeCartItem(${idx})" class="btn btn-outline btn-sm" style="color:var(--danger); border-color:var(--slate-200);">Remove Item</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div>
        <div class="form-card" style="position:sticky; top:100px;">
          <h3 class="form-card-title">Order Summary</h3>
          <div class="cart-summary-row">
            <span>Subtotal</span>
            <span>₹${totals.subtotal.toLocaleString()}</span>
          </div>
          <div class="cart-summary-row">
            <span>Shipping</span>
            <span style="color:var(--success); font-weight:700;">FREE</span>
          </div>
          
          <div style="margin:1.2rem 0; padding:1rem 0; border-top:1px solid var(--slate-100); border-bottom:1px solid var(--slate-100);">
            <label class="form-label">Promo Discount Code</label>
            <div style="display:flex; gap:0.5rem;">
              <input type="text" id="coupon-input" class="form-control" placeholder="e.g. HYDRATE10" value="${activeDiscount.code}" />
              <button onclick="applyCoupon()" class="btn btn-secondary btn-sm">Apply</button>
            </div>
            ${activeDiscount.percent > 0 ? `<div style="font-size:0.82rem; color:var(--success); margin-top:0.4rem; font-weight:600;">✓ Coupon applied: ${activeDiscount.percent}% OFF</div>` : ''}
          </div>

          ${totals.discount > 0 ? `
            <div class="cart-summary-row" style="color:var(--primary); font-weight:600;">
              <span>Discount</span>
              <span>-₹${totals.discount.toLocaleString()}</span>
            </div>
          ` : ''}

          <div class="cart-summary-total">
            <span>Grand Total</span>
            <span>₹${totals.total.toLocaleString()}</span>
          </div>

          <a href="#checkout" class="btn btn-primary btn-block btn-lg" style="margin-top:1.5rem;">Proceed to Checkout &rarr;</a>
          <a href="#shop" class="btn btn-outline btn-block btn-sm" style="margin-top:0.6rem;">Continue Shopping</a>
        </div>
      </div>
    </div>
  `;
}

window.applyCoupon = function() {
  const input = document.getElementById('coupon-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'HYDRATE10') {
    activeDiscount = { code: 'HYDRATE10', percent: 10 };
    window.showToast('Promo code HYDRATE10 applied! 10% discount added.', 'success');
  } else if (code === 'AQUA20') {
    activeDiscount = { code: 'AQUA20', percent: 20 };
    window.showToast('Special code AQUA20 applied! 20% discount added.', 'success');
  } else if (code === 'FREESHIP') {
    activeDiscount = { code: 'FREESHIP', percent: 0 };
    window.showToast('Free Express Shipping code verified!', 'info');
  } else {
    window.showToast('Invalid coupon code. Try HYDRATE10 or AQUA20', 'info');
    activeDiscount = { code: '', percent: 0 };
  }

  saveCart();
  renderCartPage();
};

// --- RENDER FEATURED PRODUCTS ON HOME ---
function renderFeaturedProducts() {
  const grid = document.getElementById('featured-products-grid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.slice(0, 4).map(product => renderProductCardHTML(product)).join('');
}

function renderProductCardHTML(p) {
  return `
    <div class="product-card">
      <span class="badge badge-primary product-card-badge">${p.badge}</span>
      <div class="product-card-actions">
        <button class="icon-btn" title="Quick View" onclick="openQuickView('${p.id}')">👁️</button>
      </div>
      <div class="product-thumb" onclick="navigateToProduct('${p.id}')">
        <img src="${p.mainImage}" alt="${p.name}" />
      </div>
      <div class="product-info">
        <div class="product-rating">
          <span class="stars">★★★★★</span>
          <span class="rating-count">(${p.rating})</span>
        </div>
        <h3 class="product-name" onclick="navigateToProduct('${p.id}')">${p.name}</h3>
        <p class="product-desc">${p.tagline}</p>
        <div class="product-swatches">
          ${p.colors.map(c => `<span class="swatch" style="background-color: ${c.hex};" title="${c.name}"></span>`).join('')}
        </div>
        <div class="product-footer">
          <div class="product-price">
            ₹${p.price}
            <span class="original-price">₹${p.originalPrice}</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="addToCart('${p.id}')">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

window.navigateToProduct = function(id) {
  window.location.hash = `#product?id=${id}`;
};

// --- SHOP CATALOG & FILTERS ---
function initShopFilters() {
  const searchInput = document.getElementById('shop-search-input');
  const priceRange = document.getElementById('price-range');
  const priceVal = document.getElementById('price-range-val');
  const sortSelect = document.getElementById('shop-sort');
  const resetBtn = document.getElementById('reset-filters-btn');

  if (priceRange && priceVal) {
    priceRange.addEventListener('input', (e) => {
      priceVal.textContent = `₹${parseInt(e.target.value).toLocaleString()}`;
      renderShopCatalog();
    });
  }

  if (searchInput) searchInput.addEventListener('input', renderShopCatalog);
  if (sortSelect) sortSelect.addEventListener('change', renderShopCatalog);
  
  document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', renderShopCatalog);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (priceRange) { priceRange.value = 2000; priceVal.textContent = '₹2,000'; }
      document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(cb => {
        cb.checked = (cb.value === 'all');
      });
      renderShopCatalog();
    });
  }
}

function renderShopCatalog() {
  const grid = document.getElementById('shop-products-grid');
  if (!grid) return;

  const searchVal = (document.getElementById('shop-search-input')?.value || '').toLowerCase();
  const maxPrice = parseInt(document.getElementById('price-range')?.value || '2000');
  const sortVal = document.getElementById('shop-sort')?.value || 'featured';

  // Category filters
  const checkedCats = Array.from(document.querySelectorAll('input[name="cat"]:checked')).map(c => c.value);
  const checkedCaps = Array.from(document.querySelectorAll('input[name="cap"]:checked')).map(c => c.value);

  let filtered = PRODUCTS.filter(p => {
    // Search
    if (searchVal && !p.name.toLowerCase().includes(searchVal) && !p.description.toLowerCase().includes(searchVal)) {
      return false;
    }
    // Price
    if (p.price > maxPrice) return false;

    // Category
    if (checkedCats.length > 0 && !checkedCats.includes('all')) {
      if (!checkedCats.includes(p.category)) return false;
    }

    // Capacity
    if (checkedCaps.length > 0) {
      const hasCap = p.capacities.some(cap => checkedCaps.includes(cap));
      if (!hasCap) return false;
    }

    return true;
  });

  // Sorting
  if (sortVal === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sortVal === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sortVal === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  const countElem = document.getElementById('shop-result-count');
  if (countElem) countElem.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding:4rem 1rem; background-color:var(--bg-light); border-radius:var(--radius-lg);">
        <h3>No products found</h3>
        <p style="color:var(--slate-500); margin-top:0.5rem;">Try adjusting your filters or search terms.</p>
      </div>
    `;
  } else {
    grid.innerHTML = filtered.map(p => renderProductCardHTML(p)).join('');
  }
}

// --- RENDER PRODUCT DETAIL VIEW ---
function renderProductDetailView() {
  const container = document.getElementById('product-detail-container');
  if (!container || !currentSelectedProduct) return;

  const p = currentSelectedProduct;

  container.innerHTML = `
    <div class="gallery-wrapper">
      <div class="main-image-container">
        <img id="detail-main-img" src="${p.mainImage}" alt="${p.name}" />
      </div>
      <div class="thumbnail-list">
        ${p.gallery.map((imgUrl, idx) => `
          <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="switchDetailThumb('${imgUrl}', this)">
            <img src="${imgUrl}" alt="Thumbnail ${idx+1}" />
          </div>
        `).join('')}
      </div>
    </div>

    <div class="detail-info">
      <div>
        <span class="badge badge-accent">${p.badge}</span>
        <h1 style="margin-top:0.5rem; margin-bottom:0.4rem;">${p.name}</h1>
        <div class="product-rating" style="font-size:1rem;">
          <span class="stars">★★★★★</span>
          <strong style="color:var(--dark); margin-left:0.3rem;">${p.rating}</strong>
          <span class="rating-count">(${p.reviewsCount} customer reviews)</span>
        </div>
      </div>

      <div class="detail-price">
        ₹${p.price}
        <span class="original-price">₹${p.originalPrice}</span>
        <span class="badge badge-sale" style="font-size:0.75rem;">Save ₹${p.originalPrice - p.price}</span>
      </div>

      <p style="color:var(--slate-700); font-size:1rem; line-height:1.6;">${p.description}</p>

      <div>
        <div class="option-title">Select Color: <span id="color-name-label" style="font-weight:600; color:var(--primary);">${selectedVariantColor}</span></div>
        <div class="color-swatch-list">
          ${p.colors.map(c => `
            <button class="color-swatch-btn ${c.name === selectedVariantColor ? 'active' : ''}" 
                    style="background-color:${c.hex};" 
                    title="${c.name}"
                    onclick="selectColorVariant('${c.name}', this)"></button>
          `).join('')}
        </div>
      </div>

      <div>
        <div class="option-title">Select Capacity:</div>
        <div class="chip-options">
          ${p.capacities.map(cap => `
            <button class="chip ${cap === selectedCapacity ? 'active' : ''}" onclick="selectCapacityChip('${cap}', this)">${cap}</button>
          `).join('')}
        </div>
      </div>

      <div style="display:flex; align-items:center; gap:1.2rem; flex-wrap:wrap;">
        <div>
          <div class="option-title">Quantity:</div>
          <div class="qty-picker">
            <button class="qty-btn" onclick="changeDetailQty(-1)">-</button>
            <input type="text" id="detail-qty-input" class="qty-input" value="${detailQty}" readonly />
            <button class="qty-btn" onclick="changeDetailQty(1)">+</button>
          </div>
        </div>
      </div>

      <div style="display:flex; gap:1rem; flex-wrap:wrap;">
        <button class="btn btn-primary btn-lg" style="flex-grow:1;" onclick="addDetailToCart(false)">Add to Cart 🛒</button>
        <button class="btn btn-secondary btn-lg" style="flex-grow:1;" onclick="addDetailToCart(true)">Buy Now &rarr;</button>
      </div>

      <div style="background-color:var(--bg-light); padding:1.2rem; border-radius:var(--radius-md); margin-top:0.5rem;">
        <div class="option-title">🚚 Check Delivery Availability</div>
        <div class="pincode-box">
          <input type="text" id="pincode-input" class="pincode-input" placeholder="Enter 6-digit PIN code" maxlength="6" />
          <button class="btn btn-outline btn-sm" onclick="checkPincode()">Check</button>
        </div>
        <div id="pincode-result" style="font-size:0.85rem; margin-top:0.5rem;"></div>
      </div>

      <div class="accordion" style="margin-top:1rem;">
        <div class="accordion-item active">
          <div class="accordion-header" onclick="toggleAccordion(this)">Specifications <span>+</span></div>
          <div class="accordion-body">
            <ul style="display:flex; flex-direction:column; gap:0.4rem;">
              ${Object.entries(p.specs).map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header" onclick="toggleAccordion(this)">Care & Cleaning <span>+</span></div>
          <div class="accordion-body">
            Hand wash recommended with warm soapy water. Top-rack dishwasher safe. Do not microwave or freeze.
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header" onclick="toggleAccordion(this)">Shipping & Returns <span>+</span></div>
          <div class="accordion-body">
            Free Express Shipping across India. Hassle-free 14-day easy return policy.
          </div>
        </div>
      </div>
    </div>
  `;
}

window.switchDetailThumb = function(url, elem) {
  document.getElementById('detail-main-img').src = url;
  document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
  elem.classList.add('active');
};

window.selectColorVariant = function(colorName, elem) {
  selectedVariantColor = colorName;
  document.getElementById('color-name-label').textContent = colorName;
  document.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
  elem.classList.add('active');
};

window.selectCapacityChip = function(cap, elem) {
  selectedCapacity = cap;
  document.querySelectorAll('.chip-options .chip').forEach(c => c.classList.remove('active'));
  elem.classList.add('active');
};

window.changeDetailQty = function(delta) {
  detailQty = Math.max(1, detailQty + delta);
  const input = document.getElementById('detail-qty-input');
  if (input) input.value = detailQty;
};

window.addDetailToCart = function(isBuyNow = false) {
  if (!currentSelectedProduct) return;
  window.addToCart(currentSelectedProduct.id, selectedVariantColor, selectedCapacity, detailQty);
  if (isBuyNow) {
    window.location.hash = '#checkout';
  }
};

window.checkPincode = function() {
  const pin = document.getElementById('pincode-input')?.value.trim();
  const res = document.getElementById('pincode-result');
  if (!res) return;
  if (/^\d{6}$/.test(pin)) {
    res.innerHTML = `<span style="color:var(--success); font-weight:700;">✓ Delivery available!</span> Estimated delivery within 2-4 business days.`;
  } else {
    res.innerHTML = `<span style="color:var(--danger);">Please enter a valid 6-digit PIN code.</span>`;
  }
};

window.toggleAccordion = function(elem) {
  const item = elem.closest('.accordion-item');
  item.classList.toggle('active');
};

// --- QUICK VIEW MODAL ---
function initQuickViewModal() {
  const closeBtn = document.getElementById('qv-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('quick-view-modal').classList.remove('active');
      document.getElementById('overlay').classList.remove('active');
    });
  }
}

window.openQuickView = function(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  const content = document.getElementById('qv-content');
  const modal = document.getElementById('quick-view-modal');
  const overlay = document.getElementById('overlay');

  content.innerHTML = `
    <div style="height:320px; background:var(--bg-light); border-radius:var(--radius-lg); display:flex; align-items:center; justify-content:center; padding:1rem;">
      <img src="${p.mainImage}" alt="${p.name}" style="max-height:100%; object-fit:contain;" />
    </div>
    <div>
      <span class="badge badge-primary">${p.badge}</span>
      <h2 style="margin-top:0.4rem; margin-bottom:0.4rem;">${p.name}</h2>
      <div class="product-rating" style="margin-bottom:0.8rem;">
        <span class="stars">★★★★★</span> <span>(${p.rating})</span>
      </div>
      <div style="font-size:1.4rem; font-weight:800; margin-bottom:1rem;">₹${p.price}</div>
      <p style="font-size:0.9rem; color:var(--slate-500); margin-bottom:1.5rem;">${p.description}</p>
      <div style="display:flex; gap:0.8rem;">
        <button class="btn btn-primary" onclick="addToCart('${p.id}'); document.getElementById('qv-close').click();">Add to Cart</button>
        <button class="btn btn-outline" onclick="navigateToProduct('${p.id}'); document.getElementById('qv-close').click();">View Full Details</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  overlay.classList.add('active');
};

// --- GLOBAL SEARCH MODAL ---
function initSearchModal() {
  const btn = document.getElementById('search-btn');
  const modal = document.getElementById('search-modal');
  const closeBtn = document.getElementById('search-close');
  const overlay = document.getElementById('overlay');
  const input = document.getElementById('global-search-input');
  const results = document.getElementById('search-results-list');

  if (btn) {
    btn.addEventListener('click', () => {
      modal.classList.add('active');
      overlay.classList.add('active');
      if (input) input.focus();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      overlay.classList.remove('active');
    });
  }

  if (input && results) {
    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        results.innerHTML = '';
        return;
      }
      const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
      if (matches.length === 0) {
        results.innerHTML = `<div style="padding:1rem; text-align:center; color:var(--slate-500);">No matching products found.</div>`;
      } else {
        results.innerHTML = matches.map(p => `
          <div style="display:flex; align-items:center; gap:1rem; padding:0.8rem; border-bottom:1px solid var(--slate-100); cursor:pointer;" onclick="navigateToProduct('${p.id}'); document.getElementById('search-close').click();">
            <img src="${p.mainImage}" alt="${p.name}" style="width:50px; height:50px; object-fit:contain; background:var(--bg-light); border-radius:var(--radius-sm);" />
            <div>
              <strong style="display:block; font-size:0.95rem;">${p.name}</strong>
              <span style="font-size:0.85rem; color:var(--primary); font-weight:700;">₹${p.price}</span>
            </div>
          </div>
        `).join('');
      }
    });
  }
}

// --- CHECKOUT & ORDER CONFIRMATION ---
function renderCheckoutPage() {
  const container = document.getElementById('checkout-items-list');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<div style="color:var(--slate-500); text-align:center;">Your cart is currently empty.</div>`;
  } else {
    container.innerHTML = cart.map(item => `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem; font-size:0.9rem;">
        <div>
          <strong>${item.name}</strong> (${item.qty}x)
          <div style="font-size:0.78rem; color:var(--slate-500);">${item.color} | ${item.capacity}</div>
        </div>
        <strong>₹${(item.price * item.qty).toLocaleString()}</strong>
      </div>
    `).join('');
  }

  const totals = getCartTotals();
  document.getElementById('co-subtotal').textContent = `₹${totals.subtotal.toLocaleString()}`;
  document.getElementById('co-total').textContent = `₹${totals.total.toLocaleString()}`;

  const discRow = document.getElementById('co-discount-row');
  if (totals.discount > 0) {
    discRow.style.display = 'flex';
    document.getElementById('co-discount-val').textContent = `-₹${totals.discount.toLocaleString()}`;
  } else {
    discRow.style.display = 'none';
  }
}

function initCheckoutForm() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  // Payment method switcher card styles
  document.querySelectorAll('.payment-method-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      window.showToast('Your cart is empty! Add items before placing an order.', 'info');
      return;
    }

    const fname = document.getElementById('co-fname')?.value || 'Customer';
    const lname = document.getElementById('co-lname')?.value || '';
    const city = document.getElementById('co-city')?.value || 'Bengaluru';
    const orderId = '#AQ-' + Math.floor(10000 + Math.random() * 90000);
    const totals = getCartTotals();

    // Populate confirmation page details
    document.getElementById('conf-order-id').textContent = orderId;
    document.getElementById('conf-total').textContent = `₹${totals.total.toLocaleString()}`;

    // Delivery date calculation (3 days from today)
    const today = new Date();
    today.setDate(today.getDate() + 3);
    const dateStr = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    document.getElementById('conf-delivery-date').textContent = dateStr;

    // Purchased items list
    document.getElementById('conf-items-list').innerHTML = cart.map(item => `
      <div style="display:flex; justify-content:space-between; padding:0.6rem 0; border-bottom:1px solid var(--slate-100); font-size:0.9rem;">
        <span>${item.name} (${item.color}, ${item.capacity}) x${item.qty}</span>
        <strong>₹${(item.price * item.qty).toLocaleString()}</strong>
      </div>
    `).join('');

    // Reset Cart & State
    cart = [];
    activeDiscount = { code: '', percent: 0 };
    saveCart();

    window.showToast('Order Placed Successfully! 🎉', 'success');
    window.location.hash = '#confirmation';
  });
}
