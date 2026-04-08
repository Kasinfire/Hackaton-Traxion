// ===============================
// GRAFICA
// ===============================
let datos = {
  transporte: 88,
  almacen: 72,
  coordinacion: 95,
  tecnologia: 60,
  cliente: 80
};

function colorPorcentaje(valor) {
  if (valor >= 85) return "#28a745";
  else if (valor >= 70) return "#d98a1e";
  else return "#d9381e";
}

function animar() {
  for (let area in datos) {
    let barra = document.getElementById(area);
    if (!barra) continue; // evita errores si no existe

    let valor = datos[area];

    barra.style.height = valor + "%";
    barra.style.background = colorPorcentaje(valor);

    let texto = barra.querySelector(".porcentaje");
    if (texto) texto.innerText = valor + "%";
  }
}

// ===============================
// RENDER CLIENTES
// ===============================
function renderClientes() {
  const contenedor = document.querySelector(".clients__grid");
  contenedor.innerHTML = "";

  clientes.forEach(cliente => {
    const card = `
      <article class="client-card card--${cliente.tipo}">
        <div class="client-card__header">
          <div class="client-card__info">
            <h3 class="client-card__name">${cliente.nombre}</h3>
            <p class="client-card__meta">${cliente.meta}</p>
          </div>
          <span class="badge badge--${cliente.tipo}-light">${cliente.nivel}</span>
        </div>

        <div class="client-card__metrics">
          <div class="metric">
            <span class="metric__value text-${cliente.tipo}">${cliente.otif}</span>
            <span class="metric__label">OTIF</span>
          </div>
          <div class="metric">
            <span class="metric__value text-${cliente.tipo}">${cliente.puntual}</span>
            <span class="metric__label">Puntual</span>
          </div>
          <div class="metric">
            <span class="metric__value text-${cliente.tipo}">${cliente.nps}</span>
            <span class="metric__label">NPS</span>
          </div>
          <div class="metric">
            <span class="metric__value text-${cliente.tipo}">${cliente.quejas}</span>
            <span class="metric__label">Quejas</span>
          </div>
        </div>

        <div class="client-card__trend">
          <span class="text-${cliente.tipo} badge-trend">${cliente.tendencia}</span>
        </div>

        <div class="client-card__actions">
          <a href="perfil-cliente.html?id=${cliente.id}" class="btn btn--outline-full">
            Perfil Cliente
          </a>
          <a href="${cliente.diagnostico}" class="btn btn--outline-full btn--primary">
            Analizar con IA →
          </a>
        </div>
      </article>
    `;

    contenedor.innerHTML += card;
  });
}

// ===============================
// INICIO (CUANDO CARGA EL DOM)
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  // 1. Renderizar primero
  renderClientes();

  // 2. Buscador
  const buscador = document.getElementById("buscador");

  if (buscador) {
    buscador.addEventListener("input", function () {

      let texto = buscador.value.toLowerCase();
      const tarjetas = document.querySelectorAll(".client-card");

      tarjetas.forEach(card => {
        let nombre = card
          .querySelector(".client-card__name")
          .textContent
          .toLowerCase();

        if (nombre.includes(texto)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // 3. Animar gráfica
  animar();

});