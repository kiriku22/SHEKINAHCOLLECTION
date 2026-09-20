const products = [
  ['Anillo Eclipse', 'anillos', '$1,890', '01'], ['Anillo Halo', 'anillos', '$2,150', '02'], ['Anillo Nudo', 'anillos', '$1,640', '03'], ['Anillo Signo', 'anillos', '$2,480', '04'], ['Anillo Umbral', 'anillos', '$1,990', '05'], ['Anillo Linea', 'anillos', '$1,550', '06'], ['Anillo Atlas', 'anillos', '$2,300', '07'], ['Anillo Pulsar', 'anillos', '$1,780', '08'],
  ['Collar Solsticio', 'collares', '$3,200', '09'], ['Collar Trazo', 'collares', '$2,750', '10'], ['Collar Orbita', 'collares', '$3,480', '11'], ['Collar Norte', 'collares', '$2,960', '12'], ['Collar Ambar', 'collares', '$3,850', '13'], ['Collar Punto', 'collares', '$2,400', '14'], ['Collar Constelacion', 'collares', '$4,100', '15'],
  ['Aretes Alba', 'aretes', '$1,450', '16'], ['Aretes Doble', 'aretes', '$1,280', '17'], ['Aretes Gota', 'aretes', '$1,690', '18'], ['Aretes Arco', 'aretes', '$1,520', '19'], ['Aretes Fulgor', 'aretes', '$1,890', '20'], ['Aretes Mini Orbita', 'aretes', '$1,150', '21'], ['Aretes Vela', 'aretes', '$1,620', '22'], ['Aretes Senda', 'aretes', '$1,380', '23'],
  ['Pulsera Pulso', 'pulseras', '$2,100', '24'], ['Pulsera Nodo', 'pulseras', '$2,360', '25'], ['Pulsera Cadencia', 'pulseras', '$2,480', '26'], ['Pulsera Abierta', 'pulseras', '$2,050', '27'], ['Pulsera Eje', 'pulseras', '$2,700', '28'], ['Pulsera Rastro', 'pulseras', '$1,980', '29']
];

const grid = document.querySelector('#product-grid');
const count = document.querySelector('#product-count');
const toast = document.querySelector('#toast');
let toastTimer;

function renderProducts(filter = 'todos') {
  const visible = filter === 'todos' ? products : products.filter((product) => product[1] === filter);
  grid.innerHTML = visible.map(([name, type, price, number]) => `
    <article class="product-card">
      <div class="product-image">
        <img src="assets/product-${number}.svg" alt="${name}" loading="lazy" />
        <span class="product-number">${number}</span>
        <button class="product-favorite" type="button" aria-label="Guardar ${name}" aria-pressed="false">♡</button>
      </div>
      <div class="product-info">
        <div><h3 class="product-name">${name}</h3><span class="product-type">${type}</span></div>
        <p class="product-price">${price}</p>
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
