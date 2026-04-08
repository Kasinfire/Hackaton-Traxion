// Buscador de clientes
const buscador = document.getElementById("buscador");
const tarjetas = document.querySelectorAll(".client-card");

buscador.addEventListener("keyup", function () {

    let texto = buscador.value.toLowerCase();

    tarjetas.forEach(function(card){

    let nombre = card.querySelector(".client-card__name").textContent.toLowerCase();

        if(nombre.includes(texto)){
        card.style.display = "block";
        }else{
        card.style.display = "none";
        }
    });
});

/*     GRAFICA DE BARRAS DE LOS SERVICIOS

 */
let datos = {
transporte:88,
almacen:72,
coordinacion:95,
tecnologia:60,
cliente:80
}

function colorPorcentaje(valor){

if(valor >= 85){
return "#28a745"
}

else if(valor >= 70){
return "#d98a1e"
}

else{
return "#d9381e"
}

}

function animar(){

for(let area in datos){

let barra = document.getElementById(area)
let valor = datos[area]

barra.style.height = valor + "%"
barra.style.background = colorPorcentaje(valor)

barra.querySelector(".porcentaje").innerText = valor + "%"

}

}

window.addEventListener("load", animar);


// Visualizar tarjetas de clientes
const contenedor = document.querySelector(".clients__grid");

function renderClientes() {
  contenedor.innerHTML = ""; // limpia

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
renderClientes();

