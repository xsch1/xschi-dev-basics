const cart = {};
const cartItems = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');

function updateCartUI() {
  if (!cartItems || !totalPriceEl) return;

  cartItems.innerHTML = '';
  let total = 0;

  Object.values(cart).forEach((item) => {
    const div = document.createElement('div');
    div.className = 'cart-item';

    div.innerHTML = `
      <div class="item-info">
        <p class="item-name">${item.name}</p>
        <p class="item-desc">${item.desc}</p>
        <p class="item-price">${item.price.toLocaleString()}원</p>
      </div>
      <div class="item-qty">
        <button class="qty-btn minus" data-id="${item.id}">-</button>
        <span class="qty-value">${item.qty}</span>
        <button class="qty-btn plus" data-id="${item.id}">+</button>
      </div>
    `;

    cartItems.appendChild(div);
    total += item.price * item.qty;
  });

  totalPriceEl.textContent = `${total.toLocaleString()}원`;

  document.querySelectorAll('.qty-btn').forEach((btn) => {
    const id = btn.dataset.id;
    btn.addEventListener('click', () => {
      const delta = btn.classList.contains('minus') ? -1 : 1;
      changeQty(id, delta);
    });
  });
}

function changeQty(id, delta) {
  if (cart[id]) {
    cart[id].qty += delta;
    if (cart[id].qty <= 0) delete cart[id];
  }
  updateCartUI();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menu-card').forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const name = card.dataset.name;
      const desc = card.dataset.desc || '';
      const price = parseInt(card.dataset.price.replace(/[^\d]/g, ''), 10);

      if (cart[id]) {
        cart[id].qty += 1;
      } else {
        cart[id] = { id, name, price, desc, qty: 1 };
      }

      updateCartUI();
    });
  });

  updateCartUI();
});

document.querySelector('.checkout').addEventListener('click', () => {
  if (Object.keys(cart).length === 0) {
    alert('메뉴를 추가해주세요~');
    return;
  }

  alert('결제가 완료되었습니다!');

  for (let key in cart) delete cart[key];
  updateCartUI();
});

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document
      .querySelectorAll('.tab')
      .forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

document.querySelectorAll('.pagination .page').forEach((page) => {
  page.addEventListener('click', () => {
    document
      .querySelectorAll('.pagination .page')
      .forEach((p) => p.classList.remove('active'));
    page.classList.add('active');
  });
});
