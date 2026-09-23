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

const grid = document.querySelector('#product-grid');
const count = document.querySelector('#product-count');
const toast = document.querySelector('#toast');
let toastTimer;

function renderProducts(filter = 'todos') {
  const visible = filter === 'todos' ? products : products.filter((product) => product[1] === filter);
  grid.innerHTML = visible.map(([name, type, number]) => `
    <article class="product-card">
      <div class="product-image">
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
  if (!favorite) return;
  const saved = favorite.getAttribute('aria-pressed') === 'true';
  favorite.setAttribute('aria-pressed', String(!saved));
  favorite.classList.toggle('is-saved', !saved);
  favorite.textContent = saved ? '♡' : '♥';
  toast.textContent = saved ? 'Pieza retirada de tu seleccion' : 'Pieza guardada en tu seleccion';
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
});

renderProducts();
