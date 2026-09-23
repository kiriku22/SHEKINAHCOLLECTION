const products = [
  ['Anillo Eclipse', 'anillos', '01'], ['Anillo Halo', 'anillos', '02'], ['Anillo Nudo', 'anillos', '03'], ['Anillo Signo', 'anillos', '04'], ['Anillo Umbral', 'anillos', '05'], ['Anillo Linea', 'anillos', '06'], ['Anillo Atlas', 'anillos', '07'], ['Anillo Pulsar', 'anillos', '08'],
  ['Collar Solsticio', 'collares', '09'], ['Collar Trazo', 'collares', '10'], ['Collar Orbita', 'collares', '11'], ['Collar Norte', 'collares', '12'], ['Collar Ambar', 'collares', '13'], ['Collar Punto', 'collares', '14'], ['Collar Constelacion', 'collares', '15'],
  ['Aretes Alba', 'aretes', '16'], ['Aretes Doble', 'aretes', '17'], ['Aretes Gota', 'aretes', '18'], ['Aretes Arco', 'aretes', '19'], ['Aretes Fulgor', 'aretes', '20'], ['Aretes Mini Orbita', 'aretes', '21'], ['Aretes Vela', 'aretes', '22'], ['Aretes Senda', 'aretes', '23'],
  ['Pulsera Pulso', 'pulseras', '24'], ['Pulsera Nodo', 'pulseras', '25'], ['Pulsera Cadencia', 'pulseras', '26'], ['Pulsera Abierta', 'pulseras', '27'], ['Pulsera Eje', 'pulseras', '28'], ['Pulsera Rastro', 'pulseras', '29']
];

const braceletImages = {
  '24': 'assets/WhatsApp Image 2026-09-21 at 5.25.00 PM.jpeg',
  '25': 'assets/WhatsApp Image 2026-09-21 at 5.25.01 PM (1).jpeg',
  '26': 'assets/WhatsApp Image 2026-09-21 at 5.25.01 PM (2).jpeg',
  '27': 'assets/WhatsApp Image 2026-09-21 at 5.25.01 PM.jpeg',
  '28': 'assets/pr1.jpeg',
  '29': 'assets/pr2.jpeg'
};

const accessoryImages = [
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.26.17 PM.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.15 PM (1) - copia.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.15 PM (1).jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.15 PM - copia.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.15 PM.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.16 PM (1) - copia.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.16 PM (1).jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.16 PM (2) - copia.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.16 PM (2).jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.16 PM - copia.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.16 PM.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.17 PM (1) - copia.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.17 PM (1).jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.17 PM (2) - copia.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.17 PM (2).jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.17 PM (3) - copia.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.17 PM (3).jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.17 PM - copia.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.17 PM.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.18 PM (1) - copia.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.18 PM (1).jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.18 PM (2).jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.18 PM (3) - copia.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.18 PM (3).jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.18 PM (4) - copia.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.18 PM (4).jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.18 PM - copia.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.18 PM.jpeg',
  'assets/accesorios/WhatsApp Image 2026-09-14 at 1.27.19 PM.jpeg'
];

const kitImages = [
  'assets/accesorios/kits/WhatsApp Image 2026-09-14 at 1.27.16 PM (3) - copia.jpeg',
  'assets/accesorios/kits/WhatsApp Image 2026-09-14 at 1.27.16 PM (3).jpeg',
  'assets/accesorios/kits/WhatsApp Image 2026-09-14 at 1.27.16 PM (4) - copia.jpeg',
  'assets/accesorios/kits/WhatsApp Image 2026-09-14 at 1.27.16 PM (4).jpeg'
];

const grid = document.querySelector('#product-grid');
const count = document.querySelector('#product-count');
const toast = document.querySelector('#toast');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
let toastTimer;

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add('is-visible');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove('is-visible');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
}

function renderProducts(filter = 'todos') {
  if (filter === 'accesorios') {
    grid.innerHTML = accessoryImages.map((src, index) => `
      <article class="gallery-card gallery-card-compact lightbox-trigger" data-src="${src}" data-alt="Accesorio ${index + 1}">
        <img src="${src}" alt="Accesorio ${index + 1}" loading="lazy" />
      </article>
    `).join('');
    count.textContent = String(accessoryImages.length).padStart(2, '0');
    return;
  }

  if (filter === 'kits') {
    grid.innerHTML = kitImages.map((src, index) => `
      <article class="gallery-card gallery-card-large lightbox-trigger" data-src="${src}" data-alt="Kit ${index + 1}">
        <img src="${src}" alt="Kit ${index + 1}" loading="lazy" />
      </article>
    `).join('');
    count.textContent = String(kitImages.length).padStart(2, '0');
    return;
  }

  const visible = filter === 'todos' ? products : products.filter((product) => product[1] === filter);
  grid.innerHTML = visible.map(([name, type, number]) => `
    <article class="product-card">
      <div class="product-image lightbox-trigger" data-src="${braceletImages[number] || `assets/product-${number}.svg`}" data-alt="${name}">
        <img src="${braceletImages[number] || `assets/product-${number}.svg`}" alt="${name}" loading="lazy" />
        <span class="product-number">${number}</span>
        <button class="product-favorite" type="button" aria-label="Guardar ${name}" aria-pressed="false">♡</button>
      </div>
      <div class="product-info">
        <div><h3 class="product-name">${name}</h3><span class="product-type">${type}</span></div>
      </div>
    </article>
  `).join('');
  count.textContent = String(visible.length).padStart(2, '0');
}

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-button.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    renderProducts(button.dataset.filter);
  });
});

grid.addEventListener('click', (event) => {
  const favorite = event.target.closest('.product-favorite');
  if (favorite) {
    const saved = favorite.getAttribute('aria-pressed') === 'true';
    favorite.setAttribute('aria-pressed', String(!saved));
    favorite.classList.toggle('is-saved', !saved);
    favorite.textContent = saved ? '♡' : '♥';
    toast.textContent = saved ? 'Pieza retirada de tu seleccion' : 'Pieza guardada en tu seleccion';
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
    return;
  }

  const trigger = event.target.closest('.lightbox-trigger');
  if (trigger) {
    const src = trigger.dataset.src;
    const alt = trigger.dataset.alt || 'Vista ampliada de la pieza';
    if (src) {
      openLightbox(src, alt);
    }
  }
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox && lightbox.classList.contains('is-visible')) {
    closeLightbox();
  }
});

renderProducts();
